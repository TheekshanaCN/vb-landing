"use client"

import { useEffect, useState } from "react"

const nodes = [
  { id: 1, label: "User Auth", x: 10, y: 20, color: "accent" },
  { id: 2, label: "Core Engine", x: 45, y: 10, color: "purple" },
  { id: 3, label: "AI Process", x: 80, y: 25, color: "blue" },
  { id: 4, label: "Data Store", x: 25, y: 55, color: "green" },
  { id: 5, label: "Output API", x: 65, y: 60, color: "orange" },
]

const connections = [
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 2, to: 4 },
  { from: 3, to: 5 },
  { from: 4, to: 5 },
]

export function MiniNodeMap() {
  const [activeNode, setActiveNode] = useState(0)
  const [visibleNodes, setVisibleNodes] = useState<number[]>([])

  useEffect(() => {
    nodes.forEach((_, index) => {
      setTimeout(() => {
        setVisibleNodes((prev) => [...prev, index])
      }, index * 200)
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % nodes.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const getNodeColor = (color: string) => {
    switch (color) {
      case "accent":
        return "bg-accent/20 border-accent/50 text-accent"
      case "purple":
        return "bg-purple-500/20 border-purple-500/50 text-purple-400"
      case "blue":
        return "bg-blue-500/20 border-blue-500/50 text-blue-400"
      case "green":
        return "bg-green-500/20 border-green-500/50 text-green-400"
      case "orange":
        return "bg-orange-500/20 border-orange-500/50 text-orange-400"
      default:
        return "bg-accent/20 border-accent/50 text-accent"
    }
  }

  return (
    <div className="relative h-32 rounded-xl bg-secondary/30 border border-border overflow-hidden">
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full">
        {connections.map((conn, index) => {
          const from = nodes.find((n) => n.id === conn.from)
          const to = nodes.find((n) => n.id === conn.to)
          if (!from || !to) return null
          const isActive = activeNode === conn.from - 1 || activeNode === conn.to - 1
          return (
            <line
              key={index}
              x1={`${from.x}%`}
              y1={`${from.y + 10}%`}
              x2={`${to.x}%`}
              y2={`${to.y + 10}%`}
              stroke={isActive ? "rgba(120, 200, 150, 0.5)" : "rgba(120, 200, 150, 0.15)"}
              strokeWidth="1"
              strokeDasharray={isActive ? "0" : "4 4"}
              className="transition-all duration-500"
            />
          )
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((node, index) => (
        <div
          key={node.id}
          className={`absolute px-2 py-1 rounded-md border text-xs font-medium transition-all duration-500 ${getNodeColor(node.color)} ${
            visibleNodes.includes(index) ? "opacity-100 scale-100" : "opacity-0 scale-50"
          } ${activeNode === index ? "ring-2 ring-accent/30 scale-110" : ""}`}
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: `translate(-50%, -50%) ${activeNode === index ? "scale(1.1)" : "scale(1)"}`,
          }}
        >
          {node.label}
        </div>
      ))}
    </div>
  )
}
