export function Footer() {
  return (
    <footer className="relative w-full px-4 pb-8 pt-4">
      {/* Pixel art divider */}
      <div className="max-w-4xl mx-auto mb-8 flex items-center justify-center gap-1">
        {Array.from({ length: 32 }).map((_, i) => (
          <div
            key={i}
            className="w-2 h-2"
            style={{
              backgroundColor:
                i % 4 === 0
                  ? 'var(--color-pixel-pink)'
                  : i % 4 === 1
                  ? 'var(--color-pixel-blue)'
                  : i % 4 === 2
                  ? 'var(--color-pixel-gold)'
                  : 'var(--color-pixel-green)',
              opacity: 0.3,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-6">
          <a
            href="https://docs.collective.markets/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-vt text-base text-white/40 hover:text-pixel-blue transition-colors"
          >
            Docs
          </a>
          <span className="hidden sm:inline text-white/20">◆</span>
          <a
            href="https://app.collective.markets"
            className="font-vt text-base text-white/40 hover:text-pixel-blue transition-colors"
          >
            App
          </a>
          <span className="hidden sm:inline text-white/20">◆</span>
          <a
            href="https://x.com/collective_mkts"
            target="_blank"
            rel="noopener noreferrer"
            className="font-vt text-base text-white/40 hover:text-pixel-blue transition-colors"
          >
            Twitter
          </a>
        </div>

        {/* Company info */}
        <div className="text-center space-y-1">
          <p className="font-press text-[0.4rem] md:text-[0.5rem] text-white/20 tracking-wider">
            BUILT BY COLLECTIVE MARKETS, LLC
          </p>
          <p className="font-vt text-sm text-white/15">
            © 2025 Collective Markets. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
