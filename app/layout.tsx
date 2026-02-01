import type { Metadata } from "next";
import { Press_Start_2P, Silkscreen, VT323 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const pressStart = Press_Start_2P({
  weight: "400",
  variable: "--font-press",
  subsets: ["latin"],
});

const silkscreen = Silkscreen({
  weight: ["400", "700"],
  variable: "--font-silk",
  subsets: ["latin"],
});

const vt323 = VT323({
  weight: "400",
  variable: "--font-vt",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Collective",
  description: "Authentic 8-bit experiences and Pokemon-inspired products.",
  openGraph: {
    title: "Collective",
    description: "Authentic 8-bit experiences and Pokemon-inspired products.",
    type: "website",
    images: ["https://replit.com/public/images/opengraph.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@replit",
    title: "Collective",
    description: "Authentic 8-bit experiences and Pokemon-inspired products.",
    images: ["https://replit.com/public/images/opengraph.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pressStart.variable} ${silkscreen.variable} ${vt323.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
