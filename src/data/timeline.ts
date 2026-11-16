import type { L10n } from '../i18n'

export interface TimelineStep {
  id: string
  label: L10n
  duration: L10n
}

export const STEPS: TimelineStep[] = [
  {
    id: 'prep',
    label: {
      fr: 'Préparer le dossier',
      pt: 'Preparar o dossiê',
      en: 'Prepare the application file',
      es: 'Preparar el expediente',
    },
    duration: {
      fr: 'Durée variable',
      pt: 'Duração variável',
      en: 'Variable duration',
      es: 'Duración variable',
    },
  },
  {
    id: 'deposit',
    label: {
      fr: 'Déposer le dossier en ligne (ANEF)',
      pt: 'Depositar o dossiê online (ANEF)',
      en: 'Submit the application online (ANEF)',
      es: 'Depositar el expediente en línea (ANEF)',
    },
    duration: {
      fr: 'Début de la procédure officielle',
      pt: 'Início do processo oficial',
      en: 'Start of the official process',
      es: 'Inicio del trámite oficial',
    },
  },
  {
    id: 'receipt',
    label: {
      fr: 'Accusé de réception du dossier',
      pt: 'Confirmação de recebimento do dossiê',
      en: 'Receipt acknowledgment',
      es: 'Acuse de recibo del expediente',
    },
    duration: {
      fr: 'Environ 1 mois',
      pt: 'Cerca de 1 mês',
      en: 'About 1 month',
      es: 'Aproximadamente 1 mes',
    },
  },
  {
    id: 'interview',
    label: {
      fr: 'Entretien d’assimilation (préfecture)',
      pt: 'Entrevista de assimilação (prefeitura)',
      en: 'Assimilation interview (prefecture)',
      es: 'Entrevista de asimilación (prefectura)',
    },
    duration: {
      fr: '3 à 6 mois après le dépôt',
      pt: '3 a 6 meses após o depósito',
      en: '3 to 6 months after submission',
      es: '3 a 6 meses tras el depósito',
    },
  },
  {
    id: 'inquiry',
    label: {
      fr: 'Enquête administrative et de police',
      pt: 'Investigação administrativa e de polícia',
      en: 'Administrative and police checks',
      es: 'Investigación administrativa y de policía',
    },
    duration: {
      fr: '6 à 12 mois',
      pt: '6 a 12 meses',
      en: '6 to 12 months',
      es: '6 a 12 meses',
    },
  },
  {
    id: 'decree',
    label: {
      fr: 'Décret de naturalisation publié au Journal officiel',
      pt: 'Decreto de naturalização publicado no Journal officiel',
      en: 'Naturalization decree published in the Official Journal',
      es: 'Decreto de naturalización publicado en el Journal officiel',
    },
    duration: {
      fr: '12 à 24 mois après le dépôt',
      pt: '12 a 24 meses após o depósito',
      en: '12 to 24 months after submission',
      es: '12 a 24 meses tras el depósito',
    },
  },
  {
    id: 'ceremony',
    label: {
      fr: 'Cérémonie d’accueil dans la citoyenneté',
      pt: 'Cerimônia de acolhimento na cidadania',
      en: 'Citizenship welcome ceremony',
      es: 'Ceremonia de acogida en la ciudadanía',
    },
    duration: {
      fr: 'Quelques mois après le décret',
      pt: 'Alguns meses após o decreto',
      en: 'A few months after the decree',
      es: 'Algunos meses tras el decreto',
    },
  },
  {
    id: 'documents',
    label: {
      fr: 'Demander vos documents français (acte de naissance, CNF)',
      pt: 'Solicitar seus documentos franceses (certidão de nascimento, CNF)',
      en: 'Request your French documents (birth certificate, CNF)',
      es: 'Solicitar tus documentos franceses (acta de nacimiento, CNF)',
    },
    duration: {
      fr: 'Après le décret',
      pt: 'Após o decreto',
      en: 'After the decree',
      es: 'Tras el decreto',
    },
  },
]
