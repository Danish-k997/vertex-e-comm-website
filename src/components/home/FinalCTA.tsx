import { CheckCircle2 } from "lucide-react";
import LeadForm from "@/components/home/LeadForm";

export default function FinalCTA() {
  return (
    <section
      id="audit-form"
      className="relative scroll-mt-24 overflow-hidden border-t border-[#282a2d] bg-[#0c0e11] py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="ambient-light pointer-events-none absolute right-0 top-0 size-80 rounded-full bg-[#ff6a00]/[0.08] blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5" data-reveal>
          <p className="kicker">Start with the system</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.12] tracking-tight md:text-6xl">
            Your Product Deserves a Sales Engine.
          </h2>
          <p className="mt-6 text-lg leading-7 text-[#9aa0a8]">
            Bring the current channel mix, product catalog, and operating
            questions. We will help clarify where the system is breaking down.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-[#9aa0a8]">
            <li className="flex gap-2">
              <CheckCircle2
                aria-hidden="true"
                className="size-4 text-[#ff6a00]"
              />
              Marketplace, D2C, media, and operations context
            </li>
            <li className="flex gap-2">
              <CheckCircle2
                aria-hidden="true"
                className="size-4 text-[#ff6a00]"
              />
              A grounded next-step conversation
            </li>
          </ul>
        </div>
        <div className="lg:col-span-7" data-reveal="delay">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
