'use client'

import { useInView } from './use-in-view'

export function FinalCTA() {
  const { ref, isInView } = useInView(0.2)

  return (
    <section ref={ref} className="relative w-full py-24 md:py-32 px-4 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(255, 45, 106, 0.08) 0%, transparent 100%)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Headline */}
        <div
          className={`mb-10 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="font-press text-[0.6rem] md:text-xs text-pixel-pink tracking-[0.4em] mb-3">
            ◆ PLAYER START ◆
          </div>
          <h2 className="font-press text-pixel-gold text-glow-gold text-lg md:text-2xl lg:text-3xl mb-4">
            READY TO START?
          </h2>
          <p className="font-vt text-xl md:text-2xl text-white/60">
            Join the first on-chain Pokémon card fund. Start earning today.
          </p>
        </div>

        {/* Primary CTA */}
        <div
          className={`mb-8 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <a
            href="https://app.collective.markets"
            className="pixel-button inline-block px-10 md:px-14 py-4 md:py-5 font-press text-sm md:text-base text-white"
          >
            ▶ LAUNCH APP
          </a>
        </div>

        {/* Secondary links */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <a
            href="https://docs.collective.markets/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-press text-[0.6rem] md:text-xs text-pixel-blue hover:text-pixel-pink transition-colors border-2 border-pixel-blue/40 hover:border-pixel-pink/40 px-6 py-3 bg-pixel-dark"
          >
            📖 READ THE DOCS
          </a>
          <a
            href="https://x.com/collective_mkts"
            target="_blank"
            rel="noopener noreferrer"
            className="font-press text-[0.6rem] md:text-xs text-pixel-blue hover:text-pixel-pink transition-colors border-2 border-pixel-blue/40 hover:border-pixel-pink/40 px-6 py-3 bg-pixel-dark"
          >
            🐦 FOLLOW ON TWITTER
          </a>
        </div>

        {/* Questions line */}
        <div
          className={`transition-all duration-700 ${
            isInView ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <p className="font-vt text-base text-white/40">
            Questions?{' '}
            <a
              href="https://x.com/collective_mkts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pixel-blue/60 hover:text-pixel-blue transition-colors"
            >
              DM us on Twitter
            </a>
            {' '}or{' '}
            <a
              href="https://docs.collective.markets/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pixel-blue/60 hover:text-pixel-blue transition-colors"
            >
              check the FAQ
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
