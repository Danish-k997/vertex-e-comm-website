"use client";

import { useEffect, useRef, type FormEvent } from "react";
import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

const fieldClass =
  "mt-2 w-full rounded-lg border border-[#282a2d] bg-[#0c0e11] px-4 py-3 text-[#f5f5f2] outline-none transition-[border-color] duration-500 ease-out placeholder:text-[#6b7280] focus:border-[#ff6a00]";

export default function LeadForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [channel, setChannel] = useState("marketplace");

  useEffect(() => {
    const selectBlinkit = () => setChannel("blinkit");
    if (new URLSearchParams(window.location.search).get("service") === "blinkit") selectBlinkit();
    const selectFromBlinkitCta = (event: MouseEvent) => {
      const target = event.target;
      if (target instanceof Element && target.closest('[data-track="blinkit_cta"]')) selectBlinkit();
    };
    document.addEventListener("click", selectFromBlinkitCta);
    return () => document.removeEventListener("click", selectFromBlinkitCta);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const eventName = formData.get("channel") === "blinkit" ? "blinkit_form_submit" : "lead_form_submit";
    const analyticsWindow = window as Window & {
      gtag?: (command: string, eventName: string, params?: Record<string, string>) => void;
      dataLayer?: Array<Record<string, string>>;
    };
    analyticsWindow.gtag?.("event", eventName, { event_category: "lead" });
    analyticsWindow.dataLayer?.push({ event: eventName, event_category: "lead" });
    const message = [
      "Hi Vertex Ecomm 👋",
      "",
      "I'd like to request a free e-commerce audit.",
      "",
      `Name: ${formData.get("name") ?? ""}`,
      `Work Email: ${formData.get("email") ?? ""}`,
      `Company: ${formData.get("company") ?? ""}`,
      `Primary Channel: ${formData.get("channel") ?? ""}`,
      ...(formData.get("channel") === "blinkit" ? ["Privacy consent: Yes"] : []),
      "",
      "What I'm trying to solve:",
      String(formData.get("message") ?? ""),
      "",
      "Please contact me regarding the audit.",
    ].join("\n");

    const whatsappUrl = `https://wa.me/919801285586?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="rounded-2xl border border-[#333538] bg-[#1a1c1f] p-5 sm:p-8"
    >
      <h3 className="font-display text-2xl font-bold text-[#f5f5f2]">
        Tell Us About Your Business
      </h3>
      <p className="mt-2 text-sm text-[#9aa0a8]">
        A few practical details help frame the right conversation.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="text-sm text-[#9aa0a8]">
          Name
          <input
            required
            name="name"
            className={fieldClass}
            placeholder="Your name"
          />
        </label>
        <label className="text-sm text-[#9aa0a8]">
          Work email
          <input
            required
            name="email"
            type="email"
            className={fieldClass}
            placeholder="name@company.com"
          />
        </label>
        <label className="text-sm text-[#9aa0a8]">
          Company
          <input
            name="company"
            className={fieldClass}
            placeholder="Company name"
          />
        </label>
        <label className="text-sm text-[#9aa0a8]">
          Primary channel
          <select name="channel" value={channel} onChange={(event) => setChannel(event.target.value)} className={fieldClass}>
            <option value="marketplace">Marketplace</option>
            <option value="d2c">D2C storefront</option>
            <option value="paid-media">Paid media</option>
            <option value="multi-channel">Multi-channel operations</option>
            <option value="blinkit">Blinkit onboarding</option>
          </select>
        </label>
      </div>
      <label className="mt-4 block text-sm text-[#9aa0a8]">
        What are you trying to solve?
        <textarea
          name="message"
          rows={4}
          className={`${fieldClass} resize-y`}
          placeholder="A little context about the product, channel, or operating challenge."
        />
      </label>
      {channel === "blinkit" && (
        <label className="mt-4 flex items-start gap-3 text-xs leading-5 text-[#9aa0a8]">
          <input required type="checkbox" name="privacyConsent" className="mt-1 size-4 accent-[#ff6a00]" />
          <span>I agree that Vertex E-comm may use these details to respond to my enquiry. See the <Link href="/privacy-policy" className="text-[#ffb694] underline underline-offset-2">Privacy Policy</Link>.</span>
        </label>
      )}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" className="px-6 py-3">
          Request the Audit
        </Button>
      </div>
    </form>
  );
}
