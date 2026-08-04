/* =============================================================================
   ROUTE: POST /api/contact
   Receives the contact form (main CTA + modal), verifies spam protection
   (honeypot + Turnstile), and emails the enquiry to Hannah via Resend.
   ============================================================================= */

import { Resend } from "resend";
import { verifyTurnstile } from "@/lib/turnstile";
import { SITE } from "@/lib/site";

const esc = (v: unknown) =>
  String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

export async function POST(request: Request) {
  try {
    const data = await request.json().catch(() => ({}));
    const { name, email, website, service, message, company, subject, turnstileToken } = data ?? {};

    // Honeypot — pretend success, send nothing.
    if (company) return Response.json({ ok: true });

    if (!name || !email) {
      return Response.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    const ip = request.headers.get("x-forwarded-for");
    if (!(await verifyTurnstile(turnstileToken, ip))) {
      return Response.json({ ok: false, error: "Spam check failed" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return Response.json({ ok: false, error: "Email service not configured" }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const to = process.env.CONTACT_TO_EMAIL || SITE.contactInbox;
    const from = process.env.CONTACT_FROM_EMAIL || "website@jorvikweb.dev";

    const html = `
      <h2>New website enquiry</h2>
      <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif">
        <tr><td><strong>Name</strong></td><td>${esc(name)}</td></tr>
        <tr><td><strong>Email</strong></td><td>${esc(email)}</td></tr>
        ${website ? `<tr><td><strong>Website</strong></td><td>${esc(website)}</td></tr>` : ""}
        ${service ? `<tr><td><strong>Interested in</strong></td><td>${esc(service)}</td></tr>` : ""}
        ${message ? `<tr><td valign="top"><strong>Message</strong></td><td>${esc(message).replace(/\n/g, "<br>")}</td></tr>` : ""}
      </table>
    `;

    const { error } = await resend.emails.send({
      from: `JWD Website <${from}>`,
      to,
      replyTo: String(email),
      subject: subject ? String(subject) : `New contact enquiry from ${name}`,
      html,
    });
    if (error) throw new Error(error.message);

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
