import Link from "next/link"
import Image from "next/image"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between bg-[#2a3b8f]/80 backdrop-blur-md border-b-2 border-white/20 shadow-lg">
      <div className="flex items-center gap-4 group cursor-pointer">
        <div className="relative w-10 h-10 overflow-hidden rounded-sm border-2 border-white/40 group-hover:border-pixel-pink transition-colors">
          <Image 
            src="/logo.png" 
            alt="Collective Markets Logo" 
            width={40}
            height={40}
            className="w-full h-full object-cover" 
            style={{ imageRendering: "pixelated" }} 
          />
        </div>
        <span className="font-press text-white text-xs md:text-sm hidden md:block tracking-tight group-hover:text-pixel-pink transition-colors text-outline-dark">
          COLLECTIVE MARKETS
        </span>
      </div>

      <nav className="flex items-center gap-6 md:gap-8">
        <Link 
          href="#" 
          className="font-vt text-xl md:text-2xl text-white hover:text-pixel-pink transition-colors drop-shadow-md"
        >
          Docs
        </Link>
        <Link 
          href="https://pokedash.xyz" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="font-vt text-xl md:text-2xl text-white hover:text-pixel-pink transition-colors drop-shadow-md"
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
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </svg>
        </Link>
      </nav>
    </header>
  )
}

