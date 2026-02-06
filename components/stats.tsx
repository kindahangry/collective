'use client'

import { useInView } from './use-in-view'
import { useEffect, useState } from 'react'

interface StatItem {
  label: string
  value: string
  color: 'pink' | 'blue' | 'gold' | 'green'
}

const stats: StatItem[] = [
  { label: 'TOTAL VALUE LOCKED', value: '$250,000', color: 'gold' },
  { label: 'DEPOSITORS', value: '47', color: 'blue' },
  { label: 'AVG APY', value: '+18.5%', color: 'green' },
  { label: 'CURRENT EPOCH', value: 'Q1 2025', color: 'pink' },
]

const colorMap = {
  pink: {
    text: 'text-pixel-pink',
    border: 'border-pixel-pink',
    glow: 'text-glow-pink',
    shadow: 'rgba(255, 45, 106, 0.3)',
  },
  blue: {
    text: 'text-pixel-blue',
    border: 'border-pixel-blue',
    glow: 'text-glow-blue',
    shadow: 'rgba(0, 212, 255, 0.3)',
  },
  gold: {
    text: 'text-pixel-gold',
    border: 'border-pixel-gold',
    glow: 'text-glow-gold',
    shadow: 'rgba(255, 215, 0, 0.3)',
  },
  green: {
    text: 'text-pixel-green',
    border: 'border-pixel-green',
    shadow: 'rgba(57, 255, 20, 0.3)',
  },
}

function AnimatedValue({ value, isVisible }: { value: string; isVisible: boolean }) {
  const [display, setDisplay] = useState('')

  useEffect(() => {
    if (!isVisible) return
    let frame = 0
    const chars = '0123456789$%+.QABCDEFG'
    const totalFrames = 12
    const interval = setInterval(() => {
      if (frame >= totalFrames) {
        setDisplay(value)
        clearInterval(interval)
        return
      }
      setDisplay(
        value
          .split('')
          .map((char, i) => {
            if (frame > totalFrames - (value.length - i)) return char
            if (/[a-zA-Z$%+. ]/.test(char)) return char
            return chars[Math.floor(Math.random() * 10)]
          })
          .join('')
      )
      frame++
    }, 60)
    return () => clearInterval(interval)
  }, [isVisible, value])

  return <span>{display || '\u00A0'}</span>
}

export function Stats() {
  const { ref, isInView } = useInView(0.2)

  return (
    <section
      ref={ref}
      className="relative w-full py-24 md:py-32 px-4 overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 pixel-grid opacity-50" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section headline */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="font-press text-[0.6rem] md:text-xs text-pixel-blue tracking-[0.4em] mb-3">
            ◆ HIGH SCORES ◆
          </div>
          <h2 className="font-press text-pixel-gold text-glow-gold text-lg md:text-2xl lg:text-3xl">
            BY THE NUMBERS
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => {
            const colors = colorMap[stat.color]
            return (
              <div
                key={stat.label}
                className={`transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 150 + 200}ms` }}
              >
                <div
                  className={`relative border-4 ${colors.border} bg-pixel-dark p-6 text-center`}
                  style={{
                    boxShadow: `0 0 20px ${colors.shadow}, inset 0 0 20px rgba(0,0,0,0.5)`,
                  }}
                >
                  {/* Corner accents */}
                  <div className={`absolute top-0 left-0 w-3 h-3 ${colors.border} border-t-2 border-l-2 border-r-0 border-b-0`} />
                  <div className={`absolute top-0 right-0 w-3 h-3 ${colors.border} border-t-2 border-r-2 border-l-0 border-b-0`} />
                  <div className={`absolute bottom-0 left-0 w-3 h-3 ${colors.border} border-b-2 border-l-2 border-r-0 border-t-0`} />
                  <div className={`absolute bottom-0 right-0 w-3 h-3 ${colors.border} border-b-2 border-r-2 border-l-0 border-t-0`} />

                  <div
                    className={`font-press text-xl md:text-2xl lg:text-3xl ${colors.text} mb-3`}
                    style={{
                      textShadow: `0 0 10px ${colors.shadow}, 0 0 20px ${colors.shadow}`,
                    }}
                  >
                    <AnimatedValue value={stat.value} isVisible={isInView} />
                  </div>
                  <div className="font-vt text-sm md:text-base text-white/50 tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Decorative bottom bar */}
        <div className="mt-12 flex items-center justify-center gap-2">
          <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-pixel-blue/40" />
          <div className="w-2 h-2 bg-pixel-blue/40" />
          <div className="font-press text-[0.4rem] text-pixel-blue/40 tracking-widest">
            LIVE DATA
          </div>
          <div className="w-2 h-2 bg-pixel-blue/40" />
          <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-pixel-blue/40" />
        </div>
      </div>
    </section>
  )
}
