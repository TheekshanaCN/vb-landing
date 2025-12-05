"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { FlashlightCard } from "./flashlight-card"
import { Sparkles, Zap, Target, Layers } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Idea Clarification",
    description:
      "Transform your scattered thoughts into structured, clear concepts using our AI-powered analysis engine.",
  },
  {
    icon: Zap,
    title: "Instant Roadmaps",
    description: "Generate actionable step-by-step plans in seconds. From concept to MVP in record time.",
  },
  {
    icon: Target,
    title: "Market Validation",
    description: "Validate your ideas against real market data and competitor analysis before you build.",
  },
  {
    icon: Layers,
    title: "Tech Stack Builder",
    description: "Get personalized technology recommendations based on your product requirements and team expertise.",
  },
]

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  return (
    <section ref={sectionRef} id="features" className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span
            className={`inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 transition-all duration-700 ${isInView ? "translate-y-0 blur-0" : "translate-y-8 blur-sm"}`}
            style={{ animationFillMode: "both" }}
          >
            Features
          </span>
          <h2
            className={`font-serif text-4xl md:text-6xl text-foreground mb-6 text-balance transition-all duration-700 delay-200 ${isInView ? "translate-y-0 blur-0" : "translate-y-8 blur-sm"}`}
            style={{ animationFillMode: "both" }}
          >
            Everything you need to
            <br />
            <span className="italic text-muted-foreground">build faster</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-400 ${isInView ? "translate-y-0 blur-0" : "translate-y-8 blur-sm"}`}
            style={{ animationFillMode: "both" }}
          >
            Our platform provides all the tools you need to go from messy idea to launched product in weeks, not months.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`transition-all duration-700 ${isInView ? "translate-y-0 blur-0" : "translate-y-12 blur-sm"}`}
              style={{
                animationFillMode: "both",
                transitionDelay: `${(index + 3) * 150}ms`,
              }}
            >
              <FlashlightCard>
                <div className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-2xl text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </FlashlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
