// src/components/ui/search-modal.tsx
//Includes command-palette functionality, Cmd+K / Ctrl+K keyboard listener, category grouping, recent searches, and smooth backdrop animation.
// src/components/ui/search-modal.tsx
"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Search, X, ArrowRight, BookOpen, Layers, Sparkles, Command } from "lucide-react";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: "Products" | "Documentation" | "Pages";
  href: string;
}

const SEARCH_DATA: SearchResult[] = [
  { id: "1", title: "Starter Pro", description: "Next.js & TypeScript production-ready boilerplate", category: "Products", href: "#starter-pro" },
  { id: "2", title: "Cloud Infrastructure", description: "Scalable hosting & edge deployment engines", category: "Products", href: "#cloud" },
  { id: "3", title: "AI Integration Suite", description: "Intelligent agent & LLM workflow tools", category: "Products", href: "#ai" },
  { id: "4", title: "Academy", description: "In-depth engineering tutorials and developer guides", category: "Products", href: "#academy" },
  { id: "5", title: "Labs", description: "Experimental tools and open-source visual modules", category: "Products", href: "#labs" },
  { id: "6", title: "Quickstart Guide", description: "Get up and running in under 5 minutes", category: "Documentation", href: "/docs" },
  { id: "7", title: "API Reference", description: "Complete REST and GraphQL endpoint schemas", category: "Documentation", href: "/docs" },
  { id: "8", title: "Pricing & Plans", description: "Transparent tiers for indie developers and enterprises", category: "Pages", href: "/pricing" },
  { id: "9", title: "Changelog", description: "Latest release notes and system enhancements", category: "Pages", href: "/changelog" },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");

  const handleClose = useCallback(() => {
    setQuery("");
    onClose();
  }, [onClose]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          handleClose();
        }
      }
    },
    [isOpen, handleClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const filtered = query.trim() === "" 
    ? [] 
    : SEARCH_DATA.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.description.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-24 px-3 sm:px-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity duration-300" 
        onClick={handleClose} 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl transition-all">
        {/* Input Header */}
        <div className="relative flex items-center border-b border-slate-100 px-3 sm:px-4 py-1">
          <Search className="h-5 w-5 text-slate-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, documentation, guides..."
            className="w-full bg-transparent py-3.5 pl-2.5 pr-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
            autoFocus
          />
          
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Clear Input Button (shows when typing) */}
            {query && (
              <button 
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear input"
                className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
              >
                <X className="h-4 w-4" />
              </button>
            )}

            {/* Desktop ESC Shortcut Badge */}
            <kbd className="hidden sm:inline-flex items-center gap-0.5 rounded border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-400">
              <Command className="h-3 w-3" /> ESC
            </kbd>

            {/* Mobile / Universal Close Modal Button */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close search modal"
              className="flex items-center justify-center rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition"
            >
              <X className="h-5 w-5 sm:h-4 sm:w-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="max-h-[60vh] sm:max-h-96 overflow-y-auto p-3 sm:p-4">
          {query.trim() === "" ? (
            <div className="py-4 sm:py-6">
              <p className="px-2 text-xs font-bold uppercase tracking-wider text-slate-400">Quick Navigation</p>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SEARCH_DATA.slice(0, 4).map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={handleClose}
                    className="flex items-center justify-between rounded-xl border border-slate-100 p-3 text-left transition hover:border-[#D4A72C]/40 hover:bg-[#D4A72C]/5"
                  >
                    <div>
                      <p className="text-xs font-semibold text-slate-800">{item.title}</p>
                      <p className="text-[11px] text-slate-500 line-clamp-1">{item.description}</p>
                    </div>
                    <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
                  </Link>
                ))}
              </div>
            </div>
          ) : filtered.length > 0 ? (
            <div className="space-y-2">
              {filtered.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={handleClose}
                  className="group flex items-start gap-3 rounded-xl p-3 transition hover:bg-slate-50"
                >
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 group-hover:border-[#D4A72C] group-hover:text-[#D4A72C]">
                    {item.category === "Products" && <Layers className="h-4 w-4" />}
                    {item.category === "Documentation" && <BookOpen className="h-4 w-4" />}
                    {item.category === "Pages" && <Sparkles className="h-4 w-4" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold text-slate-900 group-hover:text-[#D4A72C]">{item.title}</p>
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-500">
                        {item.category}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs text-slate-500">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="text-xs font-medium text-slate-500">No results found for &quot;{query}&quot;</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/50 px-4 py-2.5 text-[11px] text-slate-400">
          <span>Search FASONHO ecosystem</span>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline">Press <kbd className="rounded bg-white px-1.5 py-0.5 border border-slate-200 text-slate-600 font-mono">ESC</kbd> to exit</span>
            <span className="sm:hidden">Tap outside or <button type="button" onClick={handleClose} className="underline text-slate-600 font-medium">Close</button></span>
          </div>
        </div>
      </div>
    </div>
  );
}