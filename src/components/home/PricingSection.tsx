"use client";

import { Check, ChevronDown, LockKeyhole, ShieldCheck } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

type PricingPackageId =
  | "marketplace-management"
  | "marketplace-growth"
  | "shopify-store-ads-management";

type BillingCycle = "monthly";

type CheckoutEntry = {
  packageId: PricingPackageId;
  packageName: string;
  amount: number;
  billingCycle: BillingCycle;
  marketplace?: string | null;
};

type PricingPackage = {
  id: PricingPackageId;
  label: string;
  name: string;
  price: number;
  description: string;
  cta: string;
  badge?: string;
  defaultMarketplace?: string;
  marketplaceOptions?: string[];
  highlights: string[];
  storeInfo?: string;
};

const pricingPackages: PricingPackage[] = [
  {
    id: "marketplace-management",
    label: "Organic growth",
    name: "ORGANIC GROWTH MANAGEMENT",
    price: 3999,
    description:
      "A focused growth plan for brands that want stronger marketplace visibility, better listings and steady organic momentum without overcomplicating operations.",
    cta: "Get Started →",
    defaultMarketplace: "Amazon",
    marketplaceOptions: ["Amazon", "Flipkart", "Meesho"],
    highlights: [
      "Organic growth support",
      "Listing & catalog improvements",
      "Marketplace visibility optimization",
      "SEO & product positioning",
      "Account support for steady growth",
    ],
  },
  {
    id: "marketplace-growth",
    label: "Premium growth system",
    name: "MARKETPLACE + GROWTH",
    price: 6999,
    description:
      "A premium growth layer for brands that want faster visibility, sharper performance, and a more strategic path to scale across marketplaces.",
    cta: "Start Growing →",
    badge: "MOST POPULAR",
    defaultMarketplace: "Amazon",
    marketplaceOptions: ["Amazon", "Flipkart", "Meesho"],
    highlights: [
      "Everything in organic growth",
      "Advanced growth optimization",
      "A+ / content improvement",
      "PPC & performance support",
      "Acceleration across sales channels",
    ],
  },
  {
    id: "shopify-store-ads-management",
    label: "Full e-commerce sales system",
    name: "SHOPIFY STORE & ADS MANAGEMENT",
    price: 14670,
    description:
      "A complete Shopify commerce engine for brands ready to run their own storefront, ads, catalog, conversion flow and order generation as one connected sales system.",
    cta: "Checkout →",
    storeInfo: "Shopify-powered commerce infrastructure",
    highlights: [
      "Shopify setup & management",
      "Storefront & sales optimization",
      "Ads management with order generation",
      "Product catalog & conversion support",
      "Full e-commerce sales operations",
    ],
  },
];

const priceFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const getPackagePrice = (packageId: PricingPackageId) => {
  const info = pricingPackages.find((pkg) => pkg.id === packageId);
  return info?.price ?? 0;
};

const packageNameToPlan = {
  "marketplace-management": "Organic Growth Management",
  "marketplace-growth": "Marketplace + Growth",
  "shopify-store-ads-management": "Shopify Store & Ads Management",
} as const;

const getCheckoutData = (
  packageConfig: PricingPackage,
  marketplace: string | undefined,
): CheckoutEntry => ({
  packageId: packageConfig.id,
  packageName: packageNameToPlan[packageConfig.id],
  amount: packageConfig.price,
  billingCycle: "monthly",
  marketplace: packageConfig.marketplaceOptions
    ? (marketplace ?? packageConfig.defaultMarketplace)
    : null,
});

const createRazorpayOrder = async (checkoutData: CheckoutEntry) => {
  const serverAmount = getPackagePrice(checkoutData.packageId);
  const payload = {
    packageId: checkoutData.packageId,
    packageName: checkoutData.packageName,
    amount: serverAmount,
    billingCycle: checkoutData.billingCycle,
    marketplace: checkoutData.marketplace ?? null,
  };

  // TODO: Replace this stub with a secure backend/API route that creates the Razorpay order server-side.
  // Example:
  // const response = await fetch("/api/razorpay/create-order", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(payload),
  // });
  // if (!response.ok) {
  //   throw new Error("Unable to create a Razorpay order.");
  // }
  // return response.json();

  console.info("Razorpay integration pending: createRazorpayOrder", payload);
  return payload;
};

