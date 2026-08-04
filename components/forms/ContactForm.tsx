"use client";

/* =============================================================================
   COMPONENT: ContactForm  (home CTA section)
   Faithful reproduction of the Webflow contact form (index.html sec-cta / form-2),
   but rewired to post to our own /api/contact route (Resend) instead of Webflow.
   Adds a hidden honeypot + optional Cloudflare Turnstile for spam protection.
   Success/error use the same .w-form-done / .w-form-fail styling as the original.
   ============================================================================= */

import { useRef, useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const tokenRef = useRef<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    // Honeypot: bots fill this hidden field — silently succeed without sending.
    if (payload.company) {
      setStatus("success");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
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
    <div className="cta-form w-form">
      {status === "success" ? (
        <div className="w-form-done" style={{ display: "block" }}>
          <div>Thank you! Your submission has been received!</div>
        </div>
      ) : (
        <form name="contact-form" data-name="contact-form" className="form-2" onSubmit={handleSubmit}>
          <div className="form-field-1">
            <label htmlFor="contact-name" className="form-label-1">
              Your name <span className="form-req">*</span>
            </label>
            <input className="form-input w-input" maxLength={256} name="name" id="contact-name" placeholder="e.g. Sam" type="text" required />
          </div>
          <div className="form-field-1">
            <label htmlFor="contact-email" className="form-label-1">
              Email <span className="form-req">*</span>
            </label>
            <input className="form-input w-input" maxLength={256} name="email" id="contact-email" placeholder="you@yourbusiness.co.uk" type="email" required />
          </div>
          <div className="form-field-1">
            <label htmlFor="contact-website" className="form-label-1">
              Current website <span className="form-opt">(optional)</span>
            </label>
            <input className="form-input w-input" maxLength={256} name="website" id="contact-website" placeholder="https://…" type="text" />
          </div>
          <div className="form-field-1">
            <label htmlFor="contact-service" className="form-label-1">
              What are you interested in? <span className="form-req">*</span>
            </label>
            <select id="contact-service" name="service" required className="form-input w-select" defaultValue="">
              <option value="">Pick the closest fit…</option>
              <option value="website">A new website</option>
              <option value="seo">SEO help</option>
              <option value="ux">UX review</option>
              <option value="hosting">Hosting </option>
              <option value="training">Training</option>
              <option value="combo">A bit of everything</option>
              <option value="unsure">Not sure yet — help me figure it out</option>
              <option value="Maintenance">Maintenance</option>
            </select>
          </div>
          <div className="form-field-full">
            <label htmlFor="contact-message" className="form-label-1">
              Tell us a bit more <span className="form-opt">(as much or as little as you like)</span>
            </label>
            <textarea placeholder="What does your business do? What's bugging you about your current setup?" maxLength={5000} id="contact-message" name="message" className="form-textarea-1 w-input" />
          </div>

          {/* Honeypot — hidden from real users, catches bots. */}
          <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />

          {TURNSTILE_SITE_KEY && (
            <div className="form-field-full">
              <Turnstile siteKey={TURNSTILE_SITE_KEY} onSuccess={(t) => (tokenRef.current = t)} />
            </div>
          )}

          <input type="submit" className="form-submit w-button" value={status === "submitting" ? "Please wait…" : "Send message →"} disabled={status === "submitting"} />
        </form>
      )}

      {status === "error" && (
        <div className="w-form-fail" style={{ display: "block" }}>
          <div>Oops! Something went wrong — please email hello@jorvikweb.dev and we&apos;ll sort it.</div>
        </div>
      )}
    </div>
  );
}
