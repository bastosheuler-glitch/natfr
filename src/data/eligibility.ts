import type { L10n } from '../i18n'

export interface EligOption {
  id: string
  label: L10n
}

export interface EligQuestion {
  id: string
  label: L10n
  options: EligOption[]
}

export const QUESTIONS: EligQuestion[] = [
  {
    id: 'residence',
    label: {
      fr: 'Depuis combien de temps résidez-vous régulièrement en France ?',
      pt: 'Há quanto tempo você reside regularmente na França?',
      en: 'How long have you regularly lived in France?',
      es: '¿Desde hace cuánto tiempo resides regularmente en Francia?',
    },
    options: [
      {
        id: 'short',
        label: {
          fr: 'Moins de 2 ans',
          pt: 'Menos de 2 anos',
          en: 'Less than 2 years',
          es: 'Menos de 2 años',
        },
      },
      {
        id: 'mid',
        label: {
          fr: 'Entre 2 et 5 ans',
          pt: 'Entre 2 e 5 anos',
          en: 'Between 2 and 5 years',
          es: 'Entre 2 y 5 años',
        },
      },
      {
        id: 'five',
        label: {
          fr: '5 ans ou plus',
          pt: '5 anos ou mais',
          en: '5 years or more',
          es: '5 años o más',
        },
      },
      {
        id: 'study',
        label: {
          fr: '2 ans ou plus, avec 2 années d’études supérieures en France (diplôme obtenu)',
          pt: '2 anos ou mais, com 2 anos de ensino superior na França (diploma obtido)',
          en: '2 years or more, with 2 years of higher education in France (degree obtained)',
          es: '2 años o más, con 2 años de estudios superiores en Francia (título obtenido)',
        },
      },
      {
        id: 'refugee',
        label: {
          fr: 'J’ai le statut de réfugié',
          pt: 'Tenho status de refugiado',
          en: 'I have refugee status',
          es: 'Tengo estatuto de refugiado',
        },
      },
    ],
  },
  {
    id: 'marriage',
    label: {
      fr: 'Êtes-vous marié(e) avec une personne de nationalité française ?',
      pt: 'Você é casado(a) com uma pessoa de nacionalidade francesa?',
      en: 'Are you married to a French citizen?',
      es: '¿Estás casado/a con una persona de nacionalidad francesa?',
    },
    options: [
      { id: 'no', label: { fr: 'Non', pt: 'Não', en: 'No', es: 'No' } },
      {
        id: 'four',
        label: {
          fr: 'Oui, depuis 4 ans ou plus',
          pt: 'Sim, há 4 anos ou mais',
          en: 'Yes, for 4 years or more',
          es: 'Sí, desde hace 4 años o más',
        },
      },
      {
        id: 'three',
        label: {
          fr: 'Oui, depuis 3 ans, avec vie commune en France',
          pt: 'Sim, há 3 anos, com vida em comum na França',
          en: 'Yes, for 3 years, living together in France',
          es: 'Sí, desde hace 3 años, con vida común en Francia',
        },
      },
    ],
  },
  {
    id: 'language',
    label: {
      fr: 'Quel est votre niveau de français (oral et écrit) ?',
      pt: 'Qual é o seu nível de francês (oral e escrito)?',
      en: 'What is your French level (speaking and writing)?',
      es: '¿Cuál es tu nivel de francés (oral y escrito)?',
    },
    options: [
      {
        id: 'a2',
        label: { fr: 'A2 ou moins', pt: 'A2 ou menos', en: 'A2 or below', es: 'A2 o inferior' },
      },
      { id: 'b1', label: { fr: 'B1', pt: 'B1', en: 'B1', es: 'B1' } },
      { id: 'b2', label: { fr: 'B2 ou plus', pt: 'B2 ou mais', en: 'B2 or above', es: 'B2 o superior' } },
    ],
  },
  {
    id: 'resources',
    label: {
      fr: 'Comment sont vos ressources financières ?',
      pt: 'Como está a sua renda financeira?',
      en: 'How are your financial resources?',
      es: '¿Cómo son tus recursos económicos?',
    },
    options: [
      {
        id: 'stable',
        label: {
          fr: 'Stables et régulières (salaires, contrats, revenus déclarés)',
          pt: 'Estáveis e regulares (salários, contratos, renda declarada)',
          en: 'Stable and regular (salaries, contracts, declared income)',
          es: 'Estables y regulares (salarios, contratos, ingresos declarados)',
        },
      },
      {
        id: 'unstable',
        label: {
          fr: 'Faibles, irrégulières ou non déclarées',
          pt: 'Baixas, irregulares ou não declaradas',
          en: 'Low, irregular or undeclared',
          es: 'Bajos, irregulares o no declarados',
        },
      },
    ],
  },
  {
    id: 'record',
    label: {
      fr: 'Avez-vous des condamnations pénales ?',
      pt: 'Você tem condenações penais?',
      en: 'Do you have any criminal convictions?',
      es: '¿Tienes condenas penales?',
    },
    options: [
      {
        id: 'clean',
        label: {
          fr: 'Aucune condamnation pénale',
          pt: 'Nenhuma condenação penal',
          en: 'No criminal convictions',
          es: 'Ninguna condena penal',
        },
      },
      {
        id: 'serious',
        label: {
          fr: 'Condamnation(s) pénale(s) (prison, ou plus de 6 mois sans sursis)',
          pt: 'Condenação(ões) penal(is) (prisão, ou mais de 6 meses sem suspensão)',
          en: 'Criminal conviction(s) (prison, or more than 6 months without suspension)',
          es: 'Condena(s) penal(es) (prisión, o más de 6 meses sin suspensión)',
        },
      },
    ],
  },
  {
    id: 'values',
    label: {
      fr: 'Comment évaluez-vous votre connaissance des valeurs, de l’histoire et des institutions de la France ?',
      pt: 'Como você avalia seu conhecimento dos valores, da história e das instituições da França?',
      en: 'How would you rate your knowledge of French values, history and institutions?',
      es: '¿Cómo evalúas tu conocimiento de los valores, la historia y las instituciones de Francia?',
    },
    options: [
      {
        id: 'good',
        label: {
          fr: 'Je maîtrise bien',
          pt: 'Eu domino bem',
          en: 'I know them well',
          es: 'Los domino bien',
        },
      },
      {
        id: 'partial',
        label: {
          fr: 'Connaissances partielles',
          pt: 'Conhecimentos parciais',
          en: 'Partial knowledge',
          es: 'Conocimientos parciales',
        },
      },
      {
        id: 'low',
        label: {
          fr: 'Connaissances limitées',
          pt: 'Conhecimentos limitados',
          en: 'Limited knowledge',
          es: 'Conocimientos limitados',
        },
      },
    ],
  },
]
