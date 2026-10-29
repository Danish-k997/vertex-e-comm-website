"use client";

import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const trackClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const tracked = target.closest<HTMLElement>("[data-track]");
      if (!tracked) return;
      const eventName = tracked.dataset.track;
      if (!eventName) return;
      const analyticsWindow = window as Window & {
        gtag?: (command: string, eventName: string, params?: Record<string, string>) => void;
        dataLayer?: Array<Record<string, string>>;
      };
      analyticsWindow.gtag?.("event", eventName, { event_category: "engagement" });
      analyticsWindow.dataLayer?.push({ event: eventName, event_category: "engagement" });
    };
    document.addEventListener("click", trackClick);
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const navSentinel = document.querySelector<HTMLElement>("[data-nav-sentinel]");
    const header = document.querySelector<HTMLElement>("[data-site-nav]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let revealObserver: IntersectionObserver | undefined;
    let navObserver: IntersectionObserver | undefined;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-revealed"));
    } else {
      nodes.forEach((node) => {
        if (node.getBoundingClientRect().top < window.innerHeight * 0.92) {
          node.classList.add("is-revealed");
        }
      });
      document.documentElement.dataset.motion = "ready";

      revealObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            entry.target.classList.add("is-revealed");
            revealObserver?.unobserve(entry.target);
          }
        },
        { threshold: 0.14, rootMargin: "0px 0px -6% 0px" },
      );

      nodes.forEach((node) => {
        if (!node.classList.contains("is-revealed")) revealObserver?.observe(node);
      });
    }

    document.documentElement.dataset.motion = "ready";

    if ("IntersectionObserver" in window && navSentinel && header) {
      navObserver = new IntersectionObserver(
        ([entry]) => {
          header.dataset.scrolled = String(!entry.isIntersecting);
        },
        { rootMargin: "-80px 0px 0px 0px", threshold: 0 },
      );
      navObserver.observe(navSentinel);
    }

    return () => {
      revealObserver?.disconnect();
      navObserver?.disconnect();
      document.removeEventListener("click", trackClick);
    };
  }, []);

  return null;
}
