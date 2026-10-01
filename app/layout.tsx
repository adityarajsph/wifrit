import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "WIFRIT — Software & Technology Solutions",
  description:
    "WIFRIT builds scalable software, web, mobile and cloud solutions for businesses that want to move faster and grow with confidence.",
  keywords: [
    "Software Development",
    "Web Development",
    "Mobile Apps",
    "Cloud & DevOps",
    "UI/UX Design",
    "AI & Automation",
    "WIFRIT",
  ],
  authors: [{ name: "WIFRIT Technologies" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="font-body bg-white text-ink-950 antialiased selection:bg-brand selection:text-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
