import {
  BarChart3,
  Database,
  Megaphone,
  Package,
  Store,
  TrendingUp,
  WandSparkles,
  ShoppingCart,
} from "lucide-react";
import { Fragment } from "react";
import Button from "@/components/ui/Button";

const nodes = [
  { Icon: Package, label: "PRODUCT" },
  { Icon: Store, label: "MARKETPLACE" },
  { Icon: ShoppingCart, label: "D2C STORE" },
  { Icon: Megaphone, label: "PAID MEDIA" },
  { Icon: WandSparkles, label: "CONVERSION" },
  { Icon: ShoppingCart, label: "ORDERS" },
  { Icon: Database, label: "DATA SYNC" },
  { Icon: BarChart3, label: "OPTIMIZE" },
  { Icon: TrendingUp, label: "SCALE" },
] as const;

const stages = [
  { label: "INPUTS", group: "inputs", indices: [0, 1, 2, 3] },
  { label: "CORE", group: "core", indices: [4] },
  { label: "OPERATIONS", group: "operations", indices: [5, 6] },
  { label: "GROWTH", group: "growth", indices: [7, 8] },
] as const;

export default function SalesEngine() {
  return (
    <section
      id="engine"
      className="ambient-section relative isolate scroll-mt-24 border-y border-[#282a2d] bg-[#080a0d] py-16 md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
        <div className="max-w-2xl" data-reveal>
          <p className="kicker">The unified architecture</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
            Your Entire E-Commerce Engine. Connected.
          </h2>
          <p className="mt-5 text-lg leading-7 text-[#9aa0a8]">
            Vertex Ecomm operates the complete commerce pipeline instead of
            leaving you to coordinate separate teams.
          </p>
        </div>

        <div
          className="engine-flow relative mt-10 md:mt-16"
          data-reveal="delay"
        >
          <div
            aria-hidden="true"
            className="engine-connector pointer-events-none absolute bg-[#282a2d]"
          />
          <ol className="engine-map grid gap-8 sm:grid-cols-3 lg:grid-cols-9 lg:gap-3">
            {stages.map(({ label: stage, group, indices }) => (
              <Fragment key={stage}>
                <li className="engine-stage" data-engine-group={group}>
                  {stage}
                </li>
                {indices.map((index) => {
                  const { Icon, label } = nodes[index];
                  return (
                    <li
                      key={label}
                      className="engine-node relative flex flex-col items-start gap-3 lg:items-center lg:text-center"
                      data-engine-group={group}
                      data-engine-node={index + 1}
                    >
                      <span
                        className={`relative z-1 inline-flex size-9 items-center justify-center rounded-lg border ${
                          index === 4
                            ? "border-[#ff6a00] bg-[#ff6a00] text-[#571f00]"
                            : "border-[#333538] bg-[#1a1c1f] text-[#f5f5f2]"
                        }`}
                      >
                        <Icon className="size-4" />
                      </span>
                      <span className="font-mono text-[10px] text-[#9aa0a8]">
                        0{index + 1}
                      </span>
                      <span className="text-xs font-semibold tracking-wide text-[#f5f5f2]">
                        {label}
                      </span>
                    </li>
                  );
                })}
              </Fragment>
            ))}
          </ol>
        </div>

        <div className="mt-8 max-w-3xl md:mt-14" data-reveal>
          <p className="font-mono text-xs leading-6 text-[#9aa0a8]">
            VERTEX SYSTEM — one operational view from product readiness to
            dispatch, optimization, and scale.
          </p>
          <Button href="#audit-form" className="mt-4 min-h-11 w-full md:hidden">
            Get Free E-commerce Audit
          </Button>
        </div>
      </div>
    </section>
  );
}
