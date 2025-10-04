"use client"

import { useState } from "react"
import { Activity, Loader2, CheckCircle2 } from "lucide-react"

type LogEntry = {
  id: string
  message: string
  emoji: string
  timestamp: string
  status: "loading" | "success" | "error"
}

export function ProgressMonitor() {
  const [logs, setLogs] = useState<LogEntry[]>([])
  const [isActive, setIsActive] = useState(false)

  // Demo function to simulate cloning logs
  const startDemo = () => {
    setIsActive(true)
    setLogs([])

    // Add logs progressively
    setTimeout(() => {
      setLogs([
        {
          id: "1",
          message: "Starting Discord server cloning...",
          emoji: "🚀",
          timestamp: new Date().toLocaleTimeString("en-US", { hour12: false }),
          status: "loading",
        },
      ])
    }, 500)

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        {
          id: "2",
          message: "Connecting to Discord API...",
          emoji: "🔌",
          timestamp: new Date().toLocaleTimeString("en-US", { hour12: false }),
          status: "loading",
        },
      ])
    }, 1500)

    setTimeout(() => {
      setLogs((prev) => [
        ...prev.map((log) => ({ ...log, status: "success" as const })),
        {
          id: "3",
          message: `Cloning session started: clone_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          emoji: "✅",
          timestamp: new Date().toLocaleTimeString("en-US", { hour12: false }),
          status: "success",
        },
      ])
    }, 3000)
  }

  return (
    <div className="bg-[#0f1419] rounded-2xl border border-white/10 p-6">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center flex-shrink-0">
            <Activity className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold mb-1">Progress Monitor</h2>
            <p className="text-sm text-gray-400">Live operation tracking and logs</p>
          </div>
        </div>
        {isActive && (
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm font-bold text-green-500">LIVE</span>
          </div>
        )}
      </div>

      <div className="bg-[#0a0e1a] rounded-xl border border-white/5 min-h-[300px]">
        {logs.length === 0 ? (
          <div className="p-12 flex flex-col items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-[#0f1419] border border-white/10 flex items-center justify-center mb-6 relative">
              <Activity className="w-10 h-10 text-gray-600" />
              <div className="absolute inset-0 rounded-full border-2 border-purple-600/30 animate-ping"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-300 mb-2">READY TO CLONE YOUR SERVER...</h3>
            <p className="text-sm text-gray-500 mb-4">Logs will appear here during cloning</p>
            <button onClick={startDemo} className="text-xs text-purple-400 hover:text-purple-300 underline">
              Start Demo
            </button>
          </div>
        ) : (
          <div className="p-4 space-y-3">
            {logs.map((log) => (
              <div
                key={log.id}
                className={`p-4 rounded-lg border transition-all ${
                  log.status === "success" ? "border-green-500/50 bg-green-500/5" : "border-white/5 bg-[#0f1419]"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    {log.status === "loading" && <Loader2 className="w-4 h-4 text-blue-400 animate-spin" />}
                    {log.status === "success" && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-2">
                      <span className="text-base">{log.emoji}</span>
                      <p
                        className={`text-sm font-mono ${log.status === "success" ? "text-green-400" : "text-gray-300"}`}
                      >
                        {log.message}
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 ml-6">{log.timestamp}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
