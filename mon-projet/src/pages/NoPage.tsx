import { motion } from 'motion/react'

type NoPageProps = {
  noBackground: string
  title: string
  subtitle: string
  backButtonLabel: string
  onBack: () => void
}

export function NoPage({ noBackground, title, subtitle, backButtonLabel, onBack }: NoPageProps) {
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
      <>
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundImage: `url(${noBackground})`,
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
              'linear-gradient(180deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.38) 40%, rgba(0,0,0,0.72) 100%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
      </>

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
          <div style={{ fontSize: 'clamp(2rem, 5.4vw, 4rem)', fontWeight: 800 }}>{title}</div>
          <div
            style={{
              marginTop: '0.75rem',
              fontSize: 'clamp(1.15rem, 2.8vw, 1.8rem)',
              fontWeight: 650,
              opacity: 0.95,
            }}
          >
            {subtitle}
          </div>

          <motion.button
            type="button"
            onClick={onBack}
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            style={{
              marginTop: '1.5rem',
              padding: '0.85rem 1.15rem',
              borderRadius: '999px',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              background: 'rgba(255, 255, 255, 0.10)',
              color: 'rgba(255,255,255,0.92)',
              fontWeight: 700,
              backdropFilter: 'blur(10px)',
              cursor: 'pointer',
            }}
          >
            {backButtonLabel}
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}
