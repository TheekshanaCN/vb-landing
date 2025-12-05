"use client"

import { useEffect, useState } from "react"

const ideas = [
  "A SaaS that stores dreams in DB then converts them to AI videos...",
  "An app that turns voice memos into structured meeting notes...",
  "A platform connecting local farmers directly to restaurants...",
]

export function TypewriterInput() {
  const [text, setText] = useState("")
  const [ideaIndex, setIdeaIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentIdea = ideas[ideaIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentIdea.length) {
            setText(currentIdea.slice(0, charIndex + 1))
            setCharIndex(charIndex + 1)
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (charIndex > 0) {
            setText(currentIdea.slice(0, charIndex - 1))
            setCharIndex(charIndex - 1)
          } else {
            setIsDeleting(false)
            setIdeaIndex((prev) => (prev + 1) % ideas.length)
          }
        }
      },
      isDeleting ? 30 : 50,
    )

    return () => clearTimeout(timeout)
  }, [charIndex, ideaIndex, isDeleting])

  return (
    <div className="relative">
      <div className="p-4 rounded-xl bg-secondary/50 border border-border min-h-[80px]">
        <p className="text-foreground leading-relaxed">
          {text}
          <span className="inline-block w-0.5 h-5 bg-accent ml-1 animate-blink" />
        </p>
      </div>
    </div>
  )
}
