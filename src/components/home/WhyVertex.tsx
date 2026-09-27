import { ChartNoAxesCombined, Eye, Network, UsersRound } from "lucide-react";

const reasons = [
  [
    UsersRound,
    "ONE TEAM",
    "Marketplace management, e-commerce websites and ads handled together.",
  ],
  [
    ChartNoAxesCombined,
    "SALES-FOCUSED WORK",
    "Listings, traffic, website conversion and orders stay in view.",
  ],
  [
    Network,
    "CONNECTED CHANNELS",
    "Amazon, Flipkart, Meesho, your website and paid ads support one sales plan.",
  ],
  [
    Eye,
    "CLEAR REPORTING",
    "See what is being worked on, what is changing and what needs attention.",
  ],
] as const;

export default function WhyVertex() {
  return (
    <section id="about" className="scroll-mt-24 bg-[#111317] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl" data-reveal>
          <p className="kicker">Why Vertex Ecomm</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
            One Team Across Your Online Sales.
          </h2>
          <p className="mt-5 text-lg leading-7 text-[#9aa0a8]">
            We bring marketplace accounts, Shopify or custom-coded websites,
            paid ads and ongoing optimization under one team.
          </p>
        </div>

        <dl
          className="mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-2"
          data-reveal="delay"
        >
          {reasons.map(([Icon, title, copy], index) => (
            <div key={title} className="border-l border-[#ff6a00]/50 pl-5">
              <dt className="flex items-center gap-3">
                <Icon aria-hidden="true" className="size-4 text-[#ff6a00]" />
                <span className="font-mono text-[11px] text-[#9aa0a8]">
                  0{index + 1}
                </span>
                <span className="font-display text-lg font-bold text-[#f5f5f2]">
                  {title}
                </span>
              </dt>
              <dd className="mt-3 text-sm leading-6 text-[#9aa0a8]">{copy}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
