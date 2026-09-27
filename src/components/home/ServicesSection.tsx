import Link from "next/link";
import { ArrowRight, CheckCircle2, Megaphone, Palette, ShoppingBag, Store, Truck } from "lucide-react";
import { services } from "@/data/services";

const icons = [ShoppingBag, Store, Megaphone, Palette, Truck];

export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 bg-[#111317] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16" data-reveal>
          <div className="lg:col-span-5">
            <p className="kicker">Services</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
              Everything Your Brand Needs to Sell Online.
            </h2>
          </div>
          <p className="max-w-md text-lg leading-7 text-[#9aa0a8] lg:col-span-7 lg:pt-10">
            End-to-end commerce engineering without disjointed contractors. We take ownership of operational health.
          </p>
        </div>

        <div className="mt-16 divide-y divide-[#282a2d] border-y border-[#282a2d]" data-reveal="delay">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <article
                key={service.title}
                className="grid gap-4 py-10 transition-colors duration-500 ease-out md:grid-cols-12 md:items-start md:gap-8"
              >
                <div className="flex items-center gap-3 md:col-span-4">
                  <span className="inline-flex size-9 items-center justify-center rounded-lg border border-[#ff6a00]/20 bg-[#ff6a00]/10">
                    <Icon aria-hidden="true" className="size-4 text-[#ff6a00]" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] text-[#ff6a00]">{service.label}</p>
                    <h3 className="font-display text-xl font-semibold text-[#f5f5f2]">{service.title}</h3>
                  </div>
                </div>
                <p className="text-sm leading-6 text-[#9aa0a8] md:col-span-3">{service.description}</p>
                <ul className="space-y-2 text-sm text-[#9aa0a8] md:col-span-4">
                  {service.capabilities.map((capability) => (
                    <li key={capability} className="flex gap-2">
                      <CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#ff6a00]" />
                      {capability}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#audit-form"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#ff6a00] transition-colors duration-500 ease-out hover:text-[#ffb694] md:col-span-1 md:justify-end"
                >
                  <span className="hidden xl:inline">Explore</span>
                  <span className="sr-only"> {service.title}</span>
                  <ArrowRight className="size-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
