'use client'

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export function Navbar() {
  const [time, setTime] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      clearInterval(interval)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-pixel-dark/95 backdrop-blur-sm' 
          : 'bg-transparent'
      }`}
    >
      {/* Top status bar - game HUD style */}
      <div className="bg-pixel-navy border-b-2 border-pixel-blue/50 px-4 py-1 flex items-center justify-between text-[0.6rem]">
        <div className="flex items-center gap-4">
          <span className="font-press text-pixel-green animate-pulse">● LIVE</span>
          <span className="font-vt text-pixel-blue/80 hidden sm:inline">MAINNET</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-vt text-pixel-gold/80 hidden sm:inline">◆ SOL</span>
          <span className="font-press text-pixel-blue">{time}</span>
        </div>
      </div>
      
      {/* Main nav bar */}
      <div className="px-4 md:px-6 py-3 flex items-center justify-between border-b-4 border-pixel-blue/30">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden border-2 border-pixel-blue group-hover:border-pixel-pink transition-colors">
            <div className="absolute inset-0 bg-pixel-pink/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Image
              src="/logo.png"
              alt="Collective Markets"
              width={48}
              height={48}
              className="w-full h-full object-cover"
              style={{ imageRendering: "pixelated" }}
            />
          </div>
          <div className="hidden md:block">
            <span className="font-press text-[0.6rem] text-pixel-gold block tracking-wider">
              COLLECTIVE
            </span>
            <span className="font-vt text-xs text-pixel-blue/60">
              Pokemon Markets
            </span>
          </div>
        </Link>

        {/* Nav links - styled as game menu */}
        <nav className="flex items-center">
          <div className="hidden md:flex items-center border-2 border-pixel-blue/30 bg-pixel-dark/50">
            <NavLink href="https://pokedash.xyz" external>
              <span className="text-pixel-gold">◆</span> Pokedash
            </NavLink>
            <div className="w-px h-6 bg-pixel-blue/30" />
            <NavLink href="https://docs.collective.markets/" external>
              <span className="text-pixel-green">◆</span> Docs
            </NavLink>
            <div className="w-px h-6 bg-pixel-blue/30" />
            <NavLink href="https://x.com/collective_mkts" external>
              <span className="text-pixel-blue">◆</span> Twitter
            </NavLink>
          </div>
          
          {/* CTA Button */}
          <Link
            href="https://app.collective.markets"
            className="ml-4 pixel-button px-4 md:px-6 py-2 md:py-3 font-press text-[0.5rem] md:text-[0.6rem] text-white flex items-center gap-2"
          >
            <span className="animate-pulse">▶</span>
            <span className="hidden sm:inline">PLAY</span>
            <span className="sm:hidden">GO</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}

function NavLink({ 
  href, 
  children, 
  external = false 
}: { 
  href: string; 
  children: React.ReactNode; 
  external?: boolean 
}) {
  const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {}
  
  return (
    <Link
      href={href}
      {...externalProps}
      className="font-vt text-sm md:text-lg text-white/80 hover:text-pixel-pink hover:bg-pixel-pink/10 px-4 py-2 transition-colors flex items-center gap-2"
    >
      {children}
    </Link>
  )
}
