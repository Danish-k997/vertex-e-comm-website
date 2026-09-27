import Link from "next/link";
import { CheckCircle2, PlayCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import CommerceDashboard from "@/components/home/CommerceDashboard";

const channels = ["Marketplaces", "D2C Website", "Paid Ads", "Operations"];

export default function Hero() {
  return (
    <section className="hero-section relative overflow-hidden border-b border-[#222730] bg-[#0c0e11] py-16 md:py-24">
      <span
        aria-hidden="true"
        data-nav-sentinel
        className="pointer-events-none absolute left-0 top-0 size-px"
      />
      <div
        aria-hidden="true"
        className="telemetry-grid pointer-events-none absolute inset-0 opacity-25"
      />
      <div
        aria-hidden="true"
        className="ambient-light pointer-events-none absolute -left-32 top-8 size-[28rem] rounded-full bg-[#ff6a00]/[0.09] blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="flex flex-col gap-7 lg:col-span-7">
          <span
            data-hero-enter="1"
            className="hero-enter inline-flex w-fit items-center gap-2 rounded-full border border-[#282a2d] bg-[#1a1c1f] px-3 py-1.5 text-[11px] font-semibold tracking-[0.08em] text-[#c4b4ab]"
          >
            <span className="size-1.5 rounded-full bg-[#ff6a00]" />
            MARKETPLACE + D2C GROWTH PARTNER
          </span>

          <h1
            data-hero-enter="2"
            className="hero-enter max-w-3xl font-display text-[2.35rem] font-bold leading-[1.12] tracking-tight text-[#f5f5f2] sm:text-5xl lg:text-[3.65rem]"
          >
            <span className="text-[#ff6a00]">From Marketplaces to D2C.</span>
            <br />
            One Team for Your Entire Sales Engine.
          </h1>

          <div
            data-hero-enter="3"
            className="hero-enter flex flex-wrap items-center gap-2"
          >
            {channels.map((channel) => (
              <span
                key={channel}
                className="rounded-md border border-[#333538] bg-[#1e2023] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.04em] text-[#c4b4ab]"
              >
                {channel}
              </span>
            ))}
          </div>

          <p
            data-hero-enter="4"
            className="hero-enter max-w-xl text-lg leading-7 text-[#9aa0a8]"
          >
            We manage marketplace operations, build and grow D2C storefronts,
            run performance ads, and coordinate fulfillment — all with one team
            accountable for the full picture.
          </p>

          <div
            data-hero-enter="6"
            className="hero-enter flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button href="#audit-form" className="px-6 py-3.5">
              Get Free E-commerce Audit
            </Button>
            <Link
              href="#how-we-work"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/12 bg-[#1e2023] px-6 py-3.5 text-sm font-medium text-[#f5f5f2] transition-[border-color,background-color] duration-500 ease-out hover:border-white/25 hover:bg-[#282a2d]"
            >
              Explore How We Work{" "}
              <PlayCircle aria-hidden="true" className="size-[18px]" />
            </Link>
          </div>

          <p
            data-hero-enter="5"
            className="hero-enter flex items-center gap-2 text-sm text-[#9aa0a8]"
          >
            <CheckCircle2
              aria-hidden="true"
              className="size-4 text-[#ff6a00]"
            />
            For Indian manufacturers, distributors and enterprise brands.
          </p>
        </div>

        <div className="lg:col-span-5">
          <CommerceDashboard />
        </div>
      </div>
    </section>
  );
}
