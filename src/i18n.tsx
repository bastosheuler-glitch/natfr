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
    'app.tagline': 'Votre assistant pour la naturalisation française',
    'nav.eligibility': 'Éligibilité',
    'nav.checklist': 'Dossier',
    'nav.interview': 'Entretien',
    'nav.timeline': 'Calendrier',
    'lang.label': 'Langue',
    'common.yes': 'Oui',
    'common.no': 'Non',
    'common.reset': 'Réinitialiser',
    'common.optional': 'facultatif',
    'common.correct': 'Bonne réponse !',
    'common.wrong': 'Réponse incorrecte.',
    'common.explanation': 'À retenir',
    'common.disclaimer':
      'Informations indicatives — consultez service-public.fr pour les règles officielles.',
    'eligibility.title': 'Simulateur d’éligibilité',
    'eligibility.intro':
      'Répondez aux questions pour évaluer a priori votre éligibilité à la naturalisation par décret.',
    'eligibility.result.title': 'Résultat',
    'eligibility.result.eligible':
      'Bonne nouvelle : d’après vos réponses, vous remplissez a priori les principaux critères de la naturalisation.',
    'eligibility.result.prepare':
      'Vous remplissez les critères principaux, mais préparez-vous davantage sur les valeurs, l’histoire et les institutions de la France pour l’entretien.',
    'eligibility.result.notYet':
      'D’après vos réponses, certains critères ne sont pas encore remplis. Points à travailler :',
    'eligibility.missing.residence':
      'Durée de résidence régulière en France (5 ans, sauf réduction possible : diplôme français, statut de réfugié, mariage).',
    'eligibility.missing.language':
      'Niveau de français B1 minimum à l’oral et à l’écrit (DELF B1, TCF…).',
    'eligibility.missing.resources': 'Ressources stables et régulières sur les dernières années.',
    'eligibility.missing.record':
      'Aucune condamnation pénale incompatible avec l’acquisition de la nationalité.',
    'eligibility.missing.values':
      'Connaissance des valeurs, de l’histoire et des institutions de la France.',
    'checklist.title': 'Dossier : liste des documents',
    'checklist.intro':
      'Cochez les documents que vous avez déjà réunis. Votre progression est enregistrée sur cet appareil.',
    'checklist.profile': 'Votre situation',
    'checklist.profile.married': 'Marié(e) avec un(e) Français(e)',
    'checklist.profile.kids': 'J’ai des enfants (scolarisés)',
    'checklist.profile.abroad': 'Né(e) à l’étranger',
    'checklist.progress': 'documents réunis',
    'checklist.empty': 'Aucun document à afficher pour cette situation.',
    'interview.title': 'Préparation à l’entretien',
    'interview.intro':
      'Testez vos connaissances sur les valeurs, l’histoire et les institutions de la République française.',
    'interview.start': 'Commencer le quiz',
    'interview.qOf': 'Question {n} sur {total}',
    'interview.score': 'Score : {score}/{total}',
    'interview.finish': 'Voir le résultat',
    'interview.next': 'Suivant',
    'interview.again': 'Refaire le quiz',
    'timeline.title': 'Calendrier de la procédure',
    'timeline.intro':
      'Indiquez les dates des étapes déjà passées pour suivre l’avancement et les délais moyens.',
    'timeline.done': 'Fait le',
    'timeline.pending': 'À venir',
    'timeline.daysAgo': 'il y a {days} j',
    'timeline.today': 'aujourd’hui',
    'timeline.sinceDeposit': 'Dossier déposé {when}. Délai moyen total : 12 à 24 mois.',
    'footer.disclaimer':
      'Application indépendante, sans valeur officielle. Règles officielles : service-public.fr.',
  },
  pt: {
    'app.name': 'Voie Française',
    'app.tagline': 'Seu assistente para a naturalização francesa',
    'nav.eligibility': 'Elegibilidade',
    'nav.checklist': 'Dossiê',
    'nav.interview': 'Entrevista',
    'nav.timeline': 'Cronograma',
    'lang.label': 'Idioma',
    'common.yes': 'Sim',
    'common.no': 'Não',
    'common.reset': 'Reiniciar',
    'common.optional': 'facultativo',
    'common.correct': 'Resposta correta!',
    'common.wrong': 'Resposta incorreta.',
    'common.explanation': 'Para lembrar',
    'common.disclaimer':
      'Informações indicativas — consulte service-public.fr para as regras oficiais.',
    'eligibility.title': 'Simulador de elegibilidade',
    'eligibility.intro':
      'Responda às perguntas para avaliar a priori sua elegibilidade à naturalização por decreto.',
    'eligibility.result.title': 'Resultado',
    'eligibility.result.eligible':
      'Boa notícia: pelas suas respostas, você aparentemente cumpre os principais critérios da naturalização.',
    'eligibility.result.prepare':
      'Você cumpre os critérios principais, mas prepare-se melhor sobre os valores, a história e as instituições da França para a entrevista.',
    'eligibility.result.notYet':
      'Pelas suas respostas, alguns critérios ainda não são cumpridos. Pontos a trabalhar:',
    'eligibility.missing.residence':
      'Tempo de residência regular na França (5 anos, salvo redução possível: diploma francês, status de refugiado, casamento).',
    'eligibility.missing.language':
      'Nível mínimo de francês B1 oral e escrito (DELF B1, TCF…).',
    'eligibility.missing.resources': 'Renda estável e regular nos últimos anos.',
    'eligibility.missing.record':
      'Nenhuma condenação penal incompatível com a aquisição da nacionalidade.',
    'eligibility.missing.values':
      'Conhecimento dos valores, da história e das instituições da França.',
    'checklist.title': 'Dossiê: lista de documentos',
    'checklist.intro':
      'Marque os documentos que você já reuniu. Seu progresso é salvo neste dispositivo.',
    'checklist.profile': 'Sua situação',
    'checklist.profile.married': 'Casado(a) com francês/francesa',
    'checklist.profile.kids': 'Tenho filhos (escolarizados)',
    'checklist.profile.abroad': 'Nascido(a) no exterior',
    'checklist.progress': 'documentos prontos',
    'checklist.empty': 'Nenhum documento para exibir nesta situação.',
    'interview.title': 'Preparação para a entrevista',
    'interview.intro':
      'Teste seus conhecimentos sobre os valores, a história e as instituições da República francesa.',
    'interview.start': 'Começar o quiz',
    'interview.qOf': 'Pergunta {n} de {total}',
    'interview.score': 'Pontuação: {score}/{total}',
    'interview.finish': 'Ver resultado',
    'interview.next': 'Próxima',
    'interview.again': 'Refazer o quiz',
    'timeline.title': 'Cronograma do processo',
    'timeline.intro':
      'Indique as datas das etapas já concluídas para acompanhar o avanço e os prazos médios.',
    'timeline.done': 'Concluído em',
    'timeline.pending': 'Pendente',
    'timeline.daysAgo': 'há {days} dias',
    'timeline.today': 'hoje',
    'timeline.sinceDeposit': 'Dossiê depositado {when}. Prazo médio total: 12 a 24 meses.',
    'footer.disclaimer':
      'Aplicativo independente, sem valor oficial. Regras oficiais: service-public.fr.',
  },
  en: {
    'app.name': 'Voie Française',
    'app.tagline': 'Your assistant for French naturalization',
    'nav.eligibility': 'Eligibility',
    'nav.checklist': 'Documents',
    'nav.interview': 'Interview',
    'nav.timeline': 'Timeline',
    'lang.label': 'Language',
    'common.yes': 'Yes',
    'common.no': 'No',
    'common.reset': 'Reset',
    'common.optional': 'optional',
    'common.correct': 'Correct!',
    'common.wrong': 'Incorrect.',
    'common.explanation': 'Key point',
    'common.disclaimer':
      'Indicative information — see service-public.fr for the official rules.',
    'eligibility.title': 'Eligibility simulator',
    'eligibility.intro':
      'Answer the questions to assess your likely eligibility for naturalization by decree.',
    'eligibility.result.title': 'Result',
    'eligibility.result.eligible':
      'Good news: based on your answers, you appear to meet the main criteria for naturalization.',
    'eligibility.result.prepare':
      'You meet the main criteria, but prepare more on French values, history and institutions for the interview.',
    'eligibility.result.notYet':
      'Based on your answers, some criteria are not yet met. Areas to work on:',
    'eligibility.missing.residence':
      'Length of regular residence in France (5 years, unless reduced: French degree, refugee status, marriage).',
    'eligibility.missing.language':
      'Minimum French level B1 in speaking and writing (DELF B1, TCF…).',
    'eligibility.missing.resources': 'Stable and regular income over recent years.',
    'eligibility.missing.record':
      'No criminal conviction incompatible with acquiring nationality.',
    'eligibility.missing.values':
      'Knowledge of French values, history and institutions.',
    'checklist.title': 'Application file: document list',
    'checklist.intro':
      'Check the documents you have already gathered. Your progress is saved on this device.',
    'checklist.profile': 'Your situation',
    'checklist.profile.married': 'Married to a French citizen',
    'checklist.profile.kids': 'I have children (in school)',
    'checklist.profile.abroad': 'Born abroad',
    'checklist.progress': 'documents ready',
    'checklist.empty': 'No documents to show for this situation.',
    'interview.title': 'Interview preparation',
    'interview.intro':
      'Test your knowledge of the values, history and institutions of the French Republic.',
    'interview.start': 'Start the quiz',
    'interview.qOf': 'Question {n} of {total}',
    'interview.score': 'Score: {score}/{total}',
    'interview.finish': 'See result',
    'interview.next': 'Next',
    'interview.again': 'Take the quiz again',
    'timeline.title': 'Application timeline',
    'timeline.intro':
      'Enter the dates of completed steps to track progress and typical waiting times.',
    'timeline.done': 'Done on',
    'timeline.pending': 'Pending',
    'timeline.daysAgo': '{days} days ago',
    'timeline.today': 'today',
    'timeline.sinceDeposit': 'Application submitted {when}. Average total time: 12 to 24 months.',
    'footer.disclaimer':
      'Independent app, not official guidance. Official rules: service-public.fr.',
  },
  es: {
    'app.name': 'Voie Française',
    'app.tagline': 'Tu asistente para la naturalización francesa',
    'nav.eligibility': 'Elegibilidad',
    'nav.checklist': 'Dossier',
    'nav.interview': 'Entrevista',
    'nav.timeline': 'Calendario',
    'lang.label': 'Idioma',
    'common.yes': 'Sí',
    'common.no': 'No',
    'common.reset': 'Restablecer',
    'common.optional': 'opcional',
    'common.correct': '¡Respuesta correcta!',
    'common.wrong': 'Respuesta incorrecta.',
    'common.explanation': 'Para recordar',
    'common.disclaimer':
      'Información orientativa — consulta service-public.fr para las reglas oficiales.',
    'eligibility.title': 'Simulador de elegibilidad',
    'eligibility.intro':
      'Responde a las preguntas para evaluar a priori tu elegibilidad para la naturalización por decreto.',
    'eligibility.result.title': 'Resultado',
    'eligibility.result.eligible':
      'Buenas noticias: según tus respuestas, cumples a priori los principales criterios de la naturalización.',
    'eligibility.result.prepare':
      'Cumples los criterios principales, pero prepárate mejor sobre los valores, la historia y las instituciones de Francia para la entrevista.',
    'eligibility.result.notYet':
      'Según tus respuestas, algunos criterios aún no se cumplen. Puntos a trabajar:',
    'eligibility.missing.residence':
      'Duración de residencia regular en Francia (5 años, salvo reducción posible: título francés, estatuto de refugiado, matrimonio).',
    'eligibility.missing.language': 'Nivel mínimo de francés B1 oral y escrito (DELF B1, TCF…).',
    'eligibility.missing.resources': 'Recursos estables y regulares en los últimos años.',
    'eligibility.missing.record':
      'Ninguna condena penal incompatible con la adquisición de la nacionalidad.',
    'eligibility.missing.values':
      'Conocimiento de los valores, la historia y las instituciones de Francia.',
    'checklist.title': 'Dossier: lista de documentos',
    'checklist.intro':
      'Marca los documentos que ya has reunido. Tu progreso se guarda en este dispositivo.',
    'checklist.profile': 'Tu situación',
    'checklist.profile.married': 'Casado/a con un/a francés/a',
    'checklist.profile.kids': 'Tengo hijos escolarizados',
    'checklist.profile.abroad': 'Nacido/a en el extranjero',
    'checklist.progress': 'documentos reunidos',
    'checklist.empty': 'Ningún documento para mostrar en esta situación.',
    'interview.title': 'Preparación para la entrevista',
    'interview.intro':
      'Pon a prueba tus conocimientos sobre los valores, la historia y las instituciones de la República francesa.',
    'interview.start': 'Comenzar el quiz',
    'interview.qOf': 'Pregunta {n} de {total}',
    'interview.score': 'Puntuación: {score}/{total}',
    'interview.finish': 'Ver resultado',
    'interview.next': 'Siguiente',
    'interview.again': 'Repetir el quiz',
    'timeline.title': 'Calendario del procedimiento',
    'timeline.intro':
      'Indica las fechas de las etapas ya completadas para seguir el avance y los plazos medios.',
    'timeline.done': 'Hecho el',
    'timeline.pending': 'Pendiente',
    'timeline.daysAgo': 'hace {days} días',
    'timeline.today': 'hoy',
    'timeline.sinceDeposit': 'Expediente depositado {when}. Plazo medio total: 12 a 24 meses.',
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
