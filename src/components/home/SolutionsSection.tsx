import Link from "next/link";
import { ArrowRight, Factory, Rocket, Warehouse } from "lucide-react";
import { solutions } from "@/data/solutions";

const icons = [Factory, Warehouse, Rocket];

export default function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="scroll-mt-24 border-y border-[#282a2d] bg-[#080a0d] py-16 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl" data-reveal>
          <p className="kicker">Who we serve</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
            Built for Businesses With a Product to Sell.
          </h2>
          <p className="mt-5 text-lg leading-7 text-[#9aa0a8]">
            For manufacturers, distributors, brand owners and marketplace
            sellers who need a team to build or manage online sales.
          </p>
        </div>

        <div
          className="mt-10 grid gap-8 lg:mt-16 lg:grid-cols-3 lg:gap-0"
          data-reveal="delay"
        >
          {solutions.map((solution, index) => {
            const Icon = icons[index];
            return (
              <article
                key={solution.title}
                className={`flex flex-col ${index > 0 ? "lg:border-l lg:border-[#282a2d] lg:pl-10" : "lg:pr-10"}`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-[#ff6a00]">
                    {solution.segment}
                  </span>
                  <Icon aria-hidden="true" className="size-5 text-[#9aa0a8]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#f5f5f2]">
                  {solution.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-[#9aa0a8]">
                  {solution.description}
                </p>
                <ul className="mt-6 space-y-2 text-sm text-[#f5f5f2]">
                  {solution.details.map((detail) => (
                    <li key={detail} className="border-t border-[#282a2d] pt-2">
                      {detail}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#audit-form"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#ff6a00] transition-colors duration-500 ease-out hover:text-[#ffb694]"
                >
                  {solution.title} Roadmap <ArrowRight className="size-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
