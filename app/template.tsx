"use client";

/* =============================================================================
   PAGE TRANSITION — app/template.tsx re-mounts on every navigation, so this is
   where the per-page "enter" animation lives. The page content fades + rises in
   with GSAP. Uses a layout effect so the start state is set before paint (no
   flash); skipped entirely under prefers-reduced-motion (content just shows).
   The persistent Navbar/Footer live in layout.tsx, so they don't re-animate.
   ============================================================================= */

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

// useLayoutEffect on the client, useEffect on the server (avoids the SSR warning).
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function Template({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tween = gsap.fromTo(
      el,
      { autoAlpha: 0, y: 14 },
      { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out", clearProps: "opacity,visibility,transform" }
    );
    return () => {
      tween.kill();
    };
  }, []);

  return <div ref={ref}>{children}</div>;
}
