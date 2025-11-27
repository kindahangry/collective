import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-7xl">
      <div className="flex items-center justify-between px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.jpg"
            alt="Collective"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="text-white font-medium text-sm">Collective</span>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <Link
            href="https://x.com/collective_mkts"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
            aria-label="X (Twitter)"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Link>
          <Link href="/app">
            <Button variant="outline" size="sm">App</Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

