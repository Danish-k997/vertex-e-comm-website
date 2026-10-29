export type Service = {
  title: string;
  outcome: string;
  description: string;
  label: string;
  cta: string;
  href: string;
  event?: string;
};

export const services: Service[] = [
  {
    label: "01 / MARKETPLACES",
    title: "Amazon, Flipkart & Meesho",
    outcome: "Move from scattered listings to a managed marketplace operation.",
    description: "We coordinate account, catalogue and order workflows across your marketplaces. Our team handles the agreed scope, from listing and content work to pricing, promotions and marketplace advertising.",
    cta: "Discuss marketplace management",
    href: "/#audit-form",
  },
  {
    label: "02 / WEBSITE DEVELOPMENT",
    title: "E-commerce Website Development",
    outcome: "Turn your product range into a storefront built for the customer journey.",
    description: "We plan and build Shopify and custom-coded e-commerce websites around your products and requirements. From catalogue structure to mobile-first storefront workflows, we coordinate delivery through launch.",
    cta: "Plan your e-commerce website",
    href: "/#audit-form",
  },
  {
    label: "03 / PAID ACQUISITION",
    title: "Performance Marketing",
    outcome: "Connect campaign execution to a clearer path from discovery to order.",
    description: "We manage Meta, Google and marketplace campaigns as part of your wider sales activity. Our team coordinates campaign setup, optimisation and performance reviews within the agreed scope.",
    cta: "Discuss performance marketing",
    href: "/#audit-form",
  },
  {
    label: "04 / QUICK COMMERCE",
    title: "Blinkit Brand Onboarding",
    outcome: "From brand readiness to onboarding support.",
    description: "We assess your brand’s readiness, coordinate documentation and catalogue preparation, and guide your business through the onboarding workflow. For brands that meet our engagement criteria, we help move each preparation and coordination step forward.",
    cta: "Get your brand assessed",
    href: "/?service=blinkit#audit-form",
    event: "blinkit_cta",
  },
];
