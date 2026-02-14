export type AppSettings = {
  greetingLine1: string
  greetingLine2: string
  question: string
  yesChoiceLabel: string
  noChoiceLabel: string
  yesLoadingMessage: string
  noTitle: string
  noSubtitle: string
  backButtonLabel: string
  letterTitle: string
  letterBody: string
  songTitle: string
  songSubtitle: string
  youtubeUrl: string
}

export const defaultSettings: AppSettings = {
  greetingLine1: 'Hey !',
  greetingLine2: "C'est moi Charly",
  question: 'Florence, veux-tu être ma valentine ?',
  yesChoiceLabel: 'Oui, je le veux',
  noChoiceLabel: 'Non, je veux pas',
  yesLoadingMessage: "J'en suis ravi. Message d'amour en cours de traitement",
  noTitle: 'NON...',
  noSubtitle: "D'accord. Je respecte ton choix.",
  backButtonLabel: 'Retour',
  letterTitle: 'Ma Florence,',
  letterBody:
    "Merci d'être toi. Merci pour ton sourire, ta présence, et tout ce que tu m'inspires.\nAujourd'hui je te choisis, et j'ai envie de continuer à t'aimer, te faire rire et te rendre fière.\n\nAvec tout mon cœur,\nCharly",
  songTitle: 'Play this Song',
  songSubtitle: 'Amir - Longtemps',
  youtubeUrl: '',
}
