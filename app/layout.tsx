import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pookie's Flowers",
  description: "Beautiful flower arrangements and subscription plans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
