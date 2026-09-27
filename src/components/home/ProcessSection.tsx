const steps = [
  [
    "Understand",
    "DISCOVER",
    "Review your products, current online channels, listings and sales challenges.",
  ],
  [
    "Build",
    "FOUNDATION",
    "Build or improve marketplace listings, e-commerce websites and campaign setup.",
  ],
  [
    "Manage",
    "ONGOING",
    "Manage marketplace accounts, catalogs, ads, orders and day-to-day operations.",
  ],
  [
    "Optimize",
    "ONGOING",
    "Use performance data to improve listings, SEO, ads, website conversion and orders.",
  ],
  [
    "Scale",
    "WHEN READY",
    "Build on what is working and expand products or channels when the business is ready.",
  ],
] as const;

export default function ProcessSection() {
  return (
    <section
      id="how-we-work"
      className="scroll-mt-24 bg-[#111317] py-14 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="max-w-2xl" data-reveal>
          <p className="kicker">Execution roadmap</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
            From First Review to Growth.
          </h2>
          <p className="mt-5 text-lg leading-7 text-[#9aa0a8]">
            Understand the opportunity, build the sales channels, manage
            execution, and improve with real performance data.
          </p>
        </div>

        <ol
          className="process-steps relative mt-10 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-6 lg:gap-y-12"
          data-reveal="delay"
        >
          <span
            aria-hidden="true"
            className="process-connector pointer-events-none absolute bg-[#333538]"
          />
          {steps.map(([title, timing, copy], index) => (
            <li
              key={title}
              className="process-step relative flex gap-4 md:col-span-1 md:flex-col md:gap-4 lg:col-span-2"
            >
              <span className="process-step-marker relative z-1 mt-0 inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-[#ff6a00] bg-[#111317] font-mono text-[10px] text-[#ff6a00] md:mt-0.5 md:size-6">
                <span>{index + 1}</span>
              </span>
              <div className="process-step-content">
                <p className="process-step-timing font-mono text-[10px] text-[#9aa0a8]">
                  {timing}
                </p>
                <h3 className="process-step-title mt-1 font-display text-xl font-semibold text-[#f5f5f2]">
                  {title}
                </h3>
                <p className="process-step-copy mt-2 text-sm leading-6 text-[#9aa0a8]">
                  {copy}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
