export type Solution = {
  segment: string;
  title: string;
  description: string;
  details: string[];
};

export const solutions: Solution[] = [
  {
    segment: "SEGMENT // 01",
    title: "Manufacturers",
    description: "Turn production capacity into disciplined online channels without disrupting existing distributor networks.",
    details: ["Catalog digitization", "Brand registry protection", "Direct margin expansion"],
  },
  {
    segment: "SEGMENT // 02",
    title: "Distributors & Traders",
    description: "Create velocity for broad multi-SKU inventories across marketplaces with synchronized operations.",
    details: ["Structured catalog ingestion", "Price and stock governance", "Marketplace fulfilment controls"],
  },
  {
    segment: "SEGMENT // 03",
    title: "D2C Brand Owners",
    description: "Connect a distinct brand experience with acquisition, retention, and day-to-day execution.",
    details: ["Storefront conversion systems", "Paid-media feedback loops", "Retention and customer lifecycle"],
  },
];
