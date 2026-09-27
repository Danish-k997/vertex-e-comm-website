export type CaseStudy = {
  type: string;
  title: string;
  challenge: string;
  solution: string;
  channels: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    type: "EXAMPLE // MANUFACTURER",
    title: "Taking a Manufacturer's Products Online",
    challenge: "A product business with an offline presence but no structured marketplace or direct website channel.",
    solution: "Potential scope: organize the catalog, launch marketplace listings, build a website and connect paid ads.",
    channels: ["Amazon", "Flipkart", "Shopify", "Google Ads"],
  },
  {
    type: "EXAMPLE // DISTRIBUTOR",
    title: "Managing a Distributor's Online Catalog",
    challenge: "A wide product range that is difficult to keep accurate across marketplace listings and orders.",
    solution: "Potential scope: improve catalog structure and manage marketplace accounts, advertising and order operations.",
    channels: ["Amazon", "Meesho", "Flipkart", "Operations"],
  },
  {
    type: "EXAMPLE // BRAND OWNER",
    title: "Connecting a Brand's Store and Ads",
    challenge: "A brand needs its website and paid campaigns to work together with its marketplace presence.",
    solution: "Potential scope: build or improve a Shopify store and coordinate Meta, Google and marketplace ads.",
    channels: ["Shopify", "Meta", "Google", "Lifecycle"],
  },
];
