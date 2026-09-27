"use client";

import { useState } from "react";

const focusAreas = [
  {
    name: "Marketplaces",
    detail: "Amazon India · Flipkart · Meesho",
    description:
      "Catalog, pricing, promotions, and day-to-day channel operations.",
  },
  {
    name: "D2C storefront",
    detail: "Website · Conversion · Retention",
    description:
      "Store experience, conversion improvements, and retention journeys.",
  },
  {
    name: "Paid media",
    detail: "Meta · Google · Marketplace Ads",
    description:
      "Campaign planning, optimization, and clear performance reporting.",
  },
  {
    name: "Commerce operations",
    detail: "Inventory · Orders · Fulfillment",
    description:
      "Inventory coordination, order flow, and fulfillment operations.",
  },
] as const;

export default function CommerceDashboard() {
  const [activeFocus, setActiveFocus] = useState(0);
  const selectedFocus = focusAreas[activeFocus];

  return (
    <div className="hero-dashboard relative rounded-2xl border border-[#333538] bg-[#1a1c1f]/95 p-5 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.8)] sm:p-6">
      <div className="mb-5 flex items-center justify-between border-b border-[#333538] pb-4">
        <span className="flex items-center gap-2 font-mono text-[11px] font-semibold tracking-[0.08em] text-[#c4b4ab]">
          <span
            aria-hidden="true"
            className="size-2 rounded-full bg-emerald-400/80"
          />
          COMMERCE SYSTEM
        </span>
        <span className="font-mono text-[10px] text-[#9aa0a8]">
          ILLUSTRATIVE VIEW
        </span>
      </div>

      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="font-display text-xl font-semibold text-[#f5f5f2]">
          Growth Command Center
        </h2>
        <span className="shrink-0 rounded-md bg-[#333538] px-2 py-1 font-mono text-[10px] text-[#9aa0a8]">
          DEMO
        </span>
      </div>

      <div
        role="group"
        aria-label="Choose a commerce service to explore"
        className="hero-channel-grid mb-4 grid grid-cols-2 gap-2.5"
      >
        {focusAreas.map((focus, index) => (
          <button
            key={focus.name}
            type="button"
            aria-pressed={activeFocus === index}
            onClick={() => setActiveFocus(index)}
            className="hero-channel min-h-17.5 min-w-0 rounded-lg border border-[#282a2d] bg-[#1e2023] p-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb694] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1c1f]"
          >
            <span className="flex items-center justify-between gap-2 text-[11px] font-semibold text-[#f5f5f2]">
              <span className="truncate">{focus.name}</span>
              <span
                aria-hidden="true"
                className="hero-channel-indicator size-1.5 shrink-0 rounded-full bg-[#55585c]"
              />
            </span>
            <span className="mt-1 block truncate font-mono text-[9px] leading-4 text-[#9aa0a8]">
              {focus.detail}
            </span>
          </button>
        ))}
      </div>

      <p
        key={selectedFocus.name}
        aria-live="polite"
        className="hero-focus-copy mb-4 min-h-16.5 rounded-lg border border-[#333538] bg-[#202225] px-3 py-2.5"
      >
        <span className="block font-mono text-[9px] uppercase tracking-[0.08em] text-[#ffb694]">
          Service focus
        </span>
        <span className="mt-1 block text-xs leading-5 text-[#c4c7cb]">
          {selectedFocus.description}
        </span>
      </p>

      <div className="rounded-lg border border-[#282a2d] bg-[#0c0e11] p-3 sm:p-4">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 font-mono text-[10px] sm:text-[11px]">
          <span className="text-[#9aa0a8]">BLENDED COMMERCE SIGNAL</span>
          <span className="text-[#ff6a00]">ILLUSTRATIVE · NO LIVE DATA</span>
        </div>
        <svg
          key={selectedFocus.name}
          viewBox="0 0 300 80"
          className="h-24 w-full sm:h-28"
          preserveAspectRatio="none"
          role="img"
          aria-label="Illustrative commerce signal, not actual sales or client performance data"
        >
          <defs>
            <linearGradient id="revenue-fill" x1="0" x2="0" y1="0" y2="1">
              <stop stopColor="#ff6a00" stopOpacity=".38" />
              <stop offset="1" stopColor="#ff6a00" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="revenue-highlight" x1="0" x2="1" y1="0" y2="0">
              <stop stopColor="#ff6a00" stopOpacity="0" />
              <stop offset="0.5" stopColor="#ffffff" stopOpacity=".45" />
              <stop offset="1" stopColor="#ff6a00" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon
            className="signal-fill"
            fill="url(#revenue-fill)"
            points="0,75 20,68 50,70 80,55 120,58 150,42 190,46 220,28 260,32 300,10 300,80 0,80"
          />
          <polyline
            className="signal-path"
            fill="none"
            points="0,75 20,68 50,70 80,55 120,58 150,42 190,46 220,28 260,32 300,10"
            stroke="#ff6a00"
            strokeLinecap="round"
            strokeWidth="2.5"
          />
          <rect
            className="signal-highlight"
            x="0"
            y="0"
            width="36"
            height="80"
            fill="url(#revenue-highlight)"
          />
        </svg>
      </div>

      <p className="mt-3 font-mono text-[9px] leading-4 text-[#9aa0a8]">
        Concept visualization only. Not a live client dashboard or a performance
        claim.
      </p>
    </div>
  );
}
