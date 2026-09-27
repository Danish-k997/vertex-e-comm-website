import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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
    default: "Vertex Ecomm | Full-Stack E-commerce Growth Partner",
    template: "%s | Vertex Ecomm",
  },
  description:
    "Vertex Ecomm helps manufacturers, distributors and brands build, manage and scale their online sales across marketplaces, D2C websites and paid advertising.",
  applicationName: "Vertex Ecomm",
  openGraph: {
    title: "Vertex Ecomm | Full-Stack E-commerce Growth Partner",
    description:
      "Vertex Ecomm helps manufacturers, distributors and brands build, manage and scale their online sales across marketplaces, D2C websites and paid advertising.",
    type: "website",
    locale: "en_US",
    url: "https://vertex-ecomm.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vertex Ecomm",
    description: "One team. One e-commerce sales engine.",
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
      <body className="min-h-full bg-[#080A0D] text-[#F5F5F2]">
        <div className="relative min-h-screen bg-[#080A0D]">
          <Navbar />
          <div className="pt-20">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
