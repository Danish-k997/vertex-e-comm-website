const steps = [
  [
    "Understand",
    "WEEK 1-2",
    "Deep audit of product SKUs, packaging, pricing, gross margins, competitor gaps, and channel viability.",
  ],
  [
    "Build",
    "WEEK 2-4",
    "Engineered marketplace storefronts, high-converting D2C architecture, and measurement foundations.",
  ],
  [
    "Manage",
    "CONTINUOUS",
    "Day-to-day catalog management, inventory sync, dispatch checks, inquiries, and claims.",
  ],
  [
    "Optimize",
    "CONTINUOUS",
    "Refine traffic, merchandising, conversion paths, and operational signals with a shared view.",
  ],
  [
    "Scale",
    "WHEN READY",
    "Expand channels and capacity only when the system can carry the next layer of demand.",
  ],
] as const;

export default function ProcessSection() {
  return (
    <section
      id="how-we-work"
      className="scroll-mt-24 bg-[#111317] py-16 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="max-w-2xl" data-reveal>
          <p className="kicker">Execution roadmap</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
            From Setup to Scale.
          </h2>
          <p className="mt-5 text-lg leading-7 text-[#9aa0a8]">
            A phased deployment structure for risk control, disciplined rollout,
            and progressive revenue acceleration.
          </p>
        </div>

        <ol
          className="process-steps relative mt-12 grid gap-8 md:mt-16 md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-6 lg:gap-y-12"
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
