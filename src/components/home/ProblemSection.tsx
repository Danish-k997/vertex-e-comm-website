import { EyeOff, PackageX, SearchCheck, Store, Workflow } from "lucide-react";

const problems = [
  [
    EyeOff,
    "Listed, but not found.",
    "Missing keywords or incomplete product listings can make it harder for shoppers to find your products.",
  ],
  [
    PackageX,
    "People visit, but do not buy.",
    "Product pages or checkout can leave questions unanswered or add friction to a purchase.",
  ],
  [
    SearchCheck,
    "Ads run, but sales are unclear.",
    "Without comparing campaigns with traffic and orders, it is hard to see what is helping.",
  ],
  [
    Store,
    "A website, but few orders.",
    "A website needs clear product pages and relevant traffic to support online sales.",
  ],
  [
    Workflow,
    "Many channels, no one to manage them.",
    "Separate marketplace, website and ad work can leave catalogs, stock and orders out of sync.",
  ],
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
            Marketplace listings, store experience, media spending, assets, and
            fulfillment must speak the same language.
          </p>
        </div>

        <div className="mt-16 border-t border-[#282a2d]" data-reveal="delay">
          {problems.map(([Icon, title, copy], index) => (
            <article
              key={title}
              className="grid gap-3 border-b border-[#282a2d] py-8 md:grid-cols-12 md:items-start md:gap-8"
            >
              <div className="flex items-center justify-between md:col-span-2">
                <span className="font-mono text-sm text-[#ff6a00]">
                  0{index + 1}
                </span>
                <Icon
                  aria-hidden="true"
                  className="size-5 text-[#9aa0a8] md:hidden"
                />
              </div>
              <h3 className="font-display text-xl font-semibold text-[#f5f5f2] md:col-span-4">
                {title}
              </h3>
              <p className="text-sm leading-6 text-[#9aa0a8] md:col-span-5">
                {copy}
              </p>
              <Icon
                aria-hidden="true"
                className="hidden size-5 text-[#9aa0a8] md:col-span-1 md:mt-1 md:block"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
