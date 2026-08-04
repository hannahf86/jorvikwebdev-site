"use client";

/* =============================================================================
   COMPONENT: ContactModal  (home)
   Faithful port of index.html <div class="jwd-modal-overlay"> popup.
   Opened by any pricing-card CTA (.btn-card-primary) — the original used a
   delegated document click + a global openModal(); reimplemented here as React
   state. The service is pre-selected from the clicked panel, matching the
   original behaviour. Submits to /api/contact (Resend) — the old markup pointed
   at web3forms with a placeholder key that was never configured.
   ============================================================================= */

import { useEffect, useRef, useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
const SERVICES = ["website", "ux", "seo", "hosting", "training", "maintenance"];

type Status = "idle" | "submitting" | "success" | "error";

export function ContactModal() {
  const [open, setOpen] = useState(false);
  const [service, setService] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const tokenRef = useRef<string>("");

  // Open on any pricing-card CTA click; pre-select the service for that panel.
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const btn = (e.target as HTMLElement).closest(".btn-card-primary");
      if (!btn) return;
      e.preventDefault();
      const panel = btn.closest('[class*="panel-"]');
      let sv = panel ? SERVICES.find((k) => panel.classList.contains("panel-" + k)) : undefined;
      if (!sv) {
        sv = SERVICES.find(
          (k) => btn.classList.contains("svc-" + k) || btn.classList.contains("svc-" + k.replace("maintenance", "maint"))
        );
      }
      setService(sv ?? "");
      setStatus("idle");
      setOpen(true);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // Lock body scroll while open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, subject: "New enquiry from JWD website", turnstileToken: tokenRef.current }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      className={`jwd-modal-overlay${open ? " modal-open" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div className="jwd-modal">
        <button type="button" aria-label="Close" className="jwd-modal-close w-button" onClick={() => setOpen(false)}>
          ×
        </button>
        <div className={`jwd-modal-form${status === "success" ? " hide" : ""}`}>
          <div>Get in touch</div>
          <h2>Let&apos;s talk about your website</h2>
          <div className="w-form">
            <form onSubmit={handleSubmit}>
              <input className="form-input w-input" maxLength={256} name="name" placeholder="Your name" type="text" required />
              <input className="form-input w-input" maxLength={256} name="email" placeholder="Your email" type="email" required />
              <select
                name="service"
                className="w-select modal-service-select"
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                <option value="">What can we help with?</option>
                <option value="website">Web Design</option>
                <option value="ux">UX </option>
                <option value="seo">SEO</option>
                <option value="hosting">Hosting</option>
                <option value="training">Training</option>
                <option value="maintenance">Maintenance</option>
              </select>
              <textarea placeholder="Tell us a bit about your project..." maxLength={5000} name="message" className="form-textarea w-input" />

              {/* Honeypot */}
              <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />
              {TURNSTILE_SITE_KEY && <Turnstile siteKey={TURNSTILE_SITE_KEY} onSuccess={(t) => (tokenRef.current = t)} />}

              <input type="submit" className="form-submit w-button" value={status === "submitting" ? "Please wait…" : "Submit"} disabled={status === "submitting"} />
              {status === "error" && (
                <div className="w-form-fail" style={{ display: "block", marginTop: 12 }}>
                  <div>Something went wrong — please email hello@jorvikweb.dev.</div>
                </div>
              )}
            </form>
          </div>
        </div>
        <div className={`jwd-modal-success${status === "success" ? " show" : ""}`}>
          <div className="inline-div-0">🎉</div>
          <h3 className="inline-h3-0">You&apos;re in!</h3>
          <p className="inline-p-0-1">Thanks for getting in touch. Hannah will be in contact within 1-2 working days.</p>
        </div>
      </div>
    </div>
  );
}
