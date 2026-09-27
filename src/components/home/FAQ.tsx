import { Plus } from "lucide-react";

const questions = [
  [
    "Do you work with manufacturers and distributors who have no online experience?",
    "Yes. Vertex is designed for businesses that already have products and physical supply-chain infrastructure but need disciplined digital execution.",
  ],
  [
    "Which marketplaces do you actively manage?",
    "The operating model is built around Amazon India, Flipkart, Meesho, and suitable D2C and B2B channels.",
  ],
  [
    "Do you build D2C e-commerce websites?",
    "We create mobile-oriented storefront foundations, product pages, conversion paths, and the systems needed to operate them.",
  ],
  [
    "How is your advertising approach different?",
    "Media is considered in the context of product availability, merchandising, conversion, returns, and contribution margins.",
  ],
  [
    "Can you manage multiple channels at the same time?",
    "Multi-channel synchronization is a core part of the Vertex operating model, so pricing, inventory, and customer experience stay aligned.",
  ],
  [
    "Do you offer customized scopes of work?",
    "Every engagement is scoped around the business stage and the highest-leverage commerce problems uncovered during the audit.",
  ],
] as const;

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 bg-[#111317] py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="max-w-2xl" data-reveal>
          <p className="kicker">Frequently asked questions</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
            Questions Before You Start?
          </h2>
          <p className="mt-5 text-lg leading-7 text-[#9aa0a8]">
            Everything you need to know about partnering with Vertex Ecomm.
          </p>
        </div>

        <div
          className="mt-14 divide-y divide-[#282a2d] border-y border-[#282a2d]"
          data-reveal="delay"
        >
          {questions.map(([question, answer]) => (
            <details key={question} className="group py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-display text-lg font-semibold text-[#f5f5f2] transition-colors duration-500 ease-out hover:text-[#ffb694]">
                <span>{question}</span>
                <Plus className="size-5 shrink-0 text-[#ff6a00] transition-transform duration-500 ease-out group-open:rotate-45" />
              </summary>
              <div className="faq-answer">
                <p className="faq-answer-inner pb-5 pr-10 text-sm leading-7 text-[#9aa0a8]">
                  {answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
