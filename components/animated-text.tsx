"use client"

import { useEffect, useState } from "react"

interface AnimatedTextProps {
  text: string
  delay?: number
  isInView: boolean
}

export function AnimatedText({ text, delay = 0, isInView }: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setIsVisible(true), delay)
      return () => clearTimeout(timer)
    }
  }, [isInView, delay])

  return (
    <span className="inline-block overflow-hidden">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block transition-all duration-500"
          style={{
            transform: isVisible ? "translateY(0)" : "translateY(100%)",
            transitionDelay: `${index * 30}ms`,
            clipPath: isVisible ? "inset(0 0 0 0)" : "inset(100% 0 0 0)",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  )
}
