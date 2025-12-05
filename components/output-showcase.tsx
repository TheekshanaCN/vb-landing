"use client"

import { useRef, useState, useEffect } from "react"
import { useInView } from "@/hooks/use-in-view"
import { FlashlightCard } from "./flashlight-card"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"

const outputs = [
  {
    title: "Visual Product Map",
    description: "Interactive node diagram showing system architecture",
    preview: (
      <div className="relative h-full flex items-center justify-center p-8">
        <div className="grid grid-cols-3 gap-6 w-full">
          {["User Auth", "Core Logic", "Data Layer", "AI Engine", "API", "UI"].map((label, i) => (
            <div
              key={i}
              className="p-4 rounded-lg bg-accent/10 border border-accent/30 text-center animate-node-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              <div className="text-xs text-accent font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Tech Stack Recommendations",
    description: "AI-curated technologies perfect for your product",
    preview: (
      <div className="p-8 space-y-4">
        {[
          { name: "Next.js 15", category: "Framework", reason: "SSR + App Router" },
          { name: "Supabase", category: "Database", reason: "Realtime + Auth" },
          { name: "Vercel AI SDK", category: "AI Layer", reason: "Multi-model support" },
          { name: "Stripe", category: "Payments", reason: "Subscription billing" },
        ].map((tech, i) => (
          <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50 border border-border">
            <div className="w-10 h-10 rounded bg-accent/20 flex items-center justify-center flex-shrink-0">
              <Check className="w-5 h-5 text-accent" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-foreground">{tech.name}</span>
                <span className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground">{tech.category}</span>
              </div>
              <p className="text-xs text-muted-foreground">{tech.reason}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "MVP Kanban Board",
    description: "Prioritized tasks to launch your first version",
    preview: (
      <div className="p-8">
        <div className="grid grid-cols-3 gap-4">
          {["Must Have", "Should Have", "Nice to Have"].map((column, i) => (
            <div key={i} className="space-y-3">
              <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">{column}</div>
              {[1, 2, 3].map((j) => (
                <div key={j} className="p-3 rounded-lg bg-secondary/50 border border-border">
                  <div className="h-2 rounded bg-muted mb-2" style={{ width: `${Math.random() * 40 + 60}%` }} />
                  <div className="h-2 rounded bg-muted/50" style={{ width: `${Math.random() * 30 + 50}%` }} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    ),
  },
]

export function OutputShowcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % outputs.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + outputs.length) % outputs.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % outputs.length)
  }

  return (
    <section ref={sectionRef} className="relative py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span
            className={`inline-block px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6 transition-all duration-700 ${
              isInView ? "translate-y-0 blur-0" : "translate-y-8 blur-sm"
            }`}
          >
            What You Get
          </span>
          <h2
            className={`font-serif text-4xl md:text-6xl text-foreground mb-6 transition-all duration-700 delay-200 ${
              isInView ? "translate-y-0 blur-0" : "translate-y-8 blur-sm"
            }`}
          >
            Complete blueprint
            <br />
            <span className="italic text-muted-foreground">in 60 seconds</span>
          </h2>
        </div>

        <div
          className={`relative transition-all duration-1000 delay-400 ${
            isInView ? "translate-y-0 blur-0 scale-100" : "translate-y-16 blur-sm scale-95"
          }`}
        >
          <FlashlightCard className="overflow-hidden">
            <div className="relative min-h-[500px]">
              {/* Content */}
              <div className="relative overflow-hidden">
                {outputs.map((output, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-700 ${
                      index === activeIndex
                        ? "opacity-100 translate-x-0"
                        : index < activeIndex
                          ? "opacity-0 -translate-x-full absolute inset-0"
                          : "opacity-0 translate-x-full absolute inset-0"
                    }`}
                  >
                    <div className="p-8 border-b border-border">
                      <h3 className="font-serif text-2xl text-foreground mb-2">{output.title}</h3>
                      <p className="text-muted-foreground">{output.description}</p>
                    </div>
                    <div className="min-h-[400px]">{output.preview}</div>
                  </div>
                ))}
              </div>

              {/* Navigation */}
              <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full bg-secondary border border-border hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 flex items-center justify-center"
                >
                  <ChevronLeft className="w-5 h-5 text-foreground" />
                </button>

                <div className="flex gap-2">
                  {outputs.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === activeIndex ? "w-8 bg-accent" : "w-1.5 bg-border hover:bg-accent/50"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full bg-secondary border border-border hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 flex items-center justify-center"
                >
                  <ChevronRight className="w-5 h-5 text-foreground" />
                </button>
              </div>
            </div>
          </FlashlightCard>
        </div>
      </div>
    </section>
  )
}
