import type { L10n } from '../i18n'

export interface QuizOption {
  label: L10n
  correct?: boolean
}

export interface QuizQuestion {
  q: L10n
  options: QuizOption[]
  explanation: L10n
}

export const QUIZ: QuizQuestion[] = [
  {
    q: {
      fr: 'Quelle est la devise de la République française ?',
      pt: 'Qual é o lema da República francesa?',
      en: 'What is the motto of the French Republic?',
      es: '¿Cuál es el lema de la República francesa?',
    },
    options: [
      {
        correct: true,
        label: {
          fr: 'Liberté, Égalité, Fraternité',
          pt: 'Liberdade, Igualdade, Fraternidade',
          en: 'Liberty, Equality, Fraternity',
          es: 'Libertad, Igualdad, Fraternidad',
        },
      },
      {
        label: {
          fr: 'Travail, Famille, Patrie',
          pt: 'Trabalho, Família, Pátria',
          en: 'Work, Family, Fatherland',
          es: 'Trabajo, Familia, Patria',
        },
      },
      {
        label: {
          fr: 'Liberté, Égalité, Propriété',
          pt: 'Liberdade, Igualdade, Propriedade',
          en: 'Liberty, Equality, Property',
          es: 'Libertad, Igualdad, Propiedad',
        },
      },
    ],
    explanation: {
      fr: 'La devise est « Liberté, Égalité, Fraternité » (article 2 de la Constitution).',
      pt: 'O lema é « Liberdade, Igualdade, Fraternidade » (artigo 2.º da Constituição).',
      en: 'The motto is "Liberty, Equality, Fraternity" (Article 2 of the Constitution).',
      es: 'El lema es « Libertad, Igualdad, Fraternidad » (artículo 2 de la Constitución).',
    },
  },
  {
    q: {
      fr: 'Que célèbre-t-on le 14 juillet ?',
      pt: 'O que se comemora em 14 de julho?',
      en: 'What is celebrated on 14 July?',
      es: '¿Qué se celebra el 14 de julio?',
    },
    options: [
      {
        correct: true,
        label: {
          fr: 'La prise de la Bastille (1789)',
          pt: 'A tomada da Bastilha (1789)',
          en: 'The storming of the Bastille (1789)',
          es: 'La toma de la Bastilla (1789)',
        },
      },
      {
        label: {
          fr: 'La fin de la Seconde Guerre mondiale',
          pt: 'O fim da Segunda Guerra Mundial',
          en: 'The end of World War II',
          es: 'El fin de la Segunda Guerra Mundial',
        },
      },
      {
        label: {
          fr: 'Le sacre de Napoléon',
          pt: 'A coroação de Napoleão',
          en: 'Napoleon’s coronation',
          es: 'La coronación de Napoleón',
        },
      },
    ],
    explanation: {
      fr: 'Le 14 juillet commémore la prise de la Bastille en 1789 ; c’est la fête nationale depuis 1880.',
      pt: '14 de julho comemora a tomada da Bastilha em 1789; é feriado nacional desde 1880.',
      en: '14 July commemorates the storming of the Bastille in 1789; it has been the national holiday since 1880.',
      es: 'El 14 de julio conmemora la toma de la Bastilla en 1789; es la fiesta nacional desde 1880.',
    },
  },
  {
    q: {
      fr: 'Quel est l’hymne national français ?',
      pt: 'Qual é o hino nacional francês?',
      en: 'What is the French national anthem?',
      es: '¿Cuál es el himno nacional francés?',
    },
    options: [
      {
        correct: true,
        label: {
          fr: 'La Marseillaise',
          pt: 'A Marselhesa (La Marseillaise)',
          en: 'La Marseillaise',
          es: 'La Marsellesa (La Marseillaise)',
        },
      },
      {
        label: {
          fr: 'Le Chant du départ',
          pt: 'Le Chant du départ',
          en: 'Le Chant du départ',
          es: 'Le Chant du départ',
        },
      },
      {
        label: {
          fr: 'Auprès de mon arbre',
          pt: 'Auprès de mon arbre',
          en: 'Auprès de mon arbre',
          es: 'Auprès de mon arbre',
        },
      },
    ],
    explanation: {
      fr: 'L’hymne national est La Marseillaise, composée par Rouget de Lisle en 1792.',
      pt: 'O hino nacional é A Marselhesa, composta por Rouget de Lisle em 1792.',
      en: 'The national anthem is La Marseillaise, composed by Rouget de Lisle in 1792.',
      es: 'El himno nacional es La Marsellesa, compuesta por Rouget de Lisle en 1792.',
    },
  },
  {
    q: {
      fr: 'Qui a été élu président de la République en 2022 ?',
      pt: 'Quem foi eleito presidente da República em 2022?',
      en: 'Who was elected President of the Republic in 2022?',
      es: '¿Quién fue elegido presidente de la República en 2022?',
    },
    options: [
      {
        correct: true,
        label: { fr: 'Emmanuel Macron', pt: 'Emmanuel Macron', en: 'Emmanuel Macron', es: 'Emmanuel Macron' },
      },
      {
        label: { fr: 'François Hollande', pt: 'François Hollande', en: 'François Hollande', es: 'François Hollande' },
      },
      {
        label: { fr: 'Nicolas Sarkozy', pt: 'Nicolas Sarkozy', en: 'Nicolas Sarkozy', es: 'Nicolas Sarkozy' },
      },
    ],
    explanation: {
      fr: 'Emmanuel Macron a été réélu en avril 2022 pour un second mandat de 5 ans.',
      pt: 'Emmanuel Macron foi reeleito em abril de 2022 para um segundo mandato de 5 anos.',
      en: 'Emmanuel Macron was re-elected in April 2022 for a second 5-year term.',
      es: 'Emmanuel Macron fue reelegido en abril de 2022 para un segundo mandato de 5 años.',
    },
  },
  {
    q: {
      fr: 'Quelle est la durée du mandat du président de la République ?',
      pt: 'Qual é a duração do mandato do presidente da República?',
      en: 'How long is the President of the Republic’s term?',
      es: '¿Cuál es la duración del mandato del presidente de la República?',
    },
    options: [
      {
        correct: true,
        label: { fr: '5 ans', pt: '5 anos', en: '5 years', es: '5 años' },
      },
      {
        label: { fr: '7 ans', pt: '7 anos', en: '7 years', es: '7 años' },
      },
      {
        label: { fr: '4 ans', pt: '4 anos', en: '4 years', es: '4 años' },
      },
    ],
    explanation: {
      fr: 'Depuis le référendum de 2000, le président est élu pour 5 ans (quinquennat) au suffrage universel direct.',
      pt: 'Desde o referendo de 2000, o presidente é eleito por 5 anos (quinquenato) por sufrágio universal direto.',
      en: 'Since the 2000 referendum, the president is elected for 5 years by direct universal suffrage.',
      es: 'Desde el referéndum de 2000, el presidente es elegido por 5 años (quinquenato) por sufragio universal directo.',
    },
  },
  {
    q: {
      fr: 'Quel texte organise la séparation des Églises et de l’État ?',
      pt: 'Qual texto organiza a separação entre Igrejas e Estado?',
      en: 'Which law established the separation of churches and the State?',
      es: '¿Qué texto organiza la separación entre las Iglesias y el Estado?',
    },
    options: [
      {
        correct: true,
        label: {
          fr: 'La loi de 1905',
          pt: 'A lei de 1905',
          en: 'The 1905 law',
          es: 'La ley de 1905',
        },
      },
      {
        label: {
          fr: 'La Constitution de 1958',
          pt: 'A Constituição de 1958',
          en: 'The 1958 Constitution',
          es: 'La Constitución de 1958',
        },
      },
      {
        label: {
          fr: 'L’édit de Nantes',
          pt: 'O Édito de Nantes',
          en: 'The Edict of Nantes',
          es: 'El Edicto de Nantes',
        },
      },
    ],
    explanation: {
      fr: 'La loi du 9 décembre 1905 : la République garantit la liberté de conscience et ne reconnaît aucun culte (laïcité).',
      pt: 'A lei de 9 de dezembro de 1905: a República garante a liberdade de consciência e não reconhece nenhum culto (laicidade).',
      en: 'The law of 9 December 1905: the Republic guarantees freedom of conscience and recognises no religion (secularism).',
      es: 'La ley del 9 de diciembre de 1905: la República garantiza la libertad de conciencia y no reconoce ningún culto (laicidad).',
    },
  },
  {
    q: {
      fr: 'Quel texte de 1789 proclame les droits de l’homme ?',
      pt: 'Qual texto de 1789 proclama os direitos do homem?',
      en: 'Which 1789 text proclaimed human rights?',
      es: '¿Qué texto de 1789 proclama los derechos del hombre?',
    },
    options: [
      {
        correct: true,
        label: {
          fr: 'La Déclaration des droits de l’homme et du citoyen',
          pt: 'A Declaração dos Direitos do Homem e do Cidadão',
          en: 'The Declaration of the Rights of Man and of the Citizen',
          es: 'La Declaración de los Derechos del Hombre y del Ciudadano',
        },
      },
      {
        label: {
          fr: 'Le Code civil',
          pt: 'O Código Civil',
          en: 'The Civil Code',
          es: 'El Código Civil',
        },
      },
      {
        label: {
          fr: 'La Constitution de la Ve République',
          pt: 'A Constituição da V República',
          en: 'The Constitution of the Fifth Republic',
          es: 'La Constitución de la V República',
        },
      },
    ],
    explanation: {
      fr: 'La Déclaration des droits de l’homme et du citoyen a été adoptée le 26 août 1789.',
      pt: 'A Declaração dos Direitos do Homem e do Cidadão foi adotada em 26 de agosto de 1789.',
      en: 'The Declaration of the Rights of Man and of the Citizen was adopted on 26 August 1789.',
      es: 'La Declaración de los Derechos del Hombre y del Ciudadano fue adoptada el 26 de agosto de 1789.',
    },
  },
  {
    q: {
      fr: 'Quelle est la forme du régime politique français ?',
      pt: 'Qual é a forma de regime político da França?',
      en: 'What is the form of the French political system?',
      es: '¿Cuál es la forma de régimen político de Francia?',
    },
    options: [
      {
        correct: true,
        label: {
          fr: 'Une République — la Ve République',
          pt: 'Uma República — a V República',
          en: 'A Republic — the Fifth Republic',
          es: 'Una República — la V República',
        },
      },
      {
        label: {
          fr: 'Une monarchie constitutionnelle',
          pt: 'Uma monarquia constitucional',
          en: 'A constitutional monarchy',
          es: 'Una monarquía constitucional',
        },
      },
      {
        label: {
          fr: 'Un empire',
          pt: 'Um império',
          en: 'An empire',
          es: 'Un imperio',
        },
      },
    ],
    explanation: {
      fr: 'La France est une République, régie par la Constitution de 1958 (Ve République).',
      pt: 'A França é uma República, regida pela Constituição de 1958 (V República).',
      en: 'France is a Republic, governed by the 1958 Constitution (Fifth Republic).',
      es: 'Francia es una República, regida por la Constitución de 1958 (V República).',
    },
  },
  {
    q: {
      fr: 'Qui incarne allégoriquement la République française ?',
      pt: 'Quem representa alegoricamente a República francesa?',
      en: 'Who allegorically embodies the French Republic?',
      es: '¿Quién encarna alegóricamente la República francesa?',
    },
    options: [
      {
        correct: true,
        label: { fr: 'Marianne', pt: 'Marianne', en: 'Marianne', es: 'Marianne' },
      },
      {
        label: { fr: 'Jeanne d’Arc', pt: 'Joana d’Arc', en: 'Joan of Arc', es: 'Juana de Arco' },
      },
      {
        label: { fr: 'Catherine de Médicis', pt: 'Catarina de Médici', en: 'Catherine de’ Medici', es: 'Catalina de Médici' },
      },
    ],
    explanation: {
      fr: 'Marianne, coiffée du bonnet phrygien, symbolise la République et la liberté. Ses busts ornent les mairies.',
      pt: 'Marianne, com o barrete frígio, simboliza a República e a liberdade. Seus bustos ornamentam as prefeituras.',
      en: 'Marianne, wearing the Phrygian cap, symbolises the Republic and liberty. Her busts adorn town halls.',
      es: 'Marianne, con el gorro frigio, simboliza la República y la libertad. Sus bustos adornan los ayuntamientos.',
    },
  },
  {
    q: {
      fr: 'Quelles sont les couleurs du drapeau français ?',
      pt: 'Quais são as cores da bandeira francesa?',
      en: 'What are the colours of the French flag?',
      es: '¿Cuáles son los colores de la bandera francesa?',
    },
    options: [
      {
        correct: true,
        label: {
          fr: 'Bleu, blanc, rouge',
          pt: 'Azul, branco, vermelho',
          en: 'Blue, white, red',
          es: 'Azul, blanco, rojo',
        },
      },
      {
        label: {
          fr: 'Blanc, rouge, jaune',
          pt: 'Branco, vermelho, amarelo',
          en: 'White, red, yellow',
          es: 'Blanco, rojo, amarillo',
        },
      },
      {
        label: {
          fr: 'Bleu, blanc, noir',
          pt: 'Azul, branco, preto',
          en: 'Blue, white, black',
          es: 'Azul, blanco, negro',
        },
      },
    ],
    explanation: {
      fr: 'Le drapeau tricolore bleu-blanc-rouge est l’emblème national (article 2 de la Constitution).',
      pt: 'A bandeira tricolor azul-branco-vermelha é o emblema nacional (artigo 2.º da Constituição).',
      en: 'The blue-white-red tricolour flag is the national emblem (Article 2 of the Constitution).',
      es: 'La bandera tricolor azul-blanco-roja es el emblema nacional (artículo 2 de la Constitución).',
    },
  },
  {
    q: {
      fr: 'Quelle institution vote les lois ?',
      pt: 'Qual instituição vota as leis?',
      en: 'Which institution votes on laws?',
      es: '¿Qué institución vota las leyes?',
    },
    options: [
      {
        correct: true,
        label: {
          fr: 'Le Parlement (Assemblée nationale et Sénat)',
          pt: 'O Parlamento (Assembleia Nacional e Senado)',
          en: 'Parliament (National Assembly and Senate)',
          es: 'El Parlamento (Asamblea Nacional y Senado)',
        },
      },
      {
        label: {
          fr: 'Le président seul',
          pt: 'Somente o presidente',
          en: 'The president alone',
          es: 'Solo el presidente',
        },
      },
      {
        label: {
          fr: 'Le Conseil constitutionnel',
          pt: 'O Conselho Constitucional',
          en: 'The Constitutional Council',
          es: 'El Consejo Constitucional',
        },
      },
    ],
    explanation: {
      fr: 'Les lois sont votées par le Parlement, composé de l’Assemblée nationale et du Sénat.',
      pt: 'As leis são votadas pelo Parlamento, composto pela Assembleia Nacional e pelo Senado.',
      en: 'Laws are voted by Parliament, made up of the National Assembly and the Senate.',
      es: 'Las leyes son votadas por el Parlamento, compuesto por la Asamblea Nacional y el Senado.',
    },
  },
  {
    q: {
      fr: 'Parmi ces affirmations, laquelle est exacte concernant les devoirs du citoyen ?',
      pt: 'Dentre estas afirmações, qual é correta sobre os deveres do cidadão?',
      en: 'Which of these statements about citizens’ duties is correct?',
      es: 'De estas afirmaciones, ¿cuál es correcta sobre los deberes del ciudadano?',
    },
    options: [
      {
        correct: true,
        label: {
          fr: 'Respecter les lois et payer ses impôts',
          pt: 'Respeitar as leis e pagar seus impostos',
          en: 'Respect the laws and pay taxes',
          es: 'Respetar las leyes y pagar los impuestos',
        },
      },
      {
        label: {
          fr: 'Le vote est obligatoire en France',
          pt: 'O voto é obrigatório na França',
          en: 'Voting is compulsory in France',
          es: 'El voto es obligatorio en Francia',
        },
      },
      {
        label: {
          fr: 'Le service militaire dure 5 ans',
          pt: 'O serviço militar dura 5 anos',
          en: 'Military service lasts 5 years',
          es: 'El servicio militar dura 5 años',
        },
      },
    ],
    explanation: {
      fr: 'Le citoyen doit respecter les lois et payer ses impôts. Le vote est un droit, pas une obligation.',
      pt: 'O cidadão deve respeitar as leis e pagar seus impostos. O voto é um direito, não uma obrigação.',
      en: 'Citizens must respect the laws and pay taxes. Voting is a right, not an obligation.',
      es: 'El ciudadano debe respetar las leyes y pagar sus impuestos. El voto es un derecho, no una obligación.',
    },
  },
]
