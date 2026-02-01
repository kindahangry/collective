'use client'

import { useState, useRef, useEffect } from 'react'

export function MusicPlayer() {
  const [isMuted, setIsMuted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.25
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          const handleFirstInteraction = () => {
            if (audioRef.current && !isMuted) {
              audioRef.current.play()
                .then(() => setIsPlaying(true))
                .catch(() => {})
            }
          }
          document.addEventListener('click', handleFirstInteraction, { once: true })
        })
    }
  }, [])

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted || !isPlaying) {
        audioRef.current.volume = 0.25
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true)
            setIsMuted(false)
          })
          .catch(() => {})
      } else {
        audioRef.current.pause()
        setIsPlaying(false)
        setIsMuted(true)
      }
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/littleroot-town.mp3"
        loop
        preload="auto"
      />
      
      {/* Game-style music control panel */}
      <div 
        className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${
          isExpanded ? 'w-64' : 'w-auto'
        }`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="bg-pixel-dark border-4 border-pixel-blue flex items-center overflow-hidden"
          style={{
            boxShadow: '4px 4px 0 rgba(0, 212, 255, 0.3)'
          }}
        >
          {/* Expanded info */}
          <div className={`overflow-hidden transition-all duration-300 ${
            isExpanded ? 'w-48 opacity-100' : 'w-0 opacity-0'
          }`}>
            <div className="px-3 py-2 border-r-2 border-pixel-blue/30">
              <div className="font-press text-[0.4rem] text-pixel-gold truncate">
                ♪ NOW PLAYING
              </div>
              <div className="font-vt text-sm text-white truncate">
                Littleroot Town
              </div>
              {/* Animated bars */}
              <div className="flex items-end gap-1 h-3 mt-1">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 bg-pixel-green transition-all duration-150"
                    style={{
                      height: isPlaying && !isMuted 
                        ? `${Math.random() * 100}%` 
                        : '20%',
                      animation: isPlaying && !isMuted 
                        ? `pulse ${0.3 + i * 0.1}s ease-in-out infinite` 
                        : 'none'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Play/Pause button */}
          <button
            onClick={toggleMute}
            className="p-3 hover:bg-pixel-pink/20 transition-colors flex items-center justify-center min-w-[48px]"
            aria-label={isPlaying && !isMuted ? 'Pause music' : 'Play music'}
          >
            {!isPlaying || isMuted ? (
              <span className="font-press text-pixel-blue text-lg">▶</span>
            ) : (
              <span className="font-press text-pixel-pink text-lg animate-pulse">❚❚</span>
            )}
          </button>
        </div>
      </div>
    </>
  )
}
