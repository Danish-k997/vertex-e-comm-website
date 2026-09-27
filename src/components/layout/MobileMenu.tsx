"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import type { NavigationItem } from "@/data/navigation";

type MobileMenuProps = {
  items: NavigationItem[];
};

export default function MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((value) => !value)}
        className="inline-flex size-8 items-center justify-center rounded border border-[#222730] bg-[#1a1c1f] text-[#e2e2e6] transition-colors hover:border-[#a98a7d] hover:bg-[#282a2d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb694]"
      >
        <span className="sr-only">{isOpen ? "Close navigation" : "Open navigation"}</span>
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {isOpen && (
        <nav
          id={menuId}
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full border-y border-[#222730] bg-[#0c0e11] px-4 py-3 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] sm:px-6"
        >
          <ul className="mx-auto grid max-w-7xl gap-px sm:grid-cols-2">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded px-3 py-3 text-sm text-[#e2bfb0] transition-colors hover:bg-[#1a1c1f] hover:text-[#e2e2e6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb694]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
