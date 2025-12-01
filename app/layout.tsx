// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAHAMAYA VISA - Your Gateway to the World",
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
      <body className="min-h-screen bg-white text-brand-text antialiased">
        {children}
      </body>
    </html>
  );
}
