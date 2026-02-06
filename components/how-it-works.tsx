'use client'

import { useInView } from './use-in-view'

interface Step {
  number: string
  title: string
  description: string
  icon: React.ReactNode
  color: 'pink' | 'blue' | 'gold'
}

const steps: Step[] = [
  {
    number: '01',
    title: 'DEPOSIT USDC',
    description:
      'Deposit USDC into the vault smart contract. You receive vault tokens representing your share of the pool.',
    icon: <DepositIcon />,
    color: 'pink',
  },
  {
    number: '02',
    title: 'VENDORS TRADE',
    description:
      'Expert vendors use pooled capital to buy and sell graded Pokémon cards — vintage holos, modern chase cards, and more.',
    icon: <TradeIcon />,
    color: 'blue',
  },
  {
    number: '03',
    title: 'EARN RETURNS',
    description:
      'Your vault tokens increase in value as vendors generate returns. Withdraw quarterly when the epoch closes.',
    icon: <EarnIcon />,
    color: 'gold',
  },
]

const colorMap = {
  pink: {
    text: 'text-pixel-pink',
    border: 'border-pixel-pink',
    bg: 'bg-pixel-pink',
    shadow: 'rgba(255, 45, 106, 0.4)',
    shadowLight: 'rgba(255, 45, 106, 0.15)',
  },
  blue: {
    text: 'text-pixel-blue',
    border: 'border-pixel-blue',
    bg: 'bg-pixel-blue',
    shadow: 'rgba(0, 212, 255, 0.4)',
    shadowLight: 'rgba(0, 212, 255, 0.15)',
  },
  gold: {
    text: 'text-pixel-gold',
    border: 'border-pixel-gold',
    bg: 'bg-pixel-gold',
    shadow: 'rgba(255, 215, 0, 0.4)',
    shadowLight: 'rgba(255, 215, 0, 0.15)',
  },
}

export function HowItWorks() {
  const { ref, isInView } = useInView(0.15)

  return (
    <section ref={ref} className="relative w-full py-24 md:py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 animated-gradient-bg opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Headline */}
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="font-press text-[0.6rem] md:text-xs text-pixel-pink tracking-[0.4em] mb-3">
            ◆ TUTORIAL ◆
          </div>
          <h2 className="font-press text-pixel-gold text-glow-gold text-lg md:text-2xl lg:text-3xl">
            HOW IT WORKS
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 relative">
          {/* Connection arrows (desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-[33%] -translate-y-1/2 -translate-x-1/2 z-20">
            <ArrowConnector />
          </div>
          <div className="hidden lg:block absolute top-1/2 left-[67%] -translate-y-1/2 -translate-x-1/2 z-20">
            <ArrowConnector />
          </div>

          {/* Mobile arrows */}
          <div className="lg:hidden flex justify-center -my-2 relative z-20">
            {/* Rendered between steps via the map below */}
          </div>

          {steps.map((step, i) => {
            const colors = colorMap[step.color]
            return (
              <div key={step.number} className="contents">
                <div
                  className={`transition-all duration-700 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${i * 200 + 200}ms` }}
                >
                  <div
                    className="game-window h-full"
                    style={{
                      boxShadow: `0 0 30px ${colors.shadowLight}`,
                    }}
                  >
                    {/* Window title bar */}
                    <div className="bg-pixel-navy px-4 py-2 border-b-4 border-pixel-blue flex items-center gap-2">
                      <div className={`w-2 h-2 ${colors.bg}`} />
                      <span className="font-press text-[0.45rem] text-pixel-blue tracking-wider">
                        STEP_{step.number}
                      </span>
                    </div>

                    <div className="p-6 md:p-8">
                      {/* Step number */}
                      <div
                        className={`font-press text-4xl md:text-5xl ${colors.text} mb-4 opacity-20`}
                        style={{
                          textShadow: `0 0 20px ${colors.shadow}`,
                        }}
                      >
                        {step.number}
                      </div>

                      {/* Icon */}
                      <div className={`mb-5 ${colors.text}`}>{step.icon}</div>

                      {/* Title */}
                      <h3
                        className={`font-press text-xs md:text-sm ${colors.text} mb-3`}
                      >
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="font-vt text-lg md:text-xl text-white/70 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile arrow between steps */}
                {i < steps.length - 1 && (
                  <div
                    className={`lg:hidden flex justify-center py-2 transition-all duration-700 ${
                      isInView ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ transitionDelay: `${i * 200 + 400}ms` }}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-1 h-4 bg-pixel-blue/50" />
                      <div className="w-3 h-3 border-b-2 border-r-2 border-pixel-blue/50 rotate-45 -mt-1" />
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ArrowConnector() {
  return (
    <div className="flex items-center gap-1">
      <div className="w-6 h-0.5 bg-pixel-blue/40" />
      <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-pixel-blue/40" />
    </div>
  )
}

/* CSS-based pixel art icons */

function DepositIcon() {
  return (
    <div className="w-12 h-12 relative">
      {/* Coin shape */}
      <div className="absolute inset-1 border-2 border-current" />
      <div className="absolute top-[14px] left-[14px] w-5 h-5 flex items-center justify-center font-press text-[0.5rem]">
        $
      </div>
      {/* Arrow down */}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-3 bg-current" />
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-1 bg-current" />
    </div>
  )
}

function TradeIcon() {
  return (
    <div className="w-12 h-12 relative">
      {/* Card 1 */}
      <div className="absolute top-0 left-0 w-7 h-9 border-2 border-current rotate-[-8deg]">
        <div className="w-full h-full flex items-center justify-center font-press text-[0.4rem]">
          ★
        </div>
      </div>
      {/* Card 2 */}
      <div className="absolute top-1 left-4 w-7 h-9 border-2 border-current bg-pixel-dark rotate-[8deg]">
        <div className="w-full h-full flex items-center justify-center font-press text-[0.4rem]">
          ★
        </div>
      </div>
      {/* Swap arrows */}
      <div className="absolute bottom-0 right-0 font-press text-[0.5rem]">⇄</div>
    </div>
  )
}

function EarnIcon() {
  return (
    <div className="w-12 h-12 relative">
      {/* Chart bars going up */}
      <div className="absolute bottom-0 left-0 w-2 h-4 bg-current opacity-40" />
      <div className="absolute bottom-0 left-3 w-2 h-6 bg-current opacity-60" />
      <div className="absolute bottom-0 left-6 w-2 h-8 bg-current opacity-80" />
      <div className="absolute bottom-0 left-9 w-2 h-11 bg-current" />
      {/* Arrow up */}
      <div className="absolute top-0 right-0 font-press text-xs">↑</div>
    </div>
  )
}
