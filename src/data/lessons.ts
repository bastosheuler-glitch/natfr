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
      fr: 'De la Gaule romaine à la Ve République : l’histoire de France est le thème le plus riche de l’entretien. Prenez le temps de la lire en entier, puis testez-vous.',
      pt: 'Da Gália romana à V República: a história da França é o tema mais rico da entrevista. Leia com calma até o fim e depois teste-se.',
      en: 'From Roman Gaul to the Fifth Republic: French history is the richest topic of the interview. Take your time reading it, then test yourself.',
      es: 'De la Galia romana a la V República: la historia de Francia es el tema más rico de la entrevista. Léela con calma hasta el final y luego ponte a prueba.',
    },
    sections: [
      {
        title: {
          fr: 'La Gaule et la conquête romaine',
          pt: 'A Gália e a conquista romana',
          en: 'Gaul and the Roman conquest',
          es: 'La Galia y la conquista romana',
        },
        text: {
          fr: 'Avant les Romains, la Gaule est peuplée des Gaulois, des paysans et artisans celtes divisés en tribus. En 58 av. J.-C., Jules César lance la conquête de la Gaule ; le chef gaulois Vercingétorix tente de résister mais est vaincu à Alésia en 52 av. J.-C.\n\nPendant cinq siècles, la Gaule devient romaine : la langue latine, les routes, les villes (Lyon, Paris, Bordeaux) et le christianisme s’y installent. C’est de cette rencontre entre les Gaulois et Rome que la France tire une partie de ses racines.',
          pt: 'Antes dos romanos, a Gália era habitada pelos gauleses, camponeses e artesãos celtas divididos em tribos. Em 58 a.C., Júlio César lança a conquista da Gália; o chefe gaulês Vercingetórix tenta resistir, mas é derrotado em Alésia em 52 a.C.\n\nDurante cinco séculos, a Gália se torna romana: a língua latina, as estradas, as cidades (Lyon, Paris, Bordeaux) e o cristianismo se instalam. É dessa união entre gauleses e romanos que a França tira parte de suas raízes.',
          en: 'Before the Romans, Gaul was inhabited by the Gauls, Celtic farmers and craftsmen divided into tribes. In 58 BC, Julius Caesar launched the conquest of Gaul; the Gallic leader Vercingetorix tried to resist but was defeated at Alesia in 52 BC.\n\nFor five centuries Gaul became Roman: the Latin language, roads, cities (Lyon, Paris, Bordeaux) and Christianity took root. France draws part of its roots from this meeting between the Gauls and Rome.',
          es: 'Antes de los romanos, la Galia estaba habitada por los galos, campesinos y artesanos celtas divididos en tribus. En el 58 a.C., Julio César lanza la conquista de la Galia; el jefe galo Vercingetórix intenta resistir, pero es derrotado en Alesia en el 52 a.C.\n\nDurante cinco siglos, la Galia se vuelve romana: la lengua latina, las carreteras, las ciudades (Lyon, París, Burdeos) y el cristianismo se instalan. De esa unión entre galos y romanos, Francia saca parte de sus raíces.',
        },
      },
      {
        title: {
          fr: 'Des Francs à la monarchie',
          pt: 'Dos francos à monarquia',
          en: 'From the Franks to the monarchy',
          es: 'De los francos a la monarquía',
        },
        text: {
          fr: 'Vers 496, Clovis, roi des Francs, est baptisé à Reims : il devient le premier roi chrétien de France et s’allie à l’Église. En 800, Charlemagne est couronné empereur d’Occident par le pape. En 987, Hugues Capet devient roi : sa dynastie, les Capétiens, dirigera la France pendant huit siècles.\n\nAu Moyen Âge, la France se construit à travers la guerre de Cent Ans contre l’Angleterre (1337-1453). Une paysanne, Jeanne d’Arc, prend la tête de l’armée française et libère Orléans en 1429 ; brûlée en 1431, elle devient l’héroïne nationale.\n\nAux XVIe et XVIIe siècles, la royauté se renforce : Henri IV signe l’édit de Nantes en 1598 pour la paix religieuse, puis Louis XIV, le « Roi Soleil », règne 72 ans et installe la cour à Versailles en 1682. C’est l’apogée de la monarchie absolue : le roi concentre tous les pouvoirs.',
          pt: 'Por volta de 496, Clóvis, rei dos francos, é batizado em Reims: torna-se o primeiro rei cristão da França e se alia à Igreja. Em 800, Carlos Magno é coroado imperador do Ocidente pelo papa. Em 987, Hugo Capeto torna-se rei: sua dinastia, os capetos, governará a França por oito séculos.\n\nNa Idade Média, a França se constrói através da Guerra dos Cem Anos contra a Inglaterra (1337-1453). Uma camponesa, Joana d’Arc, assume o comando do exército francês e liberta Orleães em 1429; queimada em 1431, torna-se a heroína nacional.\n\nNos séculos XVI e XVII, a realeza se fortalece: Henrique IV assina o Édito de Nantes em 1598 pela paz religiosa, e depois Luís XIV, o « Rei Sol », reina por 72 anos e instala a corte em Versalhes em 1682. É o auge da monarquia absoluta: o rei concentra todos os poderes.',
          en: 'Around 496, Clovis, king of the Franks, was baptised in Reims: he became the first Christian king of France and allied with the Church. In 800, Charlemagne was crowned emperor of the West by the pope. In 987, Hugh Capet became king: his dynasty, the Capetians, would rule France for eight centuries.\n\nIn the Middle Ages, France took shape through the Hundred Years’ War against England (1337-1453). A peasant girl, Joan of Arc, took command of the French army and liberated Orléans in 1429; burned in 1431, she became a national heroine.\n\nIn the 16th and 17th centuries, royal power grew: Henry IV signed the Edict of Nantes in 1598 for religious peace, then Louis XIV, the “Sun King”, reigned for 72 years and moved the court to Versailles in 1682. This was the height of absolute monarchy: the king held all power.',
          es: 'Hacia el 496, Clodoveo, rey de los francos, es bautizado en Reims: se convierte en el primer rey cristiano de Francia y se alía con la Iglesia. En 800, Carlomagno es coronado emperador de Occidente por el papa. En 987, Hugo Capeto se convierte en rey: su dinastía, los capetos, gobernará Francia durante ocho siglos.\n\nEn la Edad Media, Francia se construye a través de la Guerra de los Cien Años contra Inglaterra (1337-1453). Una campesina, Juana de Arco, toma el mando del ejército francés y libera Orléans en 1429; quemada en 1431, se convierte en la heroína nacional.\n\nEn los siglos XVI y XVII, la realeza se fortalece: Enrique IV firma el Edicto de Nantes en 1598 por la paz religiosa, y luego Luis XIV, el « Rey Sol », reina 72 años e instala la corte en Versalles en 1682. Es el apogeo de la monarquía absoluta: el rey concentra todos los poderes.',
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
          fr: 'En 1789, la France est en crise : le trésor royal est vide après les guerres, et la société est divisée en trois ordres inégaux. Le clergé et la noblesse ont des privilèges, tandis que le tiers état (97 % de la population) paie presque tous les impôts. Les idées des philosophes des Lumières — Voltaire, Rousseau, Montesquieu — critiquent l’absolutisme et demandent la liberté et l’égalité.\n\nLe 14 juillet 1789, le peuple de Paris prend la Bastille, une forteresse-prison symbole de l’arbitraire royal. En août, l’Assemblée nationale abolit les privilèges et adopte la Déclaration des droits de l’homme et du citoyen : « Les hommes naissent et demeurent libres et égaux en droits. »\n\nLa monarchie est abolie et la Première République proclamée le 22 septembre 1792. Louis XVI est guillotiné le 21 janvier 1793. La Révolution devient alors violente : pendant la « Terreur » (1793-1794), Robespierre fait exécuter des milliers de personnes avant d’être lui-même guillotiné. En 1799, le général Napoléon Bonaparte prend le pouvoir par un coup d’État.',
          pt: 'Em 1789, a França está em crise: o tesouro real está vazio depois das guerras, e a sociedade é dividida em três ordens desiguais. O clero e a nobreza têm privilégios, enquanto o terceiro estado (97% da população) paga quase todos os impostos. As ideias dos filósofos do Iluminismo — Voltaire, Rousseau, Montesquieu — criticam o absolutismo e pedem liberdade e igualdade.\n\nEm 14 de julho de 1789, o povo de Paris toma a Bastilha, uma fortaleza-prisão símbolo do arbítrio real. Em agosto, a Assembleia Nacional abole os privilégios e adota a Declaração dos Direitos do Homem e do Cidadão: « Os homens nascem e permanecem livres e iguais em direitos. »\n\nA monarquia é abolida e a Primeira República proclamada em 22 de setembro de 1792. Luís XVI é guilhotinado em 21 de janeiro de 1793. A Revolução então se torna violenta: durante o « Terror » (1793-1794), Robespierre faz executar milhares de pessoas antes de ser ele próprio guilhotinado. Em 1799, o general Napoleão Bonaparte toma o poder num golpe de Estado.',
          en: 'In 1789, France was in crisis: the royal treasury was empty after wars, and society was divided into three unequal orders. The clergy and nobility enjoyed privileges, while the Third Estate (97% of the population) paid almost all the taxes. The ideas of Enlightenment philosophers — Voltaire, Rousseau, Montesquieu — criticised absolutism and called for liberty and equality.\n\nOn 14 July 1789, the people of Paris stormed the Bastille, a fortress-prison symbolising royal arbitrariness. In August, the National Assembly abolished privileges and adopted the Declaration of the Rights of Man and of the Citizen: “Men are born and remain free and equal in rights.”\n\nThe monarchy was abolished and the First Republic proclaimed on 22 September 1792. Louis XVI was guillotined on 21 January 1793. The Revolution then turned violent: during the “Terror” (1793-1794), Robespierre had thousands executed before being guillotined himself. In 1799, General Napoleon Bonaparte seized power in a coup.',
          es: 'En 1789, Francia está en crisis: el tesoro real está vacío tras las guerras, y la sociedad está dividida en tres órdenes desiguales. El clero y la nobleza tienen privilegios, mientras que el tercer estado (97% de la población) paga casi todos los impuestos. Las ideas de los filósofos de la Ilustración — Voltaire, Rousseau, Montesquieu — critican el absolutismo y piden libertad e igualdad.\n\nEl 14 de julio de 1789, el pueblo de París toma la Bastilla, una fortaleza-prisión símbolo del arbitrio real. En agosto, la Asamblea Nacional abole los privilegios y adopta la Declaración de los Derechos del Hombre y del Ciudadano: « Los hombres nacen y permanecen libres e iguales en derechos. »\n\nLa monarquía es abolida y la Primera República proclamada el 22 de septiembre de 1792. Luis XVI es guillotinado el 21 de enero de 1793. La Revolución se vuelve entonces violenta: durante el « Terror » (1793-1794), Robespierre hace ejecutar a miles de personas antes de ser él mismo guillotinado. En 1799, el general Napoleón Bonaparte toma el poder en un golpe de Estado.',
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
          fr: 'Napoléon Bonaparte se fait sacrer empereur des Français en 1804. Il crée le Code civil la même année : un livre de lois identiques pour tous, encore en vigueur aujourd’hui. Il fonde aussi les lycées et le baccalauréat. Mais ses guerres constantes coûtent des centaines de milliers de morts, et il rétablit l’esclavage dans les colonies. Défait à Waterloo en 1815, il finit exilé.\n\nLe XIXe siècle est celui des grandes réformes : en 1848, l’esclavage est définitivement aboli en France grâce à Victor Schœlcher, et le suffrage universel masculin est instauré. La IIIe République (1870-1940) installe durablement la démocratie, la loi de 1905 sépare les Églises et l’État, et la tour Eiffel, construite en 1889 pour l’Exposition universelle, devient le symbole de Paris.',
          pt: 'Napoleão Bonaparte se faz coroar imperador dos franceses em 1804. Cria o Código Civil no mesmo ano: um livro de leis iguais para todos, ainda em vigor hoje. Funda também os liceus e o bacharelado. Mas suas guerras constantes custam centenas de milhares de mortos, e ele restabelece a escravidão nas colônias. Derrotado em Waterloo em 1815, morre exilado.\n\nO século XIX é o das grandes reformas: em 1848, a escravidão é definitivamente abolida na França graças a Victor Schœlcher, e o sufrágio universal masculino é instituído. A Terceira República (1870-1940) instala duradouramente a democracia, a lei de 1905 separa as igrejas do Estado, e a torre Eiffel, construída em 1889 para a Exposição Universal, torna-se o símbolo de Paris.',
          en: 'Napoleon Bonaparte had himself crowned emperor of the French in 1804. That same year he created the Civil Code: a book of identical laws for all, still in force today. He also founded the lycées and the baccalauréat. But his constant wars cost hundreds of thousands of lives, and he reinstated slavery in the colonies. Defeated at Waterloo in 1815, he died in exile.\n\nThe 19th century was one of great reforms: in 1848, slavery was definitively abolished in France thanks to Victor Schœlcher, and universal male suffrage was introduced. The Third Republic (1870-1940) firmly established democracy, the 1905 law separated churches and state, and the Eiffel Tower, built in 1889 for the World’s Fair, became the symbol of Paris.',
          es: 'Napoleón Bonaparte se hace coronar emperador de los franceses en 1804. Ese mismo año crea el Código Civil: un libro de leyes iguales para todos, todavía vigente hoy. También funda los liceos y el bachillerato. Pero sus guerras constantes cuestan cientos de miles de muertos, y restablece la esclavitud en las colonias. Derrotado en Waterloo en 1815, muere exiliado.\n\nEl siglo XIX es el de las grandes reformas: en 1848, la esclavitud es definitivamente abolida en Francia gracias a Victor Schœlcher, y se instaura el sufragio universal masculino. La Tercera República (1870-1940) instala duraderamente la democracia, la ley de 1905 separa las iglesias del Estado, y la torre Eiffel, construida en 1889 para la Exposición Universal, se convierte en el símbolo de París.',
        },
      },
      {
        title: {
          fr: 'Le XXe siècle : guerres et République',
          pt: 'O século XX: guerras e República',
          en: 'The 20th century: wars and Republic',
          es: 'El siglo XX: guerras y República',
        },
        text: {
          fr: 'La Première Guerre mondiale (1914-1918) déchire la France : des millions de soldats meurent dans les tranchées, notamment à Verdun. L’armistice du 11 novembre 1918 met fin au conflit.\n\nEn 1940, la France est envahie par l’Allemagne nazie. Le général de Gaulle lance l’appel du 18 juin depuis Londres et refuse la défaite : la France libre continue le combat. La Résistance, unifiée par Jean Moulin, lutte en secret ; arrêté en 1943, Moulin meurt sous la torture. Le 8 mai 1945, l’Allemagne capitule : c’est la victoire des Alliés en Europe.\n\nAprès la guerre, les femmes obtiennent enfin le droit de vote en 1944. En 1958, face à la crise, de Gaulle fonde la Ve République, dont la Constitution est encore celle d’aujourd’hui. En mai 1968, une immense crise étudiante et sociale marque profondément le pays. La France moderne se construit ensuite dans l’Europe : elle est membre fondateur de l’Union européenne et adopte l’euro en 2002.',
          pt: 'A Primeira Guerra Mundial (1914-1918) rasga a França: milhões de soldados morrem nas trincheiras, sobretudo em Verdun. O armistício de 11 de novembro de 1918 põe fim ao conflito.\n\nEm 1940, a França é invadida pela Alemanha nazista. O general de Gaulle lança o apelo de 18 de junho de Londres e recusa a derrota: a França Livre continua a luta. A Resistência, unificada por Jean Moulin, luta em segredo; preso em 1943, Moulin morre sob tortura. Em 8 de maio de 1945, a Alemanha capitula: é a vitória dos Aliados na Europa.\n\nDepois da guerra, as mulheres finalmente conquistam o direito de voto em 1944. Em 1958, diante da crise, de Gaulle funda a V República, cuja Constituição é ainda a de hoje. Em maio de 1968, uma imensa crise estudantil e social marca profundamente o país. A França moderna se constrói depois na Europa: é membro fundador da União Europeia e adota o euro em 2002.',
          en: 'The First World War (1914-1918) tore France apart: millions of soldiers died in the trenches, notably at Verdun. The armistice of 11 November 1918 ended the conflict.\n\nIn 1940, France was invaded by Nazi Germany. General de Gaulle launched his appeal of 18 June from London and refused defeat: Free France kept fighting. The Resistance, unified by Jean Moulin, struggled in secret; arrested in 1943, Moulin died under torture. On 8 May 1945, Germany surrendered: it was the Allies’ victory in Europe.\n\nAfter the war, women finally won the right to vote in 1944. In 1958, facing crisis, de Gaulle founded the Fifth Republic, whose constitution is still in force today. In May 1968, a huge student and social crisis deeply marked the country. Modern France was then built within Europe: a founding member of the European Union, it adopted the euro in 2002.',
          es: 'La Primera Guerra Mundial (1914-1918) desgarra a Francia: millones de soldados mueren en las trincheras, sobre todo en Verdún. El armisticio del 11 de noviembre de 1918 pone fin al conflicto.\n\nEn 1940, Francia es invadida por la Alemania nazi. El general de Gaulle lanza el llamamiento del 18 de junio desde Londres y rechaza la derrota: la Francia Libre sigue luchando. La Resistencia, unificada por Jean Moulin, lucha en secreto; arrestado en 1943, Moulin muere bajo tortura. El 8 de mayo de 1945, Alemania capitula: es la victoria de los Aliados en Europa.\n\nTras la guerra, las mujeres por fin obtienen el derecho al voto en 1944. En 1958, ante la crisis, de Gaulle funda la V República, cuya Constitución sigue vigente hoy. En mayo de 1968, una inmensa crisis estudiantil y social marca profundamente al país. La Francia moderna se construye luego en Europa: es miembro fundador de la Unión Europea y adopta el euro en 2002.',
        },
      },
    ],
    keyDates: [
      {
        year: '52 av. J.-C.',
        label: {
          fr: 'Alésia : Vercingétorix vaincu, la Gaule devient romaine',
          pt: 'Alésia: Vercingetórix derrotado, a Gália se torna romana',
          en: 'Alesia: Vercingetorix defeated, Gaul becomes Roman',
          es: 'Alesia: Vercingetórix derrotado, la Galia se vuelve romana',
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
        year: '800',
        label: {
          fr: 'Charlemagne couronné empereur',
          pt: 'Carlos Magno coroado imperador',
          en: 'Charlemagne crowned emperor',
          es: 'Carlomagno coronado emperador',
        },
      },
      {
        year: '987',
        label: {
          fr: 'Hugues Capet, début de la dynastie capétienne',
          pt: 'Hugo Capeto, início da dinastia capetiana',
          en: 'Hugh Capet, start of the Capetian dynasty',
          es: 'Hugo Capeto, inicio de la dinastía capeta',
        },
      },
      {
        year: '1337-1453',
        label: {
          fr: 'Guerre de Cent Ans ; Jeanne d’Arc libère Orléans (1429)',
          pt: 'Guerra dos Cem Anos; Joana d’Arc liberta Orleães (1429)',
          en: 'Hundred Years’ War; Joan of Arc liberates Orléans (1429)',
          es: 'Guerra de los Cien Años; Juana de Arco libera Orléans (1429)',
        },
      },
      {
        year: '1598',
        label: {
          fr: 'Édit de Nantes : liberté de culte (Henri IV)',
          pt: 'Édito de Nantes: liberdade de culto (Henrique IV)',
          en: 'Edict of Nantes: freedom of worship (Henry IV)',
          es: 'Edicto de Nantes: libertad de culto (Enrique IV)',
        },
      },
      {
        year: '1789',
        label: {
          fr: 'Prise de la Bastille et Déclaration des droits de l’homme',
          pt: 'Tomada da Bastilha e Declaração dos Direitos do Homem',
          en: 'Storming of the Bastille and Declaration of Rights',
          es: 'Toma de la Bastilla y Declaración de los Derechos del Hombre',
        },
      },
      {
        year: '1792',
        label: {
          fr: 'Proclamation de la Première République',
          pt: 'Proclamação da Primeira República',
          en: 'Proclamation of the First Republic',
          es: 'Proclamación de la Primera República',
        },
      },
      {
        year: '1804',
        label: {
          fr: 'Napoléon empereur ; Code civil',
          pt: 'Napoleão imperador; Código Civil',
          en: 'Napoleon emperor; Civil Code',
          es: 'Napoleón emperador; Código Civil',
        },
      },
      {
        year: '1848',
        label: {
          fr: 'Abolition définitive de l’esclavage (Schœlcher)',
          pt: 'Abolição definitiva da escravidão (Schœlcher)',
          en: 'Definitive abolition of slavery (Schœlcher)',
          es: 'Abolición definitiva de la esclavitud (Schœlcher)',
        },
      },
      {
        year: '1918',
        label: {
          fr: 'Armistice du 11 novembre, fin de la Première Guerre mondiale',
          pt: 'Armistício de 11 de novembro, fim da Primeira Guerra Mundial',
          en: 'Armistice of 11 November, end of the First World War',
          es: 'Armisticio del 11 de noviembre, fin de la Primera Guerra Mundial',
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
        year: '1945',
        label: {
          fr: '8 mai : victoire des Alliés en Europe',
          pt: '8 de maio: vitória dos Aliados na Europa',
          en: '8 May: Allied victory in Europe',
          es: '8 de mayo: victoria de los Aliados en Europa',
        },
      },
      {
        year: '1958',
        label: {
          fr: 'De Gaulle fonde la Ve République',
          pt: 'De Gaulle funda a V República',
          en: 'De Gaulle founds the Fifth Republic',
          es: 'De Gaulle funda la V República',
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
      fr: 'Les valeurs et les symboles',
      pt: 'Os valores e os símbolos',
      en: 'Values and symbols',
      es: 'Los valores y los símbolos',
    },
    intro: {
      fr: 'Liberté, égalité, fraternité : derrière ces trois mots se cache toute l’histoire de la République. Découvrez aussi le drapeau, l’hymne, Marianne et la laïcité.',
      pt: 'Liberdade, igualdade, fraternidade: por trás dessas três palavras está toda a história da República. Descubra também a bandeira, o hino, Marianne e a laicidade.',
      en: 'Liberty, equality, fraternity: behind these three words lies the whole history of the Republic. Discover also the flag, the anthem, Marianne and secularism.',
      es: 'Libertad, igualdad, fraternidad: detrás de estas tres palabras está toda la historia de la República. Descubra también la bandera, el himno, Marianne y la laicidad.',
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
          fr: 'La devise de la République française figure sur les bâtiments publics, les pièces de monnaie et les documents officiels. Elle résume les valeurs fondamentales de la nation.\n\nLa Liberté, c’est d’abord la liberté de penser, de croire, de s’exprimer et de se déplacer. Elle est protégée par la loi, mais elle a des limites : la liberté des uns s’arrête là où commence celle des autres. La presse, la réunion et la manifestation sont libres.\n\nL’Égalité, c’est le principe que tous les citoyens ont les mêmes droits et les mêmes devoirs, sans distinction d’origine, de religion ou de sexe. Devant la loi, un ministre et un chômeur sont égaux. C’est cette égalité qui interdit toute discrimination à l’embauche, au logement ou à l’école.\n\nLa Fraternité, c’est la solidarité entre les citoyens : aider les plus faibles, partager la charge des impôts selon ses moyens, et recevoir de la société une protection quand on est dans le besoin. Elle se traduit concrètement par la Sécurité sociale, les allocations familiales et l’école gratuite pour tous.',
          pt: 'O lema da República Francesa aparece nos prédios públicos, nas moedas e nos documentos oficiais. Ele resume os valores fundamentais da nação.\n\nA Liberdade é, antes de tudo, a liberdade de pensar, de crer, de se expressar e de se deslocar. Ela é protegida pela lei, mas tem limites: a liberdade de uns termina onde começa a dos outros. A imprensa, a reunião e a manifestação são livres.\n\nA Igualdade é o princípio de que todos os cidadãos têm os mesmos direitos e os mesmos deveres, sem distinção de origem, de religião ou de sexo. Diante da lei, um ministro e um desempregado são iguais. É essa igualdade que proíbe qualquer discriminação no trabalho, na moradia ou na escola.\n\nA Fraternidade é a solidariedade entre os cidadãos: ajudar os mais fracos, dividir o peso dos impostos conforme os meios de cada um, e receber da sociedade uma proteção quando se está necessitado. Ela se traduz concretamente na Seguridade Social, nos auxílios familiares e na escola gratuita para todos.',
          en: 'The motto of the French Republic appears on public buildings, coins and official documents. It sums up the nation’s fundamental values.\n\nLiberty is first of all the freedom to think, to believe, to express oneself and to move around. It is protected by law, but it has limits: one person’s freedom ends where another’s begins. The press, assembly and demonstration are free.\n\nEquality is the principle that all citizens have the same rights and the same duties, regardless of origin, religion or gender. Before the law, a minister and an unemployed person are equal. It is this equality that forbids any discrimination in hiring, housing or school.\n\nFraternity is solidarity between citizens: helping the weakest, sharing the tax burden according to one’s means, and receiving society’s protection when in need. It translates concretely into Social Security, family benefits and free school for all.',
          es: 'El lema de la República Francesa figura en los edificios públicos, en las monedas y en los documentos oficiales. Resume los valores fundamentales de la nación.\n\nLa Libertad es, ante todo, la libertad de pensar, de creer, de expresarse y de desplazarse. Está protegida por la ley, pero tiene límites: la libertad de unos termina donde empieza la de los otros. La prensa, la reunión y la manifestación son libres.\n\nLa Igualdad es el principio de que todos los ciudadanos tienen los mismos derechos y los mismos deberes, sin distinción de origen, de religión o de sexo. Ante la ley, un ministro y un desempleado son iguales. Es esa igualdad la que prohíbe toda discriminación en el empleo, la vivienda o la escuela.\n\nLa Fraternidad es la solidaridad entre los ciudadanos: ayudar a los más débiles, compartir el peso de los impuestos según los medios de cada uno, y recibir de la sociedad una protección cuando se está necesitado. Se traduce concretamente en la Seguridad Social, las ayudas familiares y la escuela gratuita para todos.',
        },
      },
      {
        title: {
          fr: 'Les origines révolutionnaires de la devise',
          pt: 'As origens revolucionárias do lema',
          en: 'The revolutionary origins of the motto',
          es: 'Los orígenes revolucionarios del lema',
        },
        text: {
          fr: 'La devise naît pendant la Révolution française, à la fin du XVIIIe siècle. On la trouve déjà sur les bannières des clubs révolutionnaires et sur les sceaux de la République. Elle exprime les idéaux de la Déclaration des droits de l’homme et du citoyen de 1789.\n\nElle devient la devise officielle de la République en 1848, sous la IIe République, et figure dans les constitutions républicaines suivantes. Depuis la Constitution de 1958, elle est inscrite à l’article 2 : « La langue de la République est le français. Le drapeau tricolore, bleu, blanc, rouge, est l’emblème national. L’hymne national est la Marseillaise. La devise de la République est Liberté, Égalité, Fraternité. »\n\nRetenir cette origine révolutionnaire est utile à l’entretien : la devise n’est pas née par hasard, elle est l’héritage direct de 1789.',
          pt: 'O lema nasce durante a Revolução Francesa, no fim do século XVIII. Já aparece nas bandeiras dos clubes revolucionários e nos selos da República. Ele expressa os ideais da Declaração dos Direitos do Homem e do Cidadão de 1789.\n\nTorna-se o lema oficial da República em 1848, sob a II República, e figura nas constituições republicanas seguintes. Desde a Constituição de 1958, está inscrito no artigo 2: « A língua da República é o francês. A bandeira tricolor, azul, branca, vermelha, é o emblema nacional. O hino nacional é a Marselhesa. O lema da República é Liberdade, Igualdade, Fraternidade. »\n\nGuardar essa origem revolucionária é útil para a entrevista: o lema não nasceu por acaso, é herança direta de 1789.',
          en: 'The motto was born during the French Revolution, at the end of the 18th century. It already appeared on the banners of revolutionary clubs and on the seals of the Republic. It expresses the ideals of the 1789 Declaration of the Rights of Man and of the Citizen.\n\nIt became the official motto of the Republic in 1848, under the Second Republic, and appears in the following republican constitutions. Since the 1958 Constitution, it is written in article 2: “The language of the Republic is French. The tricolour flag, blue, white, red, is the national emblem. The national anthem is the Marseillaise. The motto of the Republic is Liberty, Equality, Fraternity.”\n\nRemembering this revolutionary origin is useful for the interview: the motto was not born by chance, it is the direct legacy of 1789.',
          es: 'El lema nace durante la Revolución Francesa, a finales del siglo XVIII. Ya aparece en las banderas de los clubes revolucionarios y en los sellos de la República. Expresa los ideales de la Declaración de los Derechos del Hombre y del Ciudadano de 1789.\n\nSe convierte en el lema oficial de la República en 1848, bajo la II República, y figura en las constituciones republicanas siguientes. Desde la Constitución de 1958, está inscrito en el artículo 2: « La lengua de la República es el francés. La bandera tricolor, azul, blanca, roja, es el emblema nacional. El himno nacional es la Marsellesa. El lema de la República es Libertad, Igualdad, Fraternidad. »\n\nRecordar este origen revolucionario es útil para la entrevista: el lema no nació por casualidad, es herencia directa de 1789.',
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
          fr: 'Le drapeau tricolore réunit le bleu et le rouge, couleurs de la ville de Paris, et le blanc, couleur de la royauté. Il est né pendant la Révolution et est devenu l’emblème national. Le blanc est au milieu, entouré des couleurs du peuple de Paris.\n\nLa Marseillaise est l’hymne national. Elle a été composée en 1792 par Rouget de Lisle, officier stationné à Strasbourg, sous le nom de « Chant de guerre de l’armée du Rhin ». Les volontaires de Marseille qui montaient à Paris l’ont chantée en chemin, ce qui lui a donné son nom. Elle est chantée lors des cérémonies officielles et des matchs de sport.\n\nLe 14 juillet est la fête nationale depuis 1880. On célèbre ce jour-là la prise de la Bastille en 1789, symbole de la fin de l’arbitraire royal. Défilé militaire sur les Champs-Élysées, bals populaires et feux d’artifice rythment la journée.\n\nMarianne est le personnage qui incarne la République. Elle porte le bonnet phrygien, symbole de la liberté. Son buste se trouve dans toutes les mairies, sur les timbres-poste et sur les pièces en euro. Le coq gaulois est un autre symbole traditionnel de la France, surtout dans le sport.\n\nEnfin, le tableau « La Liberté guidant le peuple » d’Eugène Delacroix, peint en 1830 et exposé au Louvre, montre Marianne au combat, drapeau tricolore à la main : c’est une des images les plus célèbres de la République.',
          pt: 'A bandeira tricolor reúne o azul e o vermelho, cores da cidade de Paris, e o branco, cor da realeza. Nasce durante a Revolução e torna-se o emblema nacional. O branco fica no meio, cercado pelas cores do povo de Paris.\n\nA Marselhesa é o hino nacional. Foi composta em 1792 por Rouget de Lisle, oficial estacionado em Estrasburgo, com o nome de « Canto de guerra do exército do Reno ». Os voluntários de Marselha que subiam a Paris a cantaram pelo caminho, o que lhe deu o nome. Ela é cantada nas cerimônias oficiais e nos jogos de esporte.\n\nO 14 de julho é a festa nacional desde 1880. Nesse dia celebra-se a tomada da Bastilha em 1789, símbolo do fim do arbítrio real. Desfile militar nos Campos Elísios, bailes populares e fogos de artifício marcam o dia.\n\nMarianne é a personagem que encarna a República. Ela usa o barrete frígio, símbolo da liberdade. Seu busto está em todas as prefeituras, nos selos postais e nas moedas de euro. O galo gaulês é outro símbolo tradicional da França, sobretudo no esporte.\n\nPor fim, o quadro « A Liberdade guiando o povo » de Eugène Delacroix, pintado em 1830 e exposto no Louvre, mostra Marianne em combate, bandeira tricolor na mão: é uma das imagens mais célebres da República.',
          en: 'The tricolour flag combines blue and red, the colours of the city of Paris, with white, the colour of the monarchy. It was born during the Revolution and became the national emblem. White sits in the middle, surrounded by the colours of the people of Paris.\n\nLa Marseillaise is the national anthem. It was composed in 1792 by Rouget de Lisle, an officer stationed in Strasbourg, under the name “War Song of the Army of the Rhine”. Volunteers from Marseille marching to Paris sang it along the way, which gave it its name. It is sung at official ceremonies and sporting events.\n\n14 July has been the national holiday since 1880. It celebrates the storming of the Bastille in 1789, symbol of the end of royal arbitrariness. A military parade on the Champs-Élysées, popular balls and fireworks fill the day.\n\nMarianne is the figure who embodies the Republic. She wears the Phrygian cap, symbol of liberty. Her bust stands in every town hall, on postage stamps and on euro coins. The Gallic rooster is another traditional symbol of France, especially in sport.\n\nFinally, the painting “Liberty Leading the People” by Eugène Delacroix, painted in 1830 and displayed at the Louvre, shows Marianne in battle, tricolour flag in hand: it is one of the most famous images of the Republic.',
          es: 'La bandera tricolor reúne el azul y el rojo, colores de la ciudad de París, y el blanco, color de la realeza. Nace durante la Revolución y se convierte en el emblema nacional. El blanco está en el medio, rodeado por los colores del pueblo de París.\n\nLa Marsellesa es el himno nacional. Fue compuesta en 1792 por Rouget de Lisle, oficial destinado en Estrasburgo, con el nombre de « Canto de guerra del ejército del Rin ». Los voluntarios de Marsella que subían a París la cantaron por el camino, lo que le dio el nombre. Se canta en las ceremonias oficiales y en los partidos de deporte.\n\nEl 14 de julio es la fiesta nacional desde 1880. Ese día se celebra la toma de la Bastilla en 1789, símbolo del fin del arbitrio real. Desfile militar en los Campos Elíseos, bailes populares y fuegos artificiales marcan la jornada.\n\nMarianne es la personaje que encarna la República. Lleva el gorro frigio, símbolo de la libertad. Su busto está en todos los ayuntamientos, en los sellos postales y en las monedas de euro. El gallo galo es otro símbolo tradicional de Francia, sobre todo en el deporte.\n\nPor último, el cuadro « La Libertad guiando al pueblo » de Eugène Delacroix, pintado en 1830 y expuesto en el Louvre, muestra a Marianne en combate, bandera tricolor en la mano: es una de las imágenes más célebres de la República.',
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
          fr: 'La France est une République laïque. La laïcité repose sur trois principes simples : la liberté de conscience (chacun peut croire ou ne pas croire), la neutralité de l’État (l’État ne reconnaît et ne finance aucun culte) et le respect de toutes les croyances.\n\nLa loi du 9 décembre 1905 sur la séparation des Églises et de l’État est le texte fondateur : elle garantit la liberté de conscience et assure la neutralité religieuse de l’État et des services publics. Depuis cette loi, la République ne salarie plus aucun ministre du culte.\n\nLa neutralité s’applique aux agents publics : un fonctionnaire ne peut pas manifester sa religion pendant son travail. À l’école publique, la loi du 15 mars 2004 interdit les signes religieux ostensibles, comme les grandes croix, les voiles ou les kippas visibles : l’école doit rester un espace neutre où tous les élèves sont égaux.\n\nLa laïcité n’est pas hostile à la religion : elle permet à tous de croire ou de ne pas croire, à condition que la loi commune s’applique à tous.',
          pt: 'A França é uma República laica. A laicidade se apoia em três princípios simples: a liberdade de consciência (cada um pode crer ou não crer), a neutralidade do Estado (o Estado não reconhece nem financia nenhum culto) e o respeito por todas as crenças.\n\nA lei de 9 de dezembro de 1905 sobre a separação das Igrejas e do Estado é o texto fundador: ela garante a liberdade de consciência e assegura a neutralidade religiosa do Estado e dos serviços públicos. Desde essa lei, a República não paga mais nenhum ministro do culto.\n\nA neutralidade se aplica aos agentes públicos: um funcionário não pode manifestar sua religião durante o trabalho. Na escola pública, a lei de 15 de março de 2004 proíbe os sinais religiosos ostensivos, como grandes cruzes, véus ou quipás visíveis: a escola deve permanecer um espaço neutro onde todos os alunos são iguais.\n\nA laicidade não é hostil à religião: ela permite a todos crer ou não crer, desde que a lei comum se aplique a todos.',
          en: 'France is a secular Republic. Secularism rests on three simple principles: freedom of conscience (everyone may believe or not believe), state neutrality (the state recognises and funds no religion) and respect for all beliefs.\n\nThe law of 9 December 1905 on the separation of churches and state is the founding text: it guarantees freedom of conscience and ensures the religious neutrality of the state and public services. Since that law, the Republic no longer pays any minister of religion.\n\nNeutrality applies to public servants: a civil servant may not display their religion at work. In public schools, the law of 15 March 2004 bans conspicuous religious signs, such as large crosses, visible veils or kippas: the school must remain a neutral space where all pupils are equal.\n\nSecularism is not hostile to religion: it allows everyone to believe or not believe, provided the common law applies to all.',
          es: 'Francia es una República laica. La laicidad se apoya en tres principios simples: la libertad de conciencia (cada uno puede creer o no creer), la neutralidad del Estado (el Estado no reconoce ni financia ningún culto) y el respeto por todas las creencias.\n\nLa ley del 9 de diciembre de 1905 sobre la separación de las Iglesias y el Estado es el texto fundador: garantiza la libertad de conciencia y asegura la neutralidad religiosa del Estado y de los servicios públicos. Desde esa ley, la República ya no paga a ningún ministro del culto.\n\nLa neutralidad se aplica a los agentes públicos: un funcionario no puede manifestar su religión durante el trabajo. En la escuela pública, la ley del 15 de marzo de 2004 prohíbe los signos religiosos ostensibles, como grandes cruces, velos o kipás visibles: la escuela debe permanecer un espacio neutro donde todos los alumnos son iguales.\n\nLa laicidad no es hostil a la religión: permite a todos creer o no creer, siempre que la ley común se aplique a todos.',
        },
      },
      {
        title: {
          fr: 'La langue française',
          pt: 'A língua francesa',
          en: 'The French language',
          es: 'La lengua francesa',
        },
        text: {
          fr: 'Depuis la révision de la Constitution de 1992, l’article 2 précise que « la langue de la République est le français ». Le français est donc protégé par la Constitution : c’est la langue des administrations, des écoles et des lois.\n\nLe français s’est imposé lentement : au Moyen Âge, la plupart des habitants parlaient des langues régionales (occitan, breton, alsacien, corse…). L’ordonnance de Villers-Cotterêts, signée par François Ier en 1539, impose le français dans les actes officiels. L’école gratuite et obligatoire de la IIIe République, à la fin du XIXe siècle, achève d’unifier la langue sur tout le territoire.\n\nAujourd’hui, le français est parlé par plus de 300 millions de personnes dans le monde, et la Francophonie réunit des dizaines de pays sur les cinq continents. L’Organisation internationale de la Francophonie a son siège à Paris. Apprendre le français, c’est donc rejoindre une communauté linguistique mondiale.',
          pt: 'Desde a revisão da Constituição de 1992, o artigo 2 especifica que « a língua da República é o francês ». O francês é portanto protegido pela Constituição: é a língua das administrações, das escolas e das leis.\n\nO francês se impôs lentamente: na Idade Média, a maioria dos habitantes falava línguas regionais (occitano, bretão, alsaciano, corso…). A ordenação de Villers-Cotterêts, assinada por Francisco I em 1539, impõe o francês nos atos oficiais. A escola gratuita e obrigatória da III República, no fim do século XIX, termina de unificar a língua em todo o território.\n\nHoje, o francês é falado por mais de 300 milhões de pessoas no mundo, e a Francofonia reúne dezenas de países nos cinco continentes. A Organização Internacional da Francofonia tem sede em Paris. Aprender francês é, portanto, entrar numa comunidade linguística mundial.',
          en: 'Since the constitutional revision of 1992, article 2 states that “the language of the Republic is French”. French is therefore protected by the Constitution: it is the language of administration, schools and laws.\n\nFrench spread slowly: in the Middle Ages, most inhabitants spoke regional languages (Occitan, Breton, Alsatian, Corsican…). The Ordinance of Villers-Cotterêts, signed by Francis I in 1539, made French compulsory in official documents. The free, compulsory school of the Third Republic, at the end of the 19th century, completed the unification of the language across the territory.\n\nToday, French is spoken by more than 300 million people worldwide, and la Francophonie brings together dozens of countries on five continents. The International Organisation of La Francophonie is headquartered in Paris. Learning French means joining a global language community.',
          es: 'Desde la revisión de la Constitución de 1992, el artículo 2 precisa que « la lengua de la República es el francés ». El francés está por tanto protegido por la Constitución: es la lengua de las administraciones, de las escuelas y de las leyes.\n\nEl francés se impuso lentamente: en la Edad Media, la mayoría de los habitantes hablaba lenguas regionales (occitano, bretón, alsaciano, corso…). La ordenanza de Villers-Cotterêts, firmada por Francisco I en 1539, impone el francés en los actos oficiales. La escuela gratuita y obligatoria de la III República, a finales del siglo XIX, termina de unificar la lengua en todo el territorio.\n\nHoy, el francés es hablado por más de 300 millones de personas en el mundo, y la Francofonía reúne a decenas de países en los cinco continentes. La Organización Internacional de la Francofonía tiene su sede en París. Aprender francés es, por tanto, entrar en una comunidad lingüística mundial.',
        },
      },
    ],
    keyDates: [
      {
        year: '1789',
        label: {
          fr: 'Naissance de la devise pendant la Révolution',
          pt: 'Nascimento do lema durante a Revolução',
          en: 'The motto is born during the Revolution',
          es: 'Nace el lema durante la Revolución',
        },
      },
      {
        year: '1792',
        label: {
          fr: 'Rouget de Lisle compose la Marseillaise',
          pt: 'Rouget de Lisle compõe a Marselhesa',
          en: 'Rouget de Lisle composes La Marseillaise',
          es: 'Rouget de Lisle compone la Marsellesa',
        },
      },
      {
        year: '1880',
        label: {
          fr: 'Le 14 juillet devient la fête nationale',
          pt: 'O 14 de julho torna-se a festa nacional',
          en: '14 July becomes the national holiday',
          es: 'El 14 de julio se convierte en la fiesta nacional',
        },
      },
      {
        year: '1905',
        label: {
          fr: 'Séparation des Églises et de l’État',
          pt: 'Separação das Igrejas e do Estado',
          en: 'Separation of churches and state',
          es: 'Separación de las Iglesias y del Estado',
        },
      },
      {
        year: '1992',
        label: {
          fr: 'Le français devient langue de la République dans la Constitution',
          pt: 'O francês torna-se língua da República na Constituição',
          en: 'French becomes the language of the Republic in the Constitution',
          es: 'El francés se convierte en lengua de la República en la Constitución',
        },
      },
      {
        year: '2004',
        label: {
          fr: 'Interdiction des signes religieux ostensibles à l’école publique',
          pt: 'Proibição de sinais religiosos ostensivos na escola pública',
          en: 'Ban on conspicuous religious signs in public schools',
          es: 'Prohibición de signos religiosos ostensibles en la escuela pública',
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
          fr: 'Liberté, égalité, fraternité expliquées',
          pt: 'Liberdade, igualdade, fraternidade explicadas',
          en: 'Liberty, equality, fraternity explained',
          es: 'Libertad, igualdad, fraternidad explicadas',
        },
      },
      {
        youtubeId: '5pBg81472XQ',
        title: {
          fr: 'Le 14 juillet, fête nationale',
          pt: 'O 14 de julho, festa nacional',
          en: '14 July, the national holiday',
          es: 'El 14 de julio, fiesta nacional',
        },
      },
      {
        youtubeId: 'p39Ujb2fz9s',
        title: {
          fr: 'La fraternité, une valeur vivante',
          pt: 'A fraternidade, um valor vivo',
          en: 'Fraternity, a living value',
          es: 'La fraternidad, un valor vivo',
        },
      },
    ],
  },

  {
    id: 'institutions',
    title: {
      fr: 'Les institutions de la France',
      pt: 'As instituições da França',
      en: 'France’s institutions',
      es: 'Las instituciones de Francia',
    },
    intro: {
      fr: 'Qui fait quoi en France ? Le président, le gouvernement, le Parlement, les juges : comprenez le fonctionnement de la Ve République et de l’Europe.',
      pt: 'Quem faz o quê na França? O presidente, o governo, o Parlamento, os juízes: entenda o funcionamento da V República e da Europa.',
      en: 'Who does what in France? The president, the government, the parliament, the judges: understand how the Fifth Republic and Europe work.',
      es: '¿Quién hace qué en Francia? El presidente, el gobierno, el Parlamento, los jueces: entienda el funcionamiento de la V República y de Europa.',
    },
    sections: [
      {
        title: {
          fr: 'La Ve République et la Constitution',
          pt: 'A V República e a Constituição',
          en: 'The Fifth Republic and the Constitution',
          es: 'La V República y la Constitución',
        },
        text: {
          fr: 'La Constitution actuelle date de 1958 : c’est le général de Gaulle qui l’a fait adopter pour fonder la Ve République et sortir le pays de la crise politique. Elle est le texte suprême : toutes les lois doivent la respecter.\n\nL’article 1er de la Constitution définit la République : « La France est une République indivisible, laïque, démocratique et sociale. » Chaque mot compte : indivisible, car les lois sont les mêmes partout ; laïque, car l’État n’a pas de religion ; démocratique, car le peuple choisit ses représentants ; sociale, car la solidarité entre les citoyens est une valeur inscrite dans la loi.\n\nLa Constitution repose sur la séparation des pouvoirs : le pouvoir exécutif (président et gouvernement) applique les lois, le pouvoir législatif (Parlement) les vote, et le pouvoir judiciaire (les juges) est indépendant. Ce principe, hérité de Montesquieu, empêche qu’une seule personne concentre tout le pouvoir.',
          pt: 'A Constituição atual data de 1958: é o general de Gaulle quem a fez adotar para fundar a V República e tirar o país da crise política. Ela é o texto supremo: todas as leis devem respeitá-la.\n\nO artigo 1º da Constituição define a República: « A França é uma República indivisível, laica, democrática e social. » Cada palavra conta: indivisível, porque as leis são as mesmas em todo o lugar; laica, porque o Estado não tem religião; democrática, porque o povo escolhe seus representantes; social, porque a solidariedade entre os cidadãos é um valor inscrito na lei.\n\nA Constituição se apoia na separação dos poderes: o poder executivo (presidente e governo) aplica as leis, o poder legislativo (Parlamento) as vota, e o poder judiciário (os juízes) é independente. Esse princípio, herdado de Montesquieu, impede que uma única pessoa concentre todo o poder.',
          en: 'The current Constitution dates from 1958: General de Gaulle had it adopted to found the Fifth Republic and pull the country out of its political crisis. It is the supreme text: all laws must respect it.\n\nArticle 1 of the Constitution defines the Republic: “France is an indivisible, secular, democratic and social Republic.” Every word matters: indivisible, because the laws are the same everywhere; secular, because the state has no religion; democratic, because the people choose their representatives; social, because solidarity between citizens is a value written into law.\n\nThe Constitution rests on the separation of powers: the executive (president and government) applies the laws, the legislative (parliament) votes them, and the judiciary (the judges) is independent. This principle, inherited from Montesquieu, prevents one person from concentrating all power.',
          es: 'La Constitución actual data de 1958: es el general de Gaulle quien la hizo adoptar para fundar la V República y sacar al país de la crisis política. Es el texto supremo: todas las leyes deben respetarla.\n\nEl artículo 1º de la Constitución define la República: « Francia es una República indivisible, laica, democrática y social. » Cada palabra cuenta: indivisible, porque las leyes son las mismas en todo el lugar; laica, porque el Estado no tiene religión; democrática, porque el pueblo elige a sus representantes; social, porque la solidaridad entre los ciudadanos es un valor inscrito en la ley.\n\nLa Constitución se apoya en la separación de poderes: el poder ejecutivo (presidente y gobierno) aplica las leyes, el poder legislativo (Parlamento) las vota, y el poder judicial (los jueces) es independiente. Este principio, heredado de Montesquieu, impide que una sola persona concentre todo el poder.',
        },
      },
      {
        title: {
          fr: 'Le président de la République',
          pt: 'O presidente da República',
          en: 'The president of the Republic',
          es: 'El presidente de la República',
        },
        text: {
          fr: 'Le président de la République est élu au suffrage universel direct, pour cinq ans (le « quinquennat », depuis la réforme de 2000). L’élection se fait en deux tours : si aucun candidat n’obtient la majorité absolue au premier tour, les deux premiers s’affrontent au second.\n\nSes pouvoirs sont importants : il nomme le Premier ministre, il est le chef des armées, il préside le Conseil des ministres, il peut dissoudre l’Assemblée nationale et organiser un référendum. En matière de politique étrangère, il représente la France.\n\nDepuis la réforme de 2000, le mandat du président coïncide avec la durée de la législature, ce qui évite les « cohabitations » trop fréquentes, quand le président et le Premier ministre viennent de partis opposés.',
          pt: 'O presidente da República é eleito por sufrágio universal direto, por cinco anos (o « quinquenato », desde a reforma de 2000). A eleição é feita em dois turnos: se nenhum candidato obtém a maioria absoluta no primeiro turno, os dois primeiros se enfrentam no segundo.\n\nSeus poderes são importantes: ele nomeia o primeiro-ministro, é o chefe das forças armadas, preside o Conselho de Ministros, pode dissolver a Assembleia Nacional e organizar um referendo. Em matéria de política externa, ele representa a França.\n\nDesde a reforma de 2000, o mandato do presidente coincide com a duração da legislatura, o que evita « coabitações » muito frequentes, quando o presidente e o primeiro-ministro vêm de partidos opostos.',
          en: 'The president of the Republic is elected by direct universal suffrage, for five years (the “quinquennat”, since the 2000 reform). The election is held in two rounds: if no candidate wins an absolute majority in the first round, the top two face each other in the second.\n\nTheir powers are significant: the president appoints the prime minister, is head of the armed forces, chairs the Council of Ministers, may dissolve the National Assembly and call a referendum. In foreign policy, the president represents France.\n\nSince the 2000 reform, the president’s term matches the length of the legislature, which avoids too-frequent “cohabitations”, when the president and prime minister come from opposing parties.',
          es: 'El presidente de la República es elegido por sufragio universal directo, por cinco años (el « quinquenato », desde la reforma de 2000). La elección se hace en dos vueltas: si ningún candidato obtiene la mayoría absoluta en la primera vuelta, los dos primeros se enfrentan en la segunda.\n\nSus poderes son importantes: nombra al primer ministro, es el jefe de las fuerzas armadas, preside el Consejo de Ministros, puede disolver la Asamblea Nacional y organizar un referéndum. En materia de política exterior, representa a Francia.\n\nDesde la reforma de 2000, el mandato del presidente coincide con la duración de la legislatura, lo que evita « cohabitaciones » demasiado frecuentes, cuando el presidente y el primer ministro vienen de partidos opuestos.',
        },
      },
      {
        title: {
          fr: 'Le gouvernement',
          pt: 'O governo',
          en: 'The government',
          es: 'El gobierno',
        },
        text: {
          fr: 'Le gouvernement est dirigé par le Premier ministre, nommé par le président. Il comprend les ministres, chacun responsable d’un domaine : l’intérieur, la justice, l’éducation nationale, la santé, etc.\n\nLe gouvernement « conduit l’action de la nation » : il applique les lois, rédige la plupart des projets de loi et gère l’administration. Il est responsable devant l’Assemblée nationale : si les députés votent une motion de censure, le gouvernement doit démissionner.\n\nLe Premier ministre travaille en permanence avec le président à l’Élysée et avec le Parlement. En cas de majorité opposée, la France connaît une « cohabitation » : le président garde les affaires étrangères, le Premier ministre conduit la politique intérieure.',
          pt: 'O governo é dirigido pelo primeiro-ministro, nomeado pelo presidente. Compreende os ministros, cada um responsável por um domínio: o interior, a justiça, a educação nacional, a saúde, etc.\n\nO governo « conduz a ação da nação »: ele aplica as leis, redige a maioria dos projetos de lei e administra o Estado. É responsável diante da Assembleia Nacional: se os deputados votam uma moção de censura, o governo deve demitir-se.\n\nO primeiro-ministro trabalha permanentemente com o presidente no Eliseu e com o Parlamento. Em caso de maioria oposta, a França conhece uma « coabitação»: o presidente guarda os assuntos externos, o primeiro-ministro conduz a política interna.',
          en: 'The government is headed by the prime minister, appointed by the president. It includes the ministers, each responsible for one area: the interior, justice, national education, health, etc.\n\nThe government “directs the action of the nation”: it applies the laws, drafts most bills and runs the administration. It is accountable to the National Assembly: if deputies vote a motion of censure, the government must resign.\n\nThe prime minister works constantly with the president at the Élysée and with parliament. In the case of an opposing majority, France experiences a “cohabitation”: the president keeps foreign affairs, the prime minister leads domestic policy.',
          es: 'El gobierno está dirigido por el primer ministro, nombrado por el presidente. Comprende los ministros, cada uno responsable de un ámbito: el interior, la justicia, la educación nacional, la salud, etc.\n\nEl gobierno « dirige la acción de la nación »: aplica las leyes, redacta la mayoría de los proyectos de ley y administra el Estado. Es responsable ante la Asamblea Nacional: si los diputados votan una moción de censura, el gobierno debe dimitir.\n\nEl primer ministro trabaja permanentemente con el presidente en el Elíseo y con el Parlamento. En caso de mayoría opuesta, Francia conoce una « cohabitación »: el presidente guarda los asuntos exteriores, el primer ministro conduce la política interior.',
        },
      },
      {
        title: {
          fr: 'Le Parlement',
          pt: 'O Parlamento',
          en: 'The parliament',
          es: 'El Parlamento',
        },
        text: {
          fr: 'Le Parlement est composé de deux chambres. L’Assemblée nationale compte 577 députés, élus au suffrage universel direct pour cinq ans. Le Sénat compte 348 sénateurs, élus indirectement par des grands électeurs (élus locaux) pour six ans.\n\nUne loi peut être proposée de deux façons : par le gouvernement, c’est alors un « projet de loi » ; par les parlementaires, c’est une « proposition de loi ». Le texte fait ensuite la « navette » entre les deux chambres jusqu’à ce qu’elles votent exactement le même texte.\n\nUne fois adopté, le texte est promulgué par le président dans les quinze jours et devient une loi que tous doivent respecter. Le Conseil constitutionnel peut vérifier avant la promulgation que la loi respecte la Constitution.',
          pt: 'O Parlamento é composto de duas câmaras. A Assembleia Nacional conta 577 deputados, eleitos por sufrágio universal direto por cinco anos. O Senado conta 348 senadores, eleitos indiretamente por grandes eleitores (eleitos locais) por seis anos.\n\nUma lei pode ser proposta de duas formas: pelo governo, é então um « projeto de lei »; pelos parlamentares, é uma « proposta de lei ». O texto faz depois a « vaivém » entre as duas câmaras até que ambas votem exatamente o mesmo texto.\n\nUma vez adotado, o texto é promulgado pelo presidente em quinze dias e torna-se uma lei que todos devem respeitar. O Conselho Constitucional pode verificar, antes da promulgação, que a lei respeita a Constituição.',
          en: 'The parliament has two chambers. The National Assembly has 577 deputies, elected by direct universal suffrage for five years. The Senate has 348 senators, elected indirectly by grand electors (local officials) for six years.\n\nA law can be proposed in two ways: by the government, when it is a “government bill”; by parliamentarians, when it is a “private member’s bill”. The text then shuttles between the two chambers until both vote exactly the same text.\n\nOnce adopted, the text is promulgated by the president within fifteen days and becomes a law that everyone must respect. The Constitutional Council may check, before promulgation, that the law respects the Constitution.',
          es: 'El Parlamento está compuesto por dos cámaras. La Asamblea Nacional cuenta con 577 diputados, elegidos por sufragio universal directo por cinco años. El Senado cuenta con 348 senadores, elegidos indirectamente por grandes electores (elegidos locales) por seis años.\n\nUna ley puede ser propuesta de dos maneras: por el gobierno, es entonces un « proyecto de ley »; por los parlamentarios, es una « proposición de ley ». El texto hace luego la « lanzadera » entre las dos cámaras hasta que ambas voten exactamente el mismo texto.\n\nUna vez adoptado, el texto es promulgado por el presidente en quince días y se convierte en una ley que todos deben respetar. El Consejo Constitucional puede verificar, antes de la promulgación, que la ley respete la Constitución.',
        },
      },
      {
        title: {
          fr: 'La justice',
          pt: 'A justiça',
          en: 'Justice',
          es: 'La justicia',
        },
        text: {
          fr: 'La justice est indépendante du pouvoir politique : les juges sont protégés et ne reçoivent pas d’ordres du gouvernement. C’est une condition essentielle de l’État de droit.\n\nIl existe deux ordres de juridictions. Les tribunaux judiciaires jugent les litiges entre personnes et les affaires pénales ; la plus haute juridiction de cet ordre est la Cour de cassation. Les tribunaux administratifs jugent les litiges entre les citoyens et l’administration ; leur sommet est le Conseil d’État.\n\nPour les crimes graves (meurtre, vol avec violence), le procès se déroule devant une cour d’assises, avec un jury de citoyens tirés au sort : la justice est alors rendue en partie par le peuple lui-même.\n\nLe Conseil constitutionnel, enfin, veille au respect de la Constitution par les lois et les élections.',
          pt: 'A justiça é independente do poder político: os juízes são protegidos e não recebem ordens do governo. É uma condição essencial do Estado de direito.\n\nExistem duas ordens de jurisdições. Os tribunais judiciais julgam os litígios entre pessoas e os assuntos penais; a mais alta jurisdição dessa ordem é a Corte de Cassação. Os tribunais administrativos julgam os litígios entre os cidadãos e a administração; seu topo é o Conselho de Estado.\n\nPara os crimes graves (homicídio, roubo com violência), o julgamento se dá diante de uma Corte de Assises, com um júri de cidadãos sorteados: a justiça é então feita em parte pelo próprio povo.\n\nO Conselho Constitucional, por fim, vela pelo respeito da Constituição pelas leis e pelas eleições.',
          en: 'Justice is independent of political power: judges are protected and receive no orders from the government. This is an essential condition of the rule of law.\n\nThere are two orders of courts. The judicial courts hear disputes between people and criminal cases; the highest court in this order is the Cour de cassation. The administrative courts hear disputes between citizens and the administration; at their summit is the Conseil d’État.\n\nFor serious crimes (murder, violent robbery), the trial takes place before an assize court, with a jury of citizens drawn by lot: justice is then rendered partly by the people themselves.\n\nFinally, the Constitutional Council ensures that laws and elections respect the Constitution.',
          es: 'La justicia es independiente del poder político: los jueces están protegidos y no reciben órdenes del gobierno. Es una condición esencial del Estado de derecho.\n\nExisten dos órdenes de jurisdicciones. Los tribunales judiciales juzgan los litigios entre personas y los asuntos penales; la más alta jurisdicción de este orden es la Corte de Casación. Los tribunales administrativos juzgan los litigios entre los ciudadanos y la administración; su cima es el Consejo de Estado.\n\nPara los delitos graves (homicidio, robo con violencia), el juicio se celebra ante un tribunal de assises, con un jurado de ciudadanos sorteados: la justicia es entonces hecha en parte por el propio pueblo.\n\nEl Consejo Constitucional, por último, vela por el respeto de la Constitución por las leyes y las elecciones.',
        },
      },
      {
        title: {
          fr: 'Les collectivités territoriales',
          pt: 'As coletividades territoriais',
          en: 'Local government',
          es: 'Las colectividades territoriales',
        },
        text: {
          fr: 'La France est organisée en communes, départements et régions. La commune est la plus petite unité : le maire est élu par le conseil municipal et gère la vie quotidienne (état civil, écoles primaires, urbanisme). Il y a environ 35 000 communes en France.\n\nLe département (il y en a 96 en métropole et 101 avec l’outre-mer) gère les collèges, les routes départementales et l’action sociale. Le préfet représente l’État dans chaque département : il n’est pas élu, il est nommé par le gouvernement.\n\nLa région (18 régions) gère les lycées, la formation professionnelle et le développement économique. Chaque niveau est élu au suffrage universel, sauf le préfet, qui est le représentant direct de l’État central.',
          pt: 'A França está organizada em comunas, departamentos e regiões. A comuna é a menor unidade: o prefeito é eleito pelo conselho municipal e administra a vida cotidiana (registro civil, escolas primárias, urbanismo). Há cerca de 35 000 comunas na França.\n\nO departamento (há 96 na metrópole e 101 com o ultramar) administra os colégios, as estradas departamentais e a ação social. O prefeito (préfet) representa o Estado em cada departamento: ele não é eleito, é nomeado pelo governo.\n\nA região (18 regiões) administra os liceus, a formação profissional e o desenvolvimento econômico. Cada nível é eleito por sufrágio universal, exceto o préfet, que é o representante direto do Estado central.',
          en: 'France is organised into communes, départements and regions. The commune is the smallest unit: the mayor is elected by the municipal council and manages daily life (civil registry, primary schools, town planning). There are about 35,000 communes in France.\n\nThe département (96 in mainland France, 101 with overseas territories) manages middle schools, departmental roads and social services. The préfet represents the state in each département: they are not elected but appointed by the government.\n\nThe region (18 regions) manages high schools, vocational training and economic development. Each level is elected by universal suffrage, except the préfet, who is the direct representative of the central state.',
          es: 'Francia está organizada en comunas, departamentos y regiones. La comuna es la unidad más pequeña: el alcalde es elegido por el consejo municipal y gestiona la vida cotidiana (registro civil, escuelas primarias, urbanismo). Hay unas 35 000 comunas en Francia.\n\nEl departamento (hay 96 en la metrópoli y 101 con el ultramar) gestiona los colegios, las carreteras departamentales y la acción social. El préfet representa al Estado en cada departamento: no es elegido, es nombrado por el gobierno.\n\nLa región (18 regiones) gestiona los liceos, la formación profesional y el desarrollo económico. Cada nivel es elegido por sufragio universal, excepto el préfet, que es el representante directo del Estado central.',
        },
      },
      {
        title: {
          fr: 'La France et l’Europe',
          pt: 'A França e a Europa',
          en: 'France and Europe',
          es: 'Francia y Europa',
        },
        text: {
          fr: 'La France est un des six pays fondateurs de la construction européenne : en 1951, la CECA (charbon et acier) réunit la France, l’Allemagne, l’Italie, la Belgique, les Pays-Bas et le Luxembourg. Le traité de Rome, en 1957, crée la Communauté économique européenne.\n\nCette communauté est devenue l’Union européenne, qui compte aujourd’hui 27 États membres depuis le départ du Royaume-Uni en 2020. Les citoyens des pays de l’UE peuvent circuler, travailler et voter aux élections municipales et européennes dans les autres pays membres.\n\nL’euro, monnaie unique adoptée en 2002, est utilisé par la France et la plupart des pays de l’UE. Un citoyen français est donc aussi un citoyen européen : les deux citoyennetés coexistent.',
          pt: 'A França é um dos seis países fundadores da construção europeia: em 1951, a CECA (carvão e aço) reúne a França, a Alemanha, a Itália, a Bélgica, os Países Baixos e o Luxemburgo. O Tratado de Roma, em 1957, cria a Comunidade Econômica Europeia.\n\nEssa comunidade tornou-se a União Europeia, que conta hoje com 27 Estados-membros desde a saída do Reino Unido em 2020. Os cidadãos dos países da UE podem circular, trabalhar e votar nas eleições municipais e europeias nos outros países membros.\n\nO euro, moeda única adotada em 2002, é usado pela França e pela maioria dos países da UE. Um cidadão francês é portanto também um cidadão europeu: as duas cidadanias coexistem.',
          en: 'France is one of the six founding countries of European integration: in 1951, the ECSC (coal and steel) brought together France, Germany, Italy, Belgium, the Netherlands and Luxembourg. The Treaty of Rome, in 1957, created the European Economic Community.\n\nThat community became the European Union, which has 27 member states today since the UK’s departure in 2020. Citizens of EU countries can travel, work and vote in municipal and European elections in other member countries.\n\nThe euro, the single currency adopted in 2002, is used by France and most EU countries. A French citizen is therefore also a European citizen: the two citizenships coexist.',
          es: 'Francia es uno de los seis países fundadores de la construcción europea: en 1951, la CECA (carbón y acero) reúne a Francia, Alemania, Italia, Bélgica, los Países Bajos y Luxemburgo. El Tratado de Roma, en 1957, crea la Comunidad Económica Europea.\n\nEsa comunidad se convirtió en la Unión Europea, que cuenta hoy con 27 Estados miembros desde la salida del Reino Unido en 2020. Los ciudadanos de los países de la UE pueden circular, trabajar y votar en las elecciones municipales y europeas en los otros países miembros.\n\nEl euro, moneda única adoptada en 2002, es usado por Francia y por la mayoría de los países de la UE. Un ciudadano francés es por tanto también un ciudadano europeo: las dos ciudadanías coexisten.',
        },
      },
    ],
    keyDates: [
      {
        year: '1951',
        label: {
          fr: 'Traité de Paris : naissance de la CECA',
          pt: 'Tratado de Paris: nascimento da CECA',
          en: 'Treaty of Paris: the ECSC is born',
          es: 'Tratado de París: nace la CECA',
        },
      },
      {
        year: '1957',
        label: {
          fr: 'Traité de Rome : marché commun',
          pt: 'Tratado de Roma: mercado comum',
          en: 'Treaty of Rome: the common market',
          es: 'Tratado de Roma: mercado común',
        },
      },
      {
        year: '1958',
        label: {
          fr: 'Fondation de la Ve République par de Gaulle',
          pt: 'Fundação da V República por de Gaulle',
          en: 'De Gaulle founds the Fifth Republic',
          es: 'De Gaulle funda la V República',
        },
      },
      {
        year: '2000',
        label: {
          fr: 'Référendum : le mandat présidentiel passe à 5 ans',
          pt: 'Referendo: o mandato presidencial passa a 5 anos',
          en: 'Referendum: the presidential term becomes 5 years',
          es: 'Referéndum: el mandato presidencial pasa a 5 años',
        },
      },
      {
        year: '2002',
        label: {
          fr: 'L’euro entre en circulation',
          pt: 'O euro entra em circulação',
          en: 'The euro enters circulation',
          es: 'El euro entra en circulación',
        },
      },
    ],
    videos: [
      {
        youtubeId: 'Z7enoBRUt1s',
        title: {
          fr: 'L’Union européenne expliquée',
          pt: 'A União Europeia explicada',
          en: 'The European Union explained',
          es: 'La Unión Europea explicada',
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
          fr: 'La Ve République',
          pt: 'A V República',
          en: 'The Fifth Republic',
          es: 'La V República',
        },
      },
      {
        youtubeId: 'okZBvGSpmQw',
        title: {
          fr: 'L’Assemblée nationale',
          pt: 'A Assembleia Nacional',
          en: 'The National Assembly',
          es: 'La Asamblea Nacional',
        },
      },
    ],
  },

  {
    id: 'droits',
    title: {
      fr: 'Les droits et les devoirs',
      pt: 'Os direitos e os deveres',
      en: 'Rights and duties',
      es: 'Los derechos y los deberes',
    },
    intro: {
      fr: 'Devenir français, ce n’est pas seulement obtenir des droits : c’est aussi accepter des devoirs. Cette leçon explique les deux, avec des exemples de la vie quotidienne.',
      pt: 'Tornar-se francês não é só obter direitos: é também aceitar deveres. Esta lição explica os dois, com exemplos do cotidiano.',
      en: 'Becoming French is not only gaining rights: it also means accepting duties. This lesson explains both, with everyday examples.',
      es: 'Hacerse francés no es solo obtener derechos: es también aceptar deberes. Esta lección explica los dos, con ejemplos de la vida cotidiana.',
    },
    sections: [
      {
        title: {
          fr: 'Les droits fondamentaux',
          pt: 'Os direitos fundamentais',
          en: 'Fundamental rights',
          es: 'Los derechos fundamentales',
        },
        text: {
          fr: 'Les droits fondamentaux des Français reposent d’abord sur la Déclaration des droits de l’homme et du citoyen de 1789, puis sur la Déclaration universelle des droits de l’homme de 1948, adoptée par l’ONU à Paris.\n\nLa liberté d’expression permet à chacun de penser, d’écrire et de dire ce qu’il veut, dans la presse, sur internet ou en réunion. Mais cette liberté a des limites fixées par la loi : la diffamation (accuser quelqu’un à tort), l’incitation à la haine et le négationnisme sont interdits. La liberté des uns ne doit pas détruire celle des autres.\n\nCes droits sont garantis par la Constitution et protégés par les juges : tout citoyen peut saisir un tribunal pour faire respecter ses droits.',
          pt: 'Os direitos fundamentais dos franceses se apoiam primeiro na Declaração dos Direitos do Homem e do Cidadão de 1789, e depois na Declaração Universal dos Direitos Humanos de 1948, adotada pela ONU em Paris.\n\nA liberdade de expressão permite a cada um pensar, escrever e dizer o que quiser, na imprensa, na internet ou em reunião. Mas essa liberdade tem limites fixados pela lei: a difamação (acusar alguém injustamente), a incitação ao ódio e a negação do Holocausto são proibidos. A liberdade de uns não deve destruir a dos outros.\n\nEsses direitos são garantidos pela Constituição e protegidos pelos juízes: todo cidadão pode recorrer a um tribunal para fazer respeitar seus direitos.',
          en: 'The fundamental rights of the French rest first on the 1789 Declaration of the Rights of Man and of the Citizen, then on the Universal Declaration of Human Rights of 1948, adopted by the UN in Paris.\n\nFreedom of expression allows everyone to think, write and say what they want, in the press, online or in meetings. But this freedom has limits set by law: defamation (wrongly accusing someone), incitement to hatred and Holocaust denial are banned. One person’s freedom must not destroy another’s.\n\nThese rights are guaranteed by the Constitution and protected by the courts: every citizen can go to court to have their rights respected.',
          es: 'Los derechos fundamentales de los franceses se apoyan primero en la Declaración de los Derechos del Hombre y del Ciudadano de 1789, y después en la Declaración Universal de los Derechos Humanos de 1948, adoptada por la ONU en París.\n\nLa libertad de expresión permite a cada uno pensar, escribir y decir lo que quiera, en la prensa, en internet o en reunión. Pero esta libertad tiene límites fijados por la ley: la difamación (acusar a alguien injustamente), la incitación al odio y la negación del Holocausto están prohibidos. La libertad de unos no debe destruir la de los otros.\n\nEstos derechos están garantizados por la Constitución y protegidos por los jueces: todo ciudadano puede acudir a un tribunal para hacer respetar sus derechos.',
        },
      },
      {
        title: {
          fr: 'L’égalité devant la loi',
          pt: 'A igualdade diante da lei',
          en: 'Equality before the law',
          es: 'La igualdad ante la ley',
        },
        text: {
          fr: 'L’égalité devant la loi est un principe fondamental : la loi est la même pour tous et s’applique à tous de la même façon, sans privilège ni discrimination.\n\nL’égalité entre les femmes et les hommes est inscrite dans la loi : mêmes droits de vote (1944 pour les femmes), mêmes salaires pour le même travail, mêmes droits dans le mariage et la famille. Toute discrimination à l’embauche, au logement ou à l’accès aux services est punie par la loi.\n\nAucune distinction ne peut être faite selon l’origine, la religion, la couleur de peau ou le handicap : ces discriminations sont des délits, et des associations peuvent accompagner les victimes.',
          pt: 'A igualdade diante da lei é um princípio fundamental: a lei é a mesma para todos e se aplica a todos da mesma maneira, sem privilégio nem discriminação.\n\nA igualdade entre mulheres e homens está inscrita na lei: mesmos direitos de voto (1944 para as mulheres), mesmos salários para o mesmo trabalho, mesmos direitos no casamento e na família. Qualquer discriminação no emprego, na moradia ou no acesso aos serviços é punida pela lei.\n\nNenhuma distinção pode ser feita segundo a origem, a religião, a cor da pele ou a deficiência: essas discriminações são crimes, e associações podem acompanhar as vítimas.',
          en: 'Equality before the law is a fundamental principle: the law is the same for all and applies to everyone in the same way, without privilege or discrimination.\n\nEquality between women and men is written into law: the same voting rights (1944 for women), the same pay for the same work, the same rights in marriage and family. Any discrimination in hiring, housing or access to services is punished by law.\n\nNo distinction may be made based on origin, religion, skin colour or disability: such discriminations are offences, and associations can support victims.',
          es: 'La igualdad ante la ley es un principio fundamental: la ley es la misma para todos y se aplica a todos de la misma manera, sin privilegio ni discriminación.\n\nLa igualdad entre mujeres y hombres está inscrita en la ley: mismos derechos de voto (1944 para las mujeres), mismos salarios por el mismo trabajo, mismos derechos en el matrimonio y en la familia. Cualquier discriminación en el empleo, la vivienda o el acceso a los servicios es castigada por la ley.\n\nNinguna distinción puede hacerse según el origen, la religión, el color de la piel o la discapacidad: estas discriminaciones son delitos, y asociaciones pueden acompañar a las víctimas.',
        },
      },
      {
        title: {
          fr: 'Les devoirs du citoyen',
          pt: 'Os deveres do cidadão',
          en: 'The citizen’s duties',
          es: 'Los deberes del ciudadano',
        },
        text: {
          fr: 'Les droits vont avec les devoirs. Le premier devoir est de respecter les lois de la République, votées par les représentants du peuple.\n\nLe deuxième devoir est de payer les impôts : ils financent les services publics — écoles, hôpitaux, police, routes, justice. Sans impôts, pas d’État providence.\n\nLe troisième devoir est de participer à la justice : les citoyens tirés au sort peuvent être jurés dans une cour d’assises. C’est une obligation légale.\n\nEnfin, à 16 ans, les jeunes Français doivent se faire recenser à la mairie, puis participer à la Journée défense et citoyenneté (JDC). Le service militaire obligatoire, lui, a été suspendu en 1997.',
          pt: 'Os direitos vêm com os deveres. O primeiro dever é respeitar as leis da República, votadas pelos representantes do povo.\n\nO segundo dever é pagar os impostos: eles financiam os serviços públicos — escolas, hospitais, polícia, estradas, justiça. Sem impostos, não há Estado de bem-estar social.\n\nO terceiro dever é participar da justiça: os cidadãos sorteados podem ser jurados numa Corte de Assises. É uma obrigação legal.\n\nPor fim, aos 16 anos, os jovens franceses devem se registrar na prefeitura e depois participar da Jornada de Defesa e Cidadania (JDC). O serviço militar obrigatório, por sua vez, foi suspenso em 1997.',
          en: 'Rights come with duties. The first duty is to respect the laws of the Republic, voted by the people’s representatives.\n\nThe second duty is to pay taxes: they fund public services — schools, hospitals, police, roads, justice. Without taxes, there is no welfare state.\n\nThe third duty is to take part in justice: citizens drawn by lot may serve as jurors in an assize court. It is a legal obligation.\n\nFinally, at 16, young French people must register at the town hall and then take part in the Defence and Citizenship Day (JDC). Compulsory military service, for its part, was suspended in 1997.',
          es: 'Los derechos vienen con los deberes. El primer deber es respetar las leyes de la República, votadas por los representantes del pueblo.\n\nEl segundo deber es pagar los impuestos: financian los servicios públicos — escuelas, hospitales, policía, carreteras, justicia. Sin impuestos, no hay Estado de bienestar.\n\nEl tercer deber es participar en la justicia: los ciudadanos sorteados pueden ser jurados en un tribunal de assises. Es una obligación legal.\n\nPor último, a los 16 años, los jóvenes franceses deben registrarse en el ayuntamiento y luego participar en la Jornada de Defensa y Ciudadanía (JDC). El servicio militar obligatorio, por su parte, fue suspendido en 1997.',
        },
      },
      {
        title: {
          fr: 'Le droit de vote',
          pt: 'O direito de voto',
          en: 'The right to vote',
          es: 'El derecho al voto',
        },
        text: {
          fr: 'Le vote est un droit, pas une obligation : personne n’est puni s’il ne vote pas. Pour voter, il faut être majeur (18 ans), être inscrit sur les listes électorales et jouir de ses droits civiques. Chaque citoyen reçoit une carte d’électeur.\n\nOn vote à plusieurs types d’élections : présidentielle (tous les 5 ans), législatives (députés), municipales (maires et conseils), départementales, régionales et européennes. Le référendum permet aussi au peuple de répondre directement à une question.\n\nLe vote a une longue histoire : le suffrage universel masculin date de 1848, mais les femmes n’ont voté pour la première fois qu’en 1945. L’âge du vote est passé de 21 à 18 ans en 1974.',
          pt: 'O voto é um direito, não uma obrigação: ninguém é punido se não votar. Para votar, é preciso ser maior de idade (18 anos), estar inscrito nas listas eleitorais e gozar dos direitos cívicos. Cada cidadão recebe um cartão de eleitor.\n\nVota-se em vários tipos de eleições: presidencial (a cada 5 anos), legislativas (deputados), municipais (prefeitos e conselhos), departamentais, regionais e europeias. O referendo também permite ao povo responder diretamente a uma pergunta.\n\nO voto tem uma longa história: o sufrágio universal masculino data de 1848, mas as mulheres só votaram pela primeira vez em 1945. A idade do voto passou de 21 para 18 anos em 1974.',
          en: 'Voting is a right, not an obligation: no one is punished for not voting. To vote, you must be an adult (18), be registered on the electoral lists and enjoy your civic rights. Every citizen receives a voter card.\n\nThere are several types of elections: presidential (every 5 years), legislative (deputies), municipal (mayors and councils), departmental, regional and European. A referendum also lets the people answer a question directly.\n\nVoting has a long history: universal male suffrage dates from 1848, but women only voted for the first time in 1945. The voting age went from 21 to 18 in 1974.',
          es: 'El voto es un derecho, no una obligación: nadie es castigado si no vota. Para votar, hay que ser mayor de edad (18 años), estar inscrito en las listas electorales y gozar de los derechos cívicos. Cada ciudadano recibe una tarjeta electoral.\n\nSe vota en varios tipos de elecciones: presidencial (cada 5 años), legislativas (diputados), municipales (alcaldes y consejos), departamentales, regionales y europeas. El referéndum también permite al pueblo responder directamente a una pregunta.\n\nEl voto tiene una larga historia: el sufragio universal masculino data de 1848, pero las mujeres solo votaron por primera vez en 1945. La edad del voto pasó de 21 a 18 años en 1974.',
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
          fr: 'La France a construit après la guerre un système de protection sociale : la Sécurité sociale, créée en 1945, couvre les soins médicaux pour tous. Personne n’est refusé aux urgences hospitalières, même sans argent : c’est un principe de la République sociale.\n\nLes allocations familiales, versées par la CAF (Caisse d’allocations familiales), aident les familles à élever leurs enfants : prestations de naissance, aides au logement, allocations pour les familles nombreuses.\n\nLes chômeurs ont droit à des allocations, les personnes âgées à une retraite, les personnes handicapées à une aide spécifique. Ce système repose sur la fraternité : chacun cotise selon ses moyens et reçoit selon ses besoins.',
          pt: 'A França construiu depois da guerra um sistema de proteção social: a Seguridade Social, criada em 1945, cobre os cuidados médicos para todos. Ninguém é recusado nas urgências hospitalares, mesmo sem dinheiro: é um princípio da República social.\n\nOs auxílios familiares, pagos pela CAF (Caisse d’allocations familiales), ajudam as famílias a criar seus filhos: prestações de nascimento, auxílios à moradia, auxílios para famílias numerosas.\n\nOs desempregados têm direito a auxílios, os idosos a uma aposentadoria, as pessoas com deficiência a uma ajuda específica. Esse sistema se apoia na fraternidade: cada um contribui segundo seus meios e recebe segundo suas necessidades.',
          en: 'After the war, France built a social protection system: Social Security, created in 1945, covers medical care for all. No one is refused at hospital emergency rooms, even without money: it is a principle of the social Republic.\n\nFamily benefits, paid by the CAF (Caisse d’allocations familiales), help families raise their children: birth benefits, housing aid, benefits for large families.\n\nThe unemployed are entitled to benefits, the elderly to a pension, disabled people to specific support. This system rests on fraternity: everyone contributes according to their means and receives according to their needs.',
          es: 'Después de la guerra, Francia construyó un sistema de protección social: la Seguridad Social, creada en 1945, cubre los cuidados médicos para todos. Nadie es rechazado en las urgencias hospitalarias, incluso sin dinero: es un principio de la República social.\n\nLas ayudas familiares, pagadas por la CAF (Caisse d’allocations familiales), ayudan a las familias a criar a sus hijos: prestaciones de nacimiento, ayudas a la vivienda, ayudas para familias numerosas.\n\nLos desempleados tienen derecho a prestaciones, los mayores a una jubilación, las personas con discapacidad a una ayuda específica. Este sistema se apoya en la fraternidad: cada uno cotiza según sus medios y recibe según sus necesidades.',
        },
      },
      {
        title: {
          fr: 'Les droits dans la vie quotidienne',
          pt: 'Os direitos no cotidiano',
          en: 'Rights in everyday life',
          es: 'Los derechos en la vida cotidiana',
        },
        text: {
          fr: 'L’école publique est gratuite, laïque et obligatoire de 3 à 16 ans : chaque enfant doit être scolarisé, quelle que soit la situation de sa famille. L’université est presque gratuite également.\n\nLe mariage civil se célèbre à la mairie et est ouvert à tous : depuis la loi de 2013, les couples de même sexe peuvent se marier. Le mariage religieux n’est possible qu’après le mariage civil.\n\nFace à l’administration, le citoyen n’est pas démuni : toute décision défavorable peut être contestée, d’abord par un recours gracieux, puis devant le tribunal administratif. Des associations et des services d’aide peuvent accompagner gratuitement.',
          pt: 'A escola pública é gratuita, laica e obrigatória dos 3 aos 16 anos: cada criança deve estar escolarizada, qualquer que seja a situação da família. A universidade também é quase gratuita.\n\nO casamento civil celebra-se na prefeitura e está aberto a todos: desde a lei de 2013, os casais do mesmo sexo podem se casar. O casamento religioso só é possível depois do casamento civil.\n\nDiante da administração, o cidadão não está desarmado: qualquer decisão desfavorável pode ser contestada, primeiro por um recurso administrativo, depois diante do tribunal administrativo. Associações e serviços de ajuda podem acompanhar gratuitamente.',
          en: 'Public school is free, secular and compulsory from 3 to 16: every child must be schooled, whatever the family’s situation. University is almost free as well.\n\nThe civil marriage takes place at the town hall and is open to all: since the 2013 law, same-sex couples can marry. A religious marriage is only possible after the civil marriage.\n\nFaced with the administration, the citizen is not helpless: any unfavourable decision can be contested, first through an informal appeal, then before the administrative court. Associations and help services can provide free support.',
          es: 'La escuela pública es gratuita, laica y obligatoria de 3 a 16 años: cada niño debe estar escolarizado, sea cual sea la situación de su familia. La universidad también es casi gratuita.\n\nEl matrimonio civil se celebra en el ayuntamiento y está abierto a todos: desde la ley de 2013, las parejas del mismo sexo pueden casarse. El matrimonio religioso solo es posible después del matrimonio civil.\n\nAnte la administración, el ciudadano no está desarmado: cualquier decisión desfavorable puede ser impugnada, primero por un recurso administrativo, luego ante el tribunal administrativo. Asociaciones y servicios de ayuda pueden acompañar gratuitamente.',
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
          en: 'Social Security is created',
          es: 'Creación de la Seguridad Social',
        },
      },
      {
        year: '1997',
        label: {
          fr: 'Suspension du service militaire obligatoire',
          pt: 'Suspensão do serviço militar obrigatório',
          en: 'Compulsory military service is suspended',
          es: 'Suspensión del servicio militar obligatorio',
        },
      },
      {
        year: '18 ans',
        label: {
          fr: 'Majorité civique : droit de vote et devoirs complets',
          pt: 'Maioridade cívica: direito de voto e deveres completos',
          en: 'Civic majority: right to vote and full duties',
          es: 'Mayoría cívica: derecho al voto y deberes completos',
        },
      },
    ],
    videos: [
      {
        youtubeId: 'hzLKgETg1eA',
        title: {
          fr: 'C’est quoi un citoyen ?',
          pt: 'O que é um cidadão?',
          en: 'What is a citizen?',
          es: '¿Qué es un ciudadano?',
        },
      },
      {
        youtubeId: 'pLDZ7dD2sLc',
        title: {
          fr: 'Vivre ensemble, la fraternité au quotidien',
          pt: 'Viver juntos, a fraternidade no cotidiano',
          en: 'Living together, fraternity in daily life',
          es: 'Vivir juntos, la fraternidad en el día a día',
        },
      },
      {
        youtubeId: 'mzky0ylhgCo',
        title: {
          fr: 'La Déclaration universelle des droits de l’homme',
          pt: 'A Declaração Universal dos Direitos Humanos',
          en: 'The Universal Declaration of Human Rights',
          es: 'La Declaración Universal de los Derechos Humanos',
        },
      },
      {
        youtubeId: 'nAJsnSpM5ro',
        title: {
          fr: 'Les élections en France',
          pt: 'As eleições na França',
          en: 'Elections in France',
          es: 'Las elecciones en Francia',
        },
      },
    ],
  },
]
