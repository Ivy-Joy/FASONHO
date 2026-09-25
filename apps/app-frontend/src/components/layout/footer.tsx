// apps/app-frontend/src/components/layout/footer.tsx
"use client";

import React from "react";
import Link from "next/link";
import { FasonhoLogo } from "@/src/components/icons/fasonho-logo";
import { ArrowRight, Github, Youtube, Linkedin } from "lucide-react";

// Custom SVG for X (Twitter)
function XIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// Custom SVG for Discord
function DiscordIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#030A18] text-slate-300 pt-14 pb-8 border-t border-slate-800/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {/* Col 1: Brand & Subtext */}
          <div className="lg:col-span-1 flex flex-col justify-between">
            <div>
              <Link href="/">
                <FasonhoLogo dark />
              </Link>
            </div>
            <p className="mt-8 text-xs text-slate-400">
              Built in Africa. Designed for the world.
            </p>
          </div>

          {/* Col 2: Products */}
          <div>
            <h4 className="mb-3.5 text-xs font-bold text-white tracking-wide">
              Products
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><Link href="/#starter-pro" className="hover:text-white transition">Starter Pro</Link></li>
              <li><Link href="/#cloud" className="hover:text-white transition">Cloud</Link></li>
              <li><Link href="/#ai" className="hover:text-white transition">AI</Link></li>
              <li><Link href="/#academy" className="hover:text-white transition">Academy</Link></li>
              <li><Link href="/#labs" className="hover:text-white transition">Labs</Link></li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div>
            <h4 className="mb-3.5 text-xs font-bold text-white tracking-wide">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><Link href="/docs" className="hover:text-white transition">Documentation</Link></li>
              <li><Link href="/demo" className="hover:text-white transition">Live Demo</Link></li>
              <li><Link href="/changelog" className="hover:text-white transition">Changelog</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="/support" className="hover:text-white transition">Support</Link></li>
            </ul>
          </div>

          {/* Col 4: Company */}
          <div>
            <h4 className="mb-3.5 text-xs font-bold text-white tracking-wide">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Col 5: Newsletter Form & Socials */}
          <div className="lg:col-span-1">
            <h4 className="mb-1 text-xs font-bold text-white tracking-wide">
              Stay in the loop
            </h4>
            <p className="text-[11px] text-slate-400 leading-normal">
              Get product updates, tutorials, and more.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative mt-3.5 flex items-center"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-full border border-slate-700/80 bg-[#071329] py-2 pl-4 pr-10 text-xs text-white placeholder:text-slate-500 outline-none transition focus:border-[#D4A72C]"
                required
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-[#D4A72C] text-slate-950 transition hover:bg-[#c29624]"
              >
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </form>

            <div className="mt-5 flex items-center gap-3.5 text-slate-400">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition" aria-label="X">
                <XIcon className="h-4 w-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition" aria-label="YouTube">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition" aria-label="Discord">
                <DiscordIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between border-t border-slate-800/80 pt-6 text-[11px] text-slate-500 gap-2">
          <p>© 2026 FASONHO. All rights reserved.</p>
          <p>Technology, made simpler.</p>
        </div>
      </div>
    </footer>
  );
}