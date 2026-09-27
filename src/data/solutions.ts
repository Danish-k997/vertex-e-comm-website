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
    description: "Bring proven products online through marketplaces and a brand-owned website, while keeping current sales channels in view.",
    details: ["Launch or improve marketplace listings", "Manage catalog, ads and daily account work", "Add a Shopify or custom-coded website"],
  },
  {
    segment: "SEGMENT // 02",
    title: "Distributors & Traders",
    description: "Manage a wide product range across online channels without losing sight of listings, stock and orders.",
    details: ["Organize products and catalogs", "Manage marketplace accounts and ads", "Coordinate stock and order operations"],
  },
  {
    segment: "SEGMENT // 03",
    title: "D2C Brand Owners",
    description: "Connect marketplaces, a brand website and paid ads with one team managing the day-to-day work.",
    details: ["Grow on Amazon, Flipkart and Meesho", "Build Shopify or custom e-commerce", "Manage Meta, Google and marketplace ads"],
  },
];
