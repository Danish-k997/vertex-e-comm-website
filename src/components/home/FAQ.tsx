import { Plus } from "lucide-react";

const questions = [
  [
    "Do you manage Amazon, Flipkart and Meesho?",
    "Yes. We manage marketplace accounts, listings, catalogs, advertising and ongoing account work across these channels.",
  ],
  [
    "Do you only manage accounts, or also work toward sales growth?",
    "Account management is the execution. We also work on listings, SEO, ads and conversion to support online sales. Results depend on the product, pricing, stock, competition and other factors; we do not guarantee sales.",
  ],
  [
    "Can you manage an existing marketplace account or help if sales are low?",
    "Yes. We can review the account, catalog, listings, ads and current sales journey, then agree on a practical scope of work.",
  ],
  [
    "Do you build Shopify e-commerce websites?",
    "Yes. We build and customize Shopify stores, including product structure and mobile-first shopping experiences.",
  ],
  [
    "Do you build custom-coded e-commerce websites?",
    "Yes. We can build custom-coded storefronts and functionality when the requirements call for it. Shopify and custom development suit different needs; we help scope the right approach.",
  ],
  [
    "Do you manage listings, catalogs and marketplace ads?",
    "Yes. Listing and catalog optimization, product content, keyword work and marketplace advertising can be included in the agreed scope.",
  ],
  [
    "Do you run Meta Ads and Google Ads?",
    "Yes. We manage paid campaigns on Meta and Google, as well as advertising on marketplaces where included in the scope.",
  ],
  [
    "Do you work with manufacturers, distributors and brand owners?",
    "Yes. We work with product businesses at different stages, including businesses entering online sales and existing marketplace sellers.",
  ],
  [
    "Can you manage marketplaces and a D2C website together?",
    "Yes. Marketplace management, a Shopify or custom-coded website and paid ads can be managed together as one online sales plan.",
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
