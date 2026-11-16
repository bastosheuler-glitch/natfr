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
    'nav.learn': 'Apprendre',
    'nav.quiz': 'Simulé',
    'learn.title': 'Apprendre avec le livret du citoyen',
    'learn.intro':
      'Choisissez un thème pour apprendre avec des textes, des illustrations et de petites vidéos, puis entraînez-vous avec le simulé.',
    'learn.back': 'Retour aux thèmes',
    'learn.keyDates': 'Dates clés',
    'learn.videos': 'Petites vidéos',
    'learn.videosNote':
      'Les vidéos sont hébergées sur YouTube et nécessitent une connexion internet.',
    'learn.train': 'Entraînez-vous sur ce thème',
    'learn.read': 'Lire',
    'learn.howTitle': 'Comment ça marche ?',
    'learn.step1': 'Lisez la leçon : textes, illustrations et vidéos',
    'learn.step2': 'Entraînez-vous avec le simulé du thème',
    'learn.step3': 'Battez votre record jusqu’à 70 % et plus',
    'learn.sectionsCount': '{n} parties',
    'learn.videosCount': '{n} vidéos',
    'learn.devise.liberte': 'Liberté',
    'learn.devise.egalite': 'Égalité',
    'learn.devise.fraternite': 'Fraternité',
    'learn.illo.people': 'Le peuple',
    'learn.illo.vote': 'vote',
    'learn.illo.president': 'Président + Gouvernement',
    'learn.illo.parliament': 'Parlement',
    'learn.illo.laws': 'Les lois',
    'learn.rights.vote': 'Le vote',
    'learn.rights.jury': 'Jury d’assises',
    'learn.rights.taxes': 'Les impôts',
    'learn.rights.laws': 'Les lois',
    'learn.rights.health': 'La santé',
    'learn.rights.solidarity': 'La solidarité',
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
    'interview.excellent': 'Excellent ! Vous maîtrisez ce thème.',
    'interview.keep': 'Continuez à vous préparer pour l’entretien.',
    'interview.best': 'Record : {score}/{total}',
    'interview.newRecord': 'Nouveau record ! 🎉',
    'interview.quit': 'Quitter le simulé',
    'interview.reviewTitle': 'À revoir',
    'interview.allCorrect': 'Aucune erreur — sans faute !',
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
    'nav.learn': 'Aprender',
    'nav.quiz': 'Simulado',
    'learn.title': 'Aprender com o livret du citoyen',
    'learn.intro':
      'Escolha um tema para aprender com textos, ilustrações e pequenos vídeos, depois treine com o simulado.',
    'learn.back': 'Voltar aos temas',
    'learn.keyDates': 'Datas-chave',
    'learn.videos': 'Pequenos vídeos',
    'learn.videosNote':
      'Os vídeos são hospedados no YouTube e exigem conexão com a internet.',
    'learn.train': 'Treinar este tema',
    'learn.read': 'Ler',
    'learn.howTitle': 'Como funciona?',
    'learn.step1': 'Leia a lição: textos, ilustrações e vídeos',
    'learn.step2': 'Treine com o simulado do tema',
    'learn.step3': 'Bata seu recorde até 70% ou mais',
    'learn.sectionsCount': '{n} partes',
    'learn.videosCount': '{n} vídeos',
    'learn.devise.liberte': 'Liberdade',
    'learn.devise.egalite': 'Igualdade',
    'learn.devise.fraternite': 'Fraternidade',
    'learn.illo.people': 'O povo',
    'learn.illo.vote': 'voto',
    'learn.illo.president': 'Presidente + Governo',
    'learn.illo.parliament': 'Parlamento',
    'learn.illo.laws': 'As leis',
    'learn.rights.vote': 'O voto',
    'learn.rights.jury': 'Júri popular',
    'learn.rights.taxes': 'Os impostos',
    'learn.rights.laws': 'As leis',
    'learn.rights.health': 'A saúde',
    'learn.rights.solidarity': 'A solidariedade',
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
    'interview.excellent': 'Excelente! Você domina este tema.',
    'interview.keep': 'Continue se preparando para a entrevista.',
    'interview.best': 'Recorde: {score}/{total}',
    'interview.newRecord': 'Novo recorde! 🎉',
    'interview.quit': 'Sair do simulado',
    'interview.reviewTitle': 'Para revisar',
    'interview.allCorrect': 'Nenhum erro — sem falhas!',
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
    'nav.learn': 'Learn',
    'nav.quiz': 'Mock test',
    'learn.title': 'Learn with the livret du citoyen',
    'learn.intro':
      'Pick a theme to learn with texts, illustrations and short videos, then practise with the mock test.',
    'learn.back': 'Back to themes',
    'learn.keyDates': 'Key dates',
    'learn.videos': 'Short videos',
    'learn.videosNote':
      'Videos are hosted on YouTube and require an internet connection.',
    'learn.train': 'Practise this theme',
    'learn.read': 'Read',
    'learn.howTitle': 'How it works?',
    'learn.step1': 'Read the lesson: texts, illustrations and videos',
    'learn.step2': 'Practise with the theme mock test',
    'learn.step3': 'Beat your best score to 70% and beyond',
    'learn.sectionsCount': '{n} parts',
    'learn.videosCount': '{n} videos',
    'learn.devise.liberte': 'Liberty',
    'learn.devise.egalite': 'Equality',
    'learn.devise.fraternite': 'Fraternity',
    'learn.illo.people': 'The people',
    'learn.illo.vote': 'vote',
    'learn.illo.president': 'President + Government',
    'learn.illo.parliament': 'Parliament',
    'learn.illo.laws': 'The laws',
    'learn.rights.vote': 'Voting',
    'learn.rights.jury': 'Jury service',
    'learn.rights.taxes': 'Taxes',
    'learn.rights.laws': 'The laws',
    'learn.rights.health': 'Health',
    'learn.rights.solidarity': 'Solidarity',
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
    'interview.excellent': 'Excellent! You have mastered this theme.',
    'interview.keep': 'Keep preparing for the interview.',
    'interview.best': 'Best score: {score}/{total}',
    'interview.newRecord': 'New record! 🎉',
    'interview.quit': 'Leave the mock test',
    'interview.reviewTitle': 'To review',
    'interview.allCorrect': 'No mistakes — flawless!',
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
    'nav.learn': 'Aprender',
    'nav.quiz': 'Simulacro',
    'learn.title': 'Aprender con el livret du citoyen',
    'learn.intro':
      'Elige un tema para aprender con textos, ilustraciones y pequeños vídeos, y luego practica con el simulacro.',
    'learn.back': 'Volver a los temas',
    'learn.keyDates': 'Fechas clave',
    'learn.videos': 'Pequeños vídeos',
    'learn.videosNote':
      'Los vídeos están alojados en YouTube y requieren conexión a internet.',
    'learn.train': 'Practicar este tema',
    'learn.read': 'Leer',
    'learn.howTitle': '¿Cómo funciona?',
    'learn.step1': 'Lee la lección: textos, ilustraciones y vídeos',
    'learn.step2': 'Practica con el simulacro del tema',
    'learn.step3': 'Supera tu récord hasta el 70% o más',
    'learn.sectionsCount': '{n} partes',
    'learn.videosCount': '{n} vídeos',
    'learn.devise.liberte': 'Libertad',
    'learn.devise.egalite': 'Igualdad',
    'learn.devise.fraternite': 'Fraternidad',
    'learn.illo.people': 'El pueblo',
    'learn.illo.vote': 'voto',
    'learn.illo.president': 'Presidente + Gobierno',
    'learn.illo.parliament': 'Parlamento',
    'learn.illo.laws': 'Las leyes',
    'learn.rights.vote': 'El voto',
    'learn.rights.jury': 'Jurado popular',
    'learn.rights.taxes': 'Los impuestos',
    'learn.rights.laws': 'Las leyes',
    'learn.rights.health': 'La salud',
    'learn.rights.solidarity': 'La solidaridad',
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
    'interview.excellent': '¡Excelente! Dominas este tema.',
    'interview.keep': 'Sigue preparándote para la entrevista.',
    'interview.best': 'Récord: {score}/{total}',
    'interview.newRecord': '¡Nuevo récord! 🎉',
    'interview.quit': 'Salir del simulacro',
    'interview.reviewTitle': 'Para repasar',
    'interview.allCorrect': 'Sin errores — ¡perfecto!',
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
