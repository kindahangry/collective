import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { HowItWorks } from "@/components/how-it-works"
import { WhyCollective } from "@/components/why-collective"
import { Vendor } from "@/components/vendor"
import { HyperVM } from "@/components/hypervm"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { MusicPlayer } from "@/components/music-player"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <HowItWorks />
      <WhyCollective />
      <Vendor />
      <HyperVM />
      <FinalCTA />
      <Footer />
      <MusicPlayer />
    </main>
  )
}
