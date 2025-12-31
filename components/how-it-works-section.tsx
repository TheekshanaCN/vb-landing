"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { PenTool, Sparkles, Map, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: PenTool,
    title: "Paste Your Messy Idea",
    description: "Dump your unstructured thoughts, scattered notes, No formatting needed.",
    color: "accent",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "AI Extracts the Core",
    description:
      "Our engine identifies user needs, core features, data requirements, and technical dependencies automatically.",
    color: "purple",
  },
  {
    number: "03",
    icon: Map,
    title: "Get Your Blueprint",
    description:
      "Visual node map, recommended tech stack, MVP checklist, AI insights, and next steps—all in one place.",
    color: "blue",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Start Building",
    description: "Copy the optimized prompt into v0, Cursor, or any AI tool and start coding your SaaS immediately.",
    color: "green",
  },
]

export function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  return (
    <section ref={sectionRef} id="how-it-works" className="relative py-24 md:py-32 px-4 md:px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24 space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-bold uppercase tracking-widest mb-4">
            Process
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Four steps to <br />
            <span className="text-white/30 italic">deployment.</span>
          </h2>
        </div>

        <div className="relative">
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={step.number}
                  className="relative group p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500"
                >
                  <div className="absolute -top-3 md:-top-4 -right-3 md:-right-4 w-8 md:w-10 h-8 md:h-10 rounded-lg md:rounded-xl bg-black border border-white/10 flex items-center justify-center">
                    <span className="font-mono text-[10px] md:text-xs font-bold text-white/40">{step.number}</span>
                  </div>

                  <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl md:rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-6 md:mb-8 group-hover:bg-white group-hover:text-black transition-all duration-500">
                    <Icon className="w-5 md:w-6 h-5 md:h-6" />
                  </div>

                  <h3 className="text-base md:text-lg font-bold text-white mb-3 uppercase tracking-tight">{step.title}</h3>
                  <p className="text-xs md:text-sm text-white/40 leading-relaxed font-light">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
