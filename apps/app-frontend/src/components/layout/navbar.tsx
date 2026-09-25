// src/components/layout/navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

import { Button } from "@/src/components/ui/button";
import { FasonhoLogo } from "@/src/components/icons/fasonho-logo";
import { SearchModal } from "@/src/components/ui/search-modal";

const productLinks = [
  { name: "Starter Pro", href: "/products#starter-pro" },
  { name: "Cloud", href: "/products#cloud" },
  { name: "AI", href: "/products#ai" },
  { name: "Academy", href: "/products#academy" },
  { name: "Labs", href: "/products#labs" },
];

const navLinks = [
  { name: "Pricing", href: "/pricing" },
  { name: "Documentation", href: "/docs" },
  { name: "Live Demo", href: "/demo" },
  { name: "Changelog", href: "/changelog" },
  { name: "Blog", href: "/blog" },
  { name: "Support", href: "/support" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProducts, setMobileProducts] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <FasonhoLogo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-semibold text-slate-700 transition hover:text-[#2563EB]">
                Products
                <ChevronDown
                  className={`h-4 w-4 transition ${
                    productsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {productsOpen && (
                <div className="absolute left-0 top-full w-56 pt-3">
                  <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl">
                    {productLinks.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[#2563EB]"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-slate-700 transition hover:text-[#2563EB]"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={() => setSearchOpen(true)}
              className="rounded-full p-2 transition hover:bg-slate-100"
            >
              <Search className="h-4 w-4" />
            </button>

            <Button variant="secondary" href="/login">
              Account
            </Button>

            <Button variant="primary" href="/register">
              Get Started
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setSearchOpen(true)}
              className="rounded-full p-2 transition hover:bg-slate-100"
            >
              <Search className="h-5 w-5" />
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-xl border border-slate-200 p-2 transition hover:bg-slate-50"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white lg:hidden">
            <div className="space-y-1 px-5 py-5">
              {/* Products */}
              <button
                onClick={() => setMobileProducts(!mobileProducts)}
                className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left font-semibold text-slate-800 hover:bg-slate-50"
              >
                Products
                <ChevronDown
                  className={`h-4 w-4 transition ${
                    mobileProducts ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileProducts && (
                <div className="ml-3 space-y-1 border-l border-slate-200 pl-4">
                  {productLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 text-sm text-slate-600 hover:text-[#2563EB]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}

              {/* Other Pages */}
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl px-3 py-3 font-medium text-slate-700 hover:bg-slate-50"
                >
                  {item.name}
                </Link>
              ))}

              <div className="border-t border-slate-200 pt-4">
                <Button
                  href="/register"
                  variant="primary"
                  className="w-full justify-center"
                >
                  Get Started
                </Button>

                <Button
                  href="/login"
                  variant="secondary"
                  className="mt-3 w-full justify-center"
                >
                  Account
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </>
  );
}