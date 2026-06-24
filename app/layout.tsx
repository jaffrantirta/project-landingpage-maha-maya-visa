import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://mahamayavisa.com"),
  title: {
    default: "MAHAMAYA VISA — Professional Visa Services in Bali, Indonesia",
    template: "%s | MAHAMAYA VISA",
  },
  description:
    "MAHAMAYA VISA provides professional and reliable visa processing services in Bali, Indonesia. Tourist, business, working, family, and retirement visas handled with speed and care.",
  keywords: [
    "visa services Bali",
    "Indonesia visa processing",
    "tourist visa Indonesia",
    "business visa Bali",
    "working visa Indonesia",
    "KITAS Bali",
    "retirement visa Indonesia",
    "Mahamaya Visa",
    "visa extension Bali",
    "visa agent Bali",
  ],
  authors: [{ name: "MAHAMAYA VISA" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "MAHAMAYA VISA",
    title: "MAHAMAYA VISA — Professional Visa Services in Bali, Indonesia",
    description:
      "Fast, reliable visa processing for tourists, professionals, and families in Bali, Indonesia.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-brand-text antialiased">
        <Analytics />
        <Navbar />
        {/* Offset content by sidebar width on desktop; add bottom padding on mobile for the tab bar */}
        <div className="lg:ml-60 pb-28 lg:pb-0">
          {children}
        </div>
      </body>
    </html>
  );
}
