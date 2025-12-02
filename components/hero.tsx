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
      <main className="absolute bottom-[clamp(3rem,12vh,8rem)] left-[clamp(0.5rem,4vw,3rem)] md:left-[clamp(1.5rem,5vw,4rem)] z-10 animate-in fade-in slide-in-from-left duration-1000">
        <div className="glass-panel p-[clamp(0.625rem,2vw,2rem)] md:p-[clamp(1.5rem,3vw,2.5rem)] max-w-[clamp(220px,35vw,512px)] md:max-w-[clamp(320px,45vw,640px)] transform hover:translate-y-[-4px] transition-transform duration-300 rounded-sm text-left">
          <p className="font-vt text-[clamp(0.875rem,2.5vw,2rem)] md:text-[clamp(1.5rem,3.5vw,3rem)] lg:text-[clamp(1.75rem,4vw,3.5rem)] text-white leading-relaxed">
            Transparent, on-chain access to <span className="text-pixel-pink font-bold">curated Pokémon vendor markets</span>.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-2 md:bottom-4 z-10 w-full text-center text-white/60 font-press text-[clamp(0.375rem,1vw,0.625rem)] uppercase tracking-widest text-shadow-sm">
        © 2025 Collective Markets
      </footer>
    </div>
  )
}

