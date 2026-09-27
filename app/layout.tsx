import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RevealObserver from "@/components/ui/RevealObserver";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vertex-ecomm.com"),
  title: {
    default: "Vertex Ecomm |E-Commerse growth patner",
    template: "%s | Vertex Ecomm",
  },
  description:
    "Vertex Ecomm is an e-commerce sales operating system for manufacturers, distributors and brands — marketplaces, D2C, media and operations in one connected engine.",
  applicationName: "Vertex Ecomm",
  openGraph: {
    title: "Vertex Ecomm | Obsidian Commerce Infrastructure",
    description:
      "A high-end e-commerce sales operating system. Build, manage and scale online sales across marketplaces, D2C and paid advertising.",
    type: "website",
    locale: "en_US",
    url: "https://vertex-ecomm.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vertex Ecomm",
    description: "Obsidian commerce infrastructure for teams that already have a product.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#080a0d] text-[#f5f5f2]">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-[#ff6a00] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#571f00]"
        >
          Skip to content
        </a>
        <div className="relative min-h-screen bg-[#080a0d]">
          <Navbar />
          <div className="pt-20">{children}</div>
          <Footer />
        </div>
        <RevealObserver />
      </body>
    </html>
  );
}
