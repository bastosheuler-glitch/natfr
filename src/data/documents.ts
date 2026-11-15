import type { L10n } from '../i18n'

export interface DocItem {
  id: string
  label: L10n
  optional?: boolean
  marriedOnly?: boolean
  kidsOnly?: boolean
  abroadOnly?: boolean
}

export const DOCS: DocItem[] = [
  {
    id: 'passport',
    label: {
      fr: 'Passeport (copie des pages d’identité et des visas)',
      pt: 'Passaporte (cópia das páginas de identidade e vistos)',
      en: 'Passport (copy of ID pages and visas)',
      es: 'Pasaporte (copia de las páginas de identidad y visados)',
    },
  },
  {
    id: 'sejour',
    label: {
      fr: 'Carte de séjour en cours de validité',
      pt: 'Cartão de residência (titre de séjour) válido',
      en: 'Valid residence permit',
      es: 'Tarjeta de residencia (titre de séjour) en vigor',
    },
  },
  {
    id: 'acteNaissance',
    abroadOnly: true,
    label: {
      fr: 'Acte de naissance : copie intégrale récente, apostille + traduction par traducteur assermenté',
      pt: 'Certidão de nascimento: cópia integral recente, apóstila + tradução por tradutor jurado',
      en: 'Birth certificate: recent full copy, apostille + translation by a sworn translator',
      es: 'Acta de nacimiento: copia íntegra recente, apostilla + traducción por traductor jurado',
    },
  },
  {
    id: 'domicile',
    label: {
      fr: 'Justificatif de domicile de moins de 3 mois',
      pt: 'Comprovante de residência com menos de 3 meses',
      en: 'Proof of address less than 3 months old',
      es: 'Justificante de domicilio de menos de 3 meses',
    },
  },
  {
    id: 'langue',
    label: {
      fr: 'Certificat de français niveau B1 (DELF B1, TCF…)',
      pt: 'Certificado de francês nível B1 (DELF B1, TCF…)',
      en: 'French B1 certificate (DELF B1, TCF…)',
      es: 'Certificado de francés nivel B1 (DELF B1, TCF…)',
    },
  },
  {
    id: 'impots',
    label: {
      fr: 'Avis d’imposition des 3 dernières années',
      pt: 'Declarações de imposto de renda dos últimos 3 anos',
      en: 'Tax notices for the last 3 years',
      es: 'Avisos fiscales (avis d’imposition) de los últimos 3 años',
    },
  },
  {
    id: 'revenus',
    label: {
      fr: 'Justificatifs de revenus : 3 dernières fiches de paie, contrat de travail',
      pt: 'Comprovantes de renda: 3 últimos contracheques, contrato de trabalho',
      en: 'Proof of income: last 3 payslips, employment contract',
      es: 'Justificantes de ingresos: 3 últimas nóminas, contrato de trabajo',
    },
  },
  {
    id: 'casier',
    abroadOnly: true,
    label: {
      fr: 'Casier judiciaire étranger (selon le pays) et casier judiciaire français',
      pt: 'Antecedentes criminais do exterior (conforme o país) e antecedentes franceses',
      en: 'Foreign criminal record (depending on the country) and French record',
      es: 'Antecedentes penales del extranjero (según el país) y antecedentes franceses',
    },
  },
  {
    id: 'photos',
    label: {
      fr: 'Photos d’identité récentes aux normes',
      pt: 'Fotos de identidade recentes, conforme as normas',
      en: 'Recent ID photos meeting the standards',
      es: 'Fotos de identidad recientes conforme a las normas',
    },
  },
  {
    id: 'cerfa',
    label: {
      fr: 'Formulaire Cerfa n° 12730 (demande d’acquisition de la nationalité française)',
      pt: 'Formulário Cerfa n.º 12730 (solicitação de aquisição da nacionalidade francesa)',
      en: 'Cerfa form no. 12730 (application for French nationality)',
      es: 'Formulario Cerfa n.º 12730 (solicitud de adquisición de la nacionalidad francesa)',
    },
  },
  {
    id: 'timbre',
    label: {
      fr: 'Timbre fiscal de 55 €',
      pt: 'Selo fiscal (timbre fiscal) de 55 €',
      en: '€55 fiscal stamp',
      es: 'Timbre fiscal de 55 €',
    },
  },
  {
    id: 'mariage',
    marriedOnly: true,
    label: {
      fr: 'Acte de mariage et preuve de la nationalité française du conjoint',
      pt: 'Certidão de casamento e prova da nacionalidade francesa do cônjuge',
      en: 'Marriage certificate and proof of the spouse’s French nationality',
      es: 'Acta de matrimonio y prueba de la nacionalidad francesa del cónyuge',
    },
  },
  {
    id: 'enfants',
    kidsOnly: true,
    label: {
      fr: 'Certificats de scolarité des enfants',
      pt: 'Certificados de escolaridade dos filhos',
      en: 'School certificates for children',
      es: 'Certificados de escolaridad de los hijos',
    },
  },
  {
    id: 'diplomes',
    optional: true,
    label: {
      fr: 'Diplômes obtenus en France (si vous y avez étudié)',
      pt: 'Diplomas obtidos na França (se você estudou lá)',
      en: 'Diplomas obtained in France (if you studied there)',
      es: 'Títulos obtenidos en Francia (si estudió allí)',
    },
  },
]
