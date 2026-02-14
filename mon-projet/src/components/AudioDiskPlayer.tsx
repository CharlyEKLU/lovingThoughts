import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'

type AudioDiskPlayerProps = {
  src: string
  title: string
  subtitle?: string
  enabled?: boolean
}

export function AudioDiskPlayer({ src, title, subtitle, enabled = true }: AudioDiskPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (!enabled) {
      audio.pause()
      audio.currentTime = 0
      setIsPlaying(false)
    }
  }, [enabled])

  return (
    <motion.div
      initial={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      style={{ position: 'fixed', top: 18, right: 18, zIndex: 2 }}
    >
      <style>
        {`@keyframes loveSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}
      </style>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '0.75rem 0.9rem',
          borderRadius: '18px',
          border: '1px solid rgba(255, 255, 255, 0.20)',
          background: 'rgba(0, 0, 0, 0.25)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 10px 40px rgba(0,0,0,0.35)',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            width: 58,
            height: 58,
            borderRadius: '999px',
            border: '1px solid rgba(255,255,255,0.22)',
            background:
              'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35), rgba(255,255,255,0.08) 45%, rgba(0,0,0,0.35) 100%)',
            boxShadow: 'inset 0 0 18px rgba(0,0,0,0.55), 0 0 24px rgba(255,255,255,0.10)',
            position: 'relative',
            animation: isPlaying ? 'loveSpin 1.45s linear infinite' : 'none',
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '999px',
              background:
                'conic-gradient(from 180deg, rgba(255,255,255,0.08), rgba(252,32,142,0.18), rgba(255,255,255,0.10), rgba(255,255,255,0.08))',
              mixBlendMode: 'screen',
              opacity: 0.85,
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: 12,
              height: 12,
              borderRadius: '999px',
              background: 'rgba(255,255,255,0.75)',
              boxShadow: '0 0 0 6px rgba(0,0,0,0.25)',
            }}
          />
        </div>

        <div style={{ textAlign: 'left' }}>
          <div style={{ fontSize: '0.92rem', fontWeight: 900, opacity: 0.95 }}>{title}</div>
          {subtitle && (
            <div style={{ fontSize: '0.78rem', fontWeight: 750, opacity: 0.75, marginTop: 2 }}>
              {subtitle}
            </div>
          )}
        </div>

        <motion.button
          type="button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={async () => {
            const audio = audioRef.current
            if (!audio) return

            if (audio.paused) {
              try {
                await audio.play()
                setIsPlaying(true)
              } catch {
                setIsPlaying(false)
              }
            } else {
              audio.pause()
              setIsPlaying(false)
            }
          }}
          style={{
            marginLeft: '0.15rem',
            padding: '0.65rem 0.9rem',
            borderRadius: '999px',
            border: '1px solid rgba(255,255,255,0.18)',
            background: isPlaying ? 'rgba(252, 32, 142, 0.92)' : 'rgba(255, 255, 255, 0.12)',
            color: 'rgba(255,255,255,0.95)',
            fontWeight: 900,
            cursor: 'pointer',
            backdropFilter: 'blur(10px)',
          }}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </motion.button>

        <audio ref={audioRef} src={src} preload="auto" onEnded={() => setIsPlaying(false)} />
      </div>
    </motion.div>
  )
}
