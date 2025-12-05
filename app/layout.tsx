import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Instrument_Serif } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "IdeaForge | Transform Messy Ideas into Unicorn Blueprints",
  description:
    "Turn chaotic thoughts into visual product maps, AI-powered tech stacks, MVP checklists, and ready-to-build prompts. From idea to SaaS unicorn in record time.",
  keywords: ["SaaS", "startup", "idea validation", "product roadmap", "AI", "MVP", "vibe coding"],
  openGraph: {
    title: "IdeaForge | Transform Messy Ideas into Unicorn Blueprints",
    description:
      "Turn chaotic thoughts into visual product maps, AI-powered tech stacks, MVP checklists, and ready-to-build prompts.",
    type: "website",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#0f0f17",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
