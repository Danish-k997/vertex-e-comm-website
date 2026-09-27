import { Check, X } from "lucide-react";

const fragmented = [
  "Separate marketplace and advertising vendors",
  "D2C store without conversion context",
  "Manual warehouse and catalog synchronization",
  "Different reporting systems and incentives",
];
const connected = [
  "Marketplace, D2C, media, and operations in one view",
  "Shared product and conversion intelligence",
  "Operational rhythm connected to inventory",
  "One accountable commerce operating team",
];

export default function ComparisonSection() {
  return (
    <section className="border-y border-[#282a2d] bg-[#080a0d] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl" data-reveal>
          <p className="kicker">The operating difference</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
            Fragmented Vendors vs. One Connected Engine.
          </h2>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16" data-reveal="delay">
          <article>
            <div className="mb-6 flex items-center justify-between border-b border-[#282a2d] pb-4">
              <h3 className="font-display text-xl font-bold text-[#f5f5f2]">The Fragmented Setup</h3>
              <span className="font-mono text-xs text-[#9aa0a8]">MULTI-VENDOR</span>
            </div>
            <ul className="space-y-4">
              {fragmented.map((item) => (
                <li key={item} className="flex items-start justify-between gap-4 text-sm leading-6 text-[#9aa0a8]">
                  <span>{item}</span>
                  <X aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-rose-400/80" />
                </li>
              ))}
            </ul>
          </article>

          <article className="lg:border-l lg:border-[#ff6a00]/30 lg:pl-16">
            <div className="mb-6 flex items-center justify-between border-b border-[#282a2d] pb-4">
              <h3 className="font-display text-xl font-bold text-[#f5f5f2]">The Vertex Connected Engine</h3>
              <span className="font-mono text-xs text-[#ff6a00]">VERTEX SYSTEM</span>
            </div>
            <ul className="space-y-4">
              {connected.map((item) => (
                <li key={item} className="flex items-start justify-between gap-4 text-sm leading-6 text-[#f5f5f2]">
                  <span>{item}</span>
                  <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-emerald-400/80" />
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
