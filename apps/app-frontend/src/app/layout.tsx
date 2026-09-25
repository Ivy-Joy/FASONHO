// src/app/layout.tsx (or app/layout.tsx)
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/src/app/globals.css";
import "@fontsource-variable/inter";
import "./globals.css"; // from global CSS file

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "FASONHO - Technology, Made Simpler.",
    template: "%s | FASONHO",
  },
  description:
    "Powerful developer tools, cloud infrastructure, and intelligent platforms for building secure, scalable digital products.",
  keywords: [
    "FASONHO",
    "Starter Pro",
    "Developer Platform",
    "Next.js Boilerplate",
    "Cloud Infrastructure",
    "AI",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}