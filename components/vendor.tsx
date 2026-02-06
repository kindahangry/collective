'use client'

import { useInView } from './use-in-view'

export function Vendor() {
  const { ref, isInView } = useInView(0.15)

  return (
    <section ref={ref} className="relative w-full py-24 md:py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 animated-gradient-bg opacity-20" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Headline */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="font-press text-[0.6rem] md:text-xs text-pixel-purple tracking-[0.4em] mb-3">
            ◆ GYM LEADER ◆
          </div>
          <h2 className="font-press text-pixel-gold text-glow-gold text-lg md:text-2xl lg:text-3xl">
            MEET OUR FOUNDING VENDOR
          </h2>
        </div>

        {/* Card-frame layout (PSA slab aesthetic) */}
        <div
          className={`transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="relative max-w-3xl mx-auto">
            {/* Outer slab frame */}
            <div
              className="border-4 border-pixel-gold p-1 bg-pixel-dark"
              style={{
                boxShadow:
                  '0 0 40px rgba(255, 215, 0, 0.2), 0 0 80px rgba(255, 215, 0, 0.1), inset 0 0 20px rgba(255, 215, 0, 0.05)',
              }}
            >
              {/* Inner slab border */}
              <div className="border-2 border-pixel-gold/40 p-0">
                {/* Slab header */}
                <div className="bg-pixel-navy border-b-2 border-pixel-gold/30 px-6 py-3 flex items-center justify-between">
                  <div className="font-press text-[0.5rem] md:text-[0.6rem] text-pixel-gold tracking-wider">
                    COLLECTIVE VERIFIED
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pixel-green animate-pulse" />
                    <span className="font-press text-[0.45rem] text-pixel-green">
                      ACTIVE
                    </span>
                  </div>
                </div>

                {/* Main content */}
                <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                  {/* Left: Stat card */}
                  <div className="flex flex-col justify-center">
                    {/* Track record highlight */}
                    <div className="game-window mb-6">
                      <div className="bg-pixel-navy px-3 py-1.5 border-b-4 border-pixel-blue flex items-center gap-2">
                        <div className="w-2 h-2 bg-pixel-gold" />
                        <span className="font-press text-[0.4rem] text-pixel-blue tracking-wider">
                          TRACK_RECORD
                        </span>
                      </div>
                      <div className="p-5 text-center">
                        <div className="flex items-center justify-center gap-3 mb-2">
                          <span className="font-press text-sm md:text-base text-white/60">$20K</span>
                          <span className="font-press text-xs text-pixel-green animate-pulse">→→→</span>
                          <span className="font-press text-lg md:text-xl text-pixel-gold text-glow-gold">
                            $65K
                          </span>
                        </div>
                        <div className="font-press text-pixel-green text-sm md:text-base mb-1"
                          style={{ textShadow: '0 0 10px rgba(57, 255, 20, 0.5)' }}>
                          +225% RETURN
                        </div>
                        <div className="font-vt text-white/40 text-base">
                          8 months
                        </div>
                      </div>
                    </div>

                    {/* Mini stats */}
                    <div className="grid grid-cols-2 gap-3">
                      <MiniStat label="SPECIALTY" value="HOLOS" />
                      <MiniStat label="GRADE AVG" value="PSA 9+" />
                      <MiniStat label="STYLE" value="VALUE" />
                      <MiniStat label="ERA" value="WOTC+" />
                    </div>
                  </div>

                  {/* Right: Description */}
                  <div className="flex flex-col justify-center">
                    <div className="mb-6">
                      <h3 className="font-press text-pixel-pink text-xs md:text-sm mb-4">
                        THE STRATEGY
                      </h3>
                      <p className="font-vt text-lg md:text-xl text-white/70 leading-relaxed mb-4">
                        Our founding vendor specializes in{' '}
                        <span className="text-pixel-gold">graded vintage holos</span>{' '}
                        and{' '}
                        <span className="text-pixel-pink">modern chase cards</span>
                        . Deep market knowledge across WOTC-era through present-day sets.
                      </p>
                      <p className="font-vt text-lg md:text-xl text-white/70 leading-relaxed">
                        Focused on{' '}
                        <span className="text-pixel-blue">value-grade arbitrage</span>{' '}
                        — buying undervalued slabs and selling into demand spikes. Patient,
                        data-driven, consistent.
                      </p>
                    </div>

                    {/* CTA */}
                    <a
                      href="https://docs.collective.markets/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-press text-[0.6rem] md:text-xs text-pixel-blue hover:text-pixel-pink transition-colors group inline-flex items-center gap-2"
                    >
                      <span>Learn More About Our Vendors</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </div>

                {/* Slab footer */}
                <div className="bg-pixel-navy border-t-2 border-pixel-gold/30 px-6 py-2 flex items-center justify-between">
                  <span className="font-vt text-sm text-white/30">
                    VENDOR #001
                  </span>
                  <span className="font-vt text-sm text-pixel-gold/50">
                    ★ FOUNDING MEMBER
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-2 border-pixel-blue/30 bg-pixel-dark/80 px-3 py-2 text-center">
      <div className="font-press text-[0.5rem] text-pixel-blue mb-1">{value}</div>
      <div className="font-vt text-xs text-white/40">{label}</div>
    </div>
  )
}
