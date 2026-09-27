import { CheckCircle2 } from "lucide-react";
import LeadForm from "@/components/home/LeadForm";

export default function FinalCTA() {
  return (
    <section
      id="audit-form"
      className="relative scroll-mt-24 overflow-hidden border-t border-[#282a2d] bg-[#0c0e11] py-16 md:py-32"
    >
      <div
        aria-hidden="true"
        className="ambient-light pointer-events-none absolute right-0 top-0 size-80 rounded-full bg-[#ff6a00]/[0.08] blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-start lg:gap-16">
        <div className="lg:col-span-5" data-reveal>
          <p className="kicker">Start with the system</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.12] tracking-tight md:text-6xl">
            Ready to Build a Stronger Online Sales Channel?
          </h2>
          <p className="mt-6 text-lg leading-7 text-[#9aa0a8]">
            Bring your marketplaces, website, ads and sales questions. We will
            review the journey from product discovery to orders and outline
            practical next steps.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-[#9aa0a8]">
            <li className="flex gap-2">
              <CheckCircle2
                aria-hidden="true"
                className="size-4 text-[#ff6a00]"
              />
              Amazon, Flipkart, Meesho, website and ads
            </li>
            <li className="flex gap-2">
              <CheckCircle2
                aria-hidden="true"
                className="size-4 text-[#ff6a00]"
              />
              A practical review, with no sales guarantees
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
