import Link from "next/link";
import { ArrowRight, CheckCircle2, PlayCircle } from "lucide-react";
import Button from "@/components/ui/Button";

const channels = ["Marketplace", "D2C Storefront", "Performance Marketing", "Operations"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[#222730] bg-[#0c0e11] py-12 md:py-20">
      <div aria-hidden="true" className="telemetry-grid absolute inset-0 opacity-30" />
      <div aria-hidden="true" className="telemetry-glow absolute -left-40 top-0 size-[34rem] rounded-full bg-[#ff6a00]/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:items-center">
        <div className="flex flex-col gap-6 lg:col-span-7">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#282a2d] bg-[#1e2023] px-3 py-1.5 text-[11px] font-semibold tracking-[0.08em] text-[#e2bfb0]">
            <span className="size-2 rounded-full bg-[#ff6a00] motion-safe:animate-pulse" />
            FULL-STACK E-COMMERCE GROWTH PARTNER
          </span>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.15] text-[#e2e2e6] sm:text-5xl lg:text-6xl">
            Your Product Is Ready.<br />
            <span className="text-[#ff6a00]">Let&apos;s Build the System</span> That Sells It.
          </h1>
          <div className="flex flex-wrap items-center gap-2">
            {channels.map((channel) => <span key={channel} className="rounded border border-[#333538] bg-[#282a2d] px-3 py-1 font-mono text-xs text-[#c4c6cd]">[{channel}]</span>)}
          </div>
          <p className="max-w-2xl text-lg leading-7 text-[#c4c6cd]">
            Vertex Ecomm builds, manages and scales the complete online sales system across marketplaces, D2C websites and paid advertising.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="#audit-form" className="px-6 py-3.5"><span>Get Free E-commerce Audit</span></Button>
            <Link href="#how-we-work" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-[#1e2023] px-6 py-3.5 text-sm font-medium text-[#f5f5f2] transition-colors hover:border-white/30 hover:bg-[#282a2d]">
              Explore How We Work <PlayCircle aria-hidden="true" className="size-[18px]" />
            </Link>
          </div>
          <p className="flex items-center gap-2 text-sm text-[#c4c6cd]"><CheckCircle2 aria-hidden="true" className="size-4 text-[#ff6a00]" /> For Indian manufacturers, distributors and enterprise brands.</p>
        </div>
        <div className="lg:col-span-5">
          <div className="relative rounded-xl border border-[#333538] bg-[#1a1c1f]/95 p-5 shadow-2xl shadow-black/40 sm:p-6">
            <div className="mb-5 flex items-center justify-between border-b border-[#333538] pb-4">
              <span className="flex items-center gap-2 font-mono text-xs font-bold tracking-[0.08em] text-[#e2bfb0]"><span className="size-2.5 rounded-full bg-emerald-400 motion-safe:animate-pulse" /> SYS_STATUS: OPTIMAL</span>
              <span className="font-mono text-[10px] text-[#c4c6cd]">MULTI-CHANNEL LIVE</span>
            </div>
            <div className="mb-4 flex items-center justify-between"><h2 className="font-display text-xl font-semibold">E-Commerce Command</h2><span className="rounded bg-[#333538] px-2 py-1 font-mono text-[10px] text-[#c4c6cd]">SIMULATION</span></div>
            <div className="mb-5 grid grid-cols-2 gap-3">
              {["Amazon India", "Flipkart", "Meesho Hub", "D2C Storefront"].map((name, index) => <div key={name} className="rounded-lg border border-[#282a2d] bg-[#1e2023] p-3"><div className="flex items-center justify-between text-[11px] font-semibold"><span>{name}</span><span className={`size-2 rounded-full ${index === 3 ? "bg-[#ff6a00]" : "bg-emerald-400"}`} /></div><span className="mt-1 block font-mono text-[10px] text-[#c4c6cd]">{index === 3 ? "3.4% CVR | Live" : "Channel sync | Live"}</span></div>)}
            </div>
            <div className="rounded-lg border border-[#282a2d] bg-[#0c0e11] p-4">
              <div className="mb-2 flex items-center justify-between font-mono text-[11px]"><span className="text-[#c4c6cd]">BLENDED REVENUE THROUGHPUT</span><span className="text-[#ff6a00]">LIVE INDEX</span></div>
              <svg viewBox="0 0 300 80" className="h-28 w-full" preserveAspectRatio="none" role="img" aria-label="Revenue throughput chart">
                <defs><linearGradient id="revenue-fill" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#ff6a00" stopOpacity=".42" /><stop offset="1" stopColor="#ff6a00" stopOpacity="0" /></linearGradient></defs>
                <polygon className="signal-fill" fill="url(#revenue-fill)" points="0,75 20,68 50,70 80,55 120,58 150,42 190,46 220,28 260,32 300,10 300,80 0,80" />
                <polyline className="signal-path" fill="none" points="0,75 20,68 50,70 80,55 120,58 150,42 190,46 220,28 260,32 300,10" stroke="#ff6a00" strokeLinecap="round" strokeWidth="2.5" />
              </svg>
            </div>
            <div className="mt-4 flex flex-wrap justify-between gap-2 font-mono text-[10px] text-[#c4c6cd]"><span>Orders: Synced</span><span>RTO: Monitored</span><span>Warehousing: Balanced</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
