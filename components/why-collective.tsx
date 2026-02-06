'use client'

import { useInView } from './use-in-view'

interface Pillar {
  icon: React.ReactNode
  title: string
  description: string
  color: 'pink' | 'blue' | 'gold' | 'green'
}

const pillars: Pillar[] = [
  {
    icon: <EyeIcon />,
    title: 'TRANSPARENT',
    description:
      'Every trade, deposit, and withdrawal is recorded on-chain. Full visibility into vault performance — no black boxes.',
    color: 'blue',
  },
  {
    icon: <ShieldIcon />,
    title: 'CURATED',
    description:
      'Only vetted, trusted vendors manage capital. Rigorous track record requirements before any vendor is approved.',
    color: 'pink',
  },
  {
    icon: <DropIcon />,
    title: 'LIQUID',
    description:
      'Quarterly withdrawal windows let you exit on your schedule. No lockups forever — your capital stays accessible.',
    color: 'green',
  },
  {
    icon: <BlockIcon />,
    title: 'COMPOSABLE',
    description:
      'Vault tokens are standard ERC-20s. Hold, transfer, or integrate them into other DeFi protocols.',
    color: 'gold',
  },
]

const colorMap = {
  pink: {
    text: 'text-pixel-pink',
    border: 'border-pixel-pink',
    shadow: 'rgba(255, 45, 106, 0.3)',
    shadowLight: 'rgba(255, 45, 106, 0.1)',
  },
  blue: {
    text: 'text-pixel-blue',
    border: 'border-pixel-blue',
    shadow: 'rgba(0, 212, 255, 0.3)',
    shadowLight: 'rgba(0, 212, 255, 0.1)',
  },
  gold: {
    text: 'text-pixel-gold',
    border: 'border-pixel-gold',
    shadow: 'rgba(255, 215, 0, 0.3)',
    shadowLight: 'rgba(255, 215, 0, 0.1)',
  },
  green: {
    text: 'text-pixel-green',
    border: 'border-pixel-green',
    shadow: 'rgba(57, 255, 20, 0.3)',
    shadowLight: 'rgba(57, 255, 20, 0.1)',
  },
}

export function WhyCollective() {
  const { ref, isInView } = useInView(0.1)

  return (
    <section ref={ref} className="relative w-full py-24 md:py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 pixel-grid opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Headline */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="font-press text-[0.6rem] md:text-xs text-pixel-green tracking-[0.4em] mb-3">
            ◆ SELECT YOUR CLASS ◆
          </div>
          <h2 className="font-press text-pixel-gold text-glow-gold text-lg md:text-2xl lg:text-3xl">
            WHY COLLECTIVE?
          </h2>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, i) => {
            const colors = colorMap[pillar.color]
            return (
              <div
                key={pillar.title}
                className={`transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${i * 150 + 200}ms` }}
              >
                <div
                  className={`pixel-border h-full p-6 md:p-8 bg-pixel-dark relative group hover:scale-[1.02] transition-transform duration-300`}
                  style={{
                    borderColor: `var(--color-pixel-${pillar.color})`,
                    boxShadow: `0 0 20px ${colors.shadowLight}, inset 0 0 30px rgba(0,0,0,0.5)`,
                  }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at center, ${colors.shadowLight} 0%, transparent 70%)`,
                    }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`${colors.text} mb-4`}>{pillar.icon}</div>

                    {/* Title */}
                    <h3 className={`font-press text-xs md:text-sm ${colors.text} mb-3`}>
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="font-vt text-lg md:text-xl text-white/70 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* CSS pixel art icons */

function EyeIcon() {
  return (
    <div className="w-10 h-10 relative flex items-center justify-center">
      {/* Eye shape */}
      <div className="w-10 h-6 border-2 border-current relative flex items-center justify-center"
        style={{ clipPath: 'polygon(0% 50%, 25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%)' }}>
      </div>
      <div className="absolute w-3 h-3 bg-current" />
    </div>
  )
}

function ShieldIcon() {
  return (
    <div className="w-10 h-10 relative">
      {/* Shield body */}
      <div
        className="w-10 h-10 border-2 border-current"
        style={{
          clipPath: 'polygon(50% 0%, 100% 15%, 100% 60%, 50% 100%, 0% 60%, 0% 15%)',
        }}
      />
      {/* Checkmark */}
      <div className="absolute top-3 left-2.5 font-press text-[0.5rem] text-pixel-dark">✓</div>
    </div>
  )
}

function DropIcon() {
  return (
    <div className="w-10 h-10 relative flex items-center justify-center">
      {/* Water drop pixel art */}
      <div className="w-2 h-2 bg-current absolute top-0 left-1/2 -translate-x-1/2" />
      <div className="w-4 h-2 bg-current absolute top-2 left-1/2 -translate-x-1/2" />
      <div className="w-6 h-2 bg-current absolute top-4 left-1/2 -translate-x-1/2" />
      <div className="w-4 h-2 bg-current absolute top-6 left-1/2 -translate-x-1/2" />
      <div className="w-2 h-2 bg-current absolute top-8 left-1/2 -translate-x-1/2" />
    </div>
  )
}

function BlockIcon() {
  return (
    <div className="w-10 h-10 relative">
      {/* Interlocking blocks */}
      <div className="absolute top-0 left-0 w-5 h-5 border-2 border-current" />
      <div className="absolute top-2.5 left-2.5 w-5 h-5 border-2 border-current bg-pixel-dark" />
      <div className="absolute top-5 left-5 w-5 h-5 border-2 border-current bg-pixel-dark" />
    </div>
  )
}
