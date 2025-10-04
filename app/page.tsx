import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { CloneConfiguration } from "@/components/clone-configuration"
import { LiveStatistics } from "@/components/live-statistics"
import { ProgressMonitor } from "@/components/progress-monitor"
import { QuickSetupGuide } from "@/components/quick-setup-guide"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      <Header />
      <Hero />

      <main className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <CloneConfiguration />
            <QuickSetupGuide />
          </div>

          <div className="space-y-6">
            <LiveStatistics />
            <ProgressMonitor />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
