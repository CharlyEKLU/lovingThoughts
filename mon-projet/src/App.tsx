import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import './App.css'

import { useAppSettings } from './hooks/useAppSettings'
import { useTypewriter } from './hooks/useTypewriter'

import { MainPage } from './pages/MainPage'
import { NoPage } from './pages/NoPage'
import { SettingsPage } from './pages/SettingsPage'
import { YesPage } from './pages/YesPage'

import ouiGif from './assets/OUI.gif'
import nonGif from './assets/NON.gif'
import letterBackground from './assets/BackGround.jpg'
import noBackground from './assets/sad-anime-4k.jpg'
import loveSong from './assets/Wiz Khalifa - See You Again ft. Charlie Puth [Official Video] Furious 7 Soundtrack.mp3'

function App() {
  const [isSplashDone, setIsSplashDone] = useState(false)
  const [isGreetingDone, setIsGreetingDone] = useState(false)
  const [currentPage, setCurrentPage] = useState<'main' | 'yes' | 'no' | 'settings'>('main')
  const [returnPage, setReturnPage] = useState<'main' | 'yes' | 'no'>('main')
  const [yesPhase, setYesPhase] = useState<'intro' | 'loading' | 'letter'>('intro')

  const { settings, setSettings, resetSettings, exportSettingsJson } = useAppSettings()

  const question = settings.question

  const { typed: typedQuestion, done: isQuestionDone } = useTypewriter(question, {
    enabled: isGreetingDone && currentPage === 'main',
  })

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsSplashDone(true)
    }, 8000)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [])

  useEffect(() => {
    if (!isSplashDone) return

    setIsGreetingDone(false)

    const timeoutId = window.setTimeout(() => {
      setIsGreetingDone(true)
    }, 4000)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [isSplashDone])

  const openSettings = () => {
    setReturnPage((prev) => {
      if (currentPage === 'settings') return prev
      if (currentPage === 'yes' || currentPage === 'no' || currentPage === 'main') return currentPage
      return prev
    })
    setCurrentPage('settings')
  }

  useEffect(() => {
    if (currentPage !== 'yes') return

    setYesPhase('intro')

    const toLoadingId = window.setTimeout(() => {
      setYesPhase('loading')
    }, 4000)

    const toLetterId = window.setTimeout(() => {
      setYesPhase('letter')
    }, 9000)

    return () => {
      window.clearTimeout(toLoadingId)
      window.clearTimeout(toLetterId)
    }
  }, [currentPage])

  if (currentPage === 'settings') {
    return (
      <SettingsPage
        settings={settings}
        onChange={setSettings}
        onReset={resetSettings}
        onBack={() => setCurrentPage(returnPage)}
        exportJson={exportSettingsJson()}
      />
    )
  }

  if (!isSplashDone) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <motion.button
          type="button"
          onClick={openSettings}
          whileHover={{ y: -2, scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          style={{
            position: 'fixed',
            top: 14,
            right: 14,
            zIndex: 2,
            width: 48,
            height: 48,
            borderRadius: '999px',
            border: '1px solid rgba(255,255,255,0.20)',
            background:
              'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.22), rgba(255,255,255,0.06) 45%, rgba(0,0,0,0.15) 100%), linear-gradient(135deg, rgba(252,32,142,0.40), rgba(120,140,255,0.22))',
            color: 'rgba(255,255,255,0.95)',
            cursor: 'pointer',
            fontSize: '21px',
            fontWeight: 900,
            backdropFilter: 'blur(12px)',
            boxShadow:
              '0 14px 45px rgba(0,0,0,0.45), 0 0 0 6px rgba(252,32,142,0.08), inset 0 0 22px rgba(255,255,255,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            lineHeight: 1,
          }}
          aria-label="Paramètres"
          title="Paramètres"
        >
          <motion.span
            aria-hidden="true"
            animate={{ rotate: [0, 6, 0, -6, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'inline-block' }}
          >
            ⚙
          </motion.span>
        </motion.button>

        <dotlottie-wc
          src="https://lottie.host/41f2e227-88a0-4524-9f48-dece31370cf3/kgVxOyGpz9.lottie"
          style={{ width: '300px', height: '300px' }}
          autoplay
          loop
        ></dotlottie-wc>
      </div>
    )
  }

  if (currentPage === 'yes') {
    return (
      <YesPage
        yesPhase={yesPhase}
        letterBackground={letterBackground}
        loveSong={loveSong}
        songTitle={settings.songTitle}
        songSubtitle={settings.songSubtitle}
        yesLoadingMessage={settings.yesLoadingMessage}
        letterTitle={settings.letterTitle}
        letterBody={settings.letterBody}
        youtubeUrl={settings.youtubeUrl}
      />
    )
  }

  if (currentPage === 'no') {
    return (
      <NoPage
        noBackground={noBackground}
        title={settings.noTitle}
        subtitle={settings.noSubtitle}
        backButtonLabel={settings.backButtonLabel}
        onBack={() => setCurrentPage('main')}
      />
    )
  }

  return (
    <MainPage
      isGreetingDone={isGreetingDone}
      greetingLine1={settings.greetingLine1}
      greetingLine2={settings.greetingLine2}
      typedQuestion={typedQuestion}
      isQuestionDone={isQuestionDone}
      ouiGif={ouiGif}
      nonGif={nonGif}
      yesChoiceLabel={settings.yesChoiceLabel}
      noChoiceLabel={settings.noChoiceLabel}
      onYes={() => setCurrentPage('yes')}
      onNo={() => setCurrentPage('no')}
    />
  )
}

export default App
