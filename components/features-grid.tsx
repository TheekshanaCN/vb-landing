"use client"

import { useState, useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Layers, Wand2, GitBranch, Zap, FileCode, Cpu, Box, Sparkles, Settings, Play } from "lucide-react"

const features = [
  {
    id: "ai-generation",
    title: "AI Blueprint Generation",
    description: "Transform your ideas into detailed technical blueprints with our advanced AI engine.",
    visual: "generation",
  },
  {
    id: "smart-components",
    title: "Smart Component Library",
    description: "Access thousands of pre-built components that adapt intelligently to your project needs.",
    visual: "components",
  },
  {
    id: "version-control",
    title: "Seamless Version Control",
    description: "Track changes, collaborate with your team, and roll back to any previous version instantly.",
    visual: "version",
  },
  {
    id: "instant-export",
    title: "One-Click Export",
    description: "Export production-ready code, documentation, and assets in your preferred format.",
    visual: "export",
  },
]

function GenerationVisual() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-xs text-muted-foreground">AI Processing...</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {["Layout", "Schema", "API", "Database"].map((item, i) => (
          <div
            key={item}
            className="bg-card rounded-xl p-4 border border-border/40 hover:border-primary/40 transition-all duration-300"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Wand2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">{item}</span>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-1.5 bg-primary/20 rounded-full w-full animate-pulse"
                style={{ animationDelay: `${i * 150}ms` }}
              />
              <div className="h-1.5 bg-muted-foreground/10 rounded-full w-4/5" />
              <div className="h-1.5 bg-muted-foreground/10 rounded-full w-3/5" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 pt-2">
        <Sparkles className="w-4 h-4 text-primary" />
        <span className="text-xs text-muted-foreground">Generating blueprint...</span>
      </div>
    </div>
  )
}

function ComponentsVisual() {
  const components = [
    { name: "Button", icon: Box, color: "#6366F1" },
    { name: "Form", icon: FileCode, color: "#10B981" },
    { name: "Modal", icon: Layers, color: "#F59E0B" },
    { name: "Table", icon: Settings, color: "#EF4444" },
    { name: "Chart", icon: Cpu, color: "#8B5CF6" },
    { name: "Card", icon: Box, color: "#06B6D4" },
  ]

  return (
    <div className="grid grid-cols-3 gap-3">
      {components.map((comp, index) => {
        const Icon = comp.icon
        return (
          <div
            key={comp.name}
            className="bg-card rounded-xl p-4 border border-border/40 hover:border-border hover:shadow-md transition-all duration-300 cursor-pointer group"
          >
            <div className="flex flex-col items-center gap-2">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${comp.color}15` }}
              >
                <Icon className="w-5 h-5" style={{ color: comp.color }} />
              </div>
              <span className="text-xs text-foreground font-medium">{comp.name}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function VersionVisual() {
  const commits = [
    { id: "a3f2b1", message: "Added auth flow", time: "2m ago", active: true },
    { id: "b7c4e2", message: "Updated schema", time: "1h ago", active: false },
    { id: "c9d5f3", message: "Initial blueprint", time: "3h ago", active: false },
  ]

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-4">
        <GitBranch className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium text-foreground">main</span>
        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">3 commits</span>
      </div>
      {commits.map((commit, i) => (
        <div
          key={commit.id}
          className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 ${
            commit.active ? "bg-primary/5 border-primary/30" : "bg-card border-border/40 hover:border-border"
          }`}
        >
          <div className={`w-3 h-3 rounded-full ${commit.active ? "bg-primary" : "bg-muted-foreground/30"}`} />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <code className="text-xs text-muted-foreground font-mono">{commit.id}</code>
              <span className="text-sm text-foreground truncate">{commit.message}</span>
            </div>
          </div>
          <span className="text-xs text-muted-foreground">{commit.time}</span>
        </div>
      ))}
    </div>
  )
}

function ExportVisual() {
  const formats = [
    { name: "React", ext: ".tsx", color: "#61DAFB" },
    { name: "Vue", ext: ".vue", color: "#4FC08D" },
    { name: "Docs", ext: ".md", color: "#6366F1" },
    { name: "API", ext: ".json", color: "#F59E0B" },
  ]

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        {formats.map((format) => (
          <div
            key={format.name}
            className="bg-card rounded-xl p-4 border border-border/40 hover:border-border transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-foreground">{format.name}</span>
              <code
                className="text-xs px-2 py-0.5 rounded"
                style={{ backgroundColor: `${format.color}15`, color: format.color }}
              >
                {format.ext}
              </code>
            </div>
            <div className="space-y-1.5">
              <div className="h-1.5 bg-muted-foreground/10 rounded-full w-full" />
              <div className="h-1.5 bg-muted-foreground/10 rounded-full w-3/4" />
            </div>
          </div>
        ))}
      </div>
      <button className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors">
        <Zap className="w-4 h-4" />
        <span className="text-sm font-medium">Export All</span>
      </button>
    </div>
  )
}

export function FeaturesGrid() {
  const [activeFeature, setActiveFeature] = useState("ai-generation")
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.05 })

  const renderVisual = () => {
    switch (activeFeature) {
      case "ai-generation":
        return <GenerationVisual />
      case "smart-components":
        return <ComponentsVisual />
      case "version-control":
        return <VersionVisual />
      case "instant-export":
        return <ExportVisual />
      default:
        return <GenerationVisual />
    }
  }

  return (
    <section ref={sectionRef} id="features" className="relative py-24 md:py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left side - Title and accordion */}
          <div
            className={`transition-all duration-700 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground italic mb-12">
              Build Smarter with AI
            </h2>

            <div className="space-y-0">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`border-b border-border/60 transition-all duration-300 ${
                    isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <button onClick={() => setActiveFeature(feature.id)} className="w-full py-5 text-left">
                    <h3
                      className={`text-lg md:text-xl transition-colors duration-300 ${
                        activeFeature === feature.id
                          ? "text-primary font-semibold"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    {activeFeature === feature.id && (
                      <p className="text-muted-foreground text-sm md:text-base mt-2 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                        {feature.description}
                      </p>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Dynamic visual showcase */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="bg-secondary/50 rounded-3xl p-6 md:p-8 border border-border/40">
              <div className="min-h-[280px] transition-all duration-500">{renderVisual()}</div>

              {/* Bottom toolbar */}
              <div className="flex items-center justify-center gap-3 mt-6 pt-4 border-t border-border/30">
                {[Layers, Play, FileCode, Settings, Cpu].map((Icon, i) => (
                  <button key={i} className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
