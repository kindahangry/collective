'use client'

import { useState, useEffect } from 'react'

export function Hero() {
  const [typedText, setTypedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [statsVisible, setStatsVisible] = useState(false)
  const fullText = "TRANSPARENT • ON-CHAIN • UNSTOPPABLE"
  
  useEffect(() => {
    let index = 0
    const typeInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => setStatsVisible(true), 300)
      }
    }, 50)
    
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)
    
    return () => {
      clearInterval(typeInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  return (
    <div className="min-h-screen w-full relative overflow-hidden flex flex-col">
      {/* Animated background layer */}
      <div className="absolute inset-0 z-0 animated-gradient-bg pixel-grid" />
      
      {/* Background Image with parallax-like depth */}
      <div 
        className="absolute inset-[-20px] z-[1]"
        style={{
          backgroundImage: "url('/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          imageRendering: "pixelated",
          filter: "brightness(0.85) saturate(1.2)"
        }}
      />
      
      {/* Gradient overlay for depth */}
      <div 
        className="absolute inset-0 z-[2]"
        style={{
          background: `
            linear-gradient(to bottom, 
              rgba(15, 15, 35, 0.3) 0%, 
              transparent 30%,
              transparent 60%,
              rgba(15, 15, 35, 0.8) 100%
            )
          `
        }}
      />
      
      {/* Animated particles/stars */}
      <div className="absolute inset-0 z-[3] overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-pixel-gold rounded-none animate-pulse-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.6 + Math.random() * 0.4
            }}
          />
        ))}
      </div>

      {/* Main content area */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pt-24 pb-32">
        {/* Logo/Title area */}
        <div className="text-center mb-8 animate-slide-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
          <h1 className="font-press text-pixel-gold text-glow-gold text-[clamp(1.5rem,6vw,4rem)] leading-tight tracking-wider">
            COLLECTIVE
          </h1>
          <div className="font-press text-pixel-blue text-glow-blue text-[clamp(0.6rem,2vw,1.2rem)] mt-2 tracking-[0.3em]">
            M A R K E T S
          </div>
        </div>

        {/* Game-style text box */}
        <div className="game-window max-w-3xl w-full mx-4 animate-slide-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
          {/* Window title bar */}
          <div className="bg-pixel-navy px-4 py-2 border-b-4 border-pixel-blue flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-pixel-pink" />
              <div className="w-3 h-3 bg-pixel-gold" />
              <div className="w-3 h-3 bg-pixel-green" />
            </div>
            <span className="font-press text-[0.5rem] text-pixel-blue tracking-wider">SYSTEM.MSG</span>
            <div className="w-12" />
          </div>
          
          {/* Content */}
          <div className="p-6 md:p-8">
            <p className="font-vt text-[clamp(1.2rem,3vw,2.5rem)] text-white leading-relaxed mb-6">
              Access <span className="text-pixel-pink text-glow-pink font-bold">curated Pokémon vendor markets</span> with{' '}
              <span className="text-pixel-blue">trustless verification</span> and{' '}
              <span className="text-pixel-gold">instant settlement</span>.
            </p>
            
            {/* Typing effect tagline */}
            <div className="font-press text-[clamp(0.4rem,1.2vw,0.8rem)] text-pixel-green h-6 mb-6">
              <span className="text-glow-gold">{typedText}</span>
              <span className={`text-pixel-pink ${showCursor ? 'opacity-100' : 'opacity-0'}`}>█</span>
            </div>
            
            {/* Animated stats */}
            <div className={`grid grid-cols-3 gap-4 transition-all duration-500 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <StatBox label="ACTIVE TRADERS" value="2.4K+" color="pink" />
              <StatBox label="VOLUME (24H)" value="$847K" color="blue" />
              <StatBox label="LISTINGS" value="12.8K" color="gold" />
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-slide-up opacity-0" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
          <a 
            href="https://app.collective.markets" 
            className="pixel-button px-8 py-4 font-press text-[clamp(0.5rem,1.5vw,0.9rem)] text-white text-center"
          >
            ▶ LAUNCH APP
          </a>
          <a 
            href="https://docs.collective.markets/" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 font-press text-[clamp(0.5rem,1.5vw,0.9rem)] text-pixel-blue text-center border-4 border-pixel-blue bg-pixel-dark hover:bg-pixel-navy transition-colors"
            style={{
              boxShadow: '8px 8px 0 var(--color-pixel-dark)'
            }}
          >
            📖 READ DOCS
          </a>
        </div>
      </main>

      {/* Bottom decorative bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-16 bg-gradient-to-t from-pixel-dark to-transparent" />
      
      {/* Corner decorations */}
      <CornerDecoration position="top-left" />
      <CornerDecoration position="top-right" />
      <CornerDecoration position="bottom-left" />
      <CornerDecoration position="bottom-right" />

      {/* Footer */}
      <footer className="absolute bottom-4 z-10 w-full text-center">
        <span className="font-press text-[0.5rem] text-pixel-blue/60 tracking-widest">
          © 2025 COLLECTIVE MARKETS • GOTTA TRADE 'EM ALL
        </span>
      </footer>
    </div>
  )
}

function StatBox({ label, value, color }: { label: string; value: string; color: 'pink' | 'blue' | 'gold' }) {
  const colorClasses = {
    pink: 'border-pixel-pink text-pixel-pink',
    blue: 'border-pixel-blue text-pixel-blue', 
    gold: 'border-pixel-gold text-pixel-gold'
  }
  
  return (
    <div className={`border-2 ${colorClasses[color]} bg-pixel-dark/50 p-3 text-center`}>
      <div className="font-press text-[clamp(0.6rem,2vw,1.2rem)] mb-1">{value}</div>
      <div className="font-vt text-[clamp(0.6rem,1.5vw,1rem)] text-white/60">{label}</div>
    </div>
  )
}

function CornerDecoration({ position }: { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) {
  const positionClasses = {
    'top-left': 'top-20 left-4 rotate-0',
    'top-right': 'top-20 right-4 rotate-90',
    'bottom-left': 'bottom-20 left-4 -rotate-90',
    'bottom-right': 'bottom-20 right-4 rotate-180'
  }
  
  return (
    <div className={`absolute ${positionClasses[position]} z-10 hidden lg:block`}>
      <svg width="40" height="40" viewBox="0 0 40 40" className="text-pixel-blue/30">
        <rect x="0" y="0" width="8" height="8" fill="currentColor" />
        <rect x="0" y="12" width="8" height="8" fill="currentColor" />
        <rect x="0" y="24" width="8" height="8" fill="currentColor" />
        <rect x="12" y="0" width="8" height="8" fill="currentColor" />
        <rect x="24" y="0" width="8" height="8" fill="currentColor" />
      </svg>
    </div>
  )
}
