"use client";

/* =============================================================================
   COMPONENT: NewsletterForm  (home newsletter section)
   Replaces the original MailerLite embedded form. Posts to /api/newsletter,
   which emails a notification via Resend AND forwards the signup to MailerLite
   through a Zapier webhook (so the existing list keeps growing).
   Keeps the original copy; styled with the site's own form/button classes.
   ============================================================================= */

import { useRef, useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

type Status = "idle" | "submitting" | "success" | "error";

export function NewsletterForm() {
  const [status, setStatus] = useState<Status>("idle");
  const tokenRef = useRef<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    if (payload.company) {
      setStatus("success");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, turnstileToken: tokenRef.current }),
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="newsletter-form-wrap">
      <h4 className="heading-style-h4">Tips, Tricks &amp; Offers</h4>
      <p>Join our newsletter for the latest advice and offers on building and maintaining your website as a small business owner.</p>

      {status === "success" ? (
        <div className="w-form-done" style={{ display: "block" }}>
          <div>Thank you! You have successfully joined our subscriber list.</div>
        </div>
      ) : (
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input className="form-input w-input" maxLength={256} name="email" placeholder="Email" type="email" aria-label="Email" required />
          <label className="newsletter-consent">
            <input type="checkbox" name="consent" required /> Opt in to receive news and updates.
          </label>
          <p className="newsletter-privacy">You can unsubscribe anytime. For more details, review our Privacy Policy.</p>

          {/* Honeypot */}
          <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />

          {TURNSTILE_SITE_KEY && <Turnstile siteKey={TURNSTILE_SITE_KEY} onSuccess={(t) => (tokenRef.current = t)} />}

          <button type="submit" className="btn-primary" disabled={status === "submitting"}>
            {status === "submitting" ? "Please wait…" : "Subscribe"}
          </button>
        </form>
      )}

      {status === "error" && (
        <div className="w-form-fail" style={{ display: "block" }}>
          <div>Oops! Something went wrong — please try again.</div>
        </div>
      )}
    </div>
  );
}
