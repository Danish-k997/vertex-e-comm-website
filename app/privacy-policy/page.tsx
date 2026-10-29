import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Vertex E-comm uses information submitted through its enquiry forms.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main id="main" className="bg-[#0c0e11] py-16 sm:py-24">
      <article className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="kicker">Vertex E-comm</p>
        <h1 className="mt-3 font-display text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-4 text-sm text-[#9aa0a8]">Last updated: 29 October 2026</p>
        <div className="mt-10 space-y-7 text-sm leading-7 text-[#c4c7cb]">
          <section><h2 className="font-display text-xl font-semibold text-[#f5f5f2]">Information you provide</h2><p className="mt-2">When you use an enquiry form, you may provide your name, business or brand name, contact details, business type, product category, document readiness, onboarding status and information relevant to your request.</p></section>
          <section><h2 className="font-display text-xl font-semibold text-[#f5f5f2]">How we use it</h2><p className="mt-2">Vertex E-comm uses the information you choose to provide to review and respond to your enquiry, discuss service fit and coordinate requested assistance. The Blinkit enquiry form opens a pre-filled WhatsApp message; you review and send it yourself. WhatsApp’s own terms and privacy practices apply when you use that service.</p></section>
          <section><h2 className="font-display text-xl font-semibold text-[#f5f5f2]">Sharing and security</h2><p className="mt-2">We do not ask you to submit identity documents or other sensitive records through the website form. Share documents only through a channel and process agreed with our team. We take reasonable steps to protect information we receive, but no online transmission or storage method can be guaranteed completely secure.</p></section>
          <section><h2 className="font-display text-xl font-semibold text-[#f5f5f2]">Your choices</h2><p className="mt-2">You can choose not to submit an enquiry. To ask about information you have shared or request that we stop contacting you about an enquiry, contact Vertex E-comm through our <a className="text-[#ffb694] underline underline-offset-2" href="https://wa.me/919801285586">WhatsApp contact</a>.</p></section>
        </div>
      </article>
    </main>
  );
}
