import { Boxes, ShoppingBag, Store, Truck } from "lucide-react";

const platforms = [[ShoppingBag, "Amazon India"], [Boxes, "Flipkart Assured"], [Truck, "Meesho Direct"], [Store, "Shopify Plus"], [Boxes, "Meta Growth Ads"], [ShoppingBag, "Google Shopping"]] as const;

export default function PlatformBar() {
  return <section className="border-b border-[#282a2d] bg-[#0c0e11] py-6"><div className="mx-auto max-w-7xl px-4 sm:px-6"><div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between"><p className="text-[11px] font-semibold tracking-[0.08em] text-[#e2bfb0]">ONE TEAM. EVERY ESSENTIAL COMMERCE CHANNEL.</p><p className="hidden font-mono text-xs text-[#c4c6cd] md:block">API SYNCHRONIZATION // CERTIFIED ECOSYSTEM</p></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{platforms.map(([Icon, name]) => <div key={name} className="flex items-center justify-center gap-2 rounded border border-[#282a2d] bg-[#1e2023]/60 p-3 text-sm font-semibold text-[#e2e2e6] transition-colors hover:bg-[#1e2023]"><Icon className="size-[18px] text-[#ff6a00]" />{name}</div>)}</div></div></section>;
}
