import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "AI Productivity Assistant",
  description: "AI-powered tools for students and young professionals to boost productivity",
};

import ThemeToggle from "@/components/ThemeToggle";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={"min-h-screen flex flex-col " + inter.className + " bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-950 dark:to-primary-900 transition-colors duration-500"}>
        <Navigation />
        <main className="container mx-auto px-4 py-8 pt-28 min-h-screen">
          <ThemeToggle />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
