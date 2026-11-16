import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'fr' | 'pt' | 'en' | 'es'

export interface L10n {
  fr: string
  pt: string
  en: string
  es: string
}

export const pick = (l: L10n, lang: Lang) => l[lang]

export const LANGS: { id: Lang; label: string }[] = [
  { id: 'fr', label: 'Français' },
  { id: 'pt', label: 'Português' },
  { id: 'en', label: 'English' },
  { id: 'es', label: 'Español' },
]

const translations: Record<Lang, Record<string, string>> = {
  fr: {
    'app.name': 'Voie Française',
    'app.tagline': 'Préparez l’entretien de votre naturalisation',
    'lang.label': 'Langue',
    'common.correct': 'Bonne réponse !',
    'common.wrong': 'Réponse incorrecte.',
    'common.explanation': 'À retenir',
    'common.disclaimer':
      'Informations indicatives — consultez service-public.fr et le livret du citoyen pour les règles officielles.',
    'interview.title': 'Simulé d’entretien',
    'interview.intro':
      'Testez vos connaissances sur les thèmes du livret du citoyen : histoire, valeurs et symboles, institutions, droits et devoirs.',
    'interview.choose': 'Choisissez un thème',
    'interview.mix': 'Mélange (aléatoire)',
    'interview.mixDesc': 'Questions de tous les thèmes',
    'interview.questionsCount': '{n} questions',
    'interview.start': 'Commencer',
    'interview.qOf': 'Question {n} sur {total}',
    'interview.score': 'Score : {score}/{total}',
    'interview.finish': 'Voir le résultat',
    'interview.next': 'Suivant',
    'interview.again': 'Refaire ce thème',
    'interview.otherTheme': 'Choisir un autre thème',
    'interview.good': 'Très bien ! Vous êtes prêt(e) pour l’entretien.',
    'interview.keep': 'Continuez à vous préparer pour l’entretien.',
    'footer.disclaimer':
      'Application indépendante, sans valeur officielle. Règles officielles : service-public.fr.',
  },
  pt: {
    'app.name': 'Voie Française',
    'app.tagline': 'Prepare-se para a entrevista da sua naturalização',
    'lang.label': 'Idioma',
    'common.correct': 'Resposta correta!',
    'common.wrong': 'Resposta incorreta.',
    'common.explanation': 'Para lembrar',
    'common.disclaimer':
      'Informações indicativas — consulte service-public.fr e o livret du citoyen para as regras oficiais.',
    'interview.title': 'Simulado da entrevista',
    'interview.intro':
      'Teste seus conhecimentos sobre os temas do livret du citoyen: história, valores e símbolos, instituições, direitos e deveres.',
    'interview.choose': 'Escolha um tema',
    'interview.mix': 'Misto (aleatório)',
    'interview.mixDesc': 'Perguntas de todos os temas',
    'interview.questionsCount': '{n} perguntas',
    'interview.start': 'Começar',
    'interview.qOf': 'Pergunta {n} de {total}',
    'interview.score': 'Pontuação: {score}/{total}',
    'interview.finish': 'Ver resultado',
    'interview.next': 'Próxima',
    'interview.again': 'Refazer este tema',
    'interview.otherTheme': 'Escolher outro tema',
    'interview.good': 'Muito bem! Você está preparado(a) para a entrevista.',
    'interview.keep': 'Continue se preparando para a entrevista.',
    'footer.disclaimer':
      'Aplicativo independente, sem valor oficial. Regras oficiais: service-public.fr.',
  },
  en: {
    'app.name': 'Voie Française',
    'app.tagline': 'Prepare for your naturalization interview',
    'lang.label': 'Language',
    'common.correct': 'Correct!',
    'common.wrong': 'Incorrect.',
    'common.explanation': 'Key point',
    'common.disclaimer':
      'Indicative information — see service-public.fr and the livret du citoyen for the official rules.',
    'interview.title': 'Interview mock test',
    'interview.intro':
      'Test your knowledge of the livret du citoyen themes: history, values and symbols, institutions, rights and duties.',
    'interview.choose': 'Choose a theme',
    'interview.mix': 'Mixed (random)',
    'interview.mixDesc': 'Questions from all themes',
    'interview.questionsCount': '{n} questions',
    'interview.start': 'Start',
    'interview.qOf': 'Question {n} of {total}',
    'interview.score': 'Score: {score}/{total}',
    'interview.finish': 'See result',
    'interview.next': 'Next',
    'interview.again': 'Retake this theme',
    'interview.otherTheme': 'Choose another theme',
    'interview.good': 'Well done! You are ready for the interview.',
    'interview.keep': 'Keep preparing for the interview.',
    'footer.disclaimer':
      'Independent app, not official guidance. Official rules: service-public.fr.',
  },
  es: {
    'app.name': 'Voie Française',
    'app.tagline': 'Prepárate para la entrevista de tu naturalización',
    'lang.label': 'Idioma',
    'common.correct': '¡Respuesta correcta!',
    'common.wrong': 'Respuesta incorrecta.',
    'common.explanation': 'Para recordar',
    'common.disclaimer':
      'Información orientativa — consulta service-public.fr y el livret du citoyen para las reglas oficiales.',
    'interview.title': 'Simulacro de entrevista',
    'interview.intro':
      'Pon a prueba tus conocimientos sobre los temas del livret du citoyen: historia, valores y símbolos, instituciones, derechos y deberes.',
    'interview.choose': 'Elige un tema',
    'interview.mix': 'Mezcla (aleatorio)',
    'interview.mixDesc': 'Preguntas de todos los temas',
    'interview.questionsCount': '{n} preguntas',
    'interview.start': 'Comenzar',
    'interview.qOf': 'Pregunta {n} de {total}',
    'interview.score': 'Puntuación: {score}/{total}',
    'interview.finish': 'Ver resultado',
    'interview.next': 'Siguiente',
    'interview.again': 'Repetir este tema',
    'interview.otherTheme': 'Elegir otro tema',
    'interview.good': '¡Muy bien! Estás listo/a para la entrevista.',
    'interview.keep': 'Sigue preparándote para la entrevista.',
    'footer.disclaimer':
      'Aplicación independiente, sin valor oficial. Reglas oficiales: service-public.fr.',
  },
}

interface I18nValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
  tr: (l: L10n) => string
}

const I18nContext = createContext<I18nValue | null>(null)

function detectLang(): Lang {
  const saved = localStorage.getItem('vf.lang') as Lang | null
  if (saved && LANGS.some((l) => l.id === saved)) return saved
  const nav = navigator.language.toLowerCase()
  if (nav.startsWith('pt')) return 'pt'
  if (nav.startsWith('es')) return 'es'
  if (nav.startsWith('fr')) return 'fr'
  return 'en'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(detectLang)

  useEffect(() => {
    localStorage.setItem('vf.lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const value: I18nValue = {
    lang,
    setLang,
    t: (key) => translations[lang][key] ?? key,
    tr: (l) => l[lang],
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}

export function fmt(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`))
}
