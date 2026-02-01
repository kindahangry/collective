/* BRUTALIST ALTERNATIVE HERO
 * Copy this to components/hero.tsx to apply
 * Raw terminal aesthetic with intentional visual chaos
 */

'use client'

import { useState, useEffect } from 'react'

const ASCII_POKEBALL = `
    ▄▄████████▄▄
  ▄██▀▀      ▀▀██▄
 ██▀            ▀██
██                ██
██   ██████████   ██
██──────────────────██
██   ██      ██   ██
██                ██
 ██▄            ▄██
  ▀██▄▄      ▄▄██▀
    ▀▀████████▀▀
`

export function Hero() {
  const [bootSequence, setBootSequence] = useState<string[]>([])
  const [showMain, setShowMain] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  
  const bootMessages = [
    '[BOOT] Initializing COLLECTIVE//PROTOCOL v2.0.25...',
    '[AUTH] Connecting to Solana mainnet...',
    '[DATA] Loading vendor index: 12,847 listings found',
    '[SYNC] Block height: 298,483,291',
    '[OK] System ready. Welcome, trainer.',
    ''
  ]
  
  useEffect(() => {
    let messageIndex = 0
    const bootInterval = setInterval(() => {
      if (messageIndex < bootMessages.length) {
        setBootSequence(prev => [...prev, bootMessages[messageIndex]])
        messageIndex++
      } else {
        clearInterval(bootInterval)
        setTimeout(() => setShowMain(true), 500)
      }
    }, 300)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      clearInterval(bootInterval)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen w-full bg-black text-[#00ff00] overflow-hidden relative">
      {/* Floating ASCII art - follows mouse */}
      <pre 
        className="fixed text-[0.4rem] leading-none text-[#00ff00]/10 pointer-events-none z-0 transition-transform duration-1000"
        style={{
          left: mousePos.x * 0.1,
          top: mousePos.y * 0.1,
        }}
      >
        {ASCII_POKEBALL}
      </pre>
      
      {/* Diagonal stripes background */}
      <div 
        className="absolute inset-0 z-0 opacity-5"
        style={{
          background: 'repeating-linear-gradient(45deg, #00ff00, #00ff00 2px, transparent 2px, transparent 20px)'
        }}
      />
      
      {/* Offset image - brutally positioned */}
      <div 
        className="absolute right-[-10%] bottom-[-5%] w-[70%] h-[80%] z-[1] opacity-60 mix-blend-screen chaos-2"
        style={{
          backgroundImage: "url('/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%) contrast(1.5)",
          clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)"
        }}
      />
      
      {/* Boot sequence terminal */}
      <div className={`fixed top-0 left-0 w-full h-full bg-black z-50 p-8 font-vt transition-opacity duration-500 ${showMain ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="max-w-3xl">
          {bootSequence.map((msg, i) => (
            <div 
              key={i} 
              className="text-sm mb-1"
              style={{ color: msg.includes('[OK]') ? '#00ff00' : msg.includes('[AUTH]') ? '#ffff00' : '#00ff00' }}
            >
              {msg}
            </div>
          ))}
          <span className="terminal-cursor" />
        </div>
      </div>
      
      {/* Main content - offset and chaotic */}
      <main className={`relative z-10 min-h-screen flex flex-col p-6 md:p-12 pt-24 transition-opacity duration-1000 ${showMain ? 'opacity-100' : 'opacity-0'}`}>
        {/* Header - intentionally misaligned */}
        <div className="chaos-1 mb-12">
          <h1 
            className="glitch font-press text-[clamp(2rem,10vw,6rem)] leading-none offset-shadow"
            data-text="COLLECTIVE"
          >
            COLLECTIVE
          </h1>
          <div className="font-vt text-[clamp(1rem,4vw,2rem)] text-[#ffff00] mt-2 ml-4 chaos-3">
            //POKEMON_MARKETS
          </div>
        </div>
        
        {/* Info blocks - brutalist boxes */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          <div className="brutal-box p-6 bg-black chaos-2">
            <div className="font-press text-xs text-[#ff0000] mb-2">[WHAT]</div>
            <p className="font-vt text-xl md:text-2xl leading-relaxed">
              Decentralized marketplace for Pokemon TCG vendors. 
              <span className="text-[#00ffff]">Trustless.</span>{' '}
              <span className="text-[#ff00ff]">Transparent.</span>{' '}
              <span className="text-[#ffff00]">On-chain.</span>
            </p>
          </div>
          
          <div className="brutal-box p-6 bg-black chaos-1">
            <div className="font-press text-xs text-[#ff0000] mb-2">[STATUS]</div>
            <div className="font-vt text-lg space-y-1">
              <div className="terminal-prompt">ACTIVE_VENDORS: <span className="text-[#00ffff]">847</span></div>
              <div className="terminal-prompt">TOTAL_VOLUME: <span className="text-[#ff00ff]">$2.4M</span></div>
              <div className="terminal-prompt">LISTINGS: <span className="text-[#ffff00]">12,847</span></div>
              <div className="terminal-prompt">NETWORK: <span className="text-[#00ff00]">SOLANA_MAINNET</span></div>
            </div>
          </div>
        </div>
        
        {/* CTA - harsh and direct */}
        <div className="mt-12 flex flex-wrap gap-4">
          <a 
            href="https://app.collective.markets"
            className="brutal-box bg-[#00ff00] text-black font-press text-sm px-8 py-4 hover:bg-[#00ffff] transition-colors"
          >
            [ENTER_MARKETPLACE]
          </a>
          <a 
            href="https://docs.collective.markets/"
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-box bg-black font-press text-sm px-8 py-4 hover:bg-[#00ff00] hover:text-black transition-colors"
          >
            [READ_DOCS]
          </a>
        </div>
        
        {/* Scrolling marquee - chaotic energy */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#ff0000] text-black py-2 overflow-hidden z-20">
          <div className="marquee whitespace-nowrap font-press text-xs">
            ★ GOTTA TRADE 'EM ALL ★ COLLECTIVE MARKETS ★ TRUSTLESS POKEMON COMMERCE ★ JOIN THE REVOLUTION ★ GOTTA TRADE 'EM ALL ★ COLLECTIVE MARKETS ★ TRUSTLESS POKEMON COMMERCE ★ JOIN THE REVOLUTION ★
          </div>
        </div>
      </main>
      
      {/* Corner coordinates - brutalist detail */}
      <div className="fixed top-4 right-4 font-vt text-xs text-[#00ff00]/50 z-10">
        X:{mousePos.x} Y:{mousePos.y}
      </div>
    </div>
  )
}