export default function PricingSection() {
  const [marketplaceSelections, setMarketplaceSelections] = useState<
    Record<string, string>
  >({
    "marketplace-management": "Amazon",
    "marketplace-growth": "Amazon",
  });
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);
  const [checkoutEntry, setCheckoutEntry] = useState<CheckoutEntry | null>(
    null,
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [paymentPhase, setPaymentPhase] = useState<
    "review" | "processing" | "success" | "error"
  >("review");
  const [integrationMessage, setIntegrationMessage] = useState<string>("");

  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  const openReviewModal = (packageConfig: PricingPackage) => {
    const selectedMarketplace = packageConfig.marketplaceOptions
      ? (marketplaceSelections[packageConfig.id] ??
        packageConfig.defaultMarketplace)
      : undefined;

    const entry = getCheckoutData(packageConfig, selectedMarketplace);
    setCheckoutEntry(entry);
    setPaymentPhase("review");
    setIntegrationMessage("");
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setPaymentPhase("review");
    setIntegrationMessage("");

    previousActiveElement.current?.focus();
  };

  const continueToPayment = async () => {
    if (!checkoutEntry) return;

    setPaymentPhase("processing");
    setIntegrationMessage("");

    try {
      await createRazorpayOrder(checkoutEntry);
      setPaymentPhase("success");
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "The payment backend is not connected yet.";
      setIntegrationMessage(message);
      setPaymentPhase("error");
    }
  };

  useEffect(() => {
    if (!modalOpen) return;

    previousActiveElement.current =
      document.activeElement as HTMLElement | null;
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeydown);
    const timeoutId = window.setTimeout(() => {
      modalRef.current?.focus();
    }, 20);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("keydown", handleKeydown);
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  const selectedPackageInfo = useMemo(() => {
    if (!checkoutEntry) return null;
    return (
      pricingPackages.find((pkg) => pkg.id === checkoutEntry.packageId) ?? null
    );
  }, [checkoutEntry]);

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="scroll-mt-24 bg-[#0c0e11] py-16 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <p className="kicker">Pricing</p>
          <h2
            id="pricing-title"
            className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl"
          >
            Choose the system your business needs.
          </h2>
          <p className="mt-5 text-lg leading-7 text-[#9aa0a8]">
            Start with marketplace operations. Scale into growth. Build your own
            commerce engine.
          </p>
          <p className="mt-3 text-sm text-[#9aa0a8]">
            Transparent monthly plans. Select your platform, choose your service
            layer, and get started.
          </p>
        </div>

        <div
          className="mt-10 grid gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-8"
          data-reveal="delay"
        >
          {pricingPackages.map((packageConfig) => {
            const isExpanded = expandedPlan === packageConfig.id;
            const selectedMarketplace =
              packageConfig.marketplaceOptions?.[
                packageConfig.marketplaceOptions.indexOf(
                  marketplaceSelections[packageConfig.id] ??
                    packageConfig.defaultMarketplace ??
                    packageConfig.marketplaceOptions[0],
                )
              ] ?? packageConfig.defaultMarketplace;

            return (
              <article
                key={packageConfig.id}
                className={`group relative overflow-hidden rounded-[20px] border bg-[#111317] p-5 shadow-[0_18px_50px_-28px_rgba(0,0,0,0.9)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#ff6a00]/35 hover:shadow-[0_24px_72px_-26px_rgba(255,106,0,0.18)] md:p-7 ${
                  packageConfig.badge
                    ? "border-[#ff6a00]/25 bg-[radial-gradient(circle_at_top,rgba(255,106,0,0.12),transparent_60%)]"
                    : "border-[#222730]"
                }`}
              >
                {packageConfig.badge ? (
                  <span className="absolute right-5 top-5 inline-flex items-center rounded-full border border-[#ff6a00]/30 bg-[#ff6a00]/8 px-2.5 py-1 font-mono text-[9px] font-semibold tracking-[0.12em] text-[#ffb694]">
                    {packageConfig.badge}
                  </span>
                ) : null}

                <div className="flex min-h-140 flex-col">
                  <div className="flex-1">
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#ff6a00]">
                      {packageConfig.label}
                    </p>

                    <div className="mt-8 flex items-end gap-2">
                      <span className="font-mono text-4xl font-semibold leading-none text-[#f5f5f2] md:text-[2.6rem]">
                        {priceFormatter.format(packageConfig.price)}
                      </span>
                      <span className="pb-1 font-mono text-[11px] uppercase tracking-[0.08em] text-[#9aa0a8]">
                        / month
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-[#9aa0a8]">
                      {packageConfig.description}
                    </p>

                    {packageConfig.marketplaceOptions ? (
                      <div className="mt-6 rounded-xl border border-[#222730] bg-[#0d0f13] p-3">
                        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#9aa0a8]">
                          Select your marketplace
                        </p>
                        <div className="mt-3 grid gap-2">
                          {packageConfig.marketplaceOptions.map((option) => {
                            const isSelected = selectedMarketplace === option;
                            return (
                              <button
                                key={option}
                                type="button"
                                aria-label={`Select ${option} marketplace`}
                                aria-pressed={isSelected}
                                aria-selected={isSelected}
                                onClick={() =>
                                  setMarketplaceSelections((current) => ({
                                    ...current,
                                    [packageConfig.id]: option,
                                  }))
                                }
                                className={`flex items-center justify-between rounded-lg border px-3 py-2.5 text-left text-sm font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb694] ${
                                  isSelected
                                    ? "border-[#ff6a00]/60 bg-[#ff6a00]/10 text-[#f5f5f2] shadow-[0_0_0_1px_rgba(255,106,0,0.25)]"
                                    : "border-[#2b2f35] bg-[#13161a] text-[#c4c6cd] hover:border-[#3a4047] hover:bg-[#171a1f]"
                                }`}
                              >
                                <span className="flex items-center gap-2.5">
                                  <span
                                    className={`flex size-5 items-center justify-center rounded-full border ${
                                      isSelected
                                        ? "border-[#ff6a00] bg-[#ff6a00] text-[#180d05]"
                                        : "border-[#47505a] bg-transparent text-transparent"
                                    }`}
                                    aria-hidden="true"
                                  >
                                    {isSelected ? (
                                      <Check className="size-3" />
                                    ) : null}
                                  </span>
                                  {option}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      <div className="mt-6 rounded-xl border border-[#222730] bg-[#0d0f13] p-3">
                        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#9aa0a8]">
                          Your commerce store
                        </p>
                        <p className="mt-3 text-sm font-medium text-[#f5f5f2]">
                          {packageConfig.storeInfo}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="mt-6">
                    <ul className="space-y-3 text-sm text-[#c4c6cd]">
                      {packageConfig.highlights.map((item) => (
                        <li key={item} className="flex gap-2">
                          <Check
                            className="mt-0.5 size-4 shrink-0 text-[#ff6a00]"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      onClick={() => openReviewModal(packageConfig)}
                      className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#ff6a00] px-4 py-3 text-sm font-semibold text-[#1c140d] shadow-[0_0_22px_rgba(255,106,0,0.18)] transition-all duration-300 ease-out hover:bg-[#ffb694] hover:shadow-[0_0_28px_rgba(255,106,0,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb694] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111317]"
                    >
                      {packageConfig.cta}
                    </button>

                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      onClick={() =>
                        setExpandedPlan((current) =>
                          current === packageConfig.id
                            ? null
                            : packageConfig.id,
                        )
                      }
                      className="mt-4 inline-flex w-full items-center justify-center gap-2 text-sm font-medium text-[#dfe0e4] transition-colors duration-300 ease-out hover:text-[#ffb694] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb694]"
                    >
                      View what&apos;s included
                      <ChevronDown
                        className={`size-4 transition-transform duration-300 ease-out ${isExpanded ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-out ${isExpanded ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <div className="overflow-hidden">
                        <div className="rounded-xl border border-[#222730] bg-[#0d0f13] p-3">
                          <ul className="space-y-2 text-sm text-[#c4c6cd]">
                            {packageConfig.highlights.map((item) => (
                              <li
                                key={`${packageConfig.id}-${item}`}
                                className="flex gap-2"
                              >
                                <ShieldCheck
                                  className="mt-0.5 size-4 shrink-0 text-[#ff6a00]"
                                  aria-hidden="true"
                                />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {modalOpen && checkoutEntry ? (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-[#07090d]/75 px-3 py-6 backdrop-blur-sm"
          onClick={closeModal}
          role="presentation"
        >
          <div
            ref={modalRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="checkout-review-title"
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-lg rounded-[20px] border border-[#2a2d31] bg-[#0c0e11] p-5 shadow-[0_28px_80px_rgba(0,0,0,0.52)] outline-none md:p-6"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#ff6a00]">
                Start with Vertex
              </p>
              <button
                type="button"
                onClick={closeModal}
                className="inline-flex size-8 items-center justify-center rounded-full border border-[#2a2d31] bg-[#12161b] text-sm text-[#dfe0e4] transition-colors duration-300 ease-out hover:border-[#ff6a00]/40 hover:text-[#ffb694] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb694]"
                aria-label="Close checkout review"
              >
                ×
              </button>
            </div>

            {paymentPhase === "review" && (
              <>
                <div className="mt-4 border-b border-[#222730] pb-5">
                  <h3
                    id="checkout-review-title"
                    className="font-display text-2xl font-bold text-[#f5f5f2]"
                  >
                    {selectedPackageInfo?.name ?? checkoutEntry.packageName}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-mono text-3xl font-semibold text-[#f5f5f2]">
                      {priceFormatter.format(checkoutEntry.amount)}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#9aa0a8]">
                      / month
                    </span>
                  </div>
                </div>

                <div className="mt-5 space-y-5 text-sm text-[#c4c6cd]">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#9aa0a8]">
                      Selected plan
                    </p>
                    <p className="mt-2 text-base font-medium text-[#f5f5f2]">
                      {checkoutEntry.packageName}
                    </p>
                  </div>

                  {checkoutEntry.marketplace ? (
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#9aa0a8]">
                        Selected marketplace
                      </p>
                      <div className="mt-2 flex items-center gap-2 text-base font-medium text-[#f5f5f2]">
                        <Check
                          className="size-4 text-[#ff6a00]"
                          aria-hidden="true"
                        />
                        {checkoutEntry.marketplace}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#9aa0a8]">
                        commerce layer
                      </p>
                      <p className="mt-2 text-base font-medium text-[#f5f5f2]">
                        Shopify Commerce
                      </p>
                    </div>
                  )}

                  <div className="rounded-xl border border-[#222730] bg-[#111317] p-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#9aa0a8]">
                        Total
                      </span>
                      <span className="font-mono text-[13px] text-[#f5f5f2]">
                        {priceFormatter.format(checkoutEntry.amount)} / month
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={continueToPayment}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#ff6a00] px-4 py-3 text-sm font-semibold text-[#1c140d] shadow-[0_0_22px_rgba(255,106,0,0.18)] transition-all duration-300 ease-out hover:bg-[#ffb694] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb694] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0e11]"
                >
                  Continue to Payment →
                </button>
              </>
            )}

            {paymentPhase === "processing" && (
              <div className="mt-6 rounded-xl border border-[#222730] bg-[#111317] p-6 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full border border-[#ff6a00]/35 bg-[#ff6a00]/10 text-[#ffb694]">
                  <LockKeyhole
                    className="size-5 animate-pulse"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-[#f5f5f2]">
                  Preparing checkout
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#9aa0a8]">
                  Creating your secure order with the Vertex backend before
                  redirecting to Razorpay.
                </p>
              </div>
            )}

            {paymentPhase === "success" && (
              <div className="mt-6 rounded-xl border border-[#ff6a00]/25 bg-[#111317] p-6 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#ff6a00] text-[#1d1008]">
                  <Check className="size-5" aria-hidden="true" />
                </div>
                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#ffb694]">
                  Payment received
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold text-[#f5f5f2]">
                  Welcome to Vertex Ecomm.
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#9aa0a8]">
                  Your service setup has been initiated.
                </p>

                <dl className="mt-5 space-y-3 text-left text-sm text-[#c4c6cd]">
                  <div className="flex items-center justify-between gap-4 border-b border-[#222730] pb-3">
                    <dt className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#9aa0a8]">
                      Plan
                    </dt>
                    <dd className="text-right text-[#f5f5f2]">
                      {checkoutEntry.packageName}
                    </dd>
                  </div>
                  {checkoutEntry.marketplace ? (
                    <div className="flex items-center justify-between gap-4 border-b border-[#222730] pb-3">
                      <dt className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#9aa0a8]">
                        Marketplace
                      </dt>
                      <dd className="text-right text-[#f5f5f2]">
                        {checkoutEntry.marketplace}
                      </dd>
                    </div>
                  ) : null}
                  <div className="flex items-center justify-between gap-4">
                    <dt className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#9aa0a8]">
                      Amount
                    </dt>
                    <dd className="text-right text-[#f5f5f2]">
                      {priceFormatter.format(checkoutEntry.amount)}
                    </dd>
                  </div>
                </dl>

                <button
                  type="button"
                  onClick={closeModal}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#ff6a00]/35 bg-[#ff6a00]/10 px-4 py-3 text-sm font-semibold text-[#f5f5f2] transition-colors duration-300 ease-out hover:bg-[#ff6a00]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb694]"
                >
                  Continue to Onboarding →
                </button>
              </div>
            )}

            {paymentPhase === "error" && (
              <div className="mt-6 rounded-xl border border-[#ff6a00]/25 bg-[#111317] p-6 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full border border-[#ff6a00]/40 bg-[#ff6a00]/10 text-[#ffb694]">
                  <LockKeyhole className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-[#f5f5f2]">
                  Secure checkout pending
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#9aa0a8]">
                  Connect the secure backend endpoint to create the Razorpay
                  order before completing payment.
                </p>
                {integrationMessage ? (
                  <p className="mt-4 font-mono text-[11px] text-[#ffb694]">
                    {integrationMessage}
                  </p>
                ) : null}
                <button
                  type="button"
                  onClick={() => setPaymentPhase("review")}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#2a2d31] bg-[#13161a] px-4 py-3 text-sm font-semibold text-[#f5f5f2] transition-colors duration-300 ease-out hover:border-[#ff6a00]/40 hover:text-[#ffb694] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb694]"
                >
                  Review plan again
                </button>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </section>
  );
}
