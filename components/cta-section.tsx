"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { AnimatedButton } from "./animated-button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.2 })

  return (
    <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-cream via-background to-warm-beige/20" />

      {/* Decorative orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-warm-cream/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-warm-beige/30 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), 
                           linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warm-tan/10 border border-warm-tan/20 mb-8 transition-all duration-700 ${isInView ? "translate-y-0 blur-0" : "translate-y-8 blur-sm"
              }`}
          >
            <Sparkles className="w-4 h-4 text-warm-tan" />
            <span className="text-sm text-warm-tan font-medium uppercase tracking-tight">Start building in 60 seconds</span>
          </div>

          {/* Heading */}
          <h2
            className={`font-serif text-5xl md:text-7xl lg:text-8xl text-foreground mb-8 transition-all duration-700 delay-200 ${isInView ? "translate-y-0 blur-0" : "translate-y-8 blur-sm"
              }`}
          >
            Your next
            <br />
            <span className="italic gradient-text">unicorn</span> awaits
          </h2>

          <p
            className={`text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-400 ${isInView ? "translate-y-0 blur-0" : "translate-y-8 blur-sm"
              }`}
          >
            Join <span className="text-foreground font-medium">2,400+ founders</span> who transformed their messy ideas
            into clear blueprints and shipped faster than ever.
          </p>

          {/* CTA buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-700 delay-600 ${isInView ? "translate-y-0 blur-0" : "translate-y-8 blur-sm"
              }`}
          >
            <AnimatedButton className="px-10 py-5 text-lg bg-warm-tan hover:bg-warm-brown text-white shadow-xl shadow-warm-tan/20 transform hover:-translate-y-1 transition-all duration-300">
              <span className="font-bold">Transform Your Idea Now</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </AnimatedButton>
            <button className="px-10 py-5 rounded-full border border-stone-200 bg-white/50 backdrop-blur-sm text-stone-600 hover:border-warm-tan/50 hover:bg-white transition-all duration-300 text-lg">
              Watch Demo
            </button>
          </div>

          {/* Trust indicators */}
          <div
            className={`flex flex-wrap items-center justify-center gap-8 transition-all duration-700 delay-800 ${isInView ? "translate-y-0 blur-0" : "translate-y-8 blur-sm"
              }`}
          >
            <div className="flex items-center gap-2 text-stone-500">
              <div className="w-5 h-5 rounded-full bg-warm-tan/20 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-warm-tan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-medium">No credit card required</span>
            </div>
            <div className="flex items-center gap-2 text-stone-500">
              <div className="w-5 h-5 rounded-full bg-warm-tan/20 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-warm-tan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-medium">Free plan available</span>
            </div>
            <div className="flex items-center gap-2 text-stone-500">
              <div className="w-5 h-5 rounded-full bg-warm-tan/20 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-warm-tan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-medium">Setup in 60 seconds</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
