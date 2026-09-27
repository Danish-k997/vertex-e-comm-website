import Link from "next/link";
import { ArrowUpRight, Box, Globe, MessageCircle } from "lucide-react";

const columns = [
  {
    title: "Services",
    links: [
      ["Architecture Design", "/services"],
      ["Conversion Engineering", "/services"],
      ["ERP & Omnichannel Sync", "/services"],
      ["Supply-Chain Telemetry", "/services"],
    ],
  },
  {
    title: "Solutions",
    links: [
      ["Industrial B2B Portal", "/solutions"],
      ["Direct-To-Consumer Scale", "/solutions"],
      ["Wholesale Distribution", "/solutions"],
      ["Vertex Engine Core", "/solutions"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About Vertex", "/about"],
      ["How We Work", "/how-we-work"],
      ["Case Studies", "/case-studies"],
      ["Audit Program", "/contact"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0c0e11]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-col gap-4 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="inline-flex size-8 items-center justify-center rounded bg-[#ff6a00] text-[#571f00]">
                <Box className="size-[18px]" />
              </span>
              <span className="text-lg font-bold tracking-[0.08em] text-white">VERTEX ECOMM</span>
            </Link>
            <p className="max-w-sm text-sm leading-6 text-[#c4c6cd]">
              High-performance commerce engineering and revenue acceleration infrastructure for manufacturers,
              distributors, and enterprise brands.
            </p>
            <div className="flex gap-3">
              <a aria-label="Brand visibility" href="#" className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#c4c6cd] transition hover:border-[#ff6a00]/40 hover:text-white">
                <Globe className="size-[18px]" />
              </a>
              <a aria-label="Growth strategy" href="#" className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#c4c6cd] transition hover:border-[#ff6a00]/40 hover:text-white">
                <ArrowUpRight className="size-[18px]" />
              </a>
              <a aria-label="WhatsApp" href="#" className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#c4c6cd] transition hover:border-[#ff6a00]/40 hover:text-white">
                <MessageCircle className="size-[18px]" />
              </a>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-3">
              <h2 className="text-[11px] font-semibold tracking-[0.08em] text-[#e2bfb0]">
                {column.title.toUpperCase()}
              </h2>
              {column.links.map(([label, href]) => (
                <Link key={label} href={href} className="text-sm text-[#c4c6cd] transition-colors hover:text-[#e2e2e6]">
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[#282a2d] pt-6 text-sm text-[#c4c6cd] md:flex-row md:items-center md:justify-between">
          <p>© 2026 Vertex Ecomm. All rights reserved.</p>
          <p className="flex items-center gap-2 font-mono text-xs">
            <span className="size-2 rounded-full bg-[#ff6a00]" /> SYSTEMS ONLINE
          </p>
        </div>
      </div>
    </footer>
  );
}

