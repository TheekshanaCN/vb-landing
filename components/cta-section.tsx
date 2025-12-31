"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { AnimatedButton } from "./animated-button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.2 })

  return (
    <section ref={sectionRef} className="relative py-24 md:py-48 px-4 md:px-6 overflow-hidden bg-white selection:bg-black selection:text-white">
      {/* High contrast background */}
      <div className="absolute inset-0 bg-black" />

      {/* Radical glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.05] rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-12">
            <Sparkles className="w-3 h-3 text-white" />
            <span className="text-[10px] text-white font-bold uppercase tracking-widest">Immediate Implementation</span>
          </div>

          <h2 className="font-sans text-4xl sm:text-5xl md:text-8xl font-bold tracking-tight text-white mb-8 md:mb-12">
            Build your SaaS <br />
            <span className="text-white/20 italic">tonight.</span>
          </h2>

          <p className="text-base md:text-2xl text-white/40 mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed font-light px-4">
            Stop dreaming. Start architecting. Join <span className="text-white font-bold">2,500+ developers</span> using Structural Intelligence to build better.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-16 md:mb-24 px-4">
            <AnimatedButton className="w-full sm:w-auto px-8 md:px-12 py-5 md:py-8 text-base md:text-xl bg-white text-black hover:bg-white/90 rounded-xl md:rounded-2xl transform hover:-translate-y-1 transition-all duration-300">
              <span className="font-bold uppercase tracking-widest text-sm md:text-base">Get Started Free</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 md:ml-3" />
            </AnimatedButton>
            <button className="w-full sm:w-auto px-8 md:px-12 py-5 md:py-8 rounded-xl md:rounded-2xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all duration-300 text-base md:text-lg font-bold uppercase tracking-widest">
              Watch Demo
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-12 opacity-30">
            {['No credit card', 'Free plan', '60s setup'].map(info => (
              <div key={info} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-white" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{info}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
