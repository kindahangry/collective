export function Hero() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background Image with subtle animation */}
      <div 
        className="absolute inset-[-10px] z-0 animate-background-float"
        style={{
          backgroundImage: "url('/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          imageRendering: "pixelated"
        }}
      />
      
      {/* Animated cloud overlay - CSS generated */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none animate-clouds-drift opacity-20"
        style={{
          background: `
            radial-gradient(ellipse 100px 60px at 10% 20%, rgba(255,255,255,0.6) 0%, transparent 70%),
            radial-gradient(ellipse 150px 80px at 30% 15%, rgba(255,255,255,0.5) 0%, transparent 70%),
            radial-gradient(ellipse 80px 50px at 60% 25%, rgba(255,255,255,0.5) 0%, transparent 70%),
            radial-gradient(ellipse 120px 70px at 80% 18%, rgba(255,255,255,0.4) 0%, transparent 70%),
            radial-gradient(ellipse 90px 55px at 95% 22%, rgba(255,255,255,0.5) 0%, transparent 70%)
          `,
          backgroundSize: "200% 100%",
          mixBlendMode: "overlay"
        }}
      />

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

