'use client'

import { useInView } from './use-in-view'

const features = [
  {
    label: 'FAST',
    description: 'Sub-second transaction finality',
    icon: '⚡',
  },
  {
    label: 'CHEAP',
    description: 'Fraction-of-a-cent gas fees',
    icon: '◆',
  },
  {
    label: 'NATIVE',
    description: 'Built for DeFi from day one',
    icon: '⬡',
  },
]

export function HyperVM() {
  const { ref, isInView } = useInView(0.15)

  return (
    <section ref={ref} className="relative w-full py-24 md:py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 pixel-grid opacity-20" />

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(178, 75, 255, 0.06) 0%, transparent 100%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Headline */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="font-press text-[0.6rem] md:text-xs text-pixel-purple tracking-[0.4em] mb-3">
            ◆ INFRASTRUCTURE ◆
          </div>
          <h2 className="font-press text-pixel-gold text-glow-gold text-lg md:text-2xl lg:text-3xl mb-6">
            BUILT ON HYPEREVM
          </h2>
          <p className="font-vt text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Fast transactions. Low fees. A DeFi-native community that gets it.
          </p>
        </div>

        {/* Feature pills */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {features.map((f, i) => (
            <div
              key={f.label}
              className={`flex items-center gap-3 border-2 border-pixel-purple/40 bg-pixel-dark/80 px-5 py-3 transition-all duration-700 ${
                isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{
                transitionDelay: `${i * 100 + 300}ms`,
                boxShadow: '0 0 15px rgba(178, 75, 255, 0.1)',
              }}
            >
              <span className="text-pixel-purple text-lg">{f.icon}</span>
              <div>
                <div className="font-press text-[0.5rem] text-pixel-purple">{f.label}</div>
                <div className="font-vt text-base text-white/60">{f.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Roadmap teaser */}
        <div
          className={`max-w-2xl mx-auto transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <div className="game-window">
            <div className="bg-pixel-navy px-4 py-2 border-b-4 border-pixel-blue flex items-center gap-2">
              <div className="w-2 h-2 bg-pixel-purple" />
              <span className="font-press text-[0.45rem] text-pixel-blue tracking-wider">
                ROADMAP.EXE
              </span>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="font-press text-xs text-pixel-purple mb-4">
                WHAT&apos;S NEXT
              </h3>
              <div className="space-y-4">
                <RoadmapItem
                  status="live"
                  label="Vault V1 — USDC deposits, vendor trading"
                />
                <RoadmapItem
                  status="next"
                  label="pokeHYPE LST — Liquid staking for the Pokémon economy"
                />
                <RoadmapItem
                  status="future"
                  label="Perpetual contracts via HIP-3 — Trade Pokémon card indices"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function RoadmapItem({
  status,
  label,
}: {
  status: 'live' | 'next' | 'future'
  label: string
}) {
  const statusConfig = {
    live: {
      dot: 'bg-pixel-green animate-pulse',
      text: 'text-pixel-green',
      tag: 'LIVE',
    },
    next: {
      dot: 'bg-pixel-gold',
      text: 'text-pixel-gold',
      tag: 'NEXT',
    },
    future: {
      dot: 'bg-pixel-purple/50',
      text: 'text-pixel-purple',
      tag: 'SOON™',
    },
  }

  const config = statusConfig[status]

  return (
    <div className="flex items-start gap-3">
      <div className="flex flex-col items-center mt-1.5">
        <div className={`w-2.5 h-2.5 ${config.dot}`} />
        <div className="w-px h-full bg-pixel-blue/20 min-h-[8px]" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-0.5">
          <span className={`font-press text-[0.4rem] ${config.text}`}>
            {config.tag}
          </span>
        </div>
        <p className="font-vt text-base md:text-lg text-white/60">{label}</p>
      </div>
    </div>
  )
}
