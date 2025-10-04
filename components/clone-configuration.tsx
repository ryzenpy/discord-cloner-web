"use client"

import { useState } from "react"
import { Copy, Settings, Zap, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CloneConfiguration() {
  const [token, setToken] = useState("")
  const [sourceId, setSourceId] = useState("")
  const [targetId, setTargetId] = useState("")
  const [isCloning, setIsCloning] = useState(false)

  const handleClone = () => {
    if (!token || !sourceId || !targetId) {
      alert("Please fill in all fields")
      return
    }

    setIsCloning(true)
    // Simulate cloning process
    setTimeout(() => {
      setIsCloning(false)
      alert("Clone process started! Check the Progress Monitor for updates.")
    }, 2000)
  }

  return (
    <div id="clone-configuration" className="bg-[#0f1419] rounded-2xl border border-white/10 p-6 scroll-mt-6">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center flex-shrink-0">
          <Copy className="w-6 h-6 text-purple-500" />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-1">Clone Configuration</h2>
          <p className="text-sm text-gray-400">Setup your server cloning parameters</p>
        </div>
      </div>

      <div className="bg-[#0a0e1a] rounded-xl p-4 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Settings className="w-4 h-4 text-purple-400" />
          <h3 className="font-bold text-sm">CONFIGURATION</h3>
        </div>
        <p className="text-xs text-gray-500 mb-4">SETUP YOUR CLONING PARAMETERS</p>

        <div className="space-y-4">
          <div>
            <Label className="text-xs font-medium text-gray-400 mb-2 block">
              DISCORD TOKEN <span className="text-red-500">(REQUIRED)</span>
            </Label>
            <Input
              type="password"
              placeholder="Enter your Discord token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              className="bg-[#0f1419] border-white/10 text-white placeholder:text-gray-600"
            />
          </div>

          <div>
            <Label className="text-xs font-medium text-gray-400 mb-2 block">
              SOURCE SERVER ID <span className="text-gray-500">(SERVER TO COPY FROM)</span>
            </Label>
            <Input
              placeholder="Enter source server ID"
              value={sourceId}
              onChange={(e) => setSourceId(e.target.value)}
              className="bg-[#0f1419] border-white/10 text-white placeholder:text-gray-600"
            />
          </div>

          <div>
            <Label className="text-xs font-medium text-gray-400 mb-2 block">
              TARGET SERVER ID <span className="text-gray-500">(SERVER TO PASTE TO)</span>
            </Label>
            <Input
              placeholder="Enter target server ID"
              value={targetId}
              onChange={(e) => setTargetId(e.target.value)}
              className="bg-[#0f1419] border-white/10 text-white placeholder:text-gray-600"
            />
          </div>
        </div>

        <Button
          className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold disabled:opacity-50"
          onClick={handleClone}
          disabled={isCloning}
        >
          {isCloning ? (
            <>
              <div className="w-4 h-4 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              CLONING...
            </>
          ) : (
            <>
              <Zap className="w-4 h-4 mr-2" />
              CLONE SERVER
            </>
          )}
        </Button>

        <div className="mt-4 flex items-start gap-2 text-xs text-gray-500">
          <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p>
              <strong className="text-gray-400">Enter a valid Discord Token</strong> – it's stored locally only.
            </p>
            <p>
              <strong className="text-gray-400">Provide the Source and Target Server IDs.</strong>
            </p>
            <p>
              <strong className="text-gray-400">Click Clone Server</strong> and watch magic happen.
            </p>
            <p>Your data never leaves this page – everything runs right in your browser.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
