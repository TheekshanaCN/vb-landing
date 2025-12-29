"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Italic } from "lucide-react";
import { AnimatedButton } from "./animated-button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 pt-6 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass px-4 py-3 flex items-center justify-between rounded-2xl border border-white/5 backdrop-blur-xl bg-black/40">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-sm" />
              </div>
              <span className="font-sans font-bold text-xl tracking-tight text-white">
                Idea<span className="opacity-50">Forge</span>
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {["Features", "How it Works", "Pricing", "Testimonials"].map(
              (item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-white/60 hover:text-white transition-colors text-sm font-medium"
                >
                  {item}
                </Link>
              )
            )}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <AnimatedButton
              className="px-5 py-2 h-10 rounded-xl bg-white text-black font-semibold hover:bg-white/90"
              onClick={() => window.open("https://app-ideaforge.netlify.app/", "_blank")}
            >
              Get Started
            </AnimatedButton>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-24 left-6 right-6 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 transition-all duration-300 ${isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <nav className="flex flex-col gap-4">
          {["Features", "How it Works", "Pricing", "Testimonials"].map(
            (item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-white/60 hover:text-white transition-colors py-2 text-lg"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            )
          )}
          <div className="pt-4 border-t border-white/10">
            <AnimatedButton
              className="w-full justify-center bg-white text-black"
              onClick={() => window.open("https://app-ideaforge.netlify.app/", "_blank")}
            >
              Get Started
            </AnimatedButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
