export type CaseStudy = {
  type: string;
  title: string;
  challenge: string;
  solution: string;
  channels: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    type: "CASE STUDY // TIER-2 MANUFACTURING",
    title: "D2C Kitchenware & Home Goods Manufacturer",
    challenge: "An offline distributor-led business with unused capacity outside seasonal demand and no marketplace foundation.",
    solution: "A focused catalog launch, marketplace operations, a dedicated storefront, and connected acquisition work.",
    channels: ["Amazon", "Flipkart", "Shopify", "Google Ads"],
  },
  {
    type: "CASE STUDY // MULTI-SKU DISTRIBUTION",
    title: "Pan-India Consumer Goods Distributor",
    challenge: "A broad catalog and multiple stock locations without a unified way to govern online availability.",
    solution: "Structured catalog operations, channel controls, and a shared operating view for inventory and dispatch.",
    channels: ["Amazon", "Meesho", "Flipkart", "Operations"],
  },
  {
    type: "CASE STUDY // D2C GROWTH",
    title: "Consumer Wellness Brand",
    challenge: "Paid traffic and a storefront were managed separately, obscuring the actual conversion journey.",
    solution: "A connected store, product storytelling, campaign operations, and retention workflow foundation.",
    channels: ["Shopify", "Meta", "Google", "Lifecycle"],
  },
];
