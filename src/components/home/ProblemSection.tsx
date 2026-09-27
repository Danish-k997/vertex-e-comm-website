import { EyeOff, PackageX, SearchCheck, Store, Workflow } from "lucide-react";

const problems = [
  [EyeOff, "Listed, but not discovered.", "Passive catalogs and zero keyword strategy leave good products buried in category demand."],
  [PackageX, "Traffic, but low conversion.", "Expensive clicks land on ambiguous storefronts with weak product propositions."],
  [SearchCheck, "Ads, but unclear performance.", "Campaigns optimize superficial activity rather than contribution margin and repeat value."],
  [Store, "A website, but no sales system.", "A standalone storefront without lifecycle flows or high-intent conversion architecture."],
  [Workflow, "Too many channels, too much chaos to manage.", "Disconnected vendors, stock-outs, and conflicting reports consume leadership time."],
] as const;

export default function ProblemSection() {
  return (
    <section className="bg-[#111317] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl" data-reveal>
          <p className="kicker">The commerce reality</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-[1.15] tracking-tight text-[#f5f5f2] md:text-5xl">
            Having a Product Is Not the Same as Having an Online Sales System.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-7 text-[#9aa0a8]">
            Marketplace listings, store experience, media spending, assets, and fulfillment must speak the same language.
          </p>
        </div>

        <div className="mt-16 border-t border-[#282a2d]" data-reveal="delay">
          {problems.map(([Icon, title, copy], index) => (
            <article
              key={title}
              className="grid gap-3 border-b border-[#282a2d] py-8 md:grid-cols-12 md:items-start md:gap-8"
            >
              <div className="flex items-center justify-between md:col-span-2">
                <span className="font-mono text-sm text-[#ff6a00]">0{index + 1}</span>
                <Icon aria-hidden="true" className="size-5 text-[#9aa0a8] md:hidden" />
              </div>
              <h3 className="font-display text-xl font-semibold text-[#f5f5f2] md:col-span-4">{title}</h3>
              <p className="text-sm leading-6 text-[#9aa0a8] md:col-span-5">{copy}</p>
              <Icon aria-hidden="true" className="hidden size-5 text-[#9aa0a8] md:col-span-1 md:mt-1 md:block" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
