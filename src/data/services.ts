export type Service = {
  title: string;
  description: string;
  capabilities: string[];
  label: string;
};

export const services: Service[] = [
  {
    label: "CAPABILITY // 01",
    title: "Marketplace Growth",
    description: "Complete cataloging, indexing, and execution across Amazon India, Flipkart, and Meesho.",
    capabilities: ["Seller and Vendor Central operations", "Listing optimization and brand pages", "Daily orders, claims, and recovery"],
  },
  {
    label: "CAPABILITY // 02",
    title: "D2C E-Commerce",
    description: "Conversion-focused storefronts that make the product, proposition, and checkout work together.",
    capabilities: ["Shopify storefront architecture", "Product page and checkout optimization", "Lifecycle and retention workflows"],
  },
  {
    label: "CAPABILITY // 03",
    title: "Performance Marketing",
    description: "Media operations connected to inventory, contribution margins, and actual dispatch capacity.",
    capabilities: ["Google Shopping and Meta campaigns", "Catalog and feed management", "Blended efficiency reporting"],
  },
  {
    label: "CAPABILITY // 04",
    title: "Creative & Content",
    description: "Product storytelling that gives marketplace listings and storefronts a reason to convert.",
    capabilities: ["A+ content and brand stores", "Product imagery and asset systems", "Campaign-ready creative direction"],
  },
  {
    label: "CAPABILITY // 05",
    title: "Commerce Operations",
    description: "The operating layer that keeps catalogs, inventory, orders, and customer experience aligned.",
    capabilities: ["Multi-channel inventory synchronization", "Dispatch and claims workflows", "Operational reporting and controls"],
  },
];
