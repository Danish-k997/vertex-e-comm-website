import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { navigation } from "@/data/navigation";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Navbar() {
  return (
    <header
      data-site-nav
      data-scrolled="false"
      className="site-header fixed inset-x-0 top-0 z-50 border-b border-[#222730]/80 bg-[#0c0e11]/70 backdrop-blur-md"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          aria-label="Vertex Ecomm home"
          className="flex shrink-0 items-center gap-2"
        >
          <Image
            src="/brands/vertex.png"
            alt="Vertex Ecomm"
            width={48}
            height={32}
            sizes="48px"
            priority
            className="h-8 w-12 shrink-0 object-contain"
          />
          <span
            aria-hidden="true"
            className="font-display text-sm font-bold uppercase tracking-[0.08em] text-[#f5f5f2]"
          >
            Vertex Ecomm
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 xl:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link text-[13px] leading-5 text-[#9aa0a8] transition-colors duration-300 ease-out hover:text-[#f5f5f2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb694]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            href="#audit-form"
            className="gap-1 px-3 py-2 sm:gap-2 sm:px-5"
          >
            <span className="hidden sm:inline">Get Free Audit</span>
            <span className="sm:hidden">Audit</span>
          </Button>
          <MobileMenu items={navigation} />
        </div>
      </div>
    </header>
  );
}
