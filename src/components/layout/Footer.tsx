import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";

const linkGroups = [
  {
    title: "Services",
    links: [
      ["Marketplace management", "#services"],
      ["E-commerce website", "#services"],
      ["Ad management", "#services"],
    ],
  },
  {
    title: "Explore",
    links: [
      ["How We Work", "#how-we-work"],
      ["Case Studies", "#case-studies"],
      ["Request an Audit", "#audit-form"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#222730] bg-[#0c0e11]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid gap-9 border-b border-[#282a2d] pb-8 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col items-start gap-4 lg:col-span-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/brands/vertex.png"
                alt="Vertex Ecomm"
                width={48}
                height={32}
                sizes="48px"
                className="h-8 w-12 shrink-0 object-contain"
              />
              <span
                aria-hidden="true"
                className="font-display text-sm font-bold uppercase tracking-[0.08em] text-[#f5f5f2]"
              >
                Vertex Ecomm
              </span>
            </Link>
            <p className="max-w-md text-sm leading-6 text-[#c4c7cb]">
              One team to manage your online sales across Amazon, Flipkart and
              Meesho, plus a Shopify or custom-coded website and paid ads.
            </p>
            <p className="text-xs text-[#9aa0a8]">
              For manufacturers, distributors, and brand owners.
            </p>
            <div className="flex items-center gap-2">
              <a
                aria-label="Vertex Ecomm on Instagram"
                href="https://www.instagram.com/vertexecomm"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  className="size-4.5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r=".8"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
              <a
                aria-label="Contact Vertex Ecomm on WhatsApp"
                href="https://wa.me/919801285586"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
              >
                <MessageCircle aria-hidden="true" className="size-4.5" />
              </a>
            </div>
            <Link
              href="#audit-form"
              className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-[#ff6a00] px-4 text-sm font-semibold text-[#571f00] transition-colors hover:bg-[#ffb694] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb694] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0e11]"
            >
              Request a free audit{" "}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>

          {linkGroups.map((group) => (
            <nav
              key={group.title}
              aria-label={group.title}
              className="grid content-start gap-3 lg:col-span-3"
            >
              <h2 className="text-xs font-semibold text-[#f5f5f2]">
                {group.title}
              </h2>
              {group.links.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="w-fit text-sm text-[#9aa0a8] transition-colors duration-200 hover:text-[#f5f5f2] focus-visible:text-[#f5f5f2] focus-visible:outline-none focus-visible:underline"
                >
                  {label}
                </Link>
              ))}
            </nav>
          ))}
        </div>

        <div className="flex flex-col gap-2 pt-5 text-xs text-[#9aa0a8] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Vertex Ecomm. All rights reserved.</p>
          <p>Marketplace management · Websites · Ads</p>
        </div>
      </div>
    </footer>
  );
}
