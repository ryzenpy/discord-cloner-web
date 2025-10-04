"use client"

import { Sparkles, Zap, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToCloneForm = () => {
    const element = document.getElementById("clone-configuration")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-medium text-gray-300">ULTRA-FAST SERVER CLONING TECHNOLOGY</span>
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        </div>

        <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
          <span className="text-white">CLONE DISCORD</span>
          <br />
          <span className="text-white">SERVERS IN</span>
          <br />
          <span className="text-purple-500">SECONDS</span>
        </h1>

        <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
          <span className="text-purple-400 font-semibold">PROFESSIONAL-GRADE</span> server cloning with{" "}
          <span className="text-purple-400 font-semibold">ADVANCED FEATURES</span>,
          <br />
          real-time progress tracking, and enterprise-level reliability.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8"
            onClick={scrollToCloneForm}
          >
            <Zap className="w-5 h-5 mr-2" />
            START CLONING NOW
          </Button>
          <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/5 bg-transparent">
            <BookOpen className="w-5 h-5 mr-2" />
            LEARN MORE
          </Button>
        </div>
      </div>
    </section>
  )
}
