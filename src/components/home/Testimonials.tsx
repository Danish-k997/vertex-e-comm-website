const principles = [
  [
    "Clear ownership",
    "One accountable team across storefront, marketplace, media, and operations.",
  ],
  [
    "A shared operating view",
    "Questions about stock, conversion, and channel priorities are answered in the same system.",
  ],
  [
    "Work before claims",
    "The focus stays on the operational work required before performance is represented externally.",
  ],
] as const;

export default function Testimonials() {
  const [featured, ...rest] = principles;

  return (
    <section className="border-y border-[#282a2d] bg-[#080a0d] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl" data-reveal>
          <p className="kicker">Partnership principles</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
            How We Work With Your Team.
          </h2>
          <p className="mt-5 text-lg leading-7 text-[#9aa0a8]">
            These are the principles that guide our work, not client
            testimonials.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12" data-reveal="delay">
          <blockquote className="lg:col-span-7">
            <p className="font-display text-3xl font-medium leading-snug tracking-tight text-[#f5f5f2] md:text-4xl">
              {featured[1]}
            </p>
            <footer className="mt-6">
              <cite className="not-italic">
                <span className="font-display font-semibold text-[#f5f5f2]">
                  {featured[0]}
                </span>
                <span className="mt-1 block font-mono text-[10px] text-[#9aa0a8]">
                  PARTNERSHIP PRINCIPLE
                </span>
              </cite>
            </footer>
          </blockquote>

          <div className="space-y-10 lg:col-span-5">
            {rest.map(([title, copy]) => (
              <blockquote
                key={title}
                className="border-t border-[#282a2d] pt-8"
              >
                <p className="text-lg leading-7 text-[#f5f5f2]">{copy}</p>
                <footer className="mt-4">
                  <cite className="not-italic">
                    <span className="font-display font-semibold">{title}</span>
                    <span className="mt-1 block font-mono text-[10px] text-[#9aa0a8]">
                      PARTNERSHIP PRINCIPLE
                    </span>
                  </cite>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
