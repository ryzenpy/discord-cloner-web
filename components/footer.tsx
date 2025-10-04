import { Copy, Shield, Activity } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 mt-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600/20 flex items-center justify-center">
              <Copy className="w-5 h-5 text-purple-500" />
            </div>
            <div>
              <h3 className="font-bold text-sm">S1bt4inMart Cloner</h3>
              <p className="text-xs text-gray-500">Professional-grade server cloning</p>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Shield className="w-4 h-4" />
              <span>Secure by design</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Activity className="w-4 h-4" />
              <span>Real-time progress</span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Community
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Setup Guide
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
