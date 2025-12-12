// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "MAHAMAYA VISA - Your Gateway to the Island of the Gods",
  description:
    "Fast, reliable visa processing services for all your travel needs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Analytics />
      <body className="min-h-screen bg-white text-brand-text antialiased">
        {children}
      </body>
    </html>
  );
}
