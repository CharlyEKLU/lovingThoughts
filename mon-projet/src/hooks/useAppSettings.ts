import { useCallback, useMemo, useState } from 'react'

import { defaultSettings } from '../settings/defaultSettings'

import type { AppSettings } from '../settings/defaultSettings'

type SettingsState = {
  settings: AppSettings
  setSettings: (next: AppSettings) => void
  resetSettings: () => void
  exportSettingsJson: () => string
}

const SETTINGS_STORAGE_KEY = 'loving_thoughts_settings_v1'

function safeParseSettings(raw: string | null): AppSettings | null {
  if (!raw) return null
  try {
    const parsed = JSON.parse(raw) as Partial<AppSettings>
    return {
      ...defaultSettings,
      ...parsed,
    }
  } catch {
    return null
  }
}

export function useAppSettings(): SettingsState {
  const [settings, setSettingsState] = useState<AppSettings>(() => {
    const stored = safeParseSettings(window.localStorage.getItem(SETTINGS_STORAGE_KEY))
    return stored ?? defaultSettings
  })

  const setSettings = useCallback((next: AppSettings) => {
    setSettingsState(next)
    window.localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(next))
  }, [])

  const resetSettings = useCallback(() => {
    setSettings(defaultSettings)
  }, [setSettings])

  const exportSettingsJson = useCallback(() => JSON.stringify(settings, null, 2), [settings])

  return useMemo(
    () => ({
      settings,
      setSettings,
      resetSettings,
      exportSettingsJson,
    }),
    [exportSettingsJson, resetSettings, setSettings, settings],
  )
}
