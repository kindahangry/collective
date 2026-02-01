'use client'

import { useState, useRef, useEffect } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export function MusicPlayer() {
  const [isMuted, setIsMuted] = useState(false) // Start unmuted
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Try to autoplay on mount
    if (audioRef.current) {
      audioRef.current.volume = 0.3
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay blocked - try on first interaction
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
        audioRef.current.volume = 0.3
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
      <button
        onClick={toggleMute}
        className="fixed bottom-4 right-4 z-50 p-3 bg-[#2a3b8f]/80 backdrop-blur-md border-2 border-white/30 rounded-sm hover:border-pixel-pink transition-all duration-200 group shadow-lg"
        aria-label={isPlaying && !isMuted ? 'Mute music' : 'Play music'}
        title={isPlaying && !isMuted ? 'Mute music' : 'Play music'}
      >
        {!isPlaying || isMuted ? (
          <VolumeX className="w-5 h-5 text-white/70 group-hover:text-pixel-pink transition-colors" />
        ) : (
          <Volume2 className="w-5 h-5 text-pixel-pink animate-pulse" />
        )}
      </button>
    </>
  )
}
