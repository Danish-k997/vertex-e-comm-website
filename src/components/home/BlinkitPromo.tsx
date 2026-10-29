import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, Check, IndianRupee } from "lucide-react";

const assessmentSteps = ["Brand & product assessment", "Documentation coordination", "Catalogue preparation", "Structured follow-up"];

export default function BlinkitPromo() {
  return (
    <section aria-labelledby="blinkit-promo-title" className="blinkit-hero relative isolate overflow-hidden border-b border-[#282a2d] bg-[#0c0e11] py-16 sm:py-20 lg:py-24">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_46%,rgba(248,230,82,0.09),transparent_44%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute right-[10%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#f8e652]/15 to-transparent" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <div className="blinkit-reveal blinkit-reveal-1 flex flex-wrap items-center gap-3">
            <Image src="/brands/blinkit%20logo.png" alt="Blinkit" width={68} height={68} priority className="blinkit-logo-enter size-12 rounded-xl object-contain shadow-[0_8px_26px_rgba(248,230,82,0.14)] sm:size-14" />
            <span className="h-8 w-px bg-[#45484b]" aria-hidden="true" />
            <span className="max-w-48 text-[10px] font-semibold uppercase leading-4 tracking-[0.13em] text-[#9aa0a8] sm:text-[11px]">Independent onboarding assistance<br />by Vertex E-comm</span>
            <span className="ml-auto inline-flex items-center gap-2 rounded-full border border-[#f8e652]/20 bg-[#f8e652]/[0.06] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-[#f8e652] sm:text-[10px]">For eligible brands</span>
          </div>

          <h2 id="blinkit-promo-title" className="mt-8 max-w-3xl font-display text-[2.65rem] font-bold leading-[1.04] tracking-[-0.045em] text-[#f5f5f2] sm:text-6xl lg:text-[4.5rem]">
            <span className="blinkit-reveal blinkit-reveal-2 block">Your Brand.</span>
            <span className="blinkit-reveal blinkit-reveal-3 block text-[#f8e652]">Blinkit-Ready.</span>
          </h2>
          <p className="blinkit-reveal blinkit-reveal-4 mt-5 max-w-2xl font-display text-lg font-semibold leading-7 text-[#e5e5df] sm:text-xl sm:leading-8">
            From brand assessment to onboarding coordination — we help you move forward.
          </p>
          <p className="blinkit-reveal blinkit-reveal-5 mt-4 max-w-2xl text-sm leading-7 text-[#9aa0a8] sm:text-base">
            Planning to take your products to Blinkit? We assess brand readiness, coordinate documentation and catalogue preparation, and guide eligible brands through a structured onboarding workflow.
          </p>

          <div className="blinkit-reveal blinkit-reveal-5 mt-6 grid gap-x-5 gap-y-2 sm:grid-cols-2">
            {assessmentSteps.map((step) => <span key={step} className="flex items-center gap-2 text-xs text-[#c4c7cb] sm:text-sm"><Check aria-hidden="true" className="size-4 shrink-0 text-[#f8e652]" />{step}</span>)}
          </div>

          <div className="blinkit-reveal blinkit-reveal-6 mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7">
            <Link href="/?service=blinkit#audit-form" data-track="blinkit_cta" className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#f8e652] px-6 py-3 text-sm font-bold text-[#17170d] shadow-[0_8px_28px_rgba(248,230,82,0.13)] transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#fff28a] hover:shadow-[0_10px_34px_rgba(248,230,82,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fff28a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0e11]">
              Get Your Brand Assessed <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="#services" className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#d7d8d2] transition-colors hover:text-[#f8e652] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f8e652]">
              Explore Our Services <ArrowDownRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </Link>
            <p className="inline-flex items-center font-display text-lg font-bold text-[#f5f5f2] sm:ml-auto"><IndianRupee aria-hidden="true" className="size-4" />20,000 <span className="ml-2 font-sans text-[10px] font-medium uppercase tracking-[0.1em] text-[#9aa0a8]">one-time service fee</span></p>
          </div>
          <p className="mt-5 max-w-2xl text-[11px] leading-5 text-[#717780]">Blinkit is a third-party platform. Vertex E-comm provides independent readiness and coordination support; platform decisions remain with Blinkit.</p>
        </div>

        <div className="blinkit-reveal blinkit-reveal-4 relative mx-auto w-full max-w-[30rem] lg:col-span-5 lg:pl-4" aria-label="Illustration of products being prepared for a brand catalogue">
          <div aria-hidden="true" className="absolute inset-3 rounded-full bg-[#f8e652]/[0.08] blur-[68px]" />
          <div className="relative rounded-[1.65rem] border border-[#343633] bg-[#121411] p-4 shadow-[0_32px_90px_rgba(0,0,0,0.38)] sm:p-6">
            <div className="flex items-center justify-between border-b border-[#292c27] pb-4">
              <div><p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#f8e652]">Brand readiness</p><p className="mt-1 text-sm font-semibold text-[#f5f5f2]">Preparation workspace</p></div>
              <span className="rounded-full border border-[#f8e652]/20 bg-[#f8e652]/[0.06] px-2.5 py-1 font-mono text-[9px] text-[#f8e652]">01 — 04</span>
            </div>
            <div className="relative mt-5 flex h-[15rem] items-end justify-center overflow-hidden rounded-xl border border-[#292c27] bg-[linear-gradient(160deg,#22251e,#131510_66%)] px-5 pb-5 sm:h-[17rem]">
              <div aria-hidden="true" className="absolute inset-0 opacity-50" style={{ backgroundImage: "linear-gradient(rgba(248,230,82,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(248,230,82,.06) 1px,transparent 1px)", backgroundSize: "32px 32px", maskImage: "linear-gradient(to bottom, black, transparent 85%)" }} />
              <div aria-hidden="true" className="absolute bottom-5 left-1/2 h-4 w-[82%] -translate-x-1/2 rounded-[50%] bg-black/50 blur-md" />
              <div aria-hidden="true" className="relative z-10 flex h-36 items-end gap-3 sm:h-40 sm:gap-4">
                <div className="relative flex h-[6.9rem] w-[4.5rem] flex-col items-center justify-center rounded-[0.4rem] border border-[#d7b47c]/35 bg-gradient-to-b from-[#c99450] to-[#805834] shadow-[0_15px_28px_rgba(0,0,0,.28)] sm:h-32 sm:w-20"><span className="absolute -top-2 h-3 w-8 rounded-t-sm bg-[#c9aa7d]" /><span className="font-mono text-[7px] tracking-wider text-white/85">YOUR BRAND</span><span className="mt-2 h-px w-7 bg-white/50" /><span className="mt-2 text-[7px] uppercase tracking-wider text-white/80">Product</span></div>
                <div className="relative flex h-[8.1rem] w-[5.1rem] flex-col items-center justify-center rounded-[1.35rem_1.35rem_0.6rem_0.6rem] border border-[#d5d3bc]/30 bg-gradient-to-b from-[#d2d0bb] to-[#706f60] shadow-[0_15px_28px_rgba(0,0,0,.28)] sm:h-36 sm:w-[5.8rem]"><span className="absolute -top-2 h-4 w-5 rounded-t-md bg-[#a8a68c]" /><span className="font-mono text-[7px] tracking-wider text-[#24251e]/80">YOUR BRAND</span><span className="mt-2 h-px w-8 bg-black/25" /><span className="mt-2 text-[7px] uppercase tracking-wider text-[#24251e]/75">Product</span></div>
                <div className="relative flex h-[7.6rem] w-[4.7rem] flex-col items-center justify-center rounded-lg border border-[#a8c5aa]/30 bg-gradient-to-b from-[#709477] to-[#385d46] shadow-[0_15px_28px_rgba(0,0,0,.28)] sm:h-[8.5rem] sm:w-[5.3rem]"><span className="absolute -top-1.5 h-2 w-6 rounded-t-sm bg-[#b7c8b4]" /><span className="font-mono text-[7px] tracking-wider text-white/85">YOUR BRAND</span><span className="mt-2 h-px w-7 bg-white/45" /><span className="mt-2 text-[7px] uppercase tracking-wider text-white/80">Product</span></div>
              </div>
              <span className="absolute bottom-3 right-3 font-mono text-[8px] uppercase tracking-[0.12em] text-white/30">Product visuals are illustrative</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {assessmentSteps.map((step, index) => <div key={step} className="flex items-center gap-2 rounded-lg border border-[#292c27] bg-[#191b17] px-2.5 py-2.5"><span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#f8e652]/10 font-mono text-[8px] text-[#f8e652]">0{index + 1}</span><span className="text-[9px] leading-4 text-[#c4c7cb] sm:text-[10px]">{step}</span></div>)}
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-[#292c27] pt-4"><span className="text-xs text-[#9aa0a8]">Vertex E-comm service fee</span><span className="inline-flex items-center font-display text-base font-bold text-[#f5f5f2]"><IndianRupee aria-hidden="true" className="size-3.5" />20,000 <span className="ml-1 text-[9px] font-medium text-[#9aa0a8]">one-time</span></span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
