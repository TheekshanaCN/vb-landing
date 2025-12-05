"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { AnimatedButton } from "./animated-button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="
  fixed top-0 inset-x-0 z-50 transition-all duration-500 w-full px-4 sm:px-6 md:px-0 md:max-w-[60rem] lg:max-w-[80rem] mx-auto"
    >
      <div className="px-3 py-2 mt-4 flex items-center justify-between bg-white/60 backdrop-blur-lg rounded-full">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center overflow-hidden">
            <Sparkles className="w-5 h-5 text-accent-foreground relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          <span className="font-serif text-2xl text-foreground">
            Sand<span className="text-accent">Board</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {["Features", "How it Works", "Pricing", "Testimonials"].map(
            (item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-muted-foreground hover:text-foreground transition-colors text-md relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <AnimatedButton>Start Free</AnimatedButton>
        </div>

        <div className="md:hidden w-[20px]">
          <AnimatedButton>Start</AnimatedButton>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col p-6 gap-4">
          {["Features", "How it Works", "Pricing", "Testimonials"].map(
            (item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            )
          )}
          <div className="pt-4 border-t border-border">
            <AnimatedButton className="w-full justify-center">
              Start Free
            </AnimatedButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
