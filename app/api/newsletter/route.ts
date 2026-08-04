/* =============================================================================
   ROUTE: POST /api/newsletter
   Newsletter signup. Verifies spam protection, emails a notification via Resend,
   and forwards the signup to MailerLite through the Zapier catch-hook so the
   existing list keeps growing.
   ============================================================================= */

import { Resend } from "resend";
import { verifyTurnstile } from "@/lib/turnstile";
import { SITE } from "@/lib/site";

export async function POST(request: Request) {
  try {
    const data = await request.json().catch(() => ({}));
    const { email, consent, company, turnstileToken } = data ?? {};

    if (company) return Response.json({ ok: true }); // honeypot
    if (!email) return Response.json({ ok: false, error: "Email required" }, { status: 400 });

    const ip = request.headers.get("x-forwarded-for");
    if (!(await verifyTurnstile(turnstileToken, ip))) {
      return Response.json({ ok: false, error: "Spam check failed" }, { status: 400 });
    }

    // Forward to MailerLite via Zapier (non-fatal if it fails).
    const zap = process.env.ZAPIER_NEWSLETTER_WEBHOOK_URL;
    if (zap) {
      try {
        await fetch(zap, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, consent: Boolean(consent), source: "jorvikweb.dev" }),
        });
      } catch {
        /* ignore — the notification email below is the backstop */
      }
    }

    // Notification email to Hannah.
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const resend = new Resend(apiKey);
      const to = process.env.CONTACT_TO_EMAIL || SITE.contactInbox;
      const from = process.env.CONTACT_FROM_EMAIL || "website@jorvikweb.dev";
      await resend.emails.send({
        from: `JWD Website <${from}>`,
        to,
        subject: "New newsletter signup",
        html: `<p>New newsletter signup: <strong>${String(email).replace(/[<>&]/g, "")}</strong></p>`,
      });
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
