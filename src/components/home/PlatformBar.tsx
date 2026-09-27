import Image from "next/image";

const platforms = [
  {
    name: "Amazon India",
    src: "/brands/amazon-color-svgrepo-com.svg",
    contrast: true,
  },
  { name: "Flipkart", src: "/brands/flipkart-logo-.svg" },
  { name: "Meesho", src: "/brands/meesho-seeklogo.svg" },
  { name: "Shopify Plus", src: "/brands/shopify-logo-svgrepo-com.svg" },
  {
    name: "Meta Growth Ads",
    src: "/brands/meta-logo-facebook-svgrepo-com.svg",
    contrast: true,
  },
  {
    name: "Google Shopping",
    src: "/brands/google-logo-search-new-svgrepo-com.svg",
  },
];

export default function PlatformBar() {
  return (
    <section className="border-b border-[#282a2d] bg-[#080a0d] py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6" data-reveal>
        <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <p className="kicker text-[#c4b4ab]">
            One team. Every essential commerce channel.
          </p>
          <p className="hidden font-mono text-[11px] text-[#9aa0a8] md:block">
            MARKETPLACES · WEBSITES · PAID ADS
          </p>
        </div>
        <ul className="platform-list flex flex-wrap items-center gap-x-6 gap-y-3 sm:gap-x-8">
          {platforms.map((platform) => (
            <li
              key={platform.name}
              className={`platform-item flex items-center gap-2 text-sm font-medium text-[#f5f5f2] ${platform.src ? "" : "platform-item--text-only"}`}
            >
              {platform.src && (
                <Image
                  src={platform.src}
                  alt={`${platform.name} logo`}
                  width={48}
                  height={48}
                  sizes="(max-width: 767px) 32px, 24px"
                  className={`platform-logo size-6 shrink-0 object-contain ${"contrast" in platform && platform.contrast ? "rounded-sm bg-white p-1" : ""}`}
                />
              )}
              <span
                aria-hidden={Boolean(platform.src)}
                className="platform-name"
              >
                {platform.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
