"use client"

import { useState } from "react"
import { Sparkles, Key, Server } from "lucide-react"

export function QuickSetupGuide() {
  const [activeTab, setActiveTab] = useState<"token" | "server">("token")

  return (
    <div className="bg-[#0f1419] rounded-2xl border border-white/10 p-6">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-6 h-6 text-purple-500" />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-1">Quick Setup Guide</h2>
          <p className="text-sm text-gray-400">Get started in minutes with our guide</p>
        </div>
      </div>

      <div className="bg-[#0a0e1a] rounded-xl p-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-5 h-5 rounded bg-purple-600/20 flex items-center justify-center">
            <span className="text-xs text-purple-400">📖</span>
          </div>
          <h3 className="font-bold text-sm">QUICK SETUP GUIDE</h3>
        </div>
        <p className="text-xs text-gray-500 mb-4">GET STARTED IN MINUTES</p>

        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveTab("token")}
            className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === "token"
                ? "bg-[#0f1419] text-white border border-white/10"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            <Key className="w-4 h-4 inline mr-2" />
            GET YOUR DISCORD TOKEN
          </button>
          <button
            onClick={() => setActiveTab("server")}
            className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === "server"
                ? "bg-[#0f1419] text-white border border-white/10"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            <Server className="w-4 h-4 inline mr-2" />
            GET SERVER IDS
          </button>
        </div>

        {activeTab === "token" && (
          <div className="space-y-3 text-sm">
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600/20 text-purple-400 flex items-center justify-center text-xs font-bold">
                1
              </span>
              <p className="text-gray-300 pt-0.5">OPEN DISCORD IN YOUR BROWSER AND LOG IN</p>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600/20 text-purple-400 flex items-center justify-center text-xs font-bold">
                2
              </span>
              <p className="text-gray-300 pt-0.5">
                PRESS <kbd className="px-1.5 py-0.5 bg-[#0f1419] border border-white/10 rounded text-xs">F12</kbd> OR
                RIGHT-CLICK AND SELECT "INSPECT"
              </p>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600/20 text-purple-400 flex items-center justify-center text-xs font-bold">
                3
              </span>
              <p className="text-gray-300 pt-0.5">GO TO THE "NETWORK" TAB AND REFRESH THE PAGE</p>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600/20 text-purple-400 flex items-center justify-center text-xs font-bold">
                4
              </span>
              <p className="text-gray-300 pt-0.5">TYPE "API" IN THE FILTER BOX AND CLICK ON ANY REQUEST</p>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600/20 text-purple-400 flex items-center justify-center text-xs font-bold">
                5
              </span>
              <p className="text-gray-300 pt-0.5">
                LOOK FOR "AUTHORIZATION" IN THE REQUEST HEADERS - THAT'S YOUR TOKEN
              </p>
            </div>
          </div>
        )}

        {activeTab === "server" && (
          <div className="space-y-3 text-sm">
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600/20 text-purple-400 flex items-center justify-center text-xs font-bold">
                1
              </span>
              <p className="text-gray-300 pt-0.5">OPEN DISCORD AND GO TO USER SETTINGS</p>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600/20 text-purple-400 flex items-center justify-center text-xs font-bold">
                2
              </span>
              <p className="text-gray-300 pt-0.5">GO TO "ADVANCED" AND ENABLE "DEVELOPER MODE"</p>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600/20 text-purple-400 flex items-center justify-center text-xs font-bold">
                3
              </span>
              <p className="text-gray-300 pt-0.5">RIGHT-CLICK ON ANY SERVER ICON AND SELECT "COPY ID"</p>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600/20 text-purple-400 flex items-center justify-center text-xs font-bold">
                4
              </span>
              <p className="text-gray-300 pt-0.5">PASTE THE SOURCE SERVER ID (SERVER TO COPY FROM)</p>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600/20 text-purple-400 flex items-center justify-center text-xs font-bold">
                5
              </span>
              <p className="text-gray-300 pt-0.5">PASTE THE TARGET SERVER ID (SERVER TO PASTE TO)</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
