import { BadgeIndianRupee, Eye, PackageCheck, Repeat2, Search, ShoppingCart } from "lucide-react";

const vectors = [
  [Eye, "Visibility", "ORGANIC INDEX & BUY-BOX SHARE", "Search placement and merchandising signals that make the catalog easier to discover."],
  [Search, "Traffic Quality", "HIGH-INTENT VISITOR STREAM", "Acquisition work measured against relevance and the paths that can actually convert."],
  [ShoppingCart, "Conversion Rate", "STORE & LISTING CRO", "Storefront and listing improvements that reduce friction at decision points."],
  [PackageCheck, "Order Velocity", "NET DAILY DISPATCH RATE", "Operational cadence across sales channels and fulfillment workflows."],
  [Repeat2, "Retention & LTV", "REPEAT PURCHASE FREQUENCY", "Customer lifecycle activity that helps a healthy brand retain its audience."],
  [BadgeIndianRupee, "Capital Efficiency", "BLENDED TACOS & RTO LIMITS", "Unit economics visibility that protects decision-making beyond top-line activity."],
] as const;

export default function MetricsSection() {
  return (
    <section className="bg-[#111317] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-12" data-reveal>
          <div className="lg:col-span-6">
            <p className="kicker">Metric rigor</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">Built to Be Measured.</h2>
          </div>
          <p className="max-w-md text-lg leading-7 text-[#9aa0a8] lg:col-span-6 lg:pt-10">
            Six operational vectors that give leadership a usable view of sales-system health.
          </p>
        </div>

        <div
          className="mt-16 overflow-hidden rounded-2xl border border-[#282a2d] bg-[#0c0e11]"
          data-reveal="delay"
        >
          <div className="flex items-center justify-between border-b border-[#282a2d] px-5 py-3 sm:px-6">
            <span className="font-mono text-[11px] text-[#9aa0a8]">TELEMETRY · OPERATING VECTORS</span>
            <span className="font-mono text-[11px] text-[#ff6a00]">FRAMEWORK</span>
          </div>
          <ul>
            {vectors.map(([Icon, title, label, copy], index) => (
              <li
                key={title}
                className="grid gap-2 border-b border-[#282a2d] px-5 py-5 last:border-b-0 sm:px-6 md:grid-cols-12 md:items-center md:gap-6"
              >
                <span className="font-mono text-[11px] text-[#ff6a00] md:col-span-2">VEC 0{index + 1}</span>
                <div className="flex items-center gap-3 md:col-span-3">
                  <Icon aria-hidden="true" className="size-4 text-[#ff6a00]" />
                  <h3 className="font-display text-lg font-semibold text-[#f5f5f2]">{title}</h3>
                </div>
                <p className="font-mono text-[10px] text-[#9aa0a8] md:col-span-3">{label}</p>
                <p className="text-sm leading-6 text-[#9aa0a8] md:col-span-4">{copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
