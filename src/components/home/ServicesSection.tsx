import Link from "next/link";
import { ArrowUpRight, Megaphone, PackageCheck, ShoppingBag, Store } from "lucide-react";
import { services } from "@/data/services";

const icons = [Store, ShoppingBag, Megaphone, PackageCheck];

export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 bg-[#111317] py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16" data-reveal>
          <div className="lg:col-span-5">
            <p className="kicker">My Services</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">One team to prepare, coordinate and execute.</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[#9aa0a8] lg:col-span-7 lg:pt-10 sm:text-lg">
            We work alongside your team to organise the inputs, guide the process and handle the agreed work across marketplaces, e-commerce websites, marketing and brand onboarding.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2" data-reveal="delay">
          {services.map((service, index) => {
            const Icon = icons[index];
            const isBlinkit = service.title === "Blinkit Brand Onboarding";
            return (
              <article key={service.title} className={`service-card group flex h-full flex-col rounded-2xl border p-5 sm:p-7 ${isBlinkit ? "border-[#f8e652]/25 bg-[linear-gradient(145deg,rgba(248,230,82,.07),rgba(17,19,23,0)_48%),#0c0e11]" : "border-[#282a2d] bg-[#0c0e11]"}`}>
                <div className="flex items-start justify-between gap-4">
                  <div className={`flex size-10 items-center justify-center rounded-xl border ${isBlinkit ? "border-[#f8e652]/20 bg-[#f8e652]/[0.07]" : "border-[#ff6a00]/20 bg-[#ff6a00]/10"}`}>
                    <Icon aria-hidden="true" className={`size-[18px] ${isBlinkit ? "text-[#f8e652]" : "text-[#ff6a00]"}`} />
                  </div>
                  <span className={`font-mono text-[9px] tracking-[0.12em] ${isBlinkit ? "text-[#f8e652]" : "text-[#ff6a00]"}`}>{service.label}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-[#f5f5f2] sm:text-2xl">{service.title}</h3>
                <p className={`mt-2 font-display text-base font-semibold leading-6 ${isBlinkit ? "text-[#f8e652]" : "text-[#e5e5df]"}`}>{service.outcome}</p>
                <p className="mt-3 max-w-xl text-sm leading-6 text-[#9aa0a8]">{service.description}</p>
                <Link href={service.href} data-track={service.event} className={`mt-6 inline-flex min-h-10 w-fit items-center gap-2 border-b pb-1 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 ${isBlinkit ? "border-[#f8e652]/40 text-[#f8e652] hover:border-[#fff28a] hover:text-[#fff28a] focus-visible:ring-[#f8e652]" : "border-[#ff6a00]/35 text-[#ffb694] hover:border-[#ffb694] hover:text-[#fff1e8] focus-visible:ring-[#ffb694]"}`}>
                  {service.cta}<ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
