import { motion } from 'motion/react'

import type { AppSettings } from '../settings/defaultSettings'

type SettingsPageProps = {
  settings: AppSettings
  onChange: (next: AppSettings) => void
  onReset: () => void
  onBack: () => void
  exportJson: string
}

export function SettingsPage({
  settings,
  onChange,
  onReset,
  onBack,
  exportJson,
}: SettingsPageProps) {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '2rem',
        color: 'rgba(255,255,255,0.92)',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          background:
            'radial-gradient(1200px 900px at 20% 10%, rgba(252,32,142,0.20), rgba(0,0,0,0) 55%), radial-gradient(900px 800px at 90% 30%, rgba(120,140,255,0.16), rgba(0,0,0,0) 60%), linear-gradient(180deg, rgba(6,8,18,1) 0%, rgba(10,10,10,1) 45%, rgba(0,0,0,1) 100%)',
          zIndex: 0,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 45%, rgba(0,0,0,0.40) 100%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div style={{ width: '100%', maxWidth: 980 }}>
        <motion.div
          initial={{ opacity: 0, y: 14, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            borderRadius: 20,
            border: '1px solid rgba(255,255,255,0.14)',
            background: 'rgba(255,255,255,0.06)',
            backdropFilter: 'blur(10px)',
            padding: '1.25rem',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
            <div style={{ fontSize: 'clamp(1.35rem, 3vw, 2rem)', fontWeight: 900 }}>Paramètres</div>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <motion.button
                type="button"
                whileHover={{ y: -1, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onBack}
                style={{
                  padding: '0.7rem 1rem',
                  borderRadius: 999,
                  border: '1px solid rgba(255,255,255,0.16)',
                  background: 'rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.92)',
                  cursor: 'pointer',
                  fontWeight: 800,
                }}
              >
                Retour
              </motion.button>
              <motion.button
                type="button"
                whileHover={{ y: -1, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onReset}
                style={{
                  padding: '0.7rem 1rem',
                  borderRadius: 999,
                  border: '1px solid rgba(255,255,255,0.16)',
                  background: 'rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.92)',
                  cursor: 'pointer',
                  fontWeight: 800,
                }}
              >
                Reset
              </motion.button>
            </div>
          </div>

          <div style={{ marginTop: '1rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.9rem' }}>
            <Field
              label="Greeting (ligne 1)"
              value={settings.greetingLine1}
              onChange={(v) => onChange({ ...settings, greetingLine1: v })}
            />
            <Field
              label="Greeting (ligne 2)"
              value={settings.greetingLine2}
              onChange={(v) => onChange({ ...settings, greetingLine2: v })}
            />

            <Field
              label="Question"
              value={settings.question}
              onChange={(v) => onChange({ ...settings, question: v })}
              full
            />

            <Field
              label="Bouton OUI"
              value={settings.yesChoiceLabel}
              onChange={(v) => onChange({ ...settings, yesChoiceLabel: v })}
            />
            <Field
              label="Bouton NON"
              value={settings.noChoiceLabel}
              onChange={(v) => onChange({ ...settings, noChoiceLabel: v })}
            />

            <Field
              label="Message chargement (page OUI)"
              value={settings.yesLoadingMessage}
              onChange={(v) => onChange({ ...settings, yesLoadingMessage: v })}
              full
            />

            <Field
              label="Page NON - Titre"
              value={settings.noTitle}
              onChange={(v) => onChange({ ...settings, noTitle: v })}
            />
            <Field
              label="Page NON - Sous-titre"
              value={settings.noSubtitle}
              onChange={(v) => onChange({ ...settings, noSubtitle: v })}
            />

            <Field
              label="Bouton Retour"
              value={settings.backButtonLabel}
              onChange={(v) => onChange({ ...settings, backButtonLabel: v })}
              full
            />

            <Field
              label="Lettre - Titre"
              value={settings.letterTitle}
              onChange={(v) => onChange({ ...settings, letterTitle: v })}
              full
            />

            <TextArea
              label="Lettre - Corps"
              value={settings.letterBody}
              onChange={(v) => onChange({ ...settings, letterBody: v })}
            />

            <Field
              label="Lecteur - Titre"
              value={settings.songTitle}
              onChange={(v) => onChange({ ...settings, songTitle: v })}
            />
            <Field
              label="Lecteur - Sous-titre"
              value={settings.songSubtitle}
              onChange={(v) => onChange({ ...settings, songSubtitle: v })}
            />

            <Field
              label="Lien YouTube (optionnel)"
              value={settings.youtubeUrl}
              onChange={(v) => onChange({ ...settings, youtubeUrl: v })}
              full
            />
          </div>

          <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.12)' }}>
            <div style={{ fontWeight: 900, marginBottom: 8 }}>Export configuration</div>
            <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>
              Copie ce JSON si tu veux reporter ces changements dans le repo (le navigateur ne peut pas modifier le code source
              automatiquement).
            </div>
            <textarea
              value={exportJson}
              readOnly
              style={{
                width: '100%',
                marginTop: 10,
                minHeight: 180,
                borderRadius: 14,
                border: '1px solid rgba(255,255,255,0.14)',
                background: 'rgba(0,0,0,0.25)',
                color: 'rgba(255,255,255,0.92)',
                padding: '0.9rem',
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                fontSize: '0.85rem',
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

type BasicFieldProps = {
  label: string
  value: string
  onChange: (next: string) => void
  full?: boolean
}

function Field({ label, value, onChange, full }: BasicFieldProps) {
  return (
    <div style={{ gridColumn: full ? '1 / -1' : undefined }}>
      <div style={{ fontSize: '0.9rem', fontWeight: 850, marginBottom: 6, opacity: 0.92 }}>{label}</div>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: '100%',
          padding: '0.8rem 0.9rem',
          borderRadius: 14,
          border: '1px solid rgba(255,255,255,0.14)',
          background: 'rgba(0,0,0,0.20)',
          color: 'rgba(255,255,255,0.92)',
          outline: 'none',
          fontWeight: 650,
        }}
      />
    </div>
  )
}

function TextArea({ label, value, onChange }: BasicFieldProps) {
  return (
    <div style={{ gridColumn: '1 / -1' }}>
      <div style={{ fontSize: '0.9rem', fontWeight: 850, marginBottom: 6, opacity: 0.92 }}>{label}</div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: '100%',
          minHeight: 180,
          padding: '0.8rem 0.9rem',
          borderRadius: 14,
          border: '1px solid rgba(255,255,255,0.14)',
          background: 'rgba(0,0,0,0.20)',
          color: 'rgba(255,255,255,0.92)',
          outline: 'none',
          fontWeight: 650,
          lineHeight: 1.5,
          resize: 'vertical',
        }}
      />
    </div>
  )
}
