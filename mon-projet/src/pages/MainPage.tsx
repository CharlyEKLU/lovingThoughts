import { motion } from 'motion/react'

import { AnimatedLine } from '../components/AnimatedLine'

type MainPageProps = {
  isGreetingDone: boolean
  greetingLine1: string
  greetingLine2: string
  typedQuestion: string
  isQuestionDone: boolean
  ouiGif: string
  nonGif: string
  yesChoiceLabel: string
  noChoiceLabel: string
  onYes: () => void
  onNo: () => void
}

export function MainPage({
  isGreetingDone,
  greetingLine1,
  greetingLine2,
  typedQuestion,
  isQuestionDone,
  ouiGif,
  nonGif,
  yesChoiceLabel,
  noChoiceLabel,
  onYes,
  onNo,
}: MainPageProps) {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {!isGreetingDone ? (
        <motion.div
          initial="hidden"
          animate="visible"
          style={{
            textAlign: 'center',
            padding: '2rem',
            fontWeight: 700,
            letterSpacing: '-0.02em',
          }}
        >
          <div
            style={{
              fontSize: 'clamp(2.2rem, 6vw, 4.5rem)',
              lineHeight: 1.05,
            }}
          >
            <AnimatedLine text={greetingLine1} />
          </div>

          <div
            style={{
              marginTop: '0.75rem',
              fontSize: 'clamp(1.4rem, 3.8vw, 2.6rem)',
              lineHeight: 1.2,
              opacity: 0.92,
            }}
          >
            <AnimatedLine text={greetingLine2} />
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 14, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            textAlign: 'center',
            padding: '2rem',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            maxWidth: 900,
          }}
        >
          <div
            style={{
              fontSize: 'clamp(1.4rem, 3.8vw, 2.6rem)',
              lineHeight: 1.2,
              fontWeight: 750,
              opacity: 0.96,
            }}
          >
            <span>{typedQuestion}</span>
            {!isQuestionDone && (
              <motion.span
                aria-hidden="true"
                animate={{ opacity: [0.15, 1, 0.15] }}
                transition={{ duration: 0.9, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'inline-block', marginLeft: '0.12em' }}
              >
                |
              </motion.span>
            )}
          </div>

          {isQuestionDone && (
            <div
              style={{
                marginTop: '1.1rem',
                width: '100%',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                gap: '1rem',
              }}
            >
              <img
                src={ouiGif}
                alt="OUI"
                style={{
                  width: 'clamp(110px, 18vw, 220px)',
                  height: 'clamp(110px, 18vw, 220px)',
                  objectFit: 'contain',
                  opacity: 0.95,
                }}
              />
              <img
                src={nonGif}
                alt="NON"
                style={{
                  width: 'clamp(110px, 18vw, 220px)',
                  height: 'clamp(110px, 18vw, 220px)',
                  objectFit: 'contain',
                  opacity: 0.95,
                }}
              />
            </div>
          )}

          <div
            style={{
              marginTop: '1.6rem',
              height: '10vh',
              minHeight: '5px',
              width: '100%',
              display: 'flex',
              alignItems: 'stretch',
              justifyContent: 'center',
              borderRadius: '28px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.12)',
              opacity: isQuestionDone ? 1 : 0,
              pointerEvents: isQuestionDone ? 'auto' : 'none',
            }}
          >
            <motion.button
              type="button"
              onClick={onYes}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.99 }}
              style={{
                flex: 1,
                border: 'none',
                background: 'rgba(252, 32, 142, 1)',
                color: 'rgba(255, 255, 255, 1)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.25rem',
              }}
            >
              <div style={{ fontSize: '1.05rem', fontWeight: 900 }}>{yesChoiceLabel}</div>
            </motion.button>

            <div
              aria-hidden="true"
              style={{
                width: '6px',
                background:
                  'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.95) 18%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,0.95) 82%, rgba(255,255,255,0) 100%)',
                boxShadow: '0 0 28px rgba(255,255,255,0.55), 0 0 70px rgba(252,32,142,0.18)',
              }}
            />

            <motion.button
              type="button"
              onClick={onNo}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.99 }}
              style={{
                flex: 1,
                border: 'none',
                background: 'rgba(143, 142, 142, 0.53)',
                color: 'rgba(0, 0, 0, 0.97)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.25rem',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div style={{ fontSize: '1.05rem', fontWeight: 900 }}>{noChoiceLabel}</div>
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  )
}
