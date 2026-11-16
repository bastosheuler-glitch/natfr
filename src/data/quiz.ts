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
  icon: string
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
    icon: '📜',
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
      h(
        {
          fr: 'Quelle héroïne a libéré Orléans en 1429, pendant la guerre de Cent Ans ?',
          pt: 'Qual heroína libertou Orleães em 1429, durante a Guerra dos Cem Anos?',
          en: 'Which heroine liberated Orléans in 1429, during the Hundred Years’ War?',
          es: '¿Qué heroína liberó Orléans en 1429, durante la Guerra de los Cien Años?',
        },
        [
          { fr: 'Jeanne d’Arc', pt: 'Joana d’Arc', en: 'Joan of Arc', es: 'Juana de Arco' },
          { fr: 'Marianne', pt: 'Marianne', en: 'Marianne', es: 'Marianne' },
          { fr: 'Marie-Antoinette', pt: 'Maria Antonieta', en: 'Marie-Antoinette', es: 'María Antonieta' },
        ],
        0,
        {
          fr: 'Jeanne d’Arc, jeune paysanne devenue chef de guerre, fut brûlée en 1431 et canonisée en 1920.',
          pt: 'Joana d’Arc, jovem camponesa tornada chefe de guerra, foi queimada em 1431 e canonizada em 1920.',
          en: 'Joan of Arc, a young peasant who became a war leader, was burned in 1431 and canonised in 1920.',
          es: 'Juana de Arco, joven campesina convertida en jefa de guerra, fue quemada en 1431 y canonizada en 1920.',
        },
      ),
      h(
        {
          fr: 'Quel roi de France a été décapité en 1793, pendant la Révolution ?',
          pt: 'Qual rei da França foi decapitado em 1793, durante a Revolução?',
          en: 'Which king of France was beheaded in 1793, during the Revolution?',
          es: '¿Qué rey de Francia fue decapitado en 1793, durante la Revolución?',
        },
        [
          { fr: 'Louis XVI', pt: 'Luís XVI', en: 'Louis XVI', es: 'Luis XVI' },
          { fr: 'Louis XIV', pt: 'Luís XIV', en: 'Louis XIV', es: 'Luis XIV' },
          { fr: 'Henri IV', pt: 'Henrique IV', en: 'Henry IV', es: 'Enrique IV' },
        ],
        0,
        {
          fr: 'Louis XVI est guillotiné le 21 janvier 1793, après l’abolition de la monarchie en 1792.',
          pt: 'Luís XVI é guilhotinado em 21 de janeiro de 1793, após a abolição da monarquia em 1792.',
          en: 'Louis XVI was guillotined on 21 January 1793, after the monarchy was abolished in 1792.',
          es: 'Luis XVI es guillotinado el 21 de enero de 1793, tras la abolición de la monarquía en 1792.',
        },
      ),
      h(
        {
          fr: 'En quelle année la Première Guerre mondiale s’est-elle terminée en Europe ?',
          pt: 'Em que ano a Primeira Guerra Mundial terminou na Europa?',
          en: 'In which year did the First World War end in Europe?',
          es: '¿En qué año terminó la Primera Guerra Mundial en Europa?',
        },
        [
          { fr: '1918', pt: '1918', en: '1918', es: '1918' },
          { fr: '1914', pt: '1914', en: '1914', es: '1914' },
          { fr: '1939', pt: '1939', en: '1939', es: '1939' },
        ],
        0,
        {
          fr: 'L’armistice du 11 novembre 1918 met fin à la Première Guerre mondiale.',
          pt: 'O armistício de 11 de novembro de 1918 põe fim à Primeira Guerra Mundial.',
          en: 'The armistice of 11 November 1918 ended the First World War.',
          es: 'El armisticio del 11 de noviembre de 1918 pone fin a la Primera Guerra Mundial.',
        },
      ),
      h(
        {
          fr: 'Quel monument est construit à Paris pour l’Exposition universelle de 1889 ?',
          pt: 'Qual monumento foi construído em Paris para a Exposição Universal de 1889?',
          en: 'Which monument was built in Paris for the 1889 World’s Fair?',
          es: '¿Qué monumento fue construido en París para la Exposición Universal de 1889?',
        },
        [
          { fr: 'La tour Eiffel', pt: 'A torre Eiffel', en: 'The Eiffel Tower', es: 'La torre Eiffel' },
          { fr: 'Le Louvre', pt: 'O Louvre', en: 'The Louvre', es: 'El Louvre' },
          { fr: 'L’Arc de triomphe', pt: 'O Arco do Triunfo', en: 'The Arc de Triomphe', es: 'El Arco del Triunfo' },
        ],
        0,
        {
          fr: 'La tour Eiffel, construite en 1889, est devenue le symbole de Paris.',
          pt: 'A torre Eiffel, construída em 1889, tornou-se o símbolo de Paris.',
          en: 'The Eiffel Tower, built in 1889, became the symbol of Paris.',
          es: 'La torre Eiffel, construida en 1889, se convirtió en el símbolo de París.',
        },
      ),
      h(
        {
          fr: 'Qui était Victor Hugo ?',
          pt: 'Quem foi Victor Hugo?',
          en: 'Who was Victor Hugo?',
          es: '¿Quién fue Victor Hugo?',
        },
        [
          { fr: 'Un écrivain, auteur des Misérables', pt: 'Um escritor, autor de Os Miseráveis', en: 'A writer, author of Les Misérables', es: 'Un escritor, autor de Los miserables' },
          { fr: 'Un roi de France', pt: 'Um rei da França', en: 'A king of France', es: 'Un rey de Francia' },
          { fr: 'Un footballeur', pt: 'Um futebolista', en: 'A footballer', es: 'Un futbolista' },
        ],
        0,
        {
          fr: 'Victor Hugo (1802-1885), auteur des Misérables, est un grand défenseur des libertés.',
          pt: 'Victor Hugo (1802-1885), autor de Os Miseráveis, foi um grande defensor das liberdades.',
          en: 'Victor Hugo (1802-1885), author of Les Misérables, was a great defender of freedoms.',
          es: 'Victor Hugo (1802-1885), autor de Los miserables, fue un gran defensor de las libertades.',
        },
      ),
      h(
        {
          fr: 'Que signifie « égalité » dans la devise de la République ?',
          pt: 'O que significa « igualdade » no lema da República?',
          en: 'What does “equality” mean in the Republic’s motto?',
          es: '¿Qué significa « igualdad » en el lema de la República?',
        },
        [
          { fr: 'Les mêmes droits pour tous devant la loi', pt: 'Os mesmos direitos para todos diante da lei', en: 'The same rights for all before the law', es: 'Los mismos derechos para todos ante la ley' },
          { fr: 'Tout le monde gagne le même salaire', pt: 'Todos ganham o mesmo salário', en: 'Everyone earns the same salary', es: 'Todos ganan el mismo salario' },
          { fr: 'Seuls les Français ont des droits', pt: 'Só os franceses têm direitos', en: 'Only French people have rights', es: 'Solo los franceses tienen derechos' },
        ],
        0,
        {
          fr: 'L’égalité veut dire que la loi est la même pour tous, sans distinction d’origine, de religion ou de sexe.',
          pt: 'A igualdade quer dizer que a lei é a mesma para todos, sem distinção de origem, de religião ou de sexo.',
          en: 'Equality means the law is the same for all, regardless of origin, religion or gender.',
          es: 'La igualdad significa que la ley es la misma para todos, sin distinción de origen, de religión o de sexo.',
        },
      ),
      h(
        {
          fr: 'Que signifie « liberté » dans la devise de la République ?',
          pt: 'O que significa « liberdade » no lema da República?',
          en: 'What does “liberty” mean in the Republic’s motto?',
          es: '¿Qué significa « libertad » en el lema de la República?',
        },
        [
          { fr: 'Penser, s’exprimer et agir librement dans le respect des lois', pt: 'Pensar, expressar-se e agir livremente no respeito às leis', en: 'Thinking, expressing oneself and acting freely while respecting the laws', es: 'Pensar, expresarse y actuar libremente respetando las leyes' },
          { fr: 'Faire tout ce que l’on veut, sans limites', pt: 'Fazer tudo o que se quer, sem limites', en: 'Doing anything one wants, without limits', es: 'Hacer todo lo que se quiera, sin límites' },
          { fr: 'Ne jamais obéir aux règles', pt: 'Nunca obedecer às regras', en: 'Never obeying rules', es: 'Nunca obedecer las reglas' },
        ],
        0,
        {
          fr: 'La liberté est protégée par la loi, mais la liberté des uns s’arrête là où commence celle des autres.',
          pt: 'A liberdade é protegida pela lei, mas a liberdade de uns termina onde começa a dos outros.',
          en: 'Liberty is protected by law, but one person’s freedom ends where another’s begins.',
          es: 'La libertad está protegida por la ley, pero la libertad de unos termina donde empieza la de los otros.',
        },
      ),
      h(
        {
          fr: 'Que fête-t-on le 11 novembre ?',
          pt: 'O que se celebra em 11 de novembro?',
          en: 'What is celebrated on 11 November?',
          es: '¿Qué se celebra el 11 de noviembre?',
        },
        [
          { fr: 'L’armistice de 1918, fin de la Première Guerre mondiale', pt: 'O armistício de 1918, fim da Primeira Guerra Mundial', en: 'The 1918 armistice, the end of the First World War', es: 'El armisticio de 1918, fin de la Primera Guerra Mundial' },
          { fr: 'La prise de la Bastille', pt: 'A tomada da Bastilha', en: 'The storming of the Bastille', es: 'La toma de la Bastilla' },
          { fr: 'L’appel du 18 juin du général de Gaulle', pt: 'O apelo de 18 de junho do general de Gaulle', en: 'General de Gaulle’s appeal of 18 June', es: 'El llamamiento del 18 de junio del general de Gaulle' },
        ],
        0,
        {
          fr: 'Le 11 novembre 1918, l’armistice met fin à la Première Guerre mondiale. C’est un jour de mémoire nationale.',
          pt: 'Em 11 de novembro de 1918, o armistício põe fim à Primeira Guerra Mundial. É um dia de memória nacional.',
          en: 'On 11 November 1918, the armistice ended the First World War. It is a day of national remembrance.',
          es: 'El 11 de noviembre de 1918, el armisticio pone fin a la Primera Guerra Mundial. Es un día de memoria nacional.',
        },
      ),
      h(
        {
          fr: 'La Marseillaise était à l’origine…',
          pt: 'A Marselhesa era originalmente…',
          en: 'La Marseillaise was originally…',
          es: 'La Marsellesa era originalmente…',
        },
        [
          { fr: 'Un chant de guerre de l’armée du Rhin', pt: 'Um canto de guerra do exército do Reno', en: 'A war song of the Army of the Rhine', es: 'Un canto de guerra del ejército del Rin' },
          { fr: 'Une chanson d’amour du XVIIIe siècle', pt: 'Uma canção de amor do século XVIII', en: 'An 18th-century love song', es: 'Una canción de amor del siglo XVIII' },
          { fr: 'Un chant créé sous Napoléon', pt: 'Um canto criado sob Napoleão', en: 'A song created under Napoleon', es: 'Un canto creado bajo Napoleón' },
        ],
        0,
        {
          fr: 'Composée en 1792 par Rouget de Lisle à Strasbourg, elle s’appelait « Chant de guerre de l’armée du Rhin ».',
          pt: 'Composta em 1792 por Rouget de Lisle em Estrasburgo, chamava-se « Canto de guerra do exército do Reno ».',
          en: 'Composed in 1792 by Rouget de Lisle in Strasbourg, it was called “War Song of the Army of the Rhine”.',
          es: 'Compuesta en 1792 por Rouget de Lisle en Estrasburgo, se llamaba « Canto de guerra del ejército del Rin ».',
        },
      ),
      h(
        {
          fr: 'Peut-on porter des signes religieux ostensibles à l’école publique ?',
          pt: 'Pode-se usar sinais religiosos ostensivos na escola pública?',
          en: 'Can you wear conspicuous religious signs in public school?',
          es: '¿Se puede llevar signos religiosos ostensibles en la escuela pública?',
        },
        [
          { fr: 'Non, ils sont interdits par la loi de 2004', pt: 'Não, são proibidos pela lei de 2004', en: 'No, they are banned by the 2004 law', es: 'No, están prohibidos por la ley de 2004' },
          { fr: 'Oui, sans aucune limite', pt: 'Sim, sem nenhum limite', en: 'Yes, without any limit', es: 'Sí, sin ningún límite' },
          { fr: 'Oui, avec l’accord du maire', pt: 'Sim, com a autorização do prefeito', en: 'Yes, with the mayor’s approval', es: 'Sí, con la autorización del alcalde' },
        ],
        0,
        {
          fr: 'La loi du 15 mars 2004 interdit les signes religieux ostensibles à l’école publique pour garantir la neutralité.',
          pt: 'A lei de 15 de março de 2004 proíbe os sinais religiosos ostensivos na escola pública para garantir a neutralidade.',
          en: 'The law of 15 March 2004 bans conspicuous religious signs in public schools to guarantee neutrality.',
          es: 'La ley del 15 de marzo de 2004 prohíbe los signos religiosos ostensibles en la escuela pública para garantizar la neutralidad.',
        },
      ),
      h(
        {
          fr: 'Comment l’article 1er de la Constitution définit-il la République ?',
          pt: 'Como o artigo 1º da Constituição define a República?',
          en: 'How does article 1 of the Constitution define the Republic?',
          es: '¿Cómo define la República el artículo 1º de la Constitución?',
        },
        [
          { fr: 'Indivisible, laïque, démocratique et sociale', pt: 'Indivisível, laica, democrática e social', en: 'Indivisible, secular, democratic and social', es: 'Indivisible, laica, democrática y social' },
          { fr: 'Royale, chrétienne et rurale', pt: 'Real, cristã e rural', en: 'Royal, Christian and rural', es: 'Real, cristiana y rural' },
          { fr: 'Fédérale, militaire et agricole', pt: 'Federal, militar e agrícola', en: 'Federal, military and agricultural', es: 'Federal, militar y agrícola' },
        ],
        0,
        {
          fr: 'Article 1er : « La France est une République indivisible, laïque, démocratique et sociale. »',
          pt: 'Artigo 1º: « A França é uma República indivisível, laica, democrática e social. »',
          en: 'Article 1: “France is an indivisible, secular, democratic and social Republic.”',
          es: 'Artículo 1º: « Francia es una República indivisible, laica, democrática y social. »',
        },
      ),
      h(
        {
          fr: 'Le 14 juillet est la fête nationale depuis…',
          pt: 'O 14 de julho é a festa nacional desde…',
          en: '14 July has been the national holiday since…',
          es: 'El 14 de julio es la fiesta nacional desde…',
        },
        [
          { fr: '1880', pt: '1880', en: '1880', es: '1880' },
          { fr: '1789', pt: '1789', en: '1789', es: '1789' },
          { fr: '1958', pt: '1958', en: '1958', es: '1958' },
        ],
        0,
        {
          fr: 'La prise de la Bastille (1789) est célébrée comme fête nationale depuis la loi du 6 juillet 1880.',
          pt: 'A tomada da Bastilha (1789) é celebrada como festa nacional desde a lei de 6 de julho de 1880.',
          en: 'The storming of the Bastille (1789) has been celebrated as the national holiday since the law of 6 July 1880.',
          es: 'La toma de la Bastilla (1789) se celebra como fiesta nacional desde la ley del 6 de julio de 1880.',
        },
      ),
      h(
        {
          fr: 'Qui a peint « La Liberté guidant le peuple » ?',
          pt: 'Quem pintou « A Liberdade guiando o povo »?',
          en: 'Who painted “Liberty Leading the People”?',
          es: '¿Quién pintó « La Libertad guiando al pueblo »?',
        },
        [
          { fr: 'Eugène Delacroix', pt: 'Eugène Delacroix', en: 'Eugène Delacroix', es: 'Eugène Delacroix' },
          { fr: 'Claude Monet', pt: 'Claude Monet', en: 'Claude Monet', es: 'Claude Monet' },
          { fr: 'Pablo Picasso', pt: 'Pablo Picasso', en: 'Pablo Picasso', es: 'Pablo Picasso' },
        ],
        0,
        {
          fr: 'Peint en 1830, ce tableau de Delacroix est exposé au Louvre : on y voit Marianne, drapeau tricolore à la main.',
          pt: 'Pintado em 1830, este quadro de Delacroix está exposto no Louvre: vê-se Marianne, bandeira tricolor na mão.',
          en: 'Painted in 1830, this Delacroix painting is displayed at the Louvre: it shows Marianne, tricolour flag in hand.',
          es: 'Pintado en 1830, este cuadro de Delacroix está expuesto en el Louvre: se ve a Marianne, bandera tricolor en la mano.',
        },
      ),
      h(
        {
          fr: 'Pourquoi l’hymne national s’appelle-t-il « la Marseillaise » ?',
          pt: 'Por que o hino nacional se chama « a Marselhesa »?',
          en: 'Why is the national anthem called “la Marseillaise”?',
          es: '¿Por qué el himno nacional se llama « la Marsellesa »?',
        },
        [
          { fr: 'Parce que les volontaires de Marseille l’ont chantée en montant à Paris', pt: 'Porque os voluntários de Marselha a cantaram subindo a Paris', en: 'Because the volunteers from Marseille sang it on their way to Paris', es: 'Porque los voluntarios de Marsella la cantaron subiendo a París' },
          { fr: 'Parce qu’elle a été composée à Marseille', pt: 'Porque foi composta em Marselha', en: 'Because it was composed in Marseille', es: 'Porque fue compuesta en Marsella' },
          { fr: 'Parce que Marianne était marseillaise', pt: 'Porque Marianne era marselhesa', en: 'Because Marianne was from Marseille', es: 'Porque Marianne era marsellesa' },
        ],
        0,
        {
          fr: 'Composée à Strasbourg, elle a été popularisée par les volontaires marseillais en 1792, d’où son nom.',
          pt: 'Composta em Estrasburgo, foi popularizada pelos voluntários marselheses em 1792, daí o nome.',
          en: 'Composed in Strasbourg, it was popularised by the Marseille volunteers in 1792, hence its name.',
          es: 'Compuesta en Estrasburgo, fue popularizada por los voluntarios marselleses en 1792, de ahí su nombre.',
        },
      ),
      h(
        {
          fr: 'Depuis quand le français est-il la langue de la République dans la Constitution ?',
          pt: 'Desde quando o francês é a língua da República na Constituição?',
          en: 'Since when has French been the language of the Republic in the Constitution?',
          es: '¿Desde cuándo el francés es la lengua de la República en la Constitución?',
        },
        [
          { fr: 'Depuis la révision constitutionnelle de 1992', pt: 'Desde a revisão constitucional de 1992', en: 'Since the constitutional revision of 1992', es: 'Desde la revisión constitucional de 1992' },
          { fr: 'Depuis 1789', pt: 'Desde 1789', en: 'Since 1789', es: 'Desde 1789' },
          { fr: 'Depuis 1539', pt: 'Desde 1539', en: 'Since 1539', es: 'Desde 1539' },
        ],
        0,
        {
          fr: 'Depuis 1992, l’article 2 de la Constitution précise : « La langue de la République est le français. »',
          pt: 'Desde 1992, o artigo 2 da Constituição especifica: « A língua da República é o francês. »',
          en: 'Since 1992, article 2 of the Constitution states: “The language of the Republic is French.”',
          es: 'Desde 1992, el artículo 2 de la Constitución precisa: « La lengua de la República es el francés. »',
        },
      ),
    ],
  },
  {
    id: 'valeurs',
    icon: '🇫🇷',
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
      h(
        {
          fr: 'Qui a composé La Marseillaise en 1792 ?',
          pt: 'Quem compôs a Marselhesa em 1792?',
          en: 'Who composed La Marseillaise in 1792?',
          es: '¿Quién compuso La Marsellesa en 1792?',
        },
        [
          { fr: 'Rouget de Lisle', pt: 'Rouget de Lisle', en: 'Rouget de Lisle', es: 'Rouget de Lisle' },
          { fr: 'Victor Hugo', pt: 'Victor Hugo', en: 'Victor Hugo', es: 'Victor Hugo' },
          { fr: 'Le général de Gaulle', pt: 'O general de Gaulle', en: 'General de Gaulle', es: 'El general de Gaulle' },
        ],
        0,
        {
          fr: 'Rouget de Lisle compose La Marseillaise à Strasbourg en 1792 ; elle devient l’hymne national.',
          pt: 'Rouget de Lisle compõe a Marselhesa em Estrasburgo em 1792; ela se torna o hino nacional.',
          en: 'Rouget de Lisle composed La Marseillaise in Strasbourg in 1792; it became the national anthem.',
          es: 'Rouget de Lisle compone La Marsellesa en Estrasburgo en 1792; se convierte en el himno nacional.',
        },
      ),
      h(
        {
          fr: 'Où trouve-t-on souvent la devise de la République et le buste de Marianne ?',
          pt: 'Onde encontramos com frequência o lema da República e o busto de Marianne?',
          en: 'Where can you often find the Republic’s motto and the bust of Marianne?',
          es: '¿Dónde se encuentra a menudo el lema de la República y el busto de Marianne?',
        },
        [
          { fr: 'Dans les mairies et les bâtiments publics', pt: 'Nas prefeituras e edifícios públicos', en: 'In town halls and public buildings', es: 'En los ayuntamientos y edificios públicos' },
          { fr: 'Uniquement dans les musées', pt: 'Apenas nos museus', en: 'Only in museums', es: 'Solo en los museos' },
          { fr: 'Seulement à l’étranger', pt: 'Somente no exterior', en: 'Only abroad', es: 'Solo en el extranjero' },
        ],
        0,
        {
          fr: 'La devise et le buste de Marianne ornent les mairies, les écoles et les tribunaux.',
          pt: 'O lema e o busto de Marianne ornamentam prefeituras, escolas e tribunais.',
          en: 'The motto and the bust of Marianne adorn town halls, schools and courts.',
          es: 'El lema y el busto de Marianne adornan ayuntamientos, escuelas y tribunales.',
        },
      ),
      h(
        {
          fr: 'Que signifie « fraternité » dans la devise de la République ?',
          pt: 'O que significa « fraternidade » no lema da República?',
          en: 'What does “fraternity” mean in the Republic’s motto?',
          es: '¿Qué significa « fraternidad » en el lema de la República?',
        },
        [
          { fr: 'L’entraide et la solidarité entre les citoyens', pt: 'A ajuda mútua e a solidariedade entre os cidadãos', en: 'Mutual aid and solidarity among citizens', es: 'La ayuda mutua y la solidaridad entre los ciudadanos' },
          { fr: 'L’obligation d’avoir les mêmes opinions', pt: 'A obrigação de ter as mesmas opiniões', en: 'Having to share the same opinions', es: 'La obligación de tener las mismas opiniones' },
          { fr: 'Vivre chacun pour soi', pt: 'Viver cada um por si', en: 'Everyone for themselves', es: 'Vivir cada uno por su lado' },
        ],
        0,
        {
          fr: 'La fraternité invite les citoyens à la solidarité et à l’entraide.',
          pt: 'A fraternidade convida os cidadãos à solidariedade e à ajuda mútua.',
          en: 'Fraternity calls on citizens to show solidarity and mutual aid.',
          es: 'La fraternidad invita a los ciudadanos a la solidaridad y la ayuda mutua.',
        },
      ),
      h(
        {
          fr: 'Quel bonnet, symbole de la liberté, est porté par Marianne ?',
          pt: 'Qual barrete, símbolo da liberdade, é usado por Marianne?',
          en: 'Which cap, a symbol of liberty, does Marianne wear?',
          es: '¿Qué gorro, símbolo de la libertad, lleva Marianne?',
        },
        [
          { fr: 'Le bonnet phrygien', pt: 'O barrete frígio', en: 'The Phrygian cap', es: 'El gorro frigio' },
          { fr: 'Un chapeau haut de forme', pt: 'Um cartola', en: 'A top hat', es: 'Un sombrero de copa' },
          { fr: 'Un casque de soldat', pt: 'Um capacete de soldado', en: 'A soldier’s helmet', es: 'Un casco de soldado' },
        ],
        0,
        {
          fr: 'Le bonnet phrygien, porté pendant la Révolution, symbolise la liberté ; il figure sur les pièces et les timbres.',
          pt: 'O barrete frígio, usado durante a Revolução, simboliza a liberdade; aparece em moedas e selos.',
          en: 'The Phrygian cap, worn during the Revolution, symbolises liberty; it appears on coins and stamps.',
          es: 'El gorro frigio, usado durante la Revolución, simboliza la libertad; aparece en monedas y sellos.',
        },
      ),
      h(
        {
          fr: 'D’où viennent les couleurs bleu, blanc et rouge du drapeau français ?',
          pt: 'De onde vêm as cores azul, branco e vermelho da bandeira francesa?',
          en: 'Where do the blue, white and red colours of the French flag come from?',
          es: '¿De dónde vienen los colores azul, blanco y rojo de la bandera francesa?',
        },
        [
          { fr: 'Des couleurs de Paris (bleu et rouge) et du roi (blanc)', pt: 'Das cores de Paris (azul e vermelho) e do rei (branco)', en: 'From the colours of Paris (blue and red) and the king (white)', es: 'De los colores de París (azul y rojo) y del rey (blanco)' },
          { fr: 'Des couleurs de l’Union européenne', pt: 'Das cores da União Europeia', en: 'From the colours of the European Union', es: 'De los colores de la Unión Europea' },
          { fr: 'Des couleurs du sport français', pt: 'Das cores do esporte francês', en: 'From the colours of French sport', es: 'De los colores del deporte francés' },
        ],
        0,
        {
          fr: 'Le bleu et le rouge sont les couleurs de Paris, le blanc celle de la monarchie ; le drapeau tricolore naît à la Révolution.',
          pt: 'O azul e o vermelho são as cores de Paris, o branco a da monarquia; a bandeira tricolor nasce na Revolução.',
          en: 'Blue and red are the colours of Paris, white that of the monarchy; the tricolour flag was born in the Revolution.',
          es: 'El azul y el rojo son los colores de París, el blanco el de la monarquía; la bandera tricolor nace en la Revolución.',
        },
      ),
      h(
        {
          fr: 'Quelle est la durée du mandat d’un sénateur ?',
          pt: 'Qual é a duração do mandato de um senador?',
          en: 'How long is a senator’s term?',
          es: '¿Cuál es la duración del mandato de un senador?',
        },
        [
          { fr: '6 ans', pt: '6 anos', en: '6 years', es: '6 años' },
          { fr: '5 ans', pt: '5 anos', en: '5 years', es: '5 años' },
          { fr: '4 ans', pt: '4 anos', en: '4 years', es: '4 años' },
        ],
        0,
        {
          fr: 'Les sénateurs sont élus pour 6 ans ; les députés de l’Assemblée nationale, eux, sont élus pour 5 ans.',
          pt: 'Os senadores são eleitos por 6 anos; os deputados da Assembleia Nacional, por 5 anos.',
          en: 'Senators are elected for 6 years; National Assembly deputies are elected for 5 years.',
          es: 'Los senadores son elegidos por 6 años; los diputados de la Asamblea Nacional, por 5 años.',
        },
      ),
      h(
        {
          fr: 'Comment s’appelle un texte de loi rédigé par le gouvernement ?',
          pt: 'Como se chama um texto de lei redigido pelo governo?',
          en: 'What is a law text drafted by the government called?',
          es: '¿Cómo se llama un texto de ley redactado por el gobierno?',
        },
        [
          { fr: 'Un projet de loi', pt: 'Um projeto de lei', en: 'A government bill', es: 'Un proyecto de ley' },
          { fr: 'Une proposition de loi', pt: 'Uma proposição de lei', en: 'A private member’s bill', es: 'Una proposición de ley' },
          { fr: 'Un décret royal', pt: 'Um decreto real', en: 'A royal decree', es: 'Un decreto real' },
        ],
        0,
        {
          fr: 'Un texte venant du gouvernement est un « projet de loi » ; un texte venant des parlementaires est une « proposition de loi ».',
          pt: 'Um texto vindo do governo é um « projeto de lei »; um texto vindo dos parlamentares é uma « proposta de lei ».',
          en: 'A text from the government is a “government bill”; a text from parliamentarians is a “private member’s bill”.',
          es: 'Un texto del gobierno es un « proyecto de ley »; un texto de los parlamentares es una « proposición de ley ».',
        },
      ),
      h(
        {
          fr: 'Qui applique les lois en France ?',
          pt: 'Quem aplica as leis na França?',
          en: 'Who applies the laws in France?',
          es: '¿Quién aplica las leyes en Francia?',
        },
        [
          { fr: 'Le gouvernement', pt: 'O governo', en: 'The government', es: 'El gobierno' },
          { fr: 'Le Parlement', pt: 'O Parlamento', en: 'The parliament', es: 'El Parlamento' },
          { fr: 'Le Conseil constitutionnel', pt: 'O Conselho Constitucional', en: 'The Constitutional Council', es: 'El Consejo Constitucional' },
        ],
        0,
        {
          fr: 'Le pouvoir exécutif — le président et le gouvernement — applique les lois ; le Parlement les vote.',
          pt: 'O poder executivo — o presidente e o governo — aplica as leis; o Parlamento as vota.',
          en: 'The executive — the president and the government — applies the laws; the parliament votes them.',
          es: 'El poder ejecutivo — el presidente y el gobierno — aplica las leyes; el Parlamento las vota.',
        },
      ),
      h(
        {
          fr: 'Quelle est la plus haute juridiction de l’ordre judiciaire ?',
          pt: 'Qual é a mais alta jurisdição da ordem judicial?',
          en: 'What is the highest court of the judicial order?',
          es: '¿Cuál es la más alta jurisdicción del orden judicial?',
        },
        [
          { fr: 'La Cour de cassation', pt: 'A Corte de Cassação', en: 'The Cour de cassation', es: 'La Corte de Casación' },
          { fr: 'Le Conseil d’État', pt: 'O Conselho de Estado', en: 'The Conseil d’État', es: 'El Consejo de Estado' },
          { fr: 'Le tribunal de commerce', pt: 'O tribunal de comércio', en: 'The commercial court', es: 'El tribunal de comercio' },
        ],
        0,
        {
          fr: 'La Cour de cassation est au sommet de l’ordre judiciaire ; le Conseil d’État est au sommet de l’ordre administratif.',
          pt: 'A Corte de Cassação está no topo da ordem judicial; o Conselho de Estado está no topo da ordem administrativa.',
          en: 'The Cour de cassation tops the judicial order; the Conseil d’État tops the administrative order.',
          es: 'La Corte de Casación está en la cima del orden judicial; el Consejo de Estado está en la cima del orden administrativo.',
        },
      ),
      h(
        {
          fr: 'Quelle institution contrôle les finances publiques ?',
          pt: 'Qual instituição controla as finanças públicas?',
          en: 'Which institution audits public finances?',
          es: '¿Qué institución controla las finanzas públicas?',
        },
        [
          { fr: 'La Cour des comptes', pt: 'A Corte de Contas', en: 'The Cour des comptes', es: 'La Corte de Cuentas' },
          { fr: 'La Banque de France', pt: 'O Banco da França', en: 'The Bank of France', es: 'El Banco de Francia' },
          { fr: 'L’Assemblée nationale', pt: 'A Assembleia Nacional', en: 'The National Assembly', es: 'La Asamblea Nacional' },
        ],
        0,
        {
          fr: 'La Cour des comptes vérifie que l’argent public est bien utilisé ; elle est l’« arbitre des comptes publics ».',
          pt: 'A Corte de Contas verifica que o dinheiro público é bem usado; é a « árbitra das contas públicas ».',
          en: 'The Cour des comptes checks that public money is well spent; it is the “arbiter of public accounts”.',
          es: 'La Corte de Cuentas verifica que el dinero público se usa bien; es la « árbitra de las cuentas públicas ».',
        },
      ),
      h(
        {
          fr: 'Quelle est la capitale de la France ?',
          pt: 'Qual é a capital da França?',
          en: 'What is the capital of France?',
          es: '¿Cuál es la capital de Francia?',
        },
        [
          { fr: 'Paris', pt: 'Paris', en: 'Paris', es: 'París' },
          { fr: 'Lyon', pt: 'Lyon', en: 'Lyon', es: 'Lyon' },
          { fr: 'Marseille', pt: 'Marselha', en: 'Marseille', es: 'Marsella' },
        ],
        0,
        {
          fr: 'Paris est la capitale de la France : c’est là que se trouvent l’Élysée, l’Assemblée nationale et le Sénat.',
          pt: 'Paris é a capital da França: é lá que ficam o Eliseu, a Assembleia Nacional e o Senado.',
          en: 'Paris is the capital of France: the Élysée, the National Assembly and the Senate are there.',
          es: 'París es la capital de Francia: allí están el Elíseo, la Asamblea Nacional y el Senado.',
        },
      ),
      h(
        {
          fr: 'Quel pays est voisin de la France ?',
          pt: 'Qual país é vizinho da França?',
          en: 'Which country is a neighbour of France?',
          es: '¿Qué país es vecino de Francia?',
        },
        [
          { fr: 'L’Allemagne', pt: 'A Alemanha', en: 'Germany', es: 'Alemania' },
          { fr: 'L’Espagne', pt: 'A Espanha', en: 'Spain', es: 'España' },
          { fr: 'L’Italie', pt: 'A Itália', en: 'Italy', es: 'Italia' },
        ],
        0,
        {
          fr: 'La France a 8 pays voisins : Belgique, Luxembourg, Allemagne, Suisse, Italie, Monaco, Espagne et Andorre.',
          pt: 'A França tem 8 países vizinhos: Bélgica, Luxemburgo, Alemanha, Suíça, Itália, Mônaco, Espanha e Andorra.',
          en: 'France has 8 neighbouring countries: Belgium, Luxembourg, Germany, Switzerland, Italy, Monaco, Spain and Andorra.',
          es: 'Francia tiene 8 países vecinos: Bélgica, Luxemburgo, Alemania, Suiza, Italia, Mónaco, España y Andorra.',
        },
      ),
      h(
        {
          fr: 'Combien d’États membres compte l’Union européenne aujourd’hui ?',
          pt: 'Quantos Estados-membros tem hoje a União Europeia?',
          en: 'How many member states does the European Union have today?',
          es: '¿Cuántos Estados miembros tiene hoy la Unión Europea?',
        },
        [
          { fr: '27, depuis le départ du Royaume-Uni en 2020', pt: '27, desde a saída do Reino Unido em 2020', en: '27, since the UK’s departure in 2020', es: '27, desde la salida del Reino Unido en 2020' },
          { fr: '6, comme à la création', pt: '6, como na criação', en: '6, as at the founding', es: '6, como en la fundación' },
          { fr: '50', pt: '50', en: '50', es: '50' },
        ],
        0,
        {
          fr: 'Depuis le Brexit (2020), l’UE compte 27 États membres. La France est un de ses membres fondateurs.',
          pt: 'Desde o Brexit (2020), a UE conta 27 Estados-membros. A França é um de seus membros fundadores.',
          en: 'Since Brexit (2020), the EU has 27 member states. France is one of its founding members.',
          es: 'Desde el Brexit (2020), la UE cuenta con 27 Estados miembros. Francia es uno de sus miembros fundadores.',
        },
      ),
      h(
        {
          fr: 'Combien de départements compte la France en métropole ?',
          pt: 'Quantos departamentos tem a França na metrópole?',
          en: 'How many départements are there in mainland France?',
          es: '¿Cuántos departamentos tiene Francia en la metrópoli?',
        },
        [
          { fr: '96 (101 avec l’outre-mer)', pt: '96 (101 com o ultramar)', en: '96 (101 with overseas territories)', es: '96 (101 con el ultramar)' },
          { fr: '18', pt: '18', en: '18', es: '18' },
          { fr: '35 000', pt: '35 000', en: '35,000', es: '35 000' },
        ],
        0,
        {
          fr: 'Il y a 96 départements en métropole et 101 avec l’outre-mer. Les 35 000 sont les communes ; les 18, les régions.',
          pt: 'Há 96 departamentos na metrópole e 101 com o ultramar. Os 35 000 são as comunas; as 18, as regiões.',
          en: 'There are 96 départements in mainland France and 101 with overseas territories. The 35,000 are the communes; the 18, the regions.',
          es: 'Hay 96 departamentos en la metrópoli y 101 con el ultramar. Los 35 000 son las comunas; las 18, las regiones.',
        },
      ),
      h(
        {
          fr: 'Quelle mer borde la France au sud ?',
          pt: 'Qual mar banha a França ao sul?',
          en: 'Which sea borders France to the south?',
          es: '¿Qué mar baña Francia al sur?',
        },
        [
          { fr: 'La Méditerranée', pt: 'O Mediterrâneo', en: 'The Mediterranean', es: 'El Mediterráneo' },
          { fr: 'La mer du Nord', pt: 'O Mar do Norte', en: 'The North Sea', es: 'El mar del Norte' },
          { fr: 'La mer Baltique', pt: 'O Mar Báltico', en: 'The Baltic Sea', es: 'El mar Báltico' },
        ],
        0,
        {
          fr: 'Au sud, la France est bordée par la Méditerranée ; à l’ouest, par l’océan Atlantique et la Manche ; au nord, par la Manche et la mer du Nord.',
          pt: 'Ao sul, a França é banhada pelo Mediterrâneo; a oeste, pelo oceano Atlântico; ao norte, pelo canal da Mancha e o Mar do Norte.',
          en: 'To the south, France is bordered by the Mediterranean; to the west, by the Atlantic Ocean; to the north, by the Channel and the North Sea.',
          es: 'Al sur, Francia es bañada por el Mediterráneo; al oeste, por el océano Atlántico; al norte, por el canal de la Mancha y el mar del Norte.',
        },
      ),
    ],
  },
  {
    id: 'institutions',
    icon: '🏛️',
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
      h(
        {
          fr: 'Qui nomme le Premier ministre en France ?',
          pt: 'Quem nomeia o primeiro-ministro na França?',
          en: 'Who appoints the prime minister in France?',
          es: '¿Quién nombra al primer ministro en Francia?',
        },
        [
          { fr: 'Le président de la République', pt: 'O presidente da República', en: 'The president of the Republic', es: 'El presidente de la República' },
          { fr: 'Le Sénat', pt: 'O Senado', en: 'The Senate', es: 'El Senado' },
          { fr: 'Les citoyens, directement', pt: 'Os cidadãos, diretamente', en: 'The citizens, directly', es: 'Los ciudadanos, directamente' },
        ],
        0,
        {
          fr: 'Le président de la République nomme le Premier ministre, qui forme ensuite son gouvernement.',
          pt: 'O presidente da República nomeia o primeiro-ministro, que forma depois seu governo.',
          en: 'The president of the Republic appoints the prime minister, who then forms the government.',
          es: 'El presidente de la República nombra al primer ministro, que luego forma su gobierno.',
        },
      ),
      h(
        {
          fr: 'Quelle chambre du Parlement est élue au suffrage universel direct ?',
          pt: 'Qual câmara do Parlamento é eleita por sufrágio universal direto?',
          en: 'Which chamber of Parliament is elected by direct universal suffrage?',
          es: '¿Qué cámara del Parlamento es elegida por sufragio universal directo?',
        },
        [
          { fr: 'L’Assemblée nationale', pt: 'A Assembleia Nacional', en: 'The National Assembly', es: 'La Asamblea Nacional' },
          { fr: 'Le Sénat', pt: 'O Senado', en: 'The Senate', es: 'El Senado' },
          { fr: 'Le Conseil constitutionnel', pt: 'O Conselho Constitucional', en: 'The Constitutional Council', es: 'El Consejo Constitucional' },
        ],
        0,
        {
          fr: 'Les députés de l’Assemblée nationale sont élus directement pour 5 ans ; les sénateurs sont élus indirectement.',
          pt: 'Os deputados da Assembleia Nacional são eleitos diretamente por 5 anos; os senadores são eleitos indiretamente.',
          en: 'Members of the National Assembly are elected directly for 5 years; senators are elected indirectly.',
          es: 'Los diputados de la Asamblea Nacional son elegidos directamente por 5 años; los senadores son elegidos indirectamente.',
        },
      ),
      h(
        {
          fr: 'Qui est le chef des armées en France ?',
          pt: 'Quem é o chefe das forças armadas na França?',
          en: 'Who is the head of the armed forces in France?',
          es: '¿Quién es el jefe de las fuerzas armadas en Francia?',
        },
        [
          { fr: 'Le président de la République', pt: 'O presidente da República', en: 'The president of the Republic', es: 'El presidente de la República' },
          { fr: 'Le Premier ministre', pt: 'O primeiro-ministro', en: 'The prime minister', es: 'El primer ministro' },
          { fr: 'Le ministre de l’Intérieur', pt: 'O ministro do Interior', en: 'The interior minister', es: 'El ministro del Interior' },
        ],
        0,
        {
          fr: 'Le président de la République est le chef des armées (article 15 de la Constitution).',
          pt: 'O presidente da República é o chefe das forças armadas (artigo 15 da Constituição).',
          en: 'The president of the Republic is the head of the armed forces (article 15 of the Constitution).',
          es: 'El presidente de la República es el jefe de las fuerzas armadas (artículo 15 de la Constitución).',
        },
      ),
      h(
        {
          fr: 'Quelles sont les deux chambres du Parlement français ?',
          pt: 'Quais são as duas câmaras do Parlamento francês?',
          en: 'What are the two chambers of the French Parliament?',
          es: '¿Cuáles son las dos cámaras del Parlamento francés?',
        },
        [
          { fr: 'L’Assemblée nationale et le Sénat', pt: 'A Assembleia Nacional e o Senado', en: 'The National Assembly and the Senate', es: 'La Asamblea Nacional y el Senado' },
          { fr: 'L’Assemblée nationale et le Conseil d’État', pt: 'A Assembleia Nacional e o Consejo de Estado', en: 'The National Assembly and the Council of State', es: 'La Asamblea Nacional y el Consejo de Estado' },
          { fr: 'Le Sénat et le gouvernement', pt: 'O Senado e o governo', en: 'The Senate and the government', es: 'El Senado y el gobierno' },
        ],
        0,
        {
          fr: 'Le Parlement comprend l’Assemblée nationale et le Sénat ; les deux chambres examinent et votent les lois.',
          pt: 'O Parlamento compreende a Assembleia Nacional e o Senado; as duas câmaras examinam e votam as leis.',
          en: 'Parliament consists of the National Assembly and the Senate; both chambers examine and vote on laws.',
          es: 'El Parlamento comprende la Asamblea Nacional y el Senado; las dos cámaras examinan y votan las leyes.',
        },
      ),
      h(
        {
          fr: 'Quel document fondamental organise les pouvoirs de la Ve République ?',
          pt: 'Que documento fundamental organiza os poderes da V República?',
          en: 'Which fundamental document organises the powers of the Fifth Republic?',
          es: '¿Qué documento fundamental organiza los poderes de la V República?',
        },
        [
          { fr: 'La Constitution de 1958', pt: 'A Constituição de 1958', en: 'The 1958 Constitution', es: 'La Constitución de 1958' },
          { fr: 'Le Code civil de 1804', pt: 'O Código Civil de 1804', en: 'The 1804 Civil Code', es: 'El Código Civil de 1804' },
          { fr: 'L’édit de Nantes', pt: 'O Édito de Nantes', en: 'The Edict of Nantes', es: 'El Edicto de Nantes' },
        ],
        0,
        {
          fr: 'La Constitution du 4 octobre 1958 organise les pouvoirs de la Ve République.',
          pt: 'A Constituição de 4 de outubro de 1958 organiza os poderes da V República.',
          en: 'The Constitution of 4 October 1958 organises the powers of the Fifth Republic.',
          es: 'La Constitución del 4 de octubre de 1958 organiza los poderes de la V República.',
        },
      ),
      h(
        {
          fr: 'Le vote est-il obligatoire en France ?',
          pt: 'O voto é obrigatório na França?',
          en: 'Is voting compulsory in France?',
          es: '¿El voto es obligatorio en Francia?',
        },
        [
          { fr: 'Non, le vote est un droit', pt: 'Não, o voto é um direito', en: 'No, voting is a right', es: 'No, el voto es un derecho' },
          { fr: 'Oui, pour toutes les élections', pt: 'Sim, para todas as eleições', en: 'Yes, for all elections', es: 'Sí, para todas las elecciones' },
          { fr: 'Oui, mais seulement pour la présidentielle', pt: 'Sim, mas só para a presidencial', en: 'Yes, but only for the presidential election', es: 'Sí, pero solo para la presidencial' },
        ],
        0,
        {
          fr: 'Le vote est un droit, pas une obligation : personne n’est puni s’il ne vote pas.',
          pt: 'O voto é um direito, não uma obrigação: ninguém é punido se não votar.',
          en: 'Voting is a right, not an obligation: no one is punished for not voting.',
          es: 'El voto es un derecho, no una obligación: nadie es castigado si no vota.',
        },
      ),
      h(
        {
          fr: 'À quoi servent les impôts ?',
          pt: 'Para que servem os impostos?',
          en: 'What are taxes used for?',
          es: '¿Para qué sirven los impuestos?',
        },
        [
          { fr: 'À financer les services publics', pt: 'Para financiar os serviços públicos', en: 'To finance public services', es: 'Para financiar los servicios públicos' },
          { fr: 'À financer les partis politiques uniquement', pt: 'Para financiar somente os partidos políticos', en: 'To finance political parties only', es: 'Para financiar solo los partidos políticos' },
          { fr: 'À rien, ils sont thésaurisés', pt: 'Para nada, são acumulados', en: 'Nothing, they are hoarded', es: 'Para nada, se acumulan' },
        ],
        0,
        {
          fr: 'Les impôts financent les services publics : écoles, hôpitaux, police, routes, justice.',
          pt: 'Os impostos financiam os serviços públicos: escolas, hospitais, polícia, estradas, justiça.',
          en: 'Taxes finance public services: schools, hospitals, police, roads, justice.',
          es: 'Los impuestos financian los servicios públicos: escuelas, hospitales, policía, carreteras, justicia.',
        },
      ),
      h(
        {
          fr: 'Les urgences hospitalières sont-elles ouvertes à tous ?',
          pt: 'As urgências hospitalares estão abertas a todos?',
          en: 'Are hospital emergency rooms open to everyone?',
          es: '¿Las urgencias hospitalarias están abiertas a todos?',
        },
        [
          { fr: 'Oui, même sans argent', pt: 'Sim, mesmo sem dinheiro', en: 'Yes, even without money', es: 'Sí, incluso sin dinero' },
          { fr: 'Non, seulement avec une carte Vitale', pt: 'Não, somente com o cartão Vitale', en: 'No, only with a Vitale card', es: 'No, solo con la tarjeta Vitale' },
          { fr: 'Non, seulement pour les Français', pt: 'Não, somente para os franceses', en: 'No, only for French people', es: 'No, solo para los franceses' },
        ],
        0,
        {
          fr: 'Personne n’est refusé aux urgences, même sans argent : c’est un principe de la République sociale.',
          pt: 'Ninguém é recusado nas urgências, mesmo sem dinheiro: é um princípio da República social.',
          en: 'No one is refused at the emergency room, even without money: it is a principle of the social Republic.',
          es: 'Nadie es rechazado en las urgencias, incluso sin dinero: es un principio de la República social.',
        },
      ),
      h(
        {
          fr: 'La liberté d’expression est-elle sans limite ?',
          pt: 'A liberdade de expressão é sem limites?',
          en: 'Is freedom of expression unlimited?',
          es: '¿La libertad de expresión es ilimitada?',
        },
        [
          { fr: 'Non, la loi fixe des limites', pt: 'Não, a lei fixa limites', en: 'No, the law sets limits', es: 'No, la ley fija límites' },
          { fr: 'Oui, tout est permis', pt: 'Sim, tudo é permitido', en: 'Yes, anything goes', es: 'Sí, todo está permitido' },
          { fr: 'Oui, sauf à l’étranger', pt: 'Sim, exceto no exterior', en: 'Yes, except abroad', es: 'Sí, excepto en el extranjero' },
        ],
        0,
        {
          fr: 'La diffamation, l’incitation à la haine et le négationnisme sont interdits : la loi fixe les limites de la liberté d’expression.',
          pt: 'A difamação, a incitação ao ódio e a negação do Holocausto são proibidos: a lei fixa os limites da liberdade de expressão.',
          en: 'Defamation, incitement to hatred and Holocaust denial are banned: the law sets the limits of free speech.',
          es: 'La difamación, la incitación al odio y la negación del Holocausto están prohibidos: la ley fija los límites de la libertad de expresión.',
        },
      ),
      h(
        {
          fr: 'Peut-on contester une décision de l’administration ?',
          pt: 'Pode-se contestar uma decisão da administração?',
          en: 'Can you contest a decision of the administration?',
          es: '¿Se puede impugnar una decisión de la administración?',
        },
        [
          { fr: 'Oui, devant le tribunal administratif', pt: 'Sim, diante do tribunal administrativo', en: 'Yes, before the administrative court', es: 'Sí, ante el tribunal administrativo' },
          { fr: 'Non, l’administration a toujours raison', pt: 'Não, a administração sempre tem razão', en: 'No, the administration is always right', es: 'No, la administración siempre tiene razón' },
          { fr: 'Oui, mais uniquement par la grève', pt: 'Sim, mas apenas pela greve', en: 'Yes, but only by striking', es: 'Sí, pero solo por la huelga' },
        ],
        0,
        {
          fr: 'Toute décision défavorable peut être contestée, d’abord par un recours gracieux, puis devant le tribunal administratif.',
          pt: 'Qualquer decisão desfavorável pode ser contestada, primeiro por um recurso administrativo, depois diante do tribunal administrativo.',
          en: 'Any unfavourable decision can be contested, first through an informal appeal, then before the administrative court.',
          es: 'Cualquier decisión desfavorable puede ser impugnada, primero por un recurso administrativo, luego ante el tribunal administrativo.',
        },
      ),
      h(
        {
          fr: 'Qui peut se marier à la mairie ?',
          pt: 'Quem pode se casar na prefeitura?',
          en: 'Who can marry at the town hall?',
          es: '¿Quién puede casarse en el ayuntamiento?',
        },
        [
          { fr: 'Toute personne majeure, y compris les couples de même sexe depuis 2013', pt: 'Toda pessoa maior de idade, incluindo casais do mesmo sexo desde 2013', en: 'Any adult, including same-sex couples since 2013', es: 'Toda persona mayor de edad, incluidas las parejas del mismo sexo desde 2013' },
          { fr: 'Uniquement les couples homme-femme', pt: 'Apenas casais homem-mulher', en: 'Only man-woman couples', es: 'Solo parejas hombre-mujer' },
          { fr: 'Uniquement les personnes nées en France', pt: 'Apenas pessoas nascidas na França', en: 'Only people born in France', es: 'Solo personas nacidas en Francia' },
        ],
        0,
        {
          fr: 'Le mariage civil, célébré à la mairie, est ouvert à tous ; depuis la loi de 2013, les couples de même sexe peuvent se marier.',
          pt: 'O casamento civil, celebrado na prefeitura, está aberto a todos; desde a lei de 2013, casais do mesmo sexo podem se casar.',
          en: 'Civil marriage, held at the town hall, is open to all; since the 2013 law, same-sex couples can marry.',
          es: 'El matrimonio civil, celebrado en el ayuntamiento, está abierto a todos; desde la ley de 2013, las parejas del mismo sexo pueden casarse.',
        },
      ),
      h(
        {
          fr: 'Quelle aide l’État verse-t-il aux familles ?',
          pt: 'Que ajuda o Estado paga às famílias?',
          en: 'What support does the state pay to families?',
          es: '¿Qué ayuda paga el Estado a las familias?',
        },
        [
          { fr: 'Les allocations familiales, versées par la CAF', pt: 'Os auxílios familiares, pagos pela CAF', en: 'Family benefits, paid by the CAF', es: 'Las ayudas familiares, pagadas por la CAF' },
          { fr: 'Aucune aide', pt: 'Nenhuma ajuda', en: 'No support', es: 'Ninguna ayuda' },
          { fr: 'Des aides uniquement pour les entreprises', pt: 'Ajuda apenas para empresas', en: 'Support only for companies', es: 'Ayuda solo para empresas' },
        ],
        0,
        {
          fr: 'La CAF (Caisse d’allocations familiales) verse les allocations familiales et les aides au logement.',
          pt: 'A CAF (Caisse d’allocations familiales) paga os auxílios familiares e os auxílios à moradia.',
          en: 'The CAF (Caisse d’allocations familiales) pays family benefits and housing aid.',
          es: 'La CAF (Caisse d’allocations familiales) paga las ayudas familiares y las ayudas a la vivienda.',
        },
      ),
      h(
        {
          fr: 'À quoi sert la carte d’électeur ?',
          pt: 'Para que serve o cartão de eleitor?',
          en: 'What is the voter card for?',
          es: '¿Para qué sirve la tarjeta electoral?',
        },
        [
          { fr: 'À prouver son inscription sur les listes et voter', pt: 'Provar a inscrição nas listas e votar', en: 'Proving registration on the lists and voting', es: 'Probar la inscripción en las listas y votar' },
          { fr: 'À voyager dans l’UE', pt: 'Viajar na UE', en: 'Travelling in the EU', es: 'Viajar en la UE' },
          { fr: 'À payer ses impôts', pt: 'Pagar os impostos', en: 'Paying taxes', es: 'Pagar los impuestos' },
        ],
        0,
        {
          fr: 'La carte d’électeur prouve que l’on est inscrit sur les listes électorales ; elle facilite le vote le jour du scrutin.',
          pt: 'O cartão de eleitor prova que se está inscrito nas listas eleitorais; facilita o voto no dia da eleição.',
          en: 'The voter card proves registration on the electoral lists; it makes voting easier on election day.',
          es: 'La tarjeta electoral prueba que se está inscrito en las listas electorales; facilita el voto el día de la elección.',
        },
      ),
      h(
        {
          fr: 'Le service militaire est-il obligatoire en France ?',
          pt: 'O serviço militar é obrigatório na França?',
          en: 'Is military service compulsory in France?',
          es: '¿El servicio militar es obligatorio en Francia?',
        },
        [
          { fr: 'Non, il a été suspendu en 1997', pt: 'Não, foi suspenso em 1997', en: 'No, it was suspended in 1997', es: 'No, fue suspendido en 1997' },
          { fr: 'Oui, pour tous les hommes', pt: 'Sim, para todos os homens', en: 'Yes, for all men', es: 'Sí, para todos los hombres' },
          { fr: 'Oui, d’un an minimum', pt: 'Sim, de um ano no mínimo', en: 'Yes, one year minimum', es: 'Sí, de un año como mínimo' },
        ],
        0,
        {
          fr: 'Le service militaire obligatoire a été suspendu en 1997. Il reste la JDC (Journée défense et citoyenneté) après le recensement à 16 ans.',
          pt: 'O serviço militar obrigatório foi suspenso em 1997. Resta a JDC (Jornada de Defesa e Cidadania) após o registro aos 16 anos.',
          en: 'Compulsory military service was suspended in 1997. The JDC (Defence and Citizenship Day) remains, after registration at 16.',
          es: 'El servicio militar obligatorio fue suspendido en 1997. Queda la JDC (Jornada de Defensa y Ciudadanía) tras el registro a los 16 años.',
        },
      ),
      h(
        {
          fr: 'L’école publique française est…',
          pt: 'A escola pública francesa é…',
          en: 'The French public school is…',
          es: 'La escuela pública francesa es…',
        },
        [
          { fr: 'Gratuite, laïque et obligatoire de 3 à 16 ans', pt: 'Gratuita, laica e obrigatória dos 3 aos 16 anos', en: 'Free, secular and compulsory from 3 to 16', es: 'Gratuita, laica y obligatoria de 3 a 16 años' },
          { fr: 'Payante et facultative', pt: 'Paga e facultativa', en: 'Paid and optional', es: 'De pago y opcional' },
          { fr: 'Réservée aux enfants français', pt: 'Reservada a crianças francesas', en: 'Reserved for French children', es: 'Reservada a niños franceses' },
        ],
        0,
        {
          fr: 'L’école publique est gratuite, laïque et obligatoire de 3 à 16 ans : chaque enfant doit être scolarisé.',
          pt: 'A escola pública é gratuita, laica e obrigatória dos 3 aos 16 anos: cada criança deve estar escolarizada.',
          en: 'Public school is free, secular and compulsory from 3 to 16: every child must be schooled.',
          es: 'La escuela pública es gratuita, laica y obligatoria de 3 a 16 años: cada niño debe estar escolarizado.',
        },
      ),
    ],
  },
  {
    id: 'droits',
    icon: '⚖️',
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
      h(
        {
          fr: 'Quel texte de 1948 proclame les droits fondamentaux de tous les êtres humains ?',
          pt: 'Que texto de 1948 proclama os direitos fundamentais de todos os seres humanos?',
          en: 'Which 1948 text proclaims the fundamental rights of all human beings?',
          es: '¿Qué texto de 1948 proclama los derechos fundamentales de todos los seres humanos?',
        },
        [
          { fr: 'La Déclaration universelle des droits de l’homme', pt: 'A Declaração Universal dos Direitos Humanos', en: 'The Universal Declaration of Human Rights', es: 'La Declaración Universal de los Derechos Humanos' },
          { fr: 'L’édit de Nantes', pt: 'O Édito de Nantes', en: 'The Edict of Nantes', es: 'El Edicto de Nantes' },
          { fr: 'La loi de 1905', pt: 'A lei de 1905', en: 'The 1905 law', es: 'La ley de 1905' },
        ],
        0,
        {
          fr: 'Adoptée par l’ONU le 10 décembre 1948, la Déclaration universelle des droits de l’homme inspire les démocraties.',
          pt: 'Adotada pela ONU em 10 de dezembro de 1948, a Declaração Universal dos Direitos Humanos inspira as democracias.',
          en: 'Adopted by the UN on 10 December 1948, the Universal Declaration of Human Rights inspires democracies.',
          es: 'Adoptada por la ONU el 10 de diciembre de 1948, la Declaración Universal de los Derechos Humanos inspira a las democracias.',
        },
      ),
      h(
        {
          fr: 'À quel âge les jeunes Français doivent-ils se faire recenser à la mairie ?',
          pt: 'A que idade os jovens franceses devem se recensear na prefeitura?',
          en: 'At what age must young French people register at the town hall?',
          es: '¿A qué edad los jóvenes franceses deben empadronarse en el ayuntamiento?',
        },
        [
          { fr: 'À 16 ans', pt: 'Aos 16 anos', en: 'At 16', es: 'A los 16 años' },
          { fr: 'À 10 ans', pt: 'Aos 10 anos', en: 'At 10', es: 'A los 10 años' },
          { fr: 'À 25 ans', pt: 'Aos 25 anos', en: 'At 25', es: 'A los 25 años' },
        ],
        0,
        {
          fr: 'Le recensement à 16 ans est obligatoire ; il permet la convocation à la JDC et l’inscription électorale à 18 ans.',
          pt: 'O recenseamento aos 16 anos é obrigatório; permite a convocação para a JDC e a inscrição eleitoral aos 18 anos.',
          en: 'Registration at 16 is compulsory; it leads to the JDC summons and electoral registration at 18.',
          es: 'El empadronamiento a los 16 años es obligatorio; permite la citación para la JDC y la inscripción electoral a los 18.',
        },
      ),
      h(
        {
          fr: 'Un citoyen français est-il aussi citoyen de l’Union européenne ?',
          pt: 'Um cidadão francês também é cidadão da União Europeia?',
          en: 'Is a French citizen also a citizen of the European Union?',
          es: '¿Un ciudadano francés también es ciudadano de la Unión Europea?',
        },
        [
          { fr: 'Oui, automatiquement', pt: 'Sim, automaticamente', en: 'Yes, automatically', es: 'Sí, automáticamente' },
          { fr: 'Non, jamais', pt: 'Não, nunca', en: 'No, never', es: 'No, nunca' },
          { fr: 'Seulement s’il déménage à Bruxelles', pt: 'Somente se mudar para Bruxelas', en: 'Only if they move to Brussels', es: 'Solo si se muda a Bruselas' },
        ],
        0,
        {
          fr: 'Tout citoyen français est citoyen de l’Union européenne : il peut circuler, travailler et voter aux élections européennes.',
          pt: 'Todo cidadão francês é cidadão da União Europeia: pode circular, trabalhar e votar nas eleições europeias.',
          en: 'Every French citizen is an EU citizen: they can travel, work and vote in European elections.',
          es: 'Todo ciudadano francés es ciudadano de la Unión Europea: puede viajar, trabajar y votar en las elecciones europeas.',
        },
      ),
      h(
        {
          fr: 'L’instruction est-elle obligatoire en France ?',
          pt: 'A escolaridade é obrigatória na França?',
          en: 'Is schooling compulsory in France?',
          es: '¿La escolarización es obligatoria en Francia?',
        },
        [
          { fr: 'Oui, de 3 à 16 ans', pt: 'Sim, de 3 a 16 anos', en: 'Yes, from 3 to 16', es: 'Sí, de 3 a 16 años' },
          { fr: 'Non, l’école est facultative', pt: 'Não, a escola é facultativa', en: 'No, school is optional', es: 'No, la escuela es opcional' },
          { fr: 'Seulement pour les garçons', pt: 'Somente para os meninos', en: 'Only for boys', es: 'Solo para los niños' },
        ],
        0,
        {
          fr: 'L’instruction est obligatoire de 3 à 16 ans ; l’école publique est gratuite et laïque.',
          pt: 'A escolaridade é obrigatória de 3 a 16 anos; a escola pública é gratuita e laica.',
          en: 'Schooling is compulsory from 3 to 16; public school is free and secular.',
          es: 'La escolarización es obligatoria de 3 a 16 años; la escuela pública es gratuita y laica.',
        },
      ),
      h(
        {
          fr: 'Les femmes et les hommes ont-ils les mêmes droits en France ?',
          pt: 'As mulheres e os homens têm os mesmos direitos na França?',
          en: 'Do women and men have the same rights in France?',
          es: '¿Las mujeres y los hombres tienen los mismos derechos en Francia?',
        },
        [
          { fr: 'Oui, l’égalité est garantie par la loi', pt: 'Sim, a igualdade é garantida por lei', en: 'Yes, equality is guaranteed by law', es: 'Sí, la igualdad está garantizada por la ley' },
          { fr: 'Non, jamais', pt: 'Não, nunca', en: 'No, never', es: 'No, nunca' },
          { fr: 'Seulement au travail', pt: 'Somente no trabalho', en: 'Only at work', es: 'Solo en el trabajo' },
        ],
        0,
        {
          fr: 'L’égalité entre les femmes et les hommes est un principe garanti par la Constitution et les lois.',
          pt: 'A igualdade entre mulheres e homens é um princípio garantido pela Constituição e pelas leis.',
          en: 'Equality between women and men is a principle guaranteed by the Constitution and the laws.',
          es: 'La igualdad entre mujeres y hombres es un principio garantizado por la Constitución y las leyes.',
        },
      ),
      h(
        {
          fr: 'Le vote est-il obligatoire en France ?',
          pt: 'O voto é obrigatório na França?',
          en: 'Is voting compulsory in France?',
          es: '¿El voto es obligatorio en Francia?',
        },
        [
          { fr: 'Non, le vote est un droit', pt: 'Não, o voto é um direito', en: 'No, voting is a right', es: 'No, el voto es un derecho' },
          { fr: 'Oui, pour toutes les élections', pt: 'Sim, para todas as eleições', en: 'Yes, for all elections', es: 'Sí, para todas las elecciones' },
          { fr: 'Oui, mais seulement pour la présidentielle', pt: 'Sim, mas só para a presidencial', en: 'Yes, but only for the presidential election', es: 'Sí, pero solo para la presidencial' },
        ],
        0,
        {
          fr: 'Le vote est un droit, pas une obligation : personne n’est puni s’il ne vote pas.',
          pt: 'O voto é um direito, não uma obrigação: ninguém é punido se não votar.',
          en: 'Voting is a right, not an obligation: no one is punished for not voting.',
          es: 'El voto es un derecho, no una obligación: nadie es castigado si no vota.',
        },
      ),
      h(
        {
          fr: 'À quoi servent les impôts ?',
          pt: 'Para que servem os impostos?',
          en: 'What are taxes used for?',
          es: '¿Para qué sirven los impuestos?',
        },
        [
          { fr: 'À financer les services publics', pt: 'Para financiar os serviços públicos', en: 'To finance public services', es: 'Para financiar los servicios públicos' },
          { fr: 'À financer les partis politiques uniquement', pt: 'Para financiar somente os partidos políticos', en: 'To finance political parties only', es: 'Para financiar solo los partidos políticos' },
          { fr: 'À rien, ils sont thésaurisés', pt: 'Para nada, são acumulados', en: 'Nothing, they are hoarded', es: 'Para nada, se acumulan' },
        ],
        0,
        {
          fr: 'Les impôts financent les services publics : écoles, hôpitaux, police, routes, justice.',
          pt: 'Os impostos financiam os serviços públicos: escolas, hospitais, polícia, estradas, justiça.',
          en: 'Taxes finance public services: schools, hospitals, police, roads, justice.',
          es: 'Los impuestos financian los servicios públicos: escuelas, hospitales, policía, carreteras, justicia.',
        },
      ),
      h(
        {
          fr: 'Les urgences hospitalières sont-elles ouvertes à tous ?',
          pt: 'As urgências hospitalares estão abertas a todos?',
          en: 'Are hospital emergency rooms open to everyone?',
          es: '¿Las urgencias hospitalarias están abiertas a todos?',
        },
        [
          { fr: 'Oui, même sans argent', pt: 'Sim, mesmo sem dinheiro', en: 'Yes, even without money', es: 'Sí, incluso sin dinero' },
          { fr: 'Non, seulement avec une carte Vitale', pt: 'Não, somente com o cartão Vitale', en: 'No, only with a Vitale card', es: 'No, solo con la tarjeta Vitale' },
          { fr: 'Non, seulement pour les Français', pt: 'Não, somente para os franceses', en: 'No, only for French people', es: 'No, solo para los franceses' },
        ],
        0,
        {
          fr: 'Personne n’est refusé aux urgences, même sans argent : c’est un principe de la République sociale.',
          pt: 'Ninguém é recusado nas urgências, mesmo sem dinheiro: é um princípio da República social.',
          en: 'No one is refused at the emergency room, even without money: it is a principle of the social Republic.',
          es: 'Nadie es rechazado en las urgencias, incluso sin dinero: es un principio de la República social.',
        },
      ),
      h(
        {
          fr: 'La liberté d’expression est-elle sans limite ?',
          pt: 'A liberdade de expressão é sem limites?',
          en: 'Is freedom of expression unlimited?',
          es: '¿La libertad de expresión es ilimitada?',
        },
        [
          { fr: 'Non, la loi fixe des limites', pt: 'Não, a lei fixa limites', en: 'No, the law sets limits', es: 'No, la ley fija límites' },
          { fr: 'Oui, tout est permis', pt: 'Sim, tudo é permitido', en: 'Yes, anything goes', es: 'Sí, todo está permitido' },
          { fr: 'Oui, sauf à l’étranger', pt: 'Sim, exceto no exterior', en: 'Yes, except abroad', es: 'Sí, excepto en el extranjero' },
        ],
        0,
        {
          fr: 'La diffamation, l’incitation à la haine et le négationnisme sont interdits : la loi fixe les limites de la liberté d’expression.',
          pt: 'A difamação, a incitação ao ódio e a negação do Holocausto são proibidos: a lei fixa os limites da liberdade de expressão.',
          en: 'Defamation, incitement to hatred and Holocaust denial are banned: the law sets the limits of free speech.',
          es: 'La difamación, la incitación al odio y la negación del Holocausto están prohibidos: la ley fija los límites de la libertad de expresión.',
        },
      ),
      h(
        {
          fr: 'Peut-on contester une décision de l’administration ?',
          pt: 'Pode-se contestar uma decisão da administração?',
          en: 'Can you contest a decision of the administration?',
          es: '¿Se puede impugnar una decisión de la administración?',
        },
        [
          { fr: 'Oui, devant le tribunal administratif', pt: 'Sim, diante do tribunal administrativo', en: 'Yes, before the administrative court', es: 'Sí, ante el tribunal administrativo' },
          { fr: 'Non, l’administration a toujours raison', pt: 'Não, a administração sempre tem razão', en: 'No, the administration is always right', es: 'No, la administración siempre tiene razón' },
          { fr: 'Oui, mais uniquement par la grève', pt: 'Sim, mas apenas pela greve', en: 'Yes, but only by striking', es: 'Sí, pero solo por la huelga' },
        ],
        0,
        {
          fr: 'Toute décision défavorable peut être contestée, d’abord par un recours gracieux, puis devant le tribunal administratif.',
          pt: 'Qualquer decisão desfavorável pode ser contestada, primeiro por um recurso administrativo, depois diante do tribunal administrativo.',
          en: 'Any unfavourable decision can be contested, first through an informal appeal, then before the administrative court.',
          es: 'Cualquier decisión desfavorable puede ser impugnada, primero por un recurso administrativo, luego ante el tribunal administrativo.',
        },
      ),
      h(
        {
          fr: 'Qui peut se marier à la mairie ?',
          pt: 'Quem pode se casar na prefeitura?',
          en: 'Who can marry at the town hall?',
          es: '¿Quién puede casarse en el ayuntamiento?',
        },
        [
          { fr: 'Toute personne majeure, y compris les couples de même sexe depuis 2013', pt: 'Toda pessoa maior de idade, incluindo casais do mesmo sexo desde 2013', en: 'Any adult, including same-sex couples since 2013', es: 'Toda persona mayor de edad, incluidas las parejas del mismo sexo desde 2013' },
          { fr: 'Uniquement les couples homme-femme', pt: 'Apenas casais homem-mulher', en: 'Only man-woman couples', es: 'Solo parejas hombre-mujer' },
          { fr: 'Uniquement les personnes nées en France', pt: 'Apenas pessoas nascidas na França', en: 'Only people born in France', es: 'Solo personas nacidas en Francia' },
        ],
        0,
        {
          fr: 'Le mariage civil, célébré à la mairie, est ouvert à tous ; depuis la loi de 2013, les couples de même sexe peuvent se marier.',
          pt: 'O casamento civil, celebrado na prefeitura, está aberto a todos; desde a lei de 2013, casais do mesmo sexo podem se casar.',
          en: 'Civil marriage, held at the town hall, is open to all; since the 2013 law, same-sex couples can marry.',
          es: 'El matrimonio civil, celebrado en el ayuntamiento, está abierto a todos; desde la ley de 2013, las parejas del mismo sexo pueden casarse.',
        },
      ),
      h(
        {
          fr: 'Quelle aide l’État verse-t-il aux familles ?',
          pt: 'Que ajuda o Estado paga às famílias?',
          en: 'What support does the state pay to families?',
          es: '¿Qué ayuda paga el Estado a las familias?',
        },
        [
          { fr: 'Les allocations familiales, versées par la CAF', pt: 'Os auxílios familiares, pagos pela CAF', en: 'Family benefits, paid by the CAF', es: 'Las ayudas familiares, pagadas por la CAF' },
          { fr: 'Aucune aide', pt: 'Nenhuma ajuda', en: 'No support', es: 'Ninguna ayuda' },
          { fr: 'Des aides uniquement pour les entreprises', pt: 'Ajuda apenas para empresas', en: 'Support only for companies', es: 'Ayuda solo para empresas' },
        ],
        0,
        {
          fr: 'La CAF (Caisse d’allocations familiales) verse les allocations familiales et les aides au logement.',
          pt: 'A CAF (Caisse d’allocations familiales) paga os auxílios familiares e os auxílios à moradia.',
          en: 'The CAF (Caisse d’allocations familiales) pays family benefits and housing aid.',
          es: 'La CAF (Caisse d’allocations familiales) paga las ayudas familiares y las ayudas a la vivienda.',
        },
      ),
      h(
        {
          fr: 'À quoi sert la carte d’électeur ?',
          pt: 'Para que serve o cartão de eleitor?',
          en: 'What is the voter card for?',
          es: '¿Para qué sirve la tarjeta electoral?',
        },
        [
          { fr: 'À prouver son inscription sur les listes et voter', pt: 'Provar a inscrição nas listas e votar', en: 'Proving registration on the lists and voting', es: 'Probar la inscripción en las listas y votar' },
          { fr: 'À voyager dans l’UE', pt: 'Viajar na UE', en: 'Travelling in the EU', es: 'Viajar en la UE' },
          { fr: 'À payer ses impôts', pt: 'Pagar os impostos', en: 'Paying taxes', es: 'Pagar los impuestos' },
        ],
        0,
        {
          fr: 'La carte d’électeur prouve que l’on est inscrit sur les listes électorales ; elle facilite le vote le jour du scrutin.',
          pt: 'O cartão de eleitor prova que se está inscrito nas listas eleitorais; facilita o voto no dia da eleição.',
          en: 'The voter card proves registration on the electoral lists; it makes voting easier on election day.',
          es: 'La tarjeta electoral prueba que se está inscrito en las listas electorales; facilita el voto el día de la elección.',
        },
      ),
      h(
        {
          fr: 'Le service militaire est-il obligatoire en France ?',
          pt: 'O serviço militar é obrigatório na França?',
          en: 'Is military service compulsory in France?',
          es: '¿El servicio militar es obligatorio en Francia?',
        },
        [
          { fr: 'Non, il a été suspendu en 1997', pt: 'Não, foi suspenso em 1997', en: 'No, it was suspended in 1997', es: 'No, fue suspendido en 1997' },
          { fr: 'Oui, pour tous les hommes', pt: 'Sim, para todos os homens', en: 'Yes, for all men', es: 'Sí, para todos los hombres' },
          { fr: 'Oui, d’un an minimum', pt: 'Sim, de um ano no mínimo', en: 'Yes, one year minimum', es: 'Sí, de un año como mínimo' },
        ],
        0,
        {
          fr: 'Le service militaire obligatoire a été suspendu en 1997. Il reste la JDC (Journée défense et citoyenneté) après le recensement à 16 ans.',
          pt: 'O serviço militar obrigatório foi suspenso em 1997. Resta a JDC (Jornada de Defesa e Cidadania) após o registro aos 16 anos.',
          en: 'Compulsory military service was suspended in 1997. The JDC (Defence and Citizenship Day) remains, after registration at 16.',
          es: 'El servicio militar obligatorio fue suspendido en 1997. Queda la JDC (Jornada de Defensa y Ciudadanía) tras el registro a los 16 años.',
        },
      ),
      h(
        {
          fr: 'L’école publique française est…',
          pt: 'A escola pública francesa é…',
          en: 'The French public school is…',
          es: 'La escuela pública francesa es…',
        },
        [
          { fr: 'Gratuite, laïque et obligatoire de 3 à 16 ans', pt: 'Gratuita, laica e obrigatória dos 3 aos 16 anos', en: 'Free, secular and compulsory from 3 to 16', es: 'Gratuita, laica y obligatoria de 3 a 16 años' },
          { fr: 'Payante et facultative', pt: 'Paga e facultativa', en: 'Paid and optional', es: 'De pago y opcional' },
          { fr: 'Réservée aux enfants français', pt: 'Reservada a crianças francesas', en: 'Reserved for French children', es: 'Reservada a niños franceses' },
        ],
        0,
        {
          fr: 'L’école publique est gratuite, laïque et obligatoire de 3 à 16 ans : chaque enfant doit être scolarisé.',
          pt: 'A escola pública é gratuita, laica e obrigatória dos 3 aos 16 anos: cada criança deve estar escolarizada.',
          en: 'Public school is free, secular and compulsory from 3 to 16: every child must be schooled.',
          es: 'La escuela pública es gratuita, laica y obligatoria de 3 a 16 años: cada niño debe estar escolarizado.',
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
