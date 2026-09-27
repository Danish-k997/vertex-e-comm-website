import {
  BadgeIndianRupee,
  Eye,
  PackageCheck,
  Search,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";

const vectors = [
  [
    Eye,
    "Visibility",
    "LISTINGS & SEARCH",
    "Are your products appearing where customers search?",
  ],
  [
    Search,
    "Traffic",
    "MARKETPLACES & WEBSITE",
    "Are relevant shoppers reaching your products and store?",
  ],
  [
    ShoppingCart,
    "Conversion",
    "PRODUCT PAGE & CHECKOUT",
    "Are visits turning into carts and purchases?",
  ],
  [
    PackageCheck,
    "Orders",
    "ORDERS & DISPATCH",
    "Are orders being processed and dispatched as expected?",
  ],
  [
    TrendingUp,
    "Revenue",
    "SALES BY CHANNEL",
    "Review actual sales over time across marketplaces and your website.",
  ],
  [
    BadgeIndianRupee,
    "Ad Efficiency",
    "AD SPEND VS. OUTCOME",
    "Compare ad spend with the traffic and orders it supports.",
  ],
] as const;

export default function MetricsSection() {
  return (
    <section className="bg-[#111317] py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-12" data-reveal>
          <div className="lg:col-span-6">
            <p className="kicker">Sales visibility</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
              Measure the Sales Journey.
            </h2>
          </div>
          <p className="max-w-md text-lg leading-7 text-[#9aa0a8] lg:col-span-6 lg:pt-10">
            We track the parts of online selling that matter: visibility,
            traffic, conversion, orders, revenue and ad efficiency.
          </p>
        </div>

        <div
          className="mt-10 overflow-hidden rounded-2xl border border-[#282a2d] bg-[#0c0e11] md:mt-16"
          data-reveal="delay"
        >
          <div className="flex items-center justify-between border-b border-[#282a2d] px-5 py-3 sm:px-6">
            <span className="font-mono text-[11px] text-[#9aa0a8]">
              WHAT WE TRACK
            </span>
            <span className="font-mono text-[11px] text-[#ff6a00]">
              FRAMEWORK
            </span>
          </div>
          <ul>
            {vectors.map(([Icon, title, label, copy], index) => (
              <li
                key={title}
                className="grid gap-2 border-b border-[#282a2d] px-5 py-4 last:border-b-0 sm:px-6 md:grid-cols-12 md:items-center md:gap-6 md:py-5"
              >
                <span className="font-mono text-[11px] text-[#ff6a00] md:col-span-2">
                  VEC 0{index + 1}
                </span>
                <div className="flex items-center gap-3 md:col-span-3">
                  <Icon aria-hidden="true" className="size-4 text-[#ff6a00]" />
                  <h3 className="font-display text-lg font-semibold text-[#f5f5f2]">
                    {title}
                  </h3>
                </div>
                <p className="font-mono text-[10px] text-[#9aa0a8] md:col-span-3">
                  {label}
                </p>
                <p className="text-sm leading-6 text-[#9aa0a8] md:col-span-4">
                  {copy}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
