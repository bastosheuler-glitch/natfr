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

export interface QuizTheme {
  id: string
  title: L10n
  questions: QuizQuestion[]
}

function h(q: L10n, opts: [L10n, L10n, L10n], correct: number, explanation: L10n): QuizQuestion {
  return {
    q,
    options: opts.map((label, i) => (i === correct ? { label, correct: true } : { label })),
    explanation,
  }
}

export const THEMES: QuizTheme[] = [
  {
    id: 'histoire',
    title: {
      fr: 'L’histoire de France',
      pt: 'A história da França',
      en: 'The history of France',
      es: 'La historia de Francia',
    },
    questions: [
      h(
        {
          fr: 'Quel peuple a conquis la Gaule vers 52 av. J.-C. ?',
          pt: 'Qual povo conquistou a Gália por volta de 52 a.C.?',
          en: 'Which people conquered Gaul around 52 BC?',
          es: '¿Qué pueblo conquistó la Galia hacia el 52 a.C.?',
        },
        [
          { fr: 'Les Romains', pt: 'Os romanos', en: 'The Romans', es: 'Los romanos' },
          { fr: 'Les Francs', pt: 'Os francos', en: 'The Franks', es: 'Los francos' },
          { fr: 'Les Vikings', pt: 'Os vikings', en: 'The Vikings', es: 'Los vikingos' },
        ],
        0,
        {
          fr: 'Jules César conquiert la Gaule lors de la guerre des Gaules (58-52 av. J.-C.).',
          pt: 'Júlio César conquistou a Gália durante a Guerra das Gálias (58-52 a.C.).',
          en: 'Julius Caesar conquered Gaul during the Gallic Wars (58-52 BC).',
          es: 'Julio César conquistó la Galia durante la Guerra de las Galias (58-52 a.C.).',
        },
      ),
      h(
        {
          fr: 'Quel roi des Francs a été baptisé à Reims vers 496 ?',
          pt: 'Qual rei dos francos foi batizado em Reims por volta de 496?',
          en: 'Which king of the Franks was baptised in Reims around 496?',
          es: '¿Qué rey de los francos fue bautizado en Reims hacia 496?',
        },
        [
          { fr: 'Clovis', pt: 'Clóvis', en: 'Clovis', es: 'Clovis' },
          { fr: 'Charlemagne', pt: 'Carlos Magno', en: 'Charlemagne', es: 'Carlomagno' },
          { fr: 'Hugues Capet', pt: 'Hugo Capeto', en: 'Hugh Capet', es: 'Hugo Capeto' },
        ],
        0,
        {
          fr: 'Clovis, roi des Francs, est baptisé à Reims vers 496 : ce baptême marque l’alliance entre la royauté et l’Église.',
          pt: 'Clóvis, rei dos francos, foi batizado em Reims por volta de 496: o batismo marca a aliança entre a realeza e a Igreja.',
          en: 'Clovis, king of the Franks, was baptised in Reims around 496: this baptism marked the alliance between royalty and the Church.',
          es: 'Clovis, rey de los francos, fue bautizado en Reims hacia 496: este bautismo marca la alianza entre la realeza y la Iglesia.',
        },
      ),
      h(
        {
          fr: 'En quelle année Hugues Capet a-t-il été couronné roi, début de la dynastie capétienne ?',
          pt: 'Em que ano Hugo Capeto foi coroado rei, início da dinastia capetiana?',
          en: 'In which year was Hugh Capet crowned king, starting the Capetian dynasty?',
          es: '¿En qué año fue coronado rey Hugo Capeto, inicio de la dinastía capeta?',
        },
        [
          { fr: '987', pt: '987', en: '987', es: '987' },
          { fr: '800', pt: '800', en: '800', es: '800' },
          { fr: '1789', pt: '1789', en: '1789', es: '1789' },
        ],
        0,
        {
          fr: 'Hugues Capet est couronné roi en 987 : c’est le début de la dynastie capétienne.',
          pt: 'Hugo Capeto foi coroado rei em 987: é o início da dinastia capetiana.',
          en: 'Hugh Capet was crowned king in 987: this marks the start of the Capetian dynasty.',
          es: 'Hugo Capeto fue coronado rey en 987: es el inicio de la dinastía capeta.',
        },
      ),
      h(
        {
          fr: 'Quel roi a signé l’édit de Nantes en 1598, garantissant la liberté de culte aux protestants ?',
          pt: 'Qual rei assinou o Édito de Nantes em 1598, garantindo liberdade de culto aos protestantes?',
          en: 'Which king signed the Edict of Nantes in 1598, granting freedom of worship to Protestants?',
          es: '¿Qué rey firmó el Edicto de Nantes en 1598, garantizando la libertad de culto a los protestantes?',
        },
        [
          { fr: 'Henri IV', pt: 'Henrique IV', en: 'Henry IV', es: 'Enrique IV' },
          { fr: 'Louis XIV', pt: 'Luís XIV', en: 'Louis XIV', es: 'Luis XIV' },
          { fr: 'François Ier', pt: 'Francisco I', en: 'Francis I', es: 'Francisco I' },
        ],
        0,
        {
          fr: 'Henri IV signe l’édit de Nantes en 1598 ; il sera révoqué par Louis XIV en 1685.',
          pt: 'Henrique IV assinou o Édito de Nantes em 1598; ele foi revogado por Luís XIV em 1685.',
          en: 'Henry IV signed the Edict of Nantes in 1598; it was revoked by Louis XIV in 1685.',
          es: 'Enrique IV firmó el Edicto de Nantes en 1598; fue revocado por Luis XIV en 1685.',
        },
      ),
      h(
        {
          fr: 'Quelle révolution a mis fin à la monarchie absolue et proclamé la première République ?',
          pt: 'Qual revolução pôs fim à monarquia absoluta e proclamou a primeira República?',
          en: 'Which revolution ended absolute monarchy and proclaimed the first Republic?',
          es: '¿Qué revolución puso fin a la monarquía absoluta y proclamó la primera República?',
        },
        [
          {
            fr: 'La Révolution française (1789)',
            pt: 'A Revolução Francesa (1789)',
            en: 'The French Revolution (1789)',
            es: 'La Revolución francesa (1789)',
          },
          { fr: 'La Commune de 1871', pt: 'A Comuna de 1871', en: 'The Paris Commune of 1871', es: 'La Comuna de 1871' },
          { fr: 'Mai 68', pt: 'Maio de 68', en: 'May 68', es: 'Mayo del 68' },
        ],
        0,
        {
          fr: 'La Révolution française commence en 1789 ; la première République est proclamée en 1792.',
          pt: 'A Revolução Francesa começou em 1789; a primeira República foi proclamada em 1792.',
          en: 'The French Revolution began in 1789; the first Republic was proclaimed in 1792.',
          es: 'La Revolución francesa comenzó en 1789; la primera República fue proclamada en 1792.',
        },
      ),
      h(
        {
          fr: 'Qui était Napoléon Bonaparte ?',
          pt: 'Quem foi Napoleão Bonaparte?',
          en: 'Who was Napoleon Bonaparte?',
          es: '¿Quién fue Napoleón Bonaparte?',
        },
        [
          {
            fr: 'Un général devenu empereur des Français en 1804',
            pt: 'Um general que se tornou imperador dos franceses em 1804',
            en: 'A general who became Emperor of the French in 1804',
            es: 'Un general que se convirtió en emperador de los franceses en 1804',
          },
          { fr: 'Un roi du Moyen Âge', pt: 'Um rei da Idade Média', en: 'A medieval king', es: 'Un rey medieval' },
          {
            fr: 'Le premier président de la République',
            pt: 'O primeiro presidente da República',
            en: 'The first president of the Republic',
            es: 'El primer presidente de la República',
          },
        ],
        0,
        {
          fr: 'Napoléon Ier est empereur des Français en 1804 ; il crée le Code civil la même année.',
          pt: 'Napoleão I tornou-se imperador dos franceses em 1804; criou o Código Civil no mesmo ano.',
          en: 'Napoleon I became Emperor of the French in 1804; he created the Civil Code the same year.',
          es: 'Napoleón I se convirtió en emperador de los franceses en 1804; creó el Código Civil el mismo año.',
        },
      ),
      h(
        {
          fr: 'En quelle année l’esclavage a-t-il été définitivement aboli en France ?',
          pt: 'Em que ano a escravidão foi definitivamente abolida na França?',
          en: 'In which year was slavery definitively abolished in France?',
          es: '¿En qué año fue abolida definitivamente la esclavitud en Francia?',
        },
        [
          { fr: '1848', pt: '1848', en: '1848', es: '1848' },
          { fr: '1789', pt: '1789', en: '1789', es: '1789' },
          { fr: '1905', pt: '1905', en: '1905', es: '1905' },
        ],
        0,
        {
          fr: 'L’esclavage est définitivement aboli en 1848, sous l’impulsion de Victor Schœlcher.',
          pt: 'A escravidão foi definitivamente abolida em 1848, por iniciativa de Victor Schœlcher.',
          en: 'Slavery was definitively abolished in 1848, driven by Victor Schœlcher.',
          es: 'La esclavitud fue abolida definitivamente en 1848, por impulso de Victor Schœlcher.',
        },
      ),
      h(
        {
          fr: 'Quand les femmes françaises ont-elles obtenu le droit de vote ?',
          pt: 'Quando as francesas obtiveram o direito de voto?',
          en: 'When did French women get the right to vote?',
          es: '¿Cuándo obtuvieron las francesas el derecho al voto?',
        },
        [
          { fr: '1944', pt: '1944', en: '1944', es: '1944' },
          { fr: '1848', pt: '1848', en: '1848', es: '1848' },
          { fr: '1968', pt: '1968', en: '1968', es: '1968' },
        ],
        0,
        {
          fr: 'Le droit de vote des femmes est accordé en 1944 ; elles votent pour la première fois en 1945.',
          pt: 'O direito de voto das mulheres foi concedido em 1944; elas votaram pela primeira vez em 1945.',
          en: 'Women’s suffrage was granted in 1944; they first voted in 1945.',
          es: 'El derecho al voto de las mujeres fue concedido en 1944; votaron por primera vez en 1945.',
        },
      ),
      h(
        {
          fr: 'Que commémore-t-on le 8 mai ?',
          pt: 'O que se comemora em 8 de maio?',
          en: 'What is commemorated on 8 May?',
          es: '¿Qué se conmemora el 8 de mayo?',
        },
        [
          {
            fr: 'La victoire de 1945, fin de la Seconde Guerre mondiale en Europe',
            pt: 'A vitória de 1945, fim da Segunda Guerra Mundial na Europa',
            en: 'The 1945 victory, the end of World War II in Europe',
            es: 'La victoria de 1945, el fin de la Segunda Guerra Mundial en Europa',
          },
          {
            fr: 'La fin de la Première Guerre mondiale',
            pt: 'O fim da Primeira Guerra Mundial',
            en: 'The end of World War I',
            es: 'El fin de la Primera Guerra Mundial',
          },
          {
            fr: 'La chute de la Bastille',
            pt: 'A queda da Bastilha',
            en: 'The fall of the Bastille',
            es: 'La caída de la Bastilla',
          },
        ],
        0,
        {
          fr: 'Le 8 mai 1945 marque la capitulation allemande et la fin de la Seconde Guerre mondiale en Europe.',
          pt: '8 de maio de 1945 marca a capitulação alemã e o fim da Segunda Guerra Mundial na Europa.',
          en: '8 May 1945 marks the German surrender and the end of World War II in Europe.',
          es: 'El 8 de mayo de 1945 marca la capitulación alemana y el fin de la Segunda Guerra Mundial en Europa.',
        },
      ),
      h(
        {
          fr: 'Qui était Charles de Gaulle ?',
          pt: 'Quem foi Charles de Gaulle?',
          en: 'Who was Charles de Gaulle?',
          es: '¿Quién fue Charles de Gaulle?',
        },
        [
          {
            fr: 'Le chef de la France libre (1940) et le fondateur de la Ve République',
            pt: 'O líder da França Livre (1940) e o fundador da V República',
            en: 'The leader of Free France (1940) and founder of the Fifth Republic',
            es: 'El líder de la Francia Libre (1940) y el fundador de la V República',
          },
          { fr: 'Un roi de la Renaissance', pt: 'Um rei do Renascimento', en: 'A Renaissance king', es: 'Un rey del Renacimiento' },
          {
            fr: 'Un révolutionnaire de 1789',
            pt: 'Um revolucionário de 1789',
            en: 'A revolutionary of 1789',
            es: 'Un revolucionario de 1789',
          },
        ],
        0,
        {
          fr: 'Charles de Gaulle lance l’appel du 18 juin 1940 et fonde la Ve République en 1958 ; il en devient le premier président.',
          pt: 'Charles de Gaulle lançou o apelo de 18 de junho de 1940 e fundou a V República em 1958; tornou-se seu primeiro presidente.',
          en: 'Charles de Gaulle launched the 18 June 1940 appeal and founded the Fifth Republic in 1958; he became its first president.',
          es: 'Charles de Gaulle lanzó el llamamiento del 18 de junio de 1940 y fundó la V República en 1958; se convirtió en su primer presidente.',
        },
      ),
    ],
  },
  {
    id: 'valeurs',
    title: {
      fr: 'Les valeurs et symboles de la République',
      pt: 'Os valores e símbolos da República',
      en: 'The values and symbols of the Republic',
      es: 'Los valores y símbolos de la República',
    },
    questions: [
      h(
        {
          fr: 'Quelle est la devise de la République française ?',
          pt: 'Qual é o lema da República francesa?',
          en: 'What is the motto of the French Republic?',
          es: '¿Cuál es el lema de la República francesa?',
        },
        [
          {
            fr: 'Liberté, Égalité, Fraternité',
            pt: 'Liberdade, Igualdade, Fraternidade',
            en: 'Liberty, Equality, Fraternity',
            es: 'Libertad, Igualdad, Fraternidad',
          },
          {
            fr: 'Travail, Famille, Patrie',
            pt: 'Trabalho, Família, Pátria',
            en: 'Work, Family, Fatherland',
            es: 'Trabajo, Familia, Patria',
          },
          {
            fr: 'Liberté, Égalité, Propriété',
            pt: 'Liberdade, Igualdade, Propriedade',
            en: 'Liberty, Equality, Property',
            es: 'Libertad, Igualdad, Propiedad',
          },
        ],
        0,
        {
          fr: 'La devise est « Liberté, Égalité, Fraternité » (article 2 de la Constitution).',
          pt: 'O lema é « Liberdade, Igualdade, Fraternidade » (artigo 2.º da Constituição).',
          en: 'The motto is "Liberty, Equality, Fraternity" (Article 2 of the Constitution).',
          es: 'El lema es « Libertad, Igualdad, Fraternidad » (artículo 2 de la Constitución).',
        },
      ),
      h(
        {
          fr: 'Quelles sont les couleurs du drapeau français ?',
          pt: 'Quais são as cores da bandeira francesa?',
          en: 'What are the colours of the French flag?',
          es: '¿Cuáles son los colores de la bandera francesa?',
        },
        [
          { fr: 'Bleu, blanc, rouge', pt: 'Azul, branco, vermelho', en: 'Blue, white, red', es: 'Azul, blanco, rojo' },
          { fr: 'Blanc, rouge, jaune', pt: 'Branco, vermelho, amarelo', en: 'White, red, yellow', es: 'Blanco, rojo, amarillo' },
          { fr: 'Bleu, blanc, noir', pt: 'Azul, branco, preto', en: 'Blue, white, black', es: 'Azul, blanco, negro' },
        ],
        0,
        {
          fr: 'Le drapeau tricolore bleu-blanc-rouge est l’emblème national (article 2 de la Constitution).',
          pt: 'A bandeira tricolor azul-branco-vermelha é o emblema nacional (artigo 2.º da Constituição).',
          en: 'The blue-white-red tricolour flag is the national emblem (Article 2 of the Constitution).',
          es: 'La bandera tricolor azul-blanco-roja es el emblema nacional (artículo 2 de la Constitución).',
        },
      ),
      h(
        {
          fr: 'Quel est l’hymne national français ?',
          pt: 'Qual é o hino nacional francês?',
          en: 'What is the French national anthem?',
          es: '¿Cuál es el himno nacional francés?',
        },
        [
          {
            fr: 'La Marseillaise',
            pt: 'A Marselhesa (La Marseillaise)',
            en: 'La Marseillaise',
            es: 'La Marsellesa (La Marseillaise)',
          },
          { fr: 'Le Chant du départ', pt: 'Le Chant du départ', en: 'Le Chant du départ', es: 'Le Chant du départ' },
          { fr: 'Auprès de mon arbre', pt: 'Auprès de mon arbre', en: 'Auprès de mon arbre', es: 'Auprès de mon arbre' },
        ],
        0,
        {
          fr: 'L’hymne national est La Marseillaise, composée par Rouget de Lisle en 1792.',
          pt: 'O hino nacional é A Marselhesa, composta por Rouget de Lisle em 1792.',
          en: 'The national anthem is La Marseillaise, composed by Rouget de Lisle in 1792.',
          es: 'El himno nacional es La Marsellesa, compuesta por Rouget de Lisle en 1792.',
        },
      ),
      h(
        {
          fr: 'Que célèbre-t-on le 14 juillet ?',
          pt: 'O que se comemora em 14 de julho?',
          en: 'What is celebrated on 14 July?',
          es: '¿Qué se celebra el 14 de julio?',
        },
        [
          {
            fr: 'La prise de la Bastille (1789)',
            pt: 'A tomada da Bastilha (1789)',
            en: 'The storming of the Bastille (1789)',
            es: 'La toma de la Bastilla (1789)',
          },
          {
            fr: 'La fin de la Seconde Guerre mondiale',
            pt: 'O fim da Segunda Guerra Mundial',
            en: 'The end of World War II',
            es: 'El fin de la Segunda Guerra Mundial',
          },
          {
            fr: 'Le sacre de Napoléon',
            pt: 'A coroação de Napoleão',
            en: 'Napoleon’s coronation',
            es: 'La coronación de Napoleón',
          },
        ],
        0,
        {
          fr: 'Le 14 juillet commémore la prise de la Bastille en 1789 ; c’est la fête nationale depuis 1880.',
          pt: '14 de julho comemora a tomada da Bastilha em 1789; é feriado nacional desde 1880.',
          en: '14 July commemorates the storming of the Bastille in 1789; it has been the national holiday since 1880.',
          es: 'El 14 de julio conmemora la toma de la Bastilla en 1789; es la fiesta nacional desde 1880.',
        },
      ),
      h(
        {
          fr: 'Qui incarne allégoriquement la République française ?',
          pt: 'Quem representa alegoricamente a República francesa?',
          en: 'Who allegorically embodies the French Republic?',
          es: '¿Quién encarna alegóricamente la República francesa?',
        },
        [
          { fr: 'Marianne', pt: 'Marianne', en: 'Marianne', es: 'Marianne' },
          { fr: 'Jeanne d’Arc', pt: 'Joana d’Arc', en: 'Joan of Arc', es: 'Juana de Arco' },
          {
            fr: 'Catherine de Médicis',
            pt: 'Catarina de Médici',
            en: 'Catherine de’ Medici',
            es: 'Catalina de Médici',
          },
        ],
        0,
        {
          fr: 'Marianne, coiffée du bonnet phrygien, symbolise la République et la liberté. Ses busts ornent les mairies.',
          pt: 'Marianne, com o barrete frígio, simboliza a República e a liberdade. Seus bustos ornamentam as prefeituras.',
          en: 'Marianne, wearing the Phrygian cap, symbolises the Republic and liberty. Her busts adorn town halls.',
          es: 'Marianne, con el gorro frigio, simboliza la República y la libertad. Sus bustos adornan los ayuntamientos.',
        },
      ),
      h(
        {
          fr: 'Quel animal est un symbole populaire de la France ?',
          pt: 'Qual animal é um símbolo popular da França?',
          en: 'Which animal is a popular symbol of France?',
          es: '¿Qué animal es un símbolo popular de Francia?',
        },
        [
          { fr: 'Le coq gaulois', pt: 'O galo gaulês', en: 'The Gallic rooster', es: 'El gallo galo' },
          { fr: 'L’aigle', pt: 'A águia', en: 'The eagle', es: 'El águila' },
          { fr: 'Le lion', pt: 'O leão', en: 'The lion', es: 'El león' },
        ],
        0,
        {
          fr: 'Le coq gaulois est un symbole populaire de la France, présent sur les maillots sportifs et les emblèmes officiels.',
          pt: 'O galo gaulês é um símbolo popular da França, presente em uniformes esportivos e emblemas oficiais.',
          en: 'The Gallic rooster is a popular symbol of France, seen on sports jerseys and official emblems.',
          es: 'El gallo galo es un símbolo popular de Francia, presente en uniformes deportivos y emblemas oficiales.',
        },
      ),
      h(
        {
          fr: 'Quel texte organise la séparation des Églises et de l’État ?',
          pt: 'Qual texto organiza a separação entre Igrejas e Estado?',
          en: 'Which law established the separation of churches and the State?',
          es: '¿Qué texto organiza la separación entre las Iglesias y el Estado?',
        },
        [
          { fr: 'La loi de 1905', pt: 'A lei de 1905', en: 'The 1905 law', es: 'La ley de 1905' },
          { fr: 'La Constitution de 1958', pt: 'A Constituição de 1958', en: 'The 1958 Constitution', es: 'La Constitución de 1958' },
          { fr: 'L’édit de Nantes', pt: 'O Édito de Nantes', en: 'The Edict of Nantes', es: 'El Edicto de Nantes' },
        ],
        0,
        {
          fr: 'La loi du 9 décembre 1905 : la République garantit la liberté de conscience et ne reconnaît aucun culte (laïcité).',
          pt: 'A lei de 9 de dezembro de 1905: a República garante a liberdade de consciência e não reconhece nenhum culto (laicidade).',
          en: 'The law of 9 December 1905: the Republic guarantees freedom of conscience and recognises no religion (secularism).',
          es: 'La ley del 9 de diciembre de 1905: la República garantiza la libertad de conciencia y no reconoce ningún culto (laicidad).',
        },
      ),
      h(
        {
          fr: 'Que signifie la laïcité en France ?',
          pt: 'O que significa a laicidade na França?',
          en: 'What does secularism mean in France?',
          es: '¿Qué significa la laicidad en Francia?',
        },
        [
          {
            fr: 'La République ne reconnaît aucun culte et garantit la liberté de conscience',
            pt: 'A República não reconhece nenhum culto e garante a liberdade de consciência',
            en: 'The Republic recognises no religion and guarantees freedom of conscience',
            es: 'La República no reconoce ningún culto y garantiza la libertad de conciencia',
          },
          {
            fr: 'L’interdiction de toutes les religions pour tous',
            pt: 'A proibição de todas as religiões para todos',
            en: 'The prohibition of all religions for everyone',
            es: 'La prohibición de todas las religiones para todos',
          },
          {
            fr: 'L’obligation d’avoir une religion',
            pt: 'A obrigação de ter uma religião',
            en: 'The obligation to have a religion',
            es: 'La obligación de tener una religión',
          },
        ],
        0,
        {
          fr: 'La laïcité garantit la liberté de croire ou de ne pas croire ; l’État ne finance ni ne privilégie aucun culte.',
          pt: 'A laicidade garante a liberdade de crer ou não crer; o Estado não financia nem privilegia nenhum culto.',
          en: 'Secularism guarantees the freedom to believe or not to believe; the State neither funds nor favours any religion.',
          es: 'La laicidad garantiza la libertad de creer o no creer; el Estado no financia ni privilegia ningún culto.',
        },
      ),
      h(
        {
          fr: 'Quel texte de 1789 proclame les droits de l’homme ?',
          pt: 'Qual texto de 1789 proclama os direitos do homem?',
          en: 'Which 1789 text proclaimed human rights?',
          es: '¿Qué texto de 1789 proclama los derechos del hombre?',
        },
        [
          {
            fr: 'La Déclaration des droits de l’homme et du citoyen',
            pt: 'A Declaração dos Direitos do Homem e do Cidadão',
            en: 'The Declaration of the Rights of Man and of the Citizen',
            es: 'La Declaración de los Derechos del Hombre y del Ciudadano',
          },
          { fr: 'Le Code civil', pt: 'O Código Civil', en: 'The Civil Code', es: 'El Código Civil' },
          {
            fr: 'La Constitution de la Ve République',
            pt: 'A Constituição da V República',
            en: 'The Constitution of the Fifth Republic',
            es: 'La Constitución de la V República',
          },
        ],
        0,
        {
          fr: 'La Déclaration des droits de l’homme et du citoyen a été adoptée le 26 août 1789.',
          pt: 'A Declaração dos Direitos do Homem e do Cidadão foi adotada em 26 de agosto de 1789.',
          en: 'The Declaration of the Rights of Man and of the Citizen was adopted on 26 August 1789.',
          es: 'La Declaración de los Derechos del Hombre y del Ciudadano fue adoptada el 26 de agosto de 1789.',
        },
      ),
      h(
        {
          fr: 'Où sont inscrits la devise, le drapeau et l’hymne de la République ?',
          pt: 'Onde estão inscritos o lema, a bandeira e o hino da República?',
          en: 'Where are the motto, flag and anthem of the Republic enshrined?',
          es: '¿Dónde están consagrados el lema, la bandera y el himno de la República?',
        },
        [
          {
            fr: 'Dans la Constitution (article 2)',
            pt: 'Na Constituição (artigo 2.º)',
            en: 'In the Constitution (Article 2)',
            es: 'En la Constitución (artículo 2)',
          },
          { fr: 'Dans le Code pénal', pt: 'No Código Penal', en: 'In the Penal Code', es: 'En el Código Penal' },
          {
            fr: 'Dans le livret de famille',
            pt: 'No livret de famille (livro de família)',
            en: 'In the family record book',
            es: 'En el libro de familia',
          },
        ],
        0,
        {
          fr: 'L’article 2 de la Constitution définit la langue, le drapeau, l’hymne et la devise de la République.',
          pt: 'O artigo 2.º da Constituição define a língua, a bandeira, o hino e o lema da República.',
          en: 'Article 2 of the Constitution defines the language, flag, anthem and motto of the Republic.',
          es: 'El artículo 2 de la Constitución define la lengua, la bandera, el himno y el lema de la República.',
        },
      ),
    ],
  },
  {
    id: 'institutions',
    title: {
      fr: 'Les institutions et l’Europe',
      pt: 'As instituições e a Europa',
      en: 'Institutions and Europe',
      es: 'Las instituciones y Europa',
    },
    questions: [
      h(
        {
          fr: 'Quelle est la forme du régime politique français ?',
          pt: 'Qual é a forma de regime político da França?',
          en: 'What is the form of the French political system?',
          es: '¿Cuál es la forma de régimen político de Francia?',
        },
        [
          {
            fr: 'Une République — la Ve République',
            pt: 'Uma República — a V República',
            en: 'A Republic — the Fifth Republic',
            es: 'Una República — la V República',
          },
          {
            fr: 'Une monarchie constitutionnelle',
            pt: 'Uma monarquia constitucional',
            en: 'A constitutional monarchy',
            es: 'Una monarquía constitucional',
          },
          { fr: 'Un empire', pt: 'Um império', en: 'An empire', es: 'Un imperio' },
        ],
        0,
        {
          fr: 'La France est une République, régie par la Constitution de 1958 (Ve République).',
          pt: 'A França é uma República, regida pela Constituição de 1958 (V República).',
          en: 'France is a Republic, governed by the 1958 Constitution (Fifth Republic).',
          es: 'Francia es una República, regida por la Constitución de 1958 (V República).',
        },
      ),
      h(
        {
          fr: 'Quelle institution vote les lois ?',
          pt: 'Qual instituição vota as leis?',
          en: 'Which institution votes on laws?',
          es: '¿Qué institución vota las leyes?',
        },
        [
          {
            fr: 'Le Parlement (Assemblée nationale et Sénat)',
            pt: 'O Parlamento (Assembleia Nacional e Senado)',
            en: 'Parliament (National Assembly and Senate)',
            es: 'El Parlamento (Asamblea Nacional y Senado)',
          },
          {
            fr: 'Le président seul',
            pt: 'Somente o presidente',
            en: 'The president alone',
            es: 'Solo el presidente',
          },
          {
            fr: 'Le Conseil constitutionnel',
            pt: 'O Conselho Constitucional',
            en: 'The Constitutional Council',
            es: 'El Consejo Constitucional',
          },
        ],
        0,
        {
          fr: 'Les lois sont votées par le Parlement, composé de l’Assemblée nationale et du Sénat.',
          pt: 'As leis são votadas pelo Parlamento, composto pela Assembleia Nacional e pelo Senado.',
          en: 'Laws are voted by Parliament, made up of the National Assembly and the Senate.',
          es: 'Las leyes son votadas por el Parlamento, compuesto por la Asamblea Nacional y el Senado.',
        },
      ),
      h(
        {
          fr: 'Quelle est la durée du mandat du président de la République ?',
          pt: 'Qual é a duração do mandato do presidente da República?',
          en: 'How long is the President of the Republic’s term?',
          es: '¿Cuál es la duración del mandato del presidente de la República?',
        },
        [
          { fr: '5 ans', pt: '5 anos', en: '5 years', es: '5 años' },
          { fr: '7 ans', pt: '7 anos', en: '7 years', es: '7 años' },
          { fr: '4 ans', pt: '4 anos', en: '4 years', es: '4 años' },
        ],
        0,
        {
          fr: 'Depuis le référendum de 2000, le président est élu pour 5 ans (quinquennat) au suffrage universel direct.',
          pt: 'Desde o referendo de 2000, o presidente é eleito por 5 anos (quinquenato) por sufrágio universal direto.',
          en: 'Since the 2000 referendum, the president is elected for 5 years by direct universal suffrage.',
          es: 'Desde el referéndum de 2000, el presidente es elegido por 5 años (quinquenato) por sufragio universal directo.',
        },
      ),
      h(
        {
          fr: 'Qui élit le président de la République ?',
          pt: 'Quem elege o presidente da República?',
          en: 'Who elects the President of the Republic?',
          es: '¿Quién elige al presidente de la República?',
        },
        [
          {
            fr: 'Les citoyens, au suffrage universel direct',
            pt: 'Os cidadãos, por sufrágio universal direto',
            en: 'The citizens, by direct universal suffrage',
            es: 'Los ciudadanos, por sufragio universal directo',
          },
          { fr: 'Le Parlement', pt: 'O Parlamento', en: 'Parliament', es: 'El Parlamento' },
          { fr: 'Le Sénat seul', pt: 'Somente o Senado', en: 'The Senate alone', es: 'Solo el Senado' },
        ],
        0,
        {
          fr: 'Le président de la République est élu au suffrage universel direct, en deux tours.',
          pt: 'O presidente da República é eleito por sufrágio universal direto, em dois turnos.',
          en: 'The President of the Republic is elected by direct universal suffrage, in two rounds.',
          es: 'El presidente de la República es elegido por sufragio universal directo, en dos vueltas.',
        },
      ),
      h(
        {
          fr: 'Qui dirige le gouvernement français ?',
          pt: 'Quem dirige o governo francês?',
          en: 'Who leads the French government?',
          es: '¿Quién dirige el gobierno francés?',
        },
        [
          {
            fr: 'Le Premier ministre',
            pt: 'O primeiro-ministro',
            en: 'The Prime Minister',
            es: 'El primer ministro',
          },
          {
            fr: 'Le président du Sénat',
            pt: 'O presidente do Senado',
            en: 'The President of the Senate',
            es: 'El presidente del Senado',
          },
          {
            fr: 'Le maire de Paris',
            pt: 'O prefeito de Paris',
            en: 'The mayor of Paris',
            es: 'El alcalde de París',
          },
        ],
        0,
        {
          fr: 'Le président de la République nomme le Premier ministre, qui dirige le gouvernement.',
          pt: 'O presidente da República nomeia o primeiro-ministro, que dirige o governo.',
          en: 'The President of the Republic appoints the Prime Minister, who leads the government.',
          es: 'El presidente de la República nombra al primer ministro, que dirige el gobierno.',
        },
      ),
      h(
        {
          fr: 'Quelle est la durée du mandat d’un député de l’Assemblée nationale ?',
          pt: 'Qual é a duração do mandato de um deputado da Assembleia Nacional?',
          en: 'How long is the term of a National Assembly deputy?',
          es: '¿Cuál es la duración del mandato de un diputado de la Asamblea Nacional?',
        },
        [
          { fr: '5 ans', pt: '5 anos', en: '5 years', es: '5 años' },
          { fr: '6 ans', pt: '6 anos', en: '6 years', es: '6 años' },
          { fr: '9 ans', pt: '9 anos', en: '9 years', es: '9 años' },
        ],
        0,
        {
          fr: 'Les députés sont élus pour 5 ans ; les sénateurs, pour 6 ans.',
          pt: 'Os deputados são eleitos por 5 anos; os senadores, por 6 anos.',
          en: 'Deputies are elected for 5 years; senators for 6 years.',
          es: 'Los diputados son elegidos por 5 años; los senadores, por 6 años.',
        },
      ),
      h(
        {
          fr: 'Quelle institution contrôle la conformité des lois à la Constitution ?',
          pt: 'Qual instituição controla a conformidade das leis com a Constituição?',
          en: 'Which institution checks that laws comply with the Constitution?',
          es: '¿Qué institución controla la conformidad de las leyes con la Constitución?',
        },
        [
          {
            fr: 'Le Conseil constitutionnel',
            pt: 'O Conselho Constitucional',
            en: 'The Constitutional Council',
            es: 'El Consejo Constitucional',
          },
          {
            fr: 'L’Assemblée nationale',
            pt: 'A Assembleia Nacional',
            en: 'The National Assembly',
            es: 'La Asamblea Nacional',
          },
          {
            fr: 'Le président de la République',
            pt: 'O presidente da República',
            en: 'The President of the Republic',
            es: 'El presidente de la República',
          },
        ],
        0,
        {
          fr: 'Le Conseil constitutionnel veille au respect de la Constitution, notamment des lois et des élections.',
          pt: 'O Conselho Constitucional zela pelo respeito à Constituição, em particular das leis e das eleições.',
          en: 'The Constitutional Council ensures compliance with the Constitution, notably for laws and elections.',
          es: 'El Consejo Constitucional vela por el respeto de la Constitución, en particular de las leyes y las elecciones.',
        },
      ),
      h(
        {
          fr: 'Qui représente l’État français dans chaque département ?',
          pt: 'Quem representa o Estado francês em cada departamento?',
          en: 'Who represents the French State in each department?',
          es: '¿Quién representa al Estado francés en cada departamento?',
        },
        [
          {
            fr: 'Le préfet',
            pt: 'O préfet (representante do Estado)',
            en: 'The prefect',
            es: 'El préfet (representante del Estado)',
          },
          {
            fr: 'Le maire',
            pt: 'O maire (prefeito da comuna)',
            en: 'The mayor',
            es: 'El maire (alcalde del municipio)',
          },
          {
            fr: 'Le gouverneur',
            pt: 'O governador',
            en: 'The governor',
            es: 'El gobernador',
          },
        ],
        0,
        {
          fr: 'Le préfet représente l’État dans le département ; le maire dirige la commune.',
          pt: 'O préfet representa o Estado no departamento; o maire dirige a comuna.',
          en: 'The prefect represents the State in the department; the mayor leads the commune.',
          es: 'El préfet representa al Estado en el departamento; el maire dirige el municipio.',
        },
      ),
      h(
        {
          fr: 'Quelle est la monnaie de la France depuis 2002 ?',
          pt: 'Qual é a moeda da França desde 2002?',
          en: 'What has been France’s currency since 2002?',
          es: '¿Cuál es la moneda de Francia desde 2002?',
        },
        [
          { fr: 'L’euro', pt: 'O euro', en: 'The euro', es: 'El euro' },
          { fr: 'Le franc', pt: 'O franco', en: 'The franc', es: 'El franco' },
          { fr: 'La livre', pt: 'A libra', en: 'The pound', es: 'La libra' },
        ],
        0,
        {
          fr: 'L’euro remplace le franc en 2002 ; la France est membre de la zone euro.',
          pt: 'O euro substituiu o franco em 2002; a França é membro da zona do euro.',
          en: 'The euro replaced the franc in 2002; France is a member of the euro area.',
          es: 'El euro sustituyó al franco en 2002; Francia es miembro de la zona del euro.',
        },
      ),
      h(
        {
          fr: 'Dans quelle construction européenne la France est-elle un membre fondateur ?',
          pt: 'De qual construção europeia a França é membro fundador?',
          en: 'Of which European project is France a founding member?',
          es: '¿De qué proyecto europeo es Francia miembro fundador?',
        },
        [
          {
            fr: 'L’Union européenne (traité de Rome, 1957)',
            pt: 'A União Europeia (Tratado de Roma, 1957)',
            en: 'The European Union (Treaty of Rome, 1957)',
            es: 'La Unión Europea (Tratado de Roma, 1957)',
          },
          { fr: 'L’OTAN', pt: 'A OTAN', en: 'NATO', es: 'La OTAN' },
          { fr: 'L’ONU', pt: 'A ONU', en: 'The UN', es: 'La ONU' },
        ],
        0,
        {
          fr: 'La France est membre fondateur de la construction européenne (CECA 1951, traité de Rome 1957) et de l’Union européenne.',
          pt: 'A França é membro fundador da construção europeia (CECA 1951, Tratado de Roma 1957) e da União Europeia.',
          en: 'France is a founding member of the European project (ECSC 1951, Treaty of Rome 1957) and of the European Union.',
          es: 'Francia es miembro fundador de la construcción europea (CECA 1951, Tratado de Roma 1957) y de la Unión Europea.',
        },
      ),
    ],
  },
  {
    id: 'droits',
    title: {
      fr: 'Les droits et devoirs du citoyen',
      pt: 'Os direitos e deveres do cidadão',
      en: 'The rights and duties of the citizen',
      es: 'Los derechos y deberes del ciudadano',
    },
    questions: [
      h(
        {
          fr: 'Parmi ces affirmations, laquelle est exacte concernant les devoirs du citoyen ?',
          pt: 'Dentre estas afirmações, qual é correta sobre os deveres do cidadão?',
          en: 'Which of these statements about citizens’ duties is correct?',
          es: 'De estas afirmaciones, ¿cuál es correcta sobre los deberes del ciudadano?',
        },
        [
          {
            fr: 'Respecter les lois et payer ses impôts',
            pt: 'Respeitar as leis e pagar seus impostos',
            en: 'Respect the laws and pay taxes',
            es: 'Respetar las leyes y pagar los impuestos',
          },
          {
            fr: 'Le vote est obligatoire en France',
            pt: 'O voto é obrigatório na França',
            en: 'Voting is compulsory in France',
            es: 'El voto es obligatorio en Francia',
          },
          {
            fr: 'Le service militaire dure 5 ans',
            pt: 'O serviço militar dura 5 anos',
            en: 'Military service lasts 5 years',
            es: 'El servicio militar dura 5 años',
          },
        ],
        0,
        {
          fr: 'Le citoyen doit respecter les lois et payer ses impôts. Le vote est un droit, pas une obligation.',
          pt: 'O cidadão deve respeitar as leis e pagar seus impostos. O voto é um direito, não uma obrigação.',
          en: 'Citizens must respect the laws and pay taxes. Voting is a right, not an obligation.',
          es: 'El ciudadano debe respetar las leyes y pagar sus impuestos. El voto es un derecho, no una obligación.',
        },
      ),
      h(
        {
          fr: 'À partir de quel âge un citoyen français peut-il voter ?',
          pt: 'A partir de que idade um cidadão francês pode votar?',
          en: 'From what age can a French citizen vote?',
          es: '¿A partir de qué edad puede votar un ciudadano francés?',
        },
        [
          { fr: '18 ans', pt: '18 anos', en: '18 years', es: '18 años' },
          { fr: '16 ans', pt: '16 anos', en: '16 years', es: '16 años' },
          { fr: '21 ans', pt: '21 anos', en: '21 years', es: '21 años' },
        ],
        0,
        {
          fr: 'La majorité civique est fixée à 18 ans ; l’inscription sur les listes électorales est alors automatique.',
          pt: 'A maioridade civil é aos 18 anos; a inscrição nas listas eleitorais é então automática.',
          en: 'The voting age is 18; registration on the electoral rolls is then automatic.',
          es: 'La mayoría de edad civil es a los 18 años; la inscripción en las listas electorales es entonces automática.',
        },
      ),
      h(
        {
          fr: 'Quelle institution fait participer des citoyens tirés au sort au jugement des crimes ?',
          pt: 'Qual instituição faz participar cidadãos sorteados no julgamento de crimes?',
          en: 'Which institution involves randomly selected citizens in judging serious crimes?',
          es: '¿Qué institución hace participar a ciudadanos sorteados en el juicio de delitos graves?',
        },
        [
          {
            fr: 'Le jury d’assises',
            pt: 'O júri da cour d’assises',
            en: 'The assize court jury',
            es: 'El jurado de la cour d’assises',
          },
          {
            fr: 'Le Conseil constitutionnel',
            pt: 'O Conselho Constitucional',
            en: 'The Constitutional Council',
            es: 'El Consejo Constitucional',
          },
          { fr: 'Le Sénat', pt: 'O Senado', en: 'The Senate', es: 'El Senado' },
        ],
        0,
        {
          fr: 'Dans les cours d’assises, des citoyens tirés au sort siègent aux côtés des juges professionnels : c’est un devoir civique.',
          pt: 'Nas cour d’assises, cidadãos sorteados sentam-se ao lado dos juízes profissionais: é um dever cívico.',
          en: 'In assize courts, randomly selected citizens sit alongside professional judges: this is a civic duty.',
          es: 'En las cour d’assises, ciudadanos sorteados se sientan junto a los jueces profesionales: es un deber cívico.',
        },
      ),
      h(
        {
          fr: 'Quelle journée de formation liée à la défense est obligatoire pour les jeunes Français ?',
          pt: 'Qual jornada de formação ligada à defesa é obrigatória para os jovens franceses?',
          en: 'Which defence-related training day is mandatory for young French people?',
          es: '¿Qué jornada de formación vinculada a la defensa es obligatoria para los jóvenes franceses?',
        },
        [
          {
            fr: 'La JDC (journée défense et citoyenneté)',
            pt: 'A JDC (journée défense et citoyenneté)',
            en: 'The JDC (Defence and Citizenship Day)',
            es: 'La JDC (journée défense et citoyenneté)',
          },
          {
            fr: 'La Fête de la musique',
            pt: 'A Fête de la Musique',
            en: 'Fête de la Musique',
            es: 'La Fiesta de la Música',
          },
          {
            fr: 'La Journée du patrimoine',
            pt: 'A Jornada do Patrimônio',
            en: 'Heritage Days',
            es: 'La Jornada del Patrimonio',
          },
        ],
        0,
        {
          fr: 'Après le recensement à 16 ans, les jeunes participent à la JDC : un devoir lié à la défense nationale.',
          pt: 'Após o recenseamento aos 16 anos, os jovens participam da JDC: um dever ligado à defesa nacional.',
          en: 'After registering at 16, young people take part in the JDC: a duty linked to national defence.',
          es: 'Tras el censo a los 16 años, los jóvenes participan en la JDC: un deber vinculado a la defensa nacional.',
        },
      ),
      h(
        {
          fr: 'Quels droits sont garantis par la Déclaration de 1789 ?',
          pt: 'Quais direitos são garantidos pela Declaração de 1789?',
          en: 'Which rights are guaranteed by the 1789 Declaration?',
          es: '¿Qué derechos garantiza la Declaración de 1789?',
        },
        [
          {
            fr: 'La liberté d’expression et l’égalité devant la loi',
            pt: 'A liberdade de expressão e a igualdade perante a lei',
            en: 'Freedom of expression and equality before the law',
            es: 'La libertad de expresión y la igualdad ante la ley',
          },
          {
            fr: 'Un emploi garanti par l’État',
            pt: 'Um emprego garantido pelo Estado',
            en: 'A job guaranteed by the State',
            es: 'Un empleo garantido por el Estado',
          },
          {
            fr: 'Le droit de vote des femmes dès 1789',
            pt: 'O direito de voto das mulheres desde 1789',
            en: 'Women’s suffrage from 1789',
            es: 'El derecho al voto de las mujeres desde 1789',
          },
        ],
        0,
        {
          fr: 'La Déclaration de 1789 garantit les libertés fondamentales : expression, conscience, égalité devant la loi, propriété.',
          pt: 'A Declaração de 1789 garante as liberdades fundamentais: expressão, consciência, igualdade perante a lei, propriedade.',
          en: 'The 1789 Declaration guarantees fundamental freedoms: expression, conscience, equality before the law, property.',
          es: 'La Declaración de 1789 garantiza las libertades fundamentales: expresión, conciencia, igualdad ante la ley, propiedad.',
        },
      ),
      h(
        {
          fr: 'Un citoyen naturalisé français peut-il voter à toutes les élections ?',
          pt: 'Um cidadão naturalizado francês pode votar em todas as eleições?',
          en: 'Can a naturalised French citizen vote in all elections?',
          es: '¿Puede votar un ciudadano francés naturalizado en todas las elecciones?',
        },
        [
          {
            fr: 'Oui, à toutes les élections, y compris la présidentielle',
            pt: 'Sim, em todas as eleições, inclusive a presidencial',
            en: 'Yes, in all elections, including the presidential one',
            es: 'Sí, en todas las elecciones, incluida la presidencial',
          },
          {
            fr: 'Non, seulement aux élections locales',
            pt: 'Não, somente nas eleições locais',
            en: 'No, only in local elections',
            es: 'No, solo en las elecciones locales',
          },
          {
            fr: 'Non, jamais',
            pt: 'Não, nunca',
            en: 'No, never',
            es: 'No, nunca',
          },
        ],
        0,
        {
          fr: 'Un citoyen français, y compris par naturalisation, vote à toutes les élections. Les citoyens de l’UE ne votent qu’aux élections municipales et européennes en France.',
          pt: 'Um cidadão francês, inclusive por naturalização, vota em todas as eleições. Cidadãos da UE só votam nas eleições municipais e europeias na França.',
          en: 'A French citizen, including by naturalisation, votes in all elections. EU citizens only vote in municipal and European elections in France.',
          es: 'Un ciudadano francés, incluso por naturalización, vota en todas las elecciones. Los ciudadanos de la UE solo votan en las elecciones municipales y europeas en Francia.',
        },
      ),
      h(
        {
          fr: 'Qu’est-ce que la Sécurité sociale en France ?',
          pt: 'O que é a Sécurité sociale na França?',
          en: 'What is the Sécurité sociale in France?',
          es: '¿Qué es la Sécurité sociale en Francia?',
        },
        [
          {
            fr: 'Un système de protection sociale financé par les cotisations',
            pt: 'Um sistema de proteção social financiado pelas contribuições',
            en: 'A social protection system funded by contributions',
            es: 'Un sistema de protección social financiado por las cotizaciones',
          },
          {
            fr: 'Une association caritative privée',
            pt: 'Uma associação beneficente privada',
            en: 'A private charity',
            es: 'Una asociación benéfica privada',
          },
          {
            fr: 'Un impôt facultatif',
            pt: 'Um imposto facultativo',
            en: 'An optional tax',
            es: 'Un impuesto facultativo',
          },
        ],
        0,
        {
          fr: 'La Sécurité sociale protège tous les résidents : santé, retraite, famille. Elle est financée par les cotisations.',
          pt: 'A Sécurité social protege todos os residentes: saúde, aposentadoria, família. É financiada pelas contribuições.',
          en: 'The social security system protects all residents: health, pensions, family. It is funded by contributions.',
          es: 'La Seguridad Social protege a todos los residentes: salud, jubilación, familia. Está financiada por las cotizaciones.',
        },
      ),
      h(
        {
          fr: 'Un citoyen français peut-il travailler dans un autre pays de l’Union européenne ?',
          pt: 'Um cidadão francês pode trabalhar em outro país da União Europeia?',
          en: 'Can a French citizen work in another European Union country?',
          es: '¿Puede trabajar un ciudadano francés en otro país de la Unión Europea?',
        },
        [
          {
            fr: 'Oui, librement dans tous les États membres',
            pt: 'Sim, livremente em todos os Estados-membros',
            en: 'Yes, freely in all member states',
            es: 'Sí, libremente en todos los Estados miembros',
          },
          {
            fr: 'Non, seulement en France',
            pt: 'Não, somente na França',
            en: 'No, only in France',
            es: 'No, solo en Francia',
          },
          {
            fr: 'Seulement avec un visa',
            pt: 'Somente com um visto',
            en: 'Only with a visa',
            es: 'Solo con un visado',
          },
        ],
        0,
        {
          fr: 'La citoyenneté européenne permet de vivre et de travailler librement dans les États membres de l’UE.',
          pt: 'A cidadania europeia permite viver e trabalhar livremente nos Estados-membros da UE.',
          en: 'European citizenship allows living and working freely in EU member states.',
          es: 'La ciudadanía europea permite vivir y trabajar libremente en los Estados miembros de la UE.',
        },
      ),
      h(
        {
          fr: 'Quelle est la langue officielle de la République française ?',
          pt: 'Qual é a língua oficial da República francesa?',
          en: 'What is the official language of the French Republic?',
          es: '¿Cuál es la lengua oficial de la República francesa?',
        },
        [
          { fr: 'Le français', pt: 'O francês', en: 'French', es: 'El francés' },
          {
            fr: 'Le français et l’anglais',
            pt: 'O francês e o inglês',
            en: 'French and English',
            es: 'El francés y el inglés',
          },
          {
            fr: 'Il n’y a pas de langue officielle',
            pt: 'Não há língua oficial',
            en: 'There is no official language',
            es: 'No hay lengua oficial',
          },
        ],
        0,
        {
          fr: 'L’article 2 de la Constitution : « La langue de la République est le français. »',
          pt: 'Artigo 2.º da Constituição: « A língua da República é o francês. »',
          en: 'Article 2 of the Constitution: "The language of the Republic is French."',
          es: 'Artículo 2 de la Constitución: « La lengua de la República es el francés. »',
        },
      ),
    ],
  },
]

export const ALL_QUESTIONS: QuizQuestion[] = THEMES.flatMap((t) => t.questions)

export function shuffle<T>(items: T[]): T[] {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}
