import { Copy, Heart, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b border-white/5 bg-[#0a0e1a]/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600/20 flex items-center justify-center">
              <Copy className="w-5 h-5 text-purple-500" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-sm font-bold tracking-tight">DISCORD SERVER</h1>
              </div>
              <div className="text-lg font-bold text-purple-500 leading-none">CLONER</div>
              <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                <span>Premium Edition</span>
                <span>•</span>
                <span>Developed by S1bt4inMart</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white font-medium">START</Button>
            <Button variant="ghost" className="text-gray-300 hover:text-white" asChild>
              <a href="https://discord.gg/your-invite-code" target="_blank" rel="noopener noreferrer">
                <Users className="w-4 h-4 mr-2" />
                JOIN DISCORD
              </a>
            </Button>
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              <Heart className="w-4 h-4 mr-2" />
              SUPPORT US
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
