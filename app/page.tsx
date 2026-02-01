import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { MusicPlayer } from "@/components/music-player"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <MusicPlayer />
    </main>
  )
}
