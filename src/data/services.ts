export type Service = {
  title: string;
  description: string;
  capabilities: string[];
  label: string;
};

export const services: Service[] = [
  {
    label: "01 / MARKETPLACES",
    title: "Marketplace Sales Growth",
    description: "We manage Amazon, Flipkart and Meesho accounts, improving the path from product discovery to orders.",
    capabilities: ["Account, catalog and order management", "Listings, product content, SEO and keywords", "Marketplace ads, pricing and promotion support"],
  },
  {
    label: "02 / WEBSITE DEVELOPMENT",
    title: "E-commerce Website Development",
    description: "We build the right online store for your products, customers and business requirements.",
    capabilities: ["Custom Shopify stores and storefront changes", "Custom-coded websites, workflows and integrations", "Mobile-first product, catalog and checkout experiences"],
  },
  {
    label: "03 / PAID ACQUISITION",
    title: "Performance Marketing",
    description: "We manage paid campaigns across Meta, Google and marketplaces, with performance tied to the sales journey.",
    capabilities: ["Meta Ads and Google Ads management", "Amazon, Flipkart and Meesho ads", "Campaign, traffic and conversion optimization"],
  },
];
