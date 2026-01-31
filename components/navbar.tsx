import Link from "next/link"
import Image from "next/image"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-[clamp(0.5rem,3vw,2rem)] py-[clamp(0.375rem,2vh,1.25rem)] flex items-center justify-between bg-[#2a3b8f]/80 backdrop-blur-md border-b-2 border-white/20 shadow-lg">
      <div className="flex items-center gap-[clamp(0.375rem,1.5vw,1rem)] group cursor-pointer">
        <div className="relative w-[clamp(24px,4vw,48px)] h-[clamp(24px,4vw,48px)] overflow-hidden rounded-sm border-2 border-white/40 group-hover:border-pixel-pink transition-colors">
          <Image
            src="/logo.png"
            alt="Collective Markets Logo"
            width={40}
            height={40}
            className="w-full h-full object-cover"
            style={{ imageRendering: "pixelated" }}
          />
        </div>
        <span className="font-press text-white text-[clamp(0.375rem,1vw,0.75rem)] md:text-[clamp(0.5rem,1.2vw,0.875rem)] hidden md:block tracking-tight group-hover:text-pixel-pink transition-colors text-outline-dark">
          COLLECTIVE MARKETS
        </span>
      </div>

      <nav className="flex items-center gap-[clamp(0.5rem,2.5vw,2rem)] md:gap-[clamp(1.5rem,3vw,2.5rem)]">
        <Link
          href="#"
          className="font-vt text-[clamp(0.75rem,2vw,1.5rem)] md:text-[clamp(1.125rem,2.5vw,2rem)] text-white hover:text-pixel-pink transition-colors drop-shadow-md"
        >
          Docs
        </Link>
        <Link
          href="https://pokedash.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="font-vt text-[clamp(0.75rem,2vw,1.5rem)] md:text-[clamp(1.125rem,2.5vw,2rem)] text-white hover:text-pixel-pink transition-colors drop-shadow-md"
        >
          Pokedash
        </Link>
        <Link
          href="https://x.com/collective_mkts"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pixel-pink transition-colors drop-shadow-md p-1"
          aria-label="Twitter / X"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[clamp(0.75rem,2vw,1.5rem)] w-[clamp(0.75rem,2vw,1.5rem)] fill-current">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </svg>
        </Link>
        <Link
          href="https://app.collective.markets"
          className="font-press text-[clamp(0.5rem,1.2vw,0.75rem)] px-[clamp(0.5rem,1.5vw,1rem)] py-[clamp(0.25rem,0.8vw,0.5rem)] bg-pixel-pink text-white border-2 border-pixel-dark hover:brightness-110 transition-all shadow-[2px_2px_0_0_rgba(0,0,0,0.4)] hover:shadow-[1px_1px_0_0_rgba(0,0,0,0.4)] hover:translate-x-[1px] hover:translate-y-[1px]"
        >
          Launch App
        </Link>
      </nav>
    </header>
  )
}

