"use client";

import Image from "next/image";
import Link from "next/link";
import { Code2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Channel = "marketplaces" | "d2c";

const marketplaceItems = [
  { name: "Amazon", src: "/brands/amazon-color-svgrepo-com.svg" },
  { name: "Flipkart", src: "/brands/flipkart-logo-.svg" },
  { name: "Meesho", src: "/brands/meesho-seeklogo.svg" },
] as const;

export default function HeroChannelTerms() {
  const [openChannel, setOpenChannel] = useState<Channel | null>(null);
  const termsRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    function closeOnOutsidePointer(event: PointerEvent) {
      if (!termsRef.current?.contains(event.target as Node)) {
        setOpenChannel(null);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenChannel(null);
    }

    document.addEventListener("pointerdown", closeOnOutsidePointer, true);
    document.addEventListener("keydown", closeOnEscape, true);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePointer, true);
      document.removeEventListener("keydown", closeOnEscape, true);
    };
  }, []);

  function renderTerm(channel: Channel, label: string) {
    const isOpen = openChannel === channel;

    return (
      <span
        className="hero-channel-term"
        data-channel-term={channel}
        data-open={isOpen}
        onMouseEnter={() => {
          if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
            setOpenChannel(channel);
          }
        }}
        onMouseLeave={() => {
          if (
            window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
            !termsRef.current?.contains(document.activeElement)
          ) {
            setOpenChannel(null);
          }
        }}
      >
        <button
          type="button"
          className="hero-channel-trigger"
          aria-expanded={isOpen}
          aria-controls={`hero-channel-panel-${channel}`}
          onFocus={() => setOpenChannel(channel)}
          onClick={() => setOpenChannel(channel)}
        >
          {label}
        </button>

        <span
          id={`hero-channel-panel-${channel}`}
          className="hero-channel-popover"
          role="group"
          aria-label={channel === "marketplaces" ? "Marketplace channels" : "D2C website options"}
          aria-hidden={!isOpen}
        >
          <span className="hero-channel-popover-label">
            {channel === "marketplaces" ? "MARKETPLACE CHANNELS" : "WEBSITE OPTIONS"}
          </span>
          {channel === "marketplaces" ? (
            marketplaceItems.map((item) => (
              <Link
                key={item.name}
                href="#services"
                className="hero-channel-option"
                tabIndex={isOpen ? 0 : -1}
                onClick={() => setOpenChannel(null)}
              >
                <Image src={item.src} alt="" width={20} height={20} />
                <span>{item.name}</span>
                <span aria-hidden="true" className="hero-channel-option-indicator" />
              </Link>
            ))
          ) : (
            <>
              <Link
                href="#services"
                className="hero-channel-option"
                tabIndex={isOpen ? 0 : -1}
                onClick={() => setOpenChannel(null)}
              >
                <Image
                  src="/brands/shopify-logo-svgrepo-com.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                <span>Shopify</span>
                <span aria-hidden="true" className="hero-channel-option-indicator" />
              </Link>
              <Link
                href="#services"
                className="hero-channel-option"
                tabIndex={isOpen ? 0 : -1}
                onClick={() => setOpenChannel(null)}
              >
                <Code2 aria-hidden="true" className="size-5 text-[#c4c7cb]" />
                <span>Custom-Coded</span>
                <span aria-hidden="true" className="hero-channel-option-indicator" />
              </Link>
            </>
          )}
        </span>
      </span>
    );
  }

  return (
    <span
      ref={termsRef}
      className="hero-channel-terms"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setOpenChannel(null);
        }
      }}
    >
      {renderTerm("marketplaces", "Marketplaces")} to {renderTerm("d2c", "D2C")}
    </span>
  );
}