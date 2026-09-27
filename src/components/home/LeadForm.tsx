"use client";

import type { FormEvent } from "react";
import Button from "@/components/ui/Button";

const fieldClass =
  "mt-2 w-full rounded-lg border border-[#282a2d] bg-[#0c0e11] px-4 py-3 text-[#f5f5f2] outline-none transition-[border-color] duration-500 ease-out placeholder:text-[#6b7280] focus:border-[#ff6a00]";

export default function LeadForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const message = [
      "Hi Vertex Ecomm 👋",
      "",
      "I'd like to request a free e-commerce audit.",
      "",
      `Name: ${formData.get("name") ?? ""}`,
      `Work Email: ${formData.get("email") ?? ""}`,
      `Company: ${formData.get("company") ?? ""}`,
      `Primary Channel: ${formData.get("channel") ?? ""}`,
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
          <select name="channel" className={fieldClass}>
            <option>Marketplace</option>
            <option>D2C storefront</option>
            <option>Paid media</option>
            <option>Multi-channel operations</option>
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
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" className="px-6 py-3">
          Request the Audit
        </Button>
      </div>
    </form>
  );
}
