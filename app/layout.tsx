import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ours.lk - Websites for Sri Lankan Businesses",
  description: "Modern, affordable, and mobile-friendly websites for Sri Lankan businesses, restaurants, shops, freelancers, and community organisations.",
  keywords: "web design, web development, Sri Lanka, website builder, digital marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="bg-[#0f0f0f] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
