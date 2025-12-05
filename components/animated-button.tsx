"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  variant?: "primary" | "secondary"
}

export function AnimatedButton({ children, className, onClick, variant = "primary" }: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [dimensions, setDimensions] = useState({ width: 120, height: 44 })

  useEffect(() => {
    if (buttonRef.current) {
      setDimensions({
        width: buttonRef.current.offsetWidth,
        height: buttonRef.current.offsetHeight,
      })
    }
  }, [])

  const isPrimary = variant === "primary"

  return (
    <button
      ref={buttonRef}
      className={cn(
        "relative px-6 py-3 cursor-pointer rounded-full text-sm font-medium overflow-hidden transition-all duration-300 flex items-center",
        isPrimary
          ? "bg-accent text-accent-foreground hover:bg-accent/90"
          : "bg-secondary text-secondary-foreground border border-border hover:border-accent/50",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center">{children}</span>

      {/* Border beam animation - travels around the button on hover */}
      {isHovered && isPrimary && (
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div
            className="absolute w-8 h-8 rounded-full blur-md animate-border-beam"
            style={{
              background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)",
              offsetPath: `rect(0 auto auto 0 round ${dimensions.height / 2}px)`,
            }}
          />
        </div>
      )}

      {/* Glow effect */}
      <div
        className={cn(
          "absolute inset-0 rounded-full transition-all duration-300",
          isHovered && isPrimary ? "shadow-[0_0_30px_rgba(120,200,150,0.4),inset_0_0_20px_rgba(255,255,255,0.1)]" : "",
        )}
      />

      {/* Shimmer effect on hover */}
      {isHovered && <div className="absolute inset-0 animate-shimmer rounded-full" />}
    </button>
  )
}
