"use client"

import { useRef, useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { FlashlightCard } from "./flashlight-card"
import { Network, Database, Cpu, Zap, Globe, Lock } from "lucide-react"

const nodes = [
  { id: 1, icon: Lock, label: "User Authentication", color: "accent", x: 15, y: 20 },
  { id: 2, icon: Cpu, label: "Core Logic Engine", color: "purple", x: 50, y: 15 },
  { id: 3, icon: Database, label: "Data Persistence", color: "blue", x: 85, y: 25 },
  { id: 4, icon: Zap, label: "AI Processing", color: "yellow", x: 30, y: 60 },
  { id: 5, icon: Network, label: "API Gateway", color: "green", x: 70, y: 65 },
  { id: 6, icon: Globe, label: "Output Interface", color: "orange", x: 50, y: 85 },
]

const connections = [
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 2, to: 4 },
  { from: 4, to: 5 },
  { from: 3, to: 5 },
  { from: 5, to: 6 },
]

export function VisualMapSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })
  const [activeNode, setActiveNode] = useState<number | null>(null)

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      accent: "bg-accent/20 border-accent/50 text-accent",
      purple: "bg-purple-500/20 border-purple-500/50 text-purple-400",
      blue: "bg-blue-500/20 border-blue-500/50 text-blue-400",
      yellow: "bg-yellow-500/20 border-yellow-500/50 text-yellow-400",
      green: "bg-green-500/20 border-green-500/50 text-green-400",
      orange: "bg-orange-500/20 border-orange-500/50 text-orange-400",
    }
    return colors[color] || colors.accent
  }

  return (
    <section ref={sectionRef} className="relative py-32 px-6 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span
            className={`inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6 transition-all duration-700 ${
              isInView ? "translate-y-0 blur-0" : "translate-y-8 blur-sm"
            }`}
          >
            Visual Product Maps
          </span>
          <h2
            className={`font-serif text-4xl md:text-6xl text-foreground mb-6 transition-all duration-700 delay-200 ${
              isInView ? "translate-y-0 blur-0" : "translate-y-8 blur-sm"
            }`}
          >
            See your idea as a
            <br />
            <span className="italic gradient-text">living system</span>
          </h2>
          <p
            className={`max-w-2xl mx-auto text-lg text-muted-foreground transition-all duration-700 delay-400 ${
              isInView ? "translate-y-0 blur-0" : "translate-y-8 blur-sm"
            }`}
          >
            IdeaForge generates interactive node maps showing User Logic, Core Functions, Data Output, Internal Engine,
            and Automation layers—all connected and ready to explore.
          </p>
        </div>

        <div
          className={`relative transition-all duration-1000 delay-600 ${
            isInView ? "translate-y-0 blur-0 scale-100" : "translate-y-16 blur-sm scale-95"
          }`}
        >
          <FlashlightCard className="p-8 md:p-12">
            <div className="relative h-[500px] rounded-xl bg-secondary/30 border border-border overflow-hidden">
              {/* Grid background */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `linear-gradient(var(--accent) 1px, transparent 1px),
                                   linear-gradient(90deg, var(--accent) 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full">
                {connections.map((conn, index) => {
                  const from = nodes.find((n) => n.id === conn.from)
                  const to = nodes.find((n) => n.id === conn.to)
                  if (!from || !to) return null
                  const isActive = activeNode === conn.from || activeNode === conn.to
                  return (
                    <line
                      key={index}
                      x1={`${from.x}%`}
                      y1={`${from.y}%`}
                      x2={`${to.x}%`}
                      y2={`${to.y}%`}
                      stroke={isActive ? "rgba(120, 200, 150, 0.6)" : "rgba(120, 200, 150, 0.2)"}
                      strokeWidth={isActive ? "2" : "1"}
                      strokeDasharray={isActive ? "0" : "4 4"}
                      className="transition-all duration-500"
                    />
                  )
                })}
              </svg>

              {/* Nodes */}
              {nodes.map((node, index) => {
                const Icon = node.icon
                const isActive = activeNode === node.id
                return (
                  <div
                    key={node.id}
                    className={`absolute cursor-pointer group transition-all duration-500 ${
                      isInView ? "opacity-100 scale-100" : "opacity-0 scale-50"
                    }`}
                    style={{
                      left: `${node.x}%`,
                      top: `${node.y}%`,
                      transform: "translate(-50%, -50%)",
                      transitionDelay: `${index * 100 + 700}ms`,
                    }}
                    onMouseEnter={() => setActiveNode(node.id)}
                    onMouseLeave={() => setActiveNode(null)}
                  >
                    <div
                      className={`flex flex-col items-center gap-2 p-4 rounded-xl border backdrop-blur-sm transition-all duration-300 ${getColorClasses(
                        node.color,
                      )} ${isActive ? "scale-110 shadow-lg" : "scale-100"}`}
                    >
                      <Icon className="w-6 h-6" />
                      <span className="text-xs font-medium whitespace-nowrap">{node.label}</span>
                    </div>
                    {isActive && <div className="absolute inset-0 rounded-xl animate-node-pulse" />}
                  </div>
                )
              })}

              {/* Info card on hover */}
              {activeNode && (
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-card/90 backdrop-blur-xl border border-accent/30 shadow-xl">
                  <div className="text-sm text-accent font-medium mb-1">
                    {nodes.find((n) => n.id === activeNode)?.label}
                  </div>
                  <div className="text-xs text-muted-foreground">Connected node in your product architecture</div>
                </div>
              )}
            </div>
          </FlashlightCard>
        </div>
      </div>
    </section>
  )
}
