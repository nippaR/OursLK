import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="en" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <body className="bg-[#0f0f0f] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
