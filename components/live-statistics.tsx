import { Activity, Hash, Shield, Smile, Star } from "lucide-react"

export function LiveStatistics() {
  return (
    <div className="bg-[#0f1419] rounded-2xl border border-white/10 p-6">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-green-600/20 flex items-center justify-center flex-shrink-0">
          <Activity className="w-6 h-6 text-green-500" />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-1">Live Statistics</h2>
          <p className="text-sm text-gray-400">Real-time cloning progress data</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-[#0a0e1a] rounded-xl p-4 border border-white/5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center">
              <Hash className="w-4 h-4 text-blue-400" />
            </div>
            <span className="text-xs font-medium text-gray-400">CHANNELS</span>
          </div>
          <div className="text-3xl font-bold">0</div>
        </div>

        <div className="bg-[#0a0e1a] rounded-xl p-4 border border-white/5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-green-600/20 flex items-center justify-center">
              <Shield className="w-4 h-4 text-green-400" />
            </div>
            <span className="text-xs font-medium text-gray-400">ROLES</span>
          </div>
          <div className="text-3xl font-bold">0</div>
        </div>

        <div className="bg-[#0a0e1a] rounded-xl p-4 border border-white/5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-yellow-600/20 flex items-center justify-center">
              <Smile className="w-4 h-4 text-yellow-400" />
            </div>
            <span className="text-xs font-medium text-gray-400">EMOJIS</span>
          </div>
          <div className="text-3xl font-bold">0</div>
        </div>

        <div className="bg-[#0a0e1a] rounded-xl p-4 border border-white/5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-purple-600/20 flex items-center justify-center">
              <Star className="w-4 h-4 text-purple-400" />
            </div>
            <span className="text-xs font-medium text-gray-400">CATEGORIES</span>
          </div>
          <div className="text-3xl font-bold">0</div>
        </div>
      </div>

      <div className="bg-[#0a0e1a] rounded-xl p-4 border border-white/5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-gray-400">OVERALL PROGRESS</span>
          <span className="text-xl font-bold">0%</span>
        </div>
        <div className="w-full h-2 bg-[#0f1419] rounded-full overflow-hidden">
          <div className="h-full bg-purple-600 rounded-full" style={{ width: "0%" }}></div>
        </div>
      </div>
    </div>
  )
}
