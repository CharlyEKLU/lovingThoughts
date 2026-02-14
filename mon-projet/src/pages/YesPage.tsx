import { motion } from 'motion/react'

import { AudioDiskPlayer } from '../components/AudioDiskPlayer'

type YesPageProps = {
  yesPhase: 'intro' | 'loading' | 'letter'
  letterBackground: string
  loveSong: string
  songTitle: string
  songSubtitle: string
  yesLoadingMessage: string
  letterTitle: string
  letterBody: string
  youtubeUrl: string
}

export function YesPage({
  yesPhase,
  letterBackground,
  loveSong,
  songTitle,
  songSubtitle,
  yesLoadingMessage,
  letterTitle,
  letterBody,
  youtubeUrl,
}: YesPageProps) {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      {yesPhase === 'letter' && (
        <>
          <div
            aria-hidden="true"
            style={{
              position: 'fixed',
              inset: 0,
              backgroundImage: `url(${letterBackground})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              zIndex: 0,
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: 'fixed',
              inset: 0,
              background:
                'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.28) 40%, rgba(0,0,0,0.60) 100%)',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />
        </>
      )}

      {yesPhase === 'letter' && (
        <AudioDiskPlayer src={loveSong} title={songTitle} subtitle={songSubtitle} enabled />
      )}

      {yesPhase === 'letter' && youtubeUrl.trim() !== '' && (
        <motion.a
          href={youtubeUrl}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: -8, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
          style={{
            position: 'fixed',
            top: 92,
            right: 18,
            zIndex: 2,
            padding: '0.65rem 0.9rem',
            borderRadius: '999px',
            border: '1px solid rgba(255,255,255,0.18)',
            background: 'rgba(255, 255, 255, 0.10)',
            color: 'rgba(255,255,255,0.92)',
            textDecoration: 'none',
            fontWeight: 850,
            backdropFilter: 'blur(12px)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.30)',
          }}
        >
          Voir sur YouTube
        </motion.a>
      )}

      <div
        style={{
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '2rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 14, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: 760, margin: '0 auto' }}
        >
          {yesPhase === 'intro' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <dotlottie-wc
                src="https://lottie.host/ebd665ca-57f0-4226-b0fc-db0977206084/KtXw4hwOfE.lottie"
                style={{ width: '300px', height: '300px' }}
                autoplay
                loop
              ></dotlottie-wc>
            </motion.div>
          )}

          {yesPhase === 'loading' && (
            <motion.div
              initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                marginTop: '0.25rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <dotlottie-wc
                src="https://lottie.host/63f56b69-754c-460f-9a1e-900f37b41919/EW3DPqgSac.lottie"
                style={{ width: '300px', height: '300px' }}
                autoplay
                loop
              ></dotlottie-wc>

              <motion.div
                initial={{ opacity: 0, y: 8, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                style={{
                  marginTop: '0.5rem',
                  fontSize: 'clamp(1.05rem, 2.4vw, 1.35rem)',
                  fontWeight: 800,
                  lineHeight: 1.3,
                  padding: '0.85rem 1.1rem',
                  borderRadius: '18px',
                  border: '1px solid rgba(255, 255, 255, 0.16)',
                  background: 'rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <span>{yesLoadingMessage}</span>
                <motion.span
                  aria-hidden="true"
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1.1, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }}
                >
                  …
                </motion.span>
              </motion.div>
            </motion.div>
          )}

          {yesPhase === 'letter' && (
            <motion.div
              initial={{ opacity: 0, y: 14, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{ textAlign: 'left' }}
            >
              <div
                style={{
                  padding: '1.35rem 1.35rem 1.45rem 5.1rem',
                  borderRadius: '14px',
                  border: '1px solid rgba(255, 255, 255, 0.20)',
                  backgroundColor: 'rgba(255, 253, 248, 0.92)',
                  backgroundImage:
                    'linear-gradient(to right, transparent 0 58px, rgba(255, 92, 126, 0.55) 58px 60px, transparent 60px 100%), repeating-linear-gradient(to bottom, rgba(33, 63, 99, 0.18) 0 1px, transparent 1px 30px)',
                  boxShadow: '0 18px 55px rgba(0,0,0,0.35)',
                  color: 'rgba(24, 22, 20, 0.95)',
                  minHeight: 'clamp(320px, 52vh, 560px)',
                }}
              >
                <div style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '0.75rem' }}>
                  {letterTitle}
                </div>
                <div
                  style={{
                    fontSize: '1.05rem',
                    lineHeight: 1.6,
                    fontWeight: 650,
                    opacity: 0.92,
                    whiteSpace: 'pre-line',
                  }}
                >
                  {letterBody}
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
