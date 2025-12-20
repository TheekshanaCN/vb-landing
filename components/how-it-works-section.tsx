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

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string }> = {
      accent: { bg: "bg-accent/10", border: "border-accent/30", text: "text-accent" },
      purple: { bg: "bg-purple-500/10", border: "border-purple-500/30", text: "text-purple-400" },
      blue: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400" },
      green: { bg: "bg-green-500/10", border: "border-green-500/30", text: "text-green-400" },
    }
    return colors[color] || colors.accent
  }

  return (
    <section ref={sectionRef} id="how-it-works" className="relative py-32 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span
            className={`inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 transition-all duration-700 ${
              isInView ? "translate-y-0 blur-0" : "translate-y-8 blur-sm"
            }`}
          >
            How It Works
          </span>
          <h2
            className={`font-serif text-4xl md:text-6xl text-foreground mb-6 transition-all duration-700 delay-200 ${
              isInView ? "translate-y-0 blur-0" : "translate-y-8 blur-sm"
            }`}
          >
            Four simple steps to
            <br />
            <span className="italic text-muted-foreground">your unicorn</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />

          <div className="grid lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              const colors = getColorClasses(step.color)
              return (
                <div
                  key={step.number}
                  className={`relative transition-all duration-700 ${
                    isInView ? "translate-y-0 blur-0" : "translate-y-12 blur-sm"
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <div className="relative p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm h-full">
                    {/* Number badge */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-background border-2 border-border flex items-center justify-center">
                      <span className="font-mono text-lg font-bold text-muted-foreground">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center mb-6`}
                    >
                      <Icon className={`w-7 h-7 ${colors.text}`} />
                    </div>

                    {/* Content */}
                    <h3 className="font-serif text-xl text-foreground mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>

                  {/* Connector dot */}
                  {/* <div
                    className={`hidden lg:block absolute top-1/2 -right-2 w-4 h-4 rounded-full ${colors.bg} border-2 ${colors.border} -translate-y-1/2 z-10`}
                  /> */}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
