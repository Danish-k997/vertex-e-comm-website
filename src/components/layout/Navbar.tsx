import Link from "next/link";
import { Box, UserRound } from "lucide-react";
import Button from "@/components/ui/Button";
import { navigation } from "@/data/navigation";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#0c0e11]/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          aria-label="Vertex Ecomm home"
          className="flex shrink-0 items-center gap-2"
        >
          <span className="inline-flex size-8 items-center justify-center rounded bg-[#ff6a00] text-[#571f00]">
            <Box aria-hidden="true" className="size-[18px]" strokeWidth={2} />
          </span>
          <span className="font-display text-sm font-bold uppercase tracking-[0.08em] text-[#e2e2e6]">
            Vertex Ecomm
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-6 xl:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] leading-5 text-[#e2bfb0] transition-colors hover:text-[#e2e2e6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb694]"
              >
                {item.label}
              </Link>
            ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <Button
            href="#audit-form"
            className="gap-1 px-3 py-2 sm:gap-2 sm:px-6"
          >
            <span className="hidden sm:inline">Get Free Audit</span>
            <span className="sm:hidden">Audit</span>
          </Button>
          <span className="hidden size-8 items-center justify-center rounded-full bg-[#ffb694] text-[#571f00] sm:inline-flex">
            <UserRound aria-hidden="true" className="size-[18px]" />
          </span>
          <MobileMenu items={navigation} />
        </div>
      </div>
    </header>
  );
}
