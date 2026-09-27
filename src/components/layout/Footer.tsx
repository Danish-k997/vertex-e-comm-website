import Link from "next/link";
import { ArrowUpRight, Box, Globe, MessageCircle } from "lucide-react";

const columns = [
  {
    title: "Services",
    links: [
      ["Architecture Design", "#services"],
      ["Conversion Engineering", "#services"],
      ["ERP & Omnichannel Sync", "#services"],
      ["Supply-Chain Telemetry", "#services"],
    ],
  },
  {
    title: "Solutions",
    links: [
      ["Industrial B2B Portal", "#solutions"],
      ["Direct-To-Consumer Scale", "#solutions"],
      ["Wholesale Distribution", "#solutions"],
      ["Vertex Engine Core", "#engine"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About Vertex", "#about"],
      ["How We Work", "#how-we-work"],
      ["Case Studies", "#case-studies"],
      ["Audit Program", "#audit-form"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#222730] bg-[#0c0e11]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-col gap-5 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="inline-flex size-8 items-center justify-center rounded-lg bg-[#ff6a00] text-[#571f00]">
                <Box aria-hidden="true" className="size-[18px]" />
              </span>
              <span className="font-display text-lg font-bold tracking-[0.08em] text-[#f5f5f2]">
                VERTEX ECOMM
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-6 text-[#9aa0a8]">
              Obsidian commerce infrastructure: a sales operating system for manufacturers, distributors,
              and enterprise brands.
            </p>
            <div className="flex gap-3">
              <a aria-label="Brand visibility" href="#about" className="footer-social">
                <Globe className="size-[18px]" />
              </a>
              <a aria-label="Growth strategy" href="#engine" className="footer-social">
                <ArrowUpRight className="size-[18px]" />
              </a>
              <a aria-label="WhatsApp" href="#audit-form" className="footer-social">
                <MessageCircle className="size-[18px]" />
              </a>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-3">
              <h2 className="data-label text-[11px] font-semibold text-[#9aa0a8]">{column.title.toUpperCase()}</h2>
              {column.links.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="text-sm text-[#9aa0a8] transition-colors duration-500 ease-out hover:text-[#f5f5f2]"
                >
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[#282a2d] pt-6 text-sm text-[#9aa0a8] md:flex-row md:items-center md:justify-between">
          <p>© 2026 Vertex Ecomm. All rights reserved.</p>
          <p className="data-label flex items-center gap-2 text-xs">
            <span className="size-1.5 rounded-full bg-[#ff6a00]" /> SYSTEMS ONLINE
          </p>
        </div>
      </div>
    </footer>
  );
}
