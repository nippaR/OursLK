import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
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
    <html lang="en" className={cn("scroll-smooth", "font-sans", poppins.variable)}>
      <body className="bg-[#0f0f0f] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
