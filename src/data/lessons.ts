import type { L10n } from '../i18n'

export interface LessonSection {
  title: L10n
  text: L10n
}

export interface LessonVideo {
  title: L10n
  youtubeId: string
}

export interface Lesson {
  id: string
  title: L10n
  intro: L10n
  sections: LessonSection[]
  keyDates: { year: string; label: L10n }[]
  videos: LessonVideo[]
}

export const LESSONS: Lesson[] = [
  {
    id: 'histoire',
    title: {
      fr: 'L’histoire de France',
      pt: 'A história da França',
      en: 'The history of France',
      es: 'La historia de Francia',
    },
    intro: {
      fr: 'De la Gaule romaine à la Ve République, découvrez les grandes étapes de l’histoire de France, un des thèmes principaux de l’entretien.',
      pt: 'Da Gália romana à V República, descubra as grandes etapas da história da França, um dos temas principais da entrevista.',
      en: 'From Roman Gaul to the Fifth Republic, discover the major milestones of French history, one of the main topics of the interview.',
      es: 'De la Galia romana a la V República, descubre las grandes etapas de la historia de Francia, uno de los temas principales de la entrevista.',
    },
    sections: [
      {
        title: {
          fr: 'Des Gaulois à la monarchie',
          pt: 'Dos gauleses à monarquia',
          en: 'From the Gauls to the monarchy',
          es: 'De los galos a la monarquía',
        },
        text: {
          fr: 'La Gaule est conquise par les Romains de Jules César vers 52 av. J.-C. Vers 496, Clovis, roi des Francs, est baptisé à Reims. En 987, Hugues Capet devient roi de France et fonde la dynastie capétienne, qui durera huit siècles.',
          pt: 'A Gália foi conquistada pelos romanos de Júlio César por volta de 52 a.C. Por volta de 496, Clóvis, rei dos francos, é batizado em Reims. Em 987, Hugo Capeto torna-se rei da França e funda a dinastia capetiana, que durará oito séculos.',
          en: 'Gaul was conquered by Julius Caesar’s Romans around 52 BC. Around 496, Clovis, king of the Franks, was baptised in Reims. In 987, Hugh Capet became king of France and founded the Capetian dynasty, which lasted eight centuries.',
          es: 'La Galia fue conquistada por los romanos de Julio César hacia el 52 a.C. Hacia el 496, Clodoveo, rey de los francos, es bautizado en Reims. En 987, Hugo Capeto se convierte en rey de Francia y funda la dinastía capetiana, que durará ocho siglos.',
        },
      },
      {
        title: {
          fr: 'La Révolution française (1789)',
          pt: 'A Revolução Francesa (1789)',
          en: 'The French Revolution (1789)',
          es: 'La Revolución Francesa (1789)',
        },
        text: {
          fr: 'Le 14 juillet 1789, le peuple de Paris prend la Bastille. La Déclaration des droits de l’homme et du citoyen proclame la liberté et l’égalité. La monarchie est abolie et la Première République est proclamée en 1792.',
          pt: 'Em 14 de julho de 1789, o povo de Paris toma a Bastilha. A Declaração dos Direitos do Homem e do Cidadão proclama a liberdade e a igualdade. A monarquia é abolida e a Primeira República é proclamada em 1792.',
          en: 'On 14 July 1789, the people of Paris stormed the Bastille. The Declaration of the Rights of Man and of the Citizen proclaimed freedom and equality. The monarchy was abolished and the First Republic proclaimed in 1792.',
          es: 'El 14 de julio de 1789, el pueblo de París toma la Bastilla. La Declaración de los Derechos del Hombre y del Ciudadano proclama la libertad y la igualdad. La monarquía es abolida y la Primera República es proclamada en 1792.',
        },
      },
      {
        title: {
          fr: 'Napoléon et le XIXe siècle',
          pt: 'Napoleão e o século XIX',
          en: 'Napoleon and the 19th century',
          es: 'Napoleón y el siglo XIX',
        },
        text: {
          fr: 'Napoléon Bonaparte crée le Code civil en 1804, toujours en vigueur aujourd’hui. En 1848, l’esclavage est définitivement aboli en France et le suffrage universel masculin est instauré.',
          pt: 'Napoleão Bonaparte cria o Código Civil em 1804, ainda em vigor hoje. Em 1848, a escravidão é definitivamente abolida na França e o sufrágio universal masculino é instituído.',
          en: 'Napoleon Bonaparte created the Civil Code in 1804, still in force today. In 1848, slavery was definitively abolished in France and universal male suffrage was introduced.',
          es: 'Napoleón Bonaparte crea el Código Civil en 1804, todavía vigente hoy. En 1848, la esclavitud es definitivamente abolida en Francia y se instaura el sufragio universal masculino.',
        },
      },
      {
        title: {
          fr: 'Le XXe siècle',
          pt: 'O século XX',
          en: 'The 20th century',
          es: 'El siglo XX',
        },
        text: {
          fr: 'Les femmes obtiennent le droit de vote en 1944. Le 8 mai 1945 marque la fin de la Seconde Guerre mondiale en Europe. En 1958, le général de Gaulle fonde la Ve République, dont la Constitution est encore celle d’aujourd’hui.',
          pt: 'As mulheres conquistam o direito de voto em 1944. O 8 de maio de 1945 marca o fim da Segunda Guerra Mundial na Europa. Em 1958, o general de Gaulle funda a V República, cuja Constituição é ainda a de hoje.',
          en: 'Women won the right to vote in 1944. 8 May 1945 marks the end of the Second World War in Europe. In 1958, General de Gaulle founded the Fifth Republic, whose constitution is still the one in force today.',
          es: 'Las mujeres obtienen el derecho al voto en 1944. El 8 de mayo de 1945 marca el fin de la Segunda Guerra Mundial en Europa. En 1958, el general de Gaulle funda la V República, cuya Constitución sigue siendo la de hoy.',
        },
      },
    ],
    keyDates: [
      {
        year: '52 av. J.-C.',
        label: {
          fr: 'Conquête de la Gaule par les Romains',
          pt: 'Conquista da Gália pelos romanos',
          en: 'Gaul conquered by the Romans',
          es: 'Conquista de la Galia por los romanos',
        },
      },
      {
        year: '496',
        label: {
          fr: 'Baptême de Clovis à Reims',
          pt: 'Batismo de Clóvis em Reims',
          en: 'Baptism of Clovis in Reims',
          es: 'Bautismo de Clodoveo en Reims',
        },
      },
      {
        year: '987',
        label: {
          fr: 'Hugues Capet, roi de France',
          pt: 'Hugo Capeto, rei da França',
          en: 'Hugh Capet, king of France',
          es: 'Hugo Capeto, rey de Francia',
        },
      },
      {
        year: '1789',
        label: {
          fr: 'Prise de la Bastille, Révolution française',
          pt: 'Tomada da Bastilha, Revolução Francesa',
          en: 'Storming of the Bastille, French Revolution',
          es: 'Toma de la Bastilla, Revolución Francesa',
        },
      },
      {
        year: '1804',
        label: {
          fr: 'Code civil de Napoléon',
          pt: 'Código Civil de Napoleão',
          en: 'Napoleon’s Civil Code',
          es: 'Código Civil de Napoleón',
        },
      },
      {
        year: '1848',
        label: {
          fr: 'Abolition définitive de l’esclavage',
          pt: 'Abolição definitiva da escravidão',
          en: 'Definitive abolition of slavery',
          es: 'Abolición definitiva de la esclavitud',
        },
      },
      {
        year: '1944',
        label: {
          fr: 'Droit de vote des femmes',
          pt: 'Direito de voto das mulheres',
          en: 'Women’s right to vote',
          es: 'Derecho al voto de las mujeres',
        },
      },
      {
        year: '1958',
        label: {
          fr: 'Fondation de la Ve République',
          pt: 'Fundação da V República',
          en: 'Founding of the Fifth Republic',
          es: 'Fundación de la V República',
        },
      },
    ],
    videos: [
      {
        youtubeId: 'QWFLxlykIDk',
        title: {
          fr: 'C’est quoi la Révolution française ?',
          pt: 'O que foi a Revolução Francesa?',
          en: 'What was the French Revolution?',
          es: '¿Qué fue la Revolución Francesa?',
        },
      },
      {
        youtubeId: 'fw8lA9Z1Yow',
        title: {
          fr: 'C’est quoi la démocratie ?',
          pt: 'O que é a democracia?',
          en: 'What is democracy?',
          es: '¿Qué es la democracia?',
        },
      },
    ],
  },
  {
    id: 'valeurs',
    title: {
      fr: 'Valeurs et symboles',
      pt: 'Valores e símbolos',
      en: 'Values and symbols',
      es: 'Valores y símbolos',
    },
    intro: {
      fr: 'La devise, les symboles et la laïcité : les valeurs essentielles de la République française.',
      pt: 'O lema, os símbolos e a laicidade: os valores essenciais da República Francesa.',
      en: 'The motto, the symbols and secularism: the core values of the French Republic.',
      es: 'El lema, los símbolos y la laicidad: los valores esenciales de la República Francesa.',
    },
    sections: [
      {
        title: {
          fr: 'La devise : Liberté, Égalité, Fraternité',
          pt: 'O lema: Liberdade, Igualdade, Fraternidade',
          en: 'The motto: Liberty, Equality, Fraternity',
          es: 'El lema: Libertad, Igualdad, Fraternidad',
        },
        text: {
          fr: 'Née de la Révolution française, la devise figure sur les bâtiments publics. La liberté : chacun peut penser, s’exprimer et agir librement. L’égalité : tous les citoyens ont les mêmes droits devant la loi. La fraternité : les citoyens s’entraident en solidarité.',
          pt: 'Nascida da Revolução Francesa, o lema aparece nos edifícios públicos. A liberdade: cada um pode pensar, expressar-se e agir livremente. A igualdade: todos os cidadãos têm os mesmos direitos perante a lei. A fraternidade: os cidadãos se ajudam em solidariedade.',
          en: 'Born of the French Revolution, the motto appears on public buildings. Liberty: everyone may think, speak and act freely. Equality: all citizens have the same rights before the law. Fraternity: citizens help one another in solidarity.',
          es: 'Nacida de la Revolución Francesa, el lema figura en los edificios públicos. La libertad: cada uno puede pensar, expresarse y actuar libremente. La igualdad: todos los ciudadanos tienen los mismos derechos ante la ley. La fraternidad: los ciudadanos se ayudan en solidaridad.',
        },
      },
      {
        title: {
          fr: 'Les symboles de la République',
          pt: 'Os símbolos da República',
          en: 'The symbols of the Republic',
          es: 'Los símbolos de la República',
        },
        text: {
          fr: 'Le drapeau tricolore bleu-blanc-rouge, l’hymne national La Marseillaise, la fête nationale du 14 juillet, Marianne (allégorie de la République) et le coq gaulois sont les symboles de la France.',
          pt: 'A bandeira tricolor azul-branco-vermelha, o hino nacional A Marselhesa, a festa nacional de 14 de julho, Marianne (alegoria da República) e o galo gaulês são os símbolos da França.',
          en: 'The blue-white-red tricolour flag, the national anthem La Marseillaise, the national holiday of 14 July, Marianne (allegory of the Republic) and the Gallic rooster are the symbols of France.',
          es: 'La bandera tricolor azul-blanco-roja, el himno nacional La Marsellesa, la fiesta nacional del 14 de julio, Marianne (alegoría de la República) y el gallo galo son los símbolos de Francia.',
        },
      },
      {
        title: {
          fr: 'La laïcité',
          pt: 'A laicidade',
          en: 'Secularism',
          es: 'La laicidad',
        },
        text: {
          fr: 'Depuis la loi de 1905, la République garantit la liberté de conscience et sépare les Églises de l’État. L’État ne reconnaît ni ne finance aucun culte : chacun peut croire ou ne pas croire, librement.',
          pt: 'Desde a lei de 1905, a República garante a liberdade de consciência e separa as igrejas do Estado. O Estado não reconhece nem financia nenhum culto: cada um pode crer ou não crer, livremente.',
          en: 'Since the 1905 law, the Republic guarantees freedom of conscience and separates churches from the state. The state neither recognises nor funds any religion: everyone may believe or not believe, freely.',
          es: 'Desde la ley de 1905, la República garantiza la libertad de conciencia y separa las iglesias del Estado. El Estado no reconoce ni financia ningún culto: cada uno puede creer o no creer, libremente.',
        },
      },
    ],
    keyDates: [
      {
        year: '1789',
        label: {
          fr: 'Déclaration des droits de l’homme et du citoyen',
          pt: 'Declaração dos Direitos do Homem e do Cidadão',
          en: 'Declaration of the Rights of Man and of the Citizen',
          es: 'Declaración de los Derechos del Hombre y del Ciudadano',
        },
      },
      {
        year: '1792',
        label: {
          fr: 'La Marseillaise devient l’hymne national',
          pt: 'A Marselhesa torna-se o hino nacional',
          en: 'La Marseillaise becomes the national anthem',
          es: 'La Marsellesa se convierte en el himno nacional',
        },
      },
      {
        year: '1905',
        label: {
          fr: 'Loi de séparation des Églises et de l’État',
          pt: 'Lei de separação das Igrejas e do Estado',
          en: 'Law separating churches and the state',
          es: 'Ley de separación de las Iglesias y del Estado',
        },
      },
    ],
    videos: [
      {
        youtubeId: 'TFdOCfU859w',
        title: {
          fr: 'C’est quoi la laïcité ?',
          pt: 'O que é a laicidade?',
          en: 'What is secularism?',
          es: '¿Qué es la laicidad?',
        },
      },
      {
        youtubeId: '-IiT4dmr2_M',
        title: {
          fr: 'C’est quoi « Liberté, Égalité, Fraternité » ?',
          pt: 'O que é « Liberdade, Igualdade, Fraternidade »?',
          en: 'What is “Liberty, Equality, Fraternity”?',
          es: '¿Qué es « Libertad, Igualdad, Fraternidad »?',
        },
      },
      {
        youtubeId: '5pBg81472XQ',
        title: {
          fr: 'C’est quoi le 14 Juillet ?',
          pt: 'O que é o 14 de Julho?',
          en: 'What is 14 July?',
          es: '¿Qué es el 14 de Julio?',
        },
      },
      {
        youtubeId: 'p39Ujb2fz9s',
        title: {
          fr: 'C’est quoi, la fraternité ?',
          pt: 'O que é a fraternidade?',
          en: 'What is fraternity?',
          es: '¿Qué es la fraternidad?',
        },
      },
    ],
  },
  {
    id: 'institutions',
    title: {
      fr: 'Institutions et Europe',
      pt: 'Instituições e Europa',
      en: 'Institutions and Europe',
      es: 'Instituciones y Europa',
    },
    intro: {
      fr: 'Comment la France est-elle gouvernée ? Le président, le Parlement, les lois et l’Union européenne.',
      pt: 'Como a França é governada? O presidente, o Parlamento, as leis e a União Europeia.',
      en: 'How is France governed? The president, the Parliament, the laws and the European Union.',
      es: '¿Cómo se gobierna Francia? El presidente, el Parlamento, las leyes y la Unión Europea.',
    },
    sections: [
      {
        title: {
          fr: 'La Ve République',
          pt: 'A V República',
          en: 'The Fifth Republic',
          es: 'La V República',
        },
        text: {
          fr: 'Créée en 1958, la Ve République est régie par la Constitution. Le président de la République est élu au suffrage universel direct pour 5 ans. Il nomme le Premier ministre, qui dirige le gouvernement.',
          pt: 'Criada em 1958, a V República é regida pela Constituição. O presidente da República é eleito por sufrágio universal direto por 5 anos. Ele nomeia o primeiro-ministro, que dirige o governo.',
          en: 'Created in 1958, the Fifth Republic is governed by the Constitution. The president of the Republic is elected by direct universal suffrage for 5 years. He appoints the prime minister, who leads the government.',
          es: 'Creada en 1958, la V República se rige por la Constitución. El presidente de la República es elegido por sufragio universal directo por 5 años. Nombra al primer ministro, que dirige el gobierno.',
        },
      },
      {
        title: {
          fr: 'Les pouvoirs',
          pt: 'Os poderes',
          en: 'The powers',
          es: 'Los poderes',
        },
        text: {
          fr: 'Le pouvoir exécutif : le président et le gouvernement. Le pouvoir législatif : le Parlement, composé de l’Assemblée nationale (députés élus pour 5 ans) et du Sénat, vote les lois. Le pouvoir judiciaire rend la justice au nom du peuple français.',
          pt: 'O poder executivo: o presidente e o governo. O poder legislativo: o Parlamento, composto pela Assembleia Nacional (deputados eleitos por 5 anos) e pelo Senado, vota as leis. O poder judiciário faz justiça em nome do povo francês.',
          en: 'Executive power: the president and the government. Legislative power: the Parliament, made up of the National Assembly (deputies elected for 5 years) and the Senate, votes the laws. Judicial power delivers justice in the name of the French people.',
          es: 'El poder ejecutivo: el presidente y el gobierno. El poder legislativo: el Parlamento, compuesto por la Asamblea Nacional (diputados elegidos por 5 años) y el Senado, vota las leyes. El poder judicial administra justicia en nombre del pueblo francés.',
        },
      },
      {
        title: {
          fr: 'L’Union européenne',
          pt: 'A União Europeia',
          en: 'The European Union',
          es: 'La Unión Europea',
        },
        text: {
          fr: 'La France est un des membres fondateurs de l’Union européenne, née du traité de Rome en 1957. L’euro, monnaie unique, circule depuis 2002. Un citoyen français est aussi citoyen européen.',
          pt: 'A França é um dos membros fundadores da União Europeia, nascida do Tratado de Roma em 1957. O euro, moeda única, circula desde 2002. Um cidadão francês também é cidadão europeu.',
          en: 'France is one of the founding members of the European Union, born of the Treaty of Rome in 1957. The euro, the single currency, has circulated since 2002. A French citizen is also a European citizen.',
          es: 'Francia es uno de los miembros fundadores de la Unión Europea, nacida del Tratado de Roma en 1957. El euro, moneda única, circula desde 2002. Un ciudadano francés también es ciudadano europeo.',
        },
      },
    ],
    keyDates: [
      {
        year: '1957',
        label: {
          fr: 'Traité de Rome, naissance de la CEE',
          pt: 'Tratado de Roma, nascimento da CEE',
          en: 'Treaty of Rome, birth of the EEC',
          es: 'Tratado de Roma, nacimiento de la CEE',
        },
      },
      {
        year: '1958',
        label: {
          fr: 'Constitution de la Ve République',
          pt: 'Constituição da V República',
          en: 'Constitution of the Fifth Republic',
          es: 'Constitución de la V República',
        },
      },
      {
        year: '2002',
        label: {
          fr: 'Mise en circulation de l’euro',
          pt: 'Entrada em circulação do euro',
          en: 'The euro enters into circulation',
          es: 'Puesta en circulación del euro',
        },
      },
    ],
    videos: [
      {
        youtubeId: 'Z7enoBRUt1s',
        title: {
          fr: 'C’est quoi l’Union européenne ?',
          pt: 'O que é a União Europeia?',
          en: 'What is the European Union?',
          es: '¿Qué es la Unión Europea?',
        },
      },
      {
        youtubeId: 'fw8lA9Z1Yow',
        title: {
          fr: 'C’est quoi la démocratie ?',
          pt: 'O que é a democracia?',
          en: 'What is democracy?',
          es: '¿Qué es la democracia?',
        },
      },
      {
        youtubeId: 'IGAOnHbULZQ',
        title: {
          fr: 'C’est quoi la Ve République ?',
          pt: 'O que é a V República?',
          en: 'What is the Fifth Republic?',
          es: '¿Qué es la V República?',
        },
      },
      {
        youtubeId: 'okZBvGSpmQw',
        title: {
          fr: 'C’est quoi l’Assemblée nationale ?',
          pt: 'O que é a Assembleia Nacional?',
          en: 'What is the National Assembly?',
          es: '¿Qué es la Asamblea Nacional?',
        },
      },
    ],
  },
  {
    id: 'droits',
    title: {
      fr: 'Droits et devoirs',
      pt: 'Direitos e deveres',
      en: 'Rights and duties',
      es: 'Derechos y deberes',
    },
    intro: {
      fr: 'Devenir français, c’est acquérir des droits mais aussi des devoirs : le vote, le jury d’assises, la défense et la solidarité.',
      pt: 'Tornar-se francês é adquirir direitos, mas também deveres: o voto, o júri popular, a defesa e a solidariedade.',
      en: 'Becoming French means gaining rights but also duties: voting, jury service, defence and solidarity.',
      es: 'Volverse francés es adquirir derechos, pero también deberes: el voto, el jurado popular, la defensa y la solidaridad.',
    },
    sections: [
      {
        title: {
          fr: 'Les droits du citoyen',
          pt: 'Os direitos do cidadão',
          en: 'The rights of the citizen',
          es: 'Los derechos del ciudadano',
        },
        text: {
          fr: 'La Déclaration de 1789 garantit la liberté d’expression, l’égalité devant la loi, la liberté de conscience et le droit de propriété. Le citoyen naturalisé peut voter à toutes les élections.',
          pt: 'A Declaração de 1789 garante a liberdade de expressão, a igualdade perante a lei, a liberdade de consciência e o direito de propriedade. O cidadão naturalizado pode votar em todas as eleições.',
          en: 'The 1789 Declaration guarantees freedom of expression, equality before the law, freedom of conscience and the right to property. A naturalised citizen may vote in all elections.',
          es: 'La Declaración de 1789 garantiza la libertad de expresión, la igualdad ante la ley, la libertad de conciencia y el derecho de propiedad. El ciudadano naturalizado puede votar en todas las elecciones.',
        },
      },
      {
        title: {
          fr: 'Les devoirs du citoyen',
          pt: 'Os deveres do cidadão',
          en: 'The duties of the citizen',
          es: 'Los deberes del ciudadano',
        },
        text: {
          fr: 'Respecter les lois, payer les impôts, participer au jury d’assises, se faire recenser et participer à la journée de défense et de citoyenneté (JDC) font partie des devoirs du citoyen.',
          pt: 'Respeitar as leis, pagar os impostos, participar do júri popular, fazer o recenseamento e participar da jornada de defesa e cidadania (JDC) fazem parte dos deveres do cidadão.',
          en: 'Respecting the laws, paying taxes, serving on a criminal jury, registering and taking part in the defence and citizenship day (JDC) are among the duties of the citizen.',
          es: 'Respetar las leyes, pagar los impuestos, participar en el jurado popular, hacer el empadronamiento y participar en la jornada de defensa y ciudadanía (JDC) forman parte de los deberes del ciudadano.',
        },
      },
      {
        title: {
          fr: 'Le vote',
          pt: 'O voto',
          en: 'Voting',
          es: 'El voto',
        },
        text: {
          fr: 'Le droit de vote s’exerce à partir de 18 ans, aux élections municipales, départementales, régionales, législatives, présidentielles et européennes. Voter est un droit, mais aussi un acte de démocratie.',
          pt: 'O direito de voto é exercido a partir dos 18 anos, nas eleições municipais, departamentais, regionais, legislativas, presidenciais e europeias. Votar é um direito, mas também um ato de democracia.',
          en: 'The right to vote is exercised from age 18, in municipal, departmental, regional, legislative, presidential and European elections. Voting is a right, but also an act of democracy.',
          es: 'El derecho al voto se ejerce a partir de los 18 años, en las elecciones municipales, departamentales, regionales, legislativas, presidenciales y europeas. Votar es un derecho, pero también un acto de democracia.',
        },
      },
      {
        title: {
          fr: 'La protection sociale',
          pt: 'A proteção social',
          en: 'Social protection',
          es: 'La protección social',
        },
        text: {
          fr: 'Créée en 1945, la Sécurité sociale protège tous les résidents : santé, famille, retraite. La solidarité est un principe fondamental de la République.',
          pt: 'Criada em 1945, a Seguridade Social protege todos os residentes: saúde, família, aposentadoria. A solidariedade é um princípio fundamental da República.',
          en: 'Created in 1945, the social security system protects all residents: health, family, retirement. Solidarity is a fundamental principle of the Republic.',
          es: 'Creada en 1945, la Seguridad Social protege a todos los residentes: salud, familia, jubilación. La solidaridad es un principio fundamental de la República.',
        },
      },
    ],
    keyDates: [
      {
        year: '1789',
        label: {
          fr: 'Déclaration des droits de l’homme et du citoyen',
          pt: 'Declaração dos Direitos do Homem e do Cidadão',
          en: 'Declaration of the Rights of Man and of the Citizen',
          es: 'Declaración de los Derechos del Hombre y del Ciudadano',
        },
      },
      {
        year: '1945',
        label: {
          fr: 'Création de la Sécurité sociale',
          pt: 'Criação da Seguridade Social',
          en: 'Creation of the social security system',
          es: 'Creación de la Seguridad Social',
        },
      },
      {
        year: '18 ans',
        label: {
          fr: 'Âge du droit de vote',
          pt: 'Idade do direito de voto',
          en: 'Voting age',
          es: 'Edad del derecho al voto',
        },
      },
    ],
    videos: [
      {
        youtubeId: 'hzLKgETg1eA',
        title: {
          fr: 'C’est quoi être citoyen ?',
          pt: 'O que é ser cidadão?',
          en: 'What is being a citizen?',
          es: '¿Qué es ser ciudadano?',
        },
      },
      {
        youtubeId: 'pLDZ7dD2sLc',
        title: {
          fr: 'C’est quoi vivre ensemble ?',
          pt: 'O que é viver juntos?',
          en: 'What is living together?',
          es: '¿Qué es vivir juntos?',
        },
      },
      {
        youtubeId: 'mzky0ylhgCo',
        title: {
          fr: 'C’est quoi la Déclaration universelle des droits de l’homme ?',
          pt: 'O que é a Declaração Universal dos Direitos Humanos?',
          en: 'What is the Universal Declaration of Human Rights?',
          es: '¿Qué es la Declaración Universal de los Derechos Humanos?',
        },
      },
      {
        youtubeId: 'nAJsnSpM5ro',
        title: {
          fr: 'C’est quoi les élections régionales ?',
          pt: 'O que são as eleições regionais?',
          en: 'What are regional elections?',
          es: '¿Qué son las elecciones regionales?',
        },
      },
    ],
  },
]
