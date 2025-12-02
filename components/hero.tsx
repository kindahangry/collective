export function Hero() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          imageRendering: "pixelated"
        }}
      >
        {/* No overlay needed for this bright aesthetic, just letting the art shine */}
      </div>

      {/* Content */}
      <main className="absolute bottom-24 left-6 md:left-12 z-10 animate-in fade-in slide-in-from-left duration-1000">
        <div className="glass-panel p-6 md:p-8 max-w-md md:max-w-lg transform hover:translate-y-[-4px] transition-transform duration-300 rounded-sm text-left">
          <p className="font-vt text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed">
            Transparent, on-chain access to <span className="text-pixel-pink font-bold">curated Pokémon vendor markets</span>.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-4 z-10 w-full text-center text-white/60 font-press text-[10px] uppercase tracking-widest text-shadow-sm">
        © 2025 Collective Markets
      </footer>
    </div>
  )
}

