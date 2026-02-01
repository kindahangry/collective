'use client'

import { useState, useRef, useEffect } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export function MusicPlayer() {
  const [isMuted, setIsMuted] = useState(true) // Start muted (autoplay policies)
  const [hasInteracted, setHasInteracted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Try to play when user first interacts with the page
    const handleFirstInteraction = () => {
      if (!hasInteracted && audioRef.current) {
        setHasInteracted(true)
        audioRef.current.volume = 0.3
        audioRef.current.play().catch(() => {
          // Autoplay blocked, that's fine - user can click the button
        })
      }
    }

    document.addEventListener('click', handleFirstInteraction, { once: true })
    return () => document.removeEventListener('click', handleFirstInteraction)
  }, [hasInteracted])

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = 0.3
        audioRef.current.play().catch(() => {})
        setIsMuted(false)
      } else {
        audioRef.current.pause()
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
      <button
        onClick={toggleMute}
        className="fixed bottom-4 right-4 z-50 p-3 bg-[#2a3b8f]/80 backdrop-blur-md border-2 border-white/30 rounded-sm hover:border-pixel-pink transition-all duration-200 group shadow-lg"
        aria-label={isMuted ? 'Unmute music' : 'Mute music'}
        title={isMuted ? 'Play music' : 'Mute music'}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-white/70 group-hover:text-pixel-pink transition-colors" />
        ) : (
          <Volume2 className="w-5 h-5 text-pixel-pink animate-pulse" />
        )}
      </button>
    </>
  )
}
