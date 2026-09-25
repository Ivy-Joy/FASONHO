// src/components/layout/navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ChevronDown } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { FasonhoLogo } from "@/src/components/icons/fasonho-logo";
import { SearchModal } from "@/src/components/ui/search-modal";

export function Navbar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="flex items-center shrink-0">
            <FasonhoLogo />
          </Link>

          {/* Navigation Links */}
          <nav className="hidden items-center gap-7 lg:flex">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-slate-700 transition hover:text-[#E0A82E] py-2"
              >
                Products
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isProductsOpen ? "rotate-180 text-[#E0A82E]" : "text-slate-500"}`} />
              </button>

              {isProductsOpen && (
                <div className="absolute left-0 top-full pt-1 w-44">
                  <div className="rounded-xl border border-slate-100 bg-white p-1.5 shadow-xl ring-1 ring-slate-900/5">
                    <ul className="space-y-0.5">
                      {["Starter Pro", "Cloud", "AI", "Academy", "Labs"].map((item) => (
                        <li key={item}>
                          <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="block rounded-lg px-3 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[#E0A82E]">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <Link href="/pricing" className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#E0A82E]">Pricing</Link>
            <Link href="/docs" className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#E0A82E]">Documentation</Link>
            <Link href="/demo" className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#E0A82E]">Live Demo</Link>
            <Link href="/changelog" className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#E0A82E]">Changelog</Link>
            <Link href="/blog" className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#E0A82E]">Blog</Link>
            <Link href="/support" className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#E0A82E]">Support</Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
              className="rounded-full p-2 text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
            >
              <Search className="h-4 w-4 stroke-[2.2]" />
            </button>

            <Button variant="secondary" href="/login">Account</Button>
            <Button variant="primary" href="/register">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Interactive Search Bar Dialog */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}