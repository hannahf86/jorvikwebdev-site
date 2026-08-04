"use client";

/* =============================================================================
   COMPONENT: HomeAnimations  (home)
   Faithful port of the homepage's hand-written GSAP code (index.html inline
   <script>, lines 2356–2600). Renders nothing — it wires up, on mount:
     1. Lucide icon injection      8. FAQ accordion
     2. Client logo marquee        9. Service-select flash (svc + #contact)
     3. (hover slow-down)         10. Hand-drawn underline on links/buttons
     4. Pricing tab switching     11. Vertical project reel loop
     5. Pricing card stagger      12. Hero cursor parallax
     6. "Why" accordion           13. Hero intro timeline + perpetual asterisk/burst
   Every motion is guarded by prefers-reduced-motion, exactly as the original.
   The contact modal (originally in the same script) lives in ContactModal.tsx.
   ============================================================================= */

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  createIcons,
  Clock,
  HelpCircle,
  Leaf,
  MonitorPlay,
  Palette,
  GraduationCap,
  Brain,
  Handshake,
  ChevronDown,
} from "lucide";

export function HomeAnimations() {
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return; // run once (guards React strict-mode double-invoke)
    ran.current = true;

    gsap.registerPlugin(ScrollTrigger);
    const RM = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const $ = (s: string, r?: ParentNode) => (r ?? document).querySelector(s) as HTMLElement | null;
    const $$ = (s: string, r?: ParentNode) => Array.from((r ?? document).querySelectorAll(s)) as HTMLElement[];

    // 1. Lucide icons ---------------------------------------------------------
    const ICONS: Record<string, string> = {
      "icon-clock": "clock",
      "icon-question": "help-circle",
      "icon-leaf": "leaf",
      "icon-play": "monitor-play",
      "icon-palette": "palette",
      "icon-grad": "graduation-cap",
      "icon-brain": "brain",
      "icon-hand": "handshake",
    };
    Object.keys(ICONS).forEach((cls) => {
      $$("." + cls).forEach((el) => {
        el.innerHTML = '<i data-lucide="' + ICONS[cls] + '"></i>';
      });
    });
    $$(".why-chev").forEach((el) => {
      el.innerHTML = '<i data-lucide="chevron-down"></i>';
    });
    createIcons({
      icons: { Clock, HelpCircle, Leaf, MonitorPlay, Palette, GraduationCap, Brain, Handshake, ChevronDown },
    });

    // 2/3. Client logo marquee (+ hover slow-down) ----------------------------
    const track = $(".marquee-track");
    const mset = $(".marquee-set");
    if (track && mset) {
      for (let i = 0; i < 3; i++) track.appendChild(mset.cloneNode(true));
      if (!RM) {
        const mt = gsap.to(track, { xPercent: -25, duration: 22, repeat: -1, ease: "none" });
        track.parentElement?.addEventListener("mouseenter", () => {
          gsap.to(mt, { timeScale: 0.25, duration: 0.5 });
        });
        track.parentElement?.addEventListener("mouseleave", () => {
          gsap.to(mt, { timeScale: 1, duration: 0.5 });
        });
      }
    }

    // 4/5. Pricing tabs + card stagger ----------------------------------------
    $$(".tab-panel").forEach((p) => p.classList.remove("panel-active"));
    $$(".tab-btn").forEach((b) => b.classList.remove("tab-active"));
    const fB = $(".tab-web");
    const fP = $(".panel-web");
    if (fB && fP) {
      fB.classList.add("tab-active");
      fP.classList.add("panel-active");
    }
    const TABS = [
      ["tab-web", "panel-web"],
      ["tab-ux", "panel-ux"],
      ["tab-seo", "panel-seo"],
      ["tab-host", "panel-host"],
      ["tab-train", "panel-train"],
      ["tab-maint", "panel-maint"],
    ];
    TABS.forEach((pair) => {
      const btn = $("." + pair[0]);
      const panel = $("." + pair[1]);
      if (!btn || !panel) return;
      btn.addEventListener("click", () => {
        if (btn.classList.contains("tab-active")) return;
        $$(".tab-btn").forEach((b) => b.classList.remove("tab-active"));
        $$(".tab-panel").forEach((p) => p.classList.remove("panel-active"));
        btn.classList.add("tab-active");
        panel.classList.add("panel-active");
        if (!RM) {
          gsap.fromTo(panel, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: "power3.out" });
          gsap.fromTo(
            $$(".price-card,.price-featured,.mini-card", panel),
            { y: 30, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.55, stagger: 0.09, ease: "power3.out", clearProps: "transform,opacity,visibility" }
          );
        }
        ScrollTrigger.refresh();
      });
    });

    // 6. "Why" accordion ------------------------------------------------------
    const CH = window.matchMedia("(hover: hover)").matches;
    function setWhy(row: HTMLElement, open: boolean) {
      const body = $(".why-body", row);
      if (!body) return;
      row.classList.toggle("open", open);
      if (RM) {
        body.style.height = open ? "auto" : "0px";
        return;
      }
      gsap.to(body, { height: open ? "auto" : 0, duration: 0.45, ease: "power2.inOut" });
    }
    $$(".why-row").forEach((row) => {
      const head = $(".why-head", row);
      if (!head) return;
      head.addEventListener("click", () => {
        const isOpen = row.classList.contains("open");
        $$(".why-row.open").forEach((o) => {
          if (o !== row) setWhy(o, false);
        });
        setWhy(row, !isOpen);
      });
      if (CH) {
        row.addEventListener("mouseenter", () => setWhy(row, true));
        row.addEventListener("mouseleave", () => setWhy(row, false));
      }
    });

    // 7. FAQ accordion --------------------------------------------------------
    $$(".faq-item").forEach((item) => {
      const q = $(".faq-q", item);
      const a = $(".faq-a", item);
      if (!q || !a) return;
      q.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        $$(".faq-item.open").forEach((o) => {
          if (o !== item) {
            o.classList.remove("open");
            const oa = $(".faq-a", o);
            if (!oa) return;
            if (RM) oa.style.height = "0px";
            else gsap.to(oa, { height: 0, duration: 0.35, ease: "power2.inOut" });
          }
        });
        item.classList.toggle("open", !isOpen);
        if (RM) a.style.height = isOpen ? "0px" : "auto";
        else gsap.to(a, { height: isOpen ? 0 : "auto", duration: 0.4, ease: "power2.inOut" });
      });
    });

    // 9. Service-select flash (service buttons + any #contact link) -----------
    function flashSvc(v: string) {
      const s = $('select[name="service"]') as HTMLSelectElement | null;
      if (!s) return;
      s.value = v;
      if (!RM)
        gsap.fromTo(
          s,
          { boxShadow: "0 0 0 6px rgba(76,162,68,.35)" },
          { boxShadow: "0 0 0 0 rgba(76,162,68,0)", duration: 1, ease: "power2.out", clearProps: "boxShadow" }
        );
    }
    const SVC: Record<string, string> = { "svc-website": "website", "svc-ux": "ux", "svc-seo": "seo" };
    Object.keys(SVC).forEach((cls) => {
      $$("." + cls).forEach((btn) => btn.addEventListener("click", () => flashSvc(SVC[cls])));
    });
    const TAB_SVC: Record<string, string> = {
      "tab-web": "website",
      "tab-ux": "ux",
      "tab-seo": "seo",
      "tab-host": "hosting",
      "tab-train": "training",
      "tab-maint": "maintenance",
    };
    $$('a[href="#contact"]').forEach((a) => {
      a.addEventListener("click", () => {
        const act = $$(".tab-btn").filter((b) => b.classList.contains("tab-active"))[0];
        if (!act) return;
        Object.keys(TAB_SVC).forEach((k) => {
          if (act.classList.contains(k)) flashSvc(TAB_SVC[k]);
        });
      });
    });

    // 10. Hand-drawn underline on links/buttons -------------------------------
    const UP = "M3 7 C 28 2, 55 11, 82 5 S 112 8, 117 4";
    function addUnderline(el: HTMLElement) {
      let textNode: ChildNode | null = null;
      const ns = "http://www.w3.org/2000/svg";
      for (let i = 0; i < el.childNodes.length; i++) {
        const n = el.childNodes[i];
        if (n.nodeType === 3 && n.textContent && n.textContent.trim()) {
          textNode = n;
          break;
        }
      }
      if (!textNode) return;
      const wrap = document.createElement("span");
      wrap.className = "u-wrap";
      el.insertBefore(wrap, textNode);
      wrap.appendChild(textNode);
      const svg = document.createElementNS(ns, "svg");
      svg.setAttribute("class", "u-line");
      svg.setAttribute("viewBox", "0 0 120 12");
      svg.setAttribute("preserveAspectRatio", "none");
      const path = document.createElementNS(ns, "path");
      path.setAttribute("d", UP);
      svg.appendChild(path);
      wrap.appendChild(svg);
      const len = (path as SVGPathElement).getTotalLength();
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
      if (RM) {
        el.addEventListener("mouseenter", () => gsap.set(path, { strokeDashoffset: 0 }));
        el.addEventListener("mouseleave", () => gsap.set(path, { strokeDashoffset: len }));
        return;
      }
      const draw = gsap.to(path, { strokeDashoffset: 0, duration: 0.4, ease: "power2.out", paused: true });
      el.addEventListener("mouseenter", () => draw.play());
      el.addEventListener("mouseleave", () => draw.reverse());
    }
    $$(".nav-link,.btn-primary,.btn-ghost,.btn-teal,.btn-card-primary,.btn-outline-ink,.btn-outline-light").forEach(addUnderline);

    // 11. Vertical project reel loop ------------------------------------------
    const reel = $(".reel-track");
    if (reel && reel.children.length) {
      $$(".reel-img", reel).forEach((img) => reel.appendChild(img.cloneNode(true)));
      if (!RM) {
        const startReel = () => {
          const half = (reel.scrollHeight + 14) / 2;
          gsap.to(reel, { y: -half, duration: 30, ease: "none", repeat: -1 });
        };
        if (document.readyState === "complete") startReel();
        else window.addEventListener("load", startReel, { once: true });
      }
    }

    // 12. Hero cursor parallax ------------------------------------------------
    const hero = $(".hero");
    if (hero && !RM) {
      const EL = [
        { s: ".edge-tri-l", dx: 0.008, dy: 0.006 },
        { s: ".edge-tri-r", dx: -0.008, dy: -0.006 },
      ];
      const opt = { duration: 1, ease: "power2.out" };
      const QT = EL.map((o) => {
        const el = $(o.s);
        if (!el) return null;
        return { qx: gsap.quickTo(el, "x", opt), qy: gsap.quickTo(el, "y", opt), dx: o.dx, dy: o.dy };
      }).filter(Boolean) as { qx: (v: number) => void; qy: (v: number) => void; dx: number; dy: number }[];
      hero.addEventListener("mousemove", (e) => {
        const r = hero.getBoundingClientRect();
        const mx = e.clientX - r.left - r.width / 2;
        const my = e.clientY - r.top - r.height / 2;
        QT.forEach((q) => {
          q.qx(mx * q.dx);
          q.qy(my * q.dy);
        });
      });
      hero.addEventListener("mouseleave", () => {
        QT.forEach((q) => {
          q.qx(0);
          q.qy(0);
        });
      });
    }

    // 13. Hero intro timeline + perpetual asterisk/burst ----------------------
    if (!RM) {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      gsap.fromTo(".hero-edge-l", { x: -80, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.9, ease: "power3.out", delay: 0.4 });
      gsap.fromTo(".hero-edge-r", { x: 80, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.9, ease: "power3.out", delay: 0.6 });
      tl.from(".hero-eyebrow", { y: 24, autoAlpha: 0, duration: 0.7 })
        .from(".hero-line > span", { yPercent: 110, duration: 0.9, stagger: 0.1 }, "-=.3")
        .from(".hero-sub", { y: 26, autoAlpha: 0, duration: 0.7 }, "-=.45")
        .from(".hero-actions > a", { y: 20, autoAlpha: 0, duration: 0.5, stagger: 0.1 }, "-=.4")
        .from(".trust-item", { y: 14, autoAlpha: 0, duration: 0.45, stagger: 0.08 }, "-=.3")
        .from(".sticker", { scale: 0.8, rotate: -10, autoAlpha: 0, duration: 1.6, ease: "elastic.out(1,0.45)" }, "-=.9")
        .from(".asset-tri-hero", { scale: 0, rotate: -35, autoAlpha: 0, duration: 0.55, ease: "back.out(2)" }, "-=.5")
        .from(".asset-asterisk-hero", { scale: 0, rotate: -120, autoAlpha: 0, duration: 0.6, ease: "back.out(1.8)" }, "-=.35")
        .from(".asset-burst-hero", { y: 80, autoAlpha: 0, duration: 0.7 }, "-=.4");
      gsap.to(".asset-asterisk-hero", { rotate: 360, duration: 60, repeat: -1, ease: "none" });
      gsap.to(".asset-burst-hero", { y: -10, duration: 3.6, yoyo: true, repeat: -1, ease: "sine.inOut" });
    }
  }, []);

  return null;
}
