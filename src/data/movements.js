/**
 * Contenido basado en apuntes UNLaM 2026
 * Prof. Flavia Fernández y Prof. Hugo González
 * (Historia del Arte y del Diseño Gráfico / Satué)
 */

export const lugares = [
  {
    id: 'grecia',
    nombre: 'Atenas',
    coordenadas: [23.7275, 37.9838],
    zoom: 12,
    movimientos: [
      {
        id: 'antiguedad-grecia',
        periodoId: 'antiguedad',
        nombre: 'Arte y diseño gráfico en la Antigüedad griega',
        fechaInicio: '700 a.C.',
        fechaFin: '31 a.C.',
        causas: 'La polis como comunidad independiente generó demanda de comunicación visual pública: templos y estatuas como símbolo de poder, identidad cultural y política. El comercio en el Ágora impulsó técnicas de persuasión. La evolución de la escritura —desde signos primitivos hasta el alfabeto— permitió mensajes con carácter informativo y simbólico, aunque al principio reservado a élites y funcionarios.',
        contexto: 'En Grecia la información visual era emitida por el Estado; el comercio usaba comunicación oral en el Ágora, espacio de transacciones y debate. La Biblioteca de Alejandría y los libros manuscritos consolidaron criterios de diseño caligráfico: composición del bloque, armonía de signos, jerarquización y escritura lapidaria en mayúsculas alineadas y compensadas.',
        caracteristicas: 'Pintura, escultura, dibujo y mosaico en soportes como muro, piedra o mármol. Escritura lapidaria con bloques horizontales y prosa compensada. Los cimientos del diseño tipográfico: forma y proporción de letras, alineación, interlínea y composición de texto. Sistema de comunicación formado por templos y estatuas; intención comunicativa constante pese a cambios de medio (McLuhan).',
        autoresYObras: [
          { autor: 'Anónimo', obra: 'Estela funeraria griega (s. V a.C.)' },
          { autor: 'Anónimo', obra: 'Mosaico de los navieros de Misua (anuncio de compañía de navegación)' },
          { autor: 'Anónimo', obra: 'Estela con alfabeto fenicio y modelos de escritura formal' },
          { autor: 'McLuhan (cita en apuntes)', obra: 'Reflexión sobre medios y comunicación visual en la Antigüedad' }
        ],
        finDelMovimiento: 'La expansión romana y la asimilación del arte helénico transformaron la tradición griega en un lenguaje grecorromano, anticipando la comunicación visual imperial y, más tarde, la imagen cristiana medieval.'
      }
    ]
  },
  {
    id: 'roma',
    nombre: 'Roma',
    coordenadas: [12.4964, 41.9028],
    zoom: 13,
    movimientos: [
      {
        id: 'antiguedad-roma',
        periodoId: 'antiguedad',
        nombre: 'Arte y diseño gráfico en la Antigüedad romana',
        fechaInicio: '500 a.C.',
        fechaFin: '476 d.C.',
        causas: 'Roma heredó y superó la escritura lapidaria griega. La necesidad de identificación urbana y comercial impulsó enseñas, mosaicos, monedas y marcas en ánforas. El foro y los monumentos imperiales —como la Columna de Trajano— legitimaron el poder mediante inscripciones y narrativa visual.',
        contexto: 'La información visual la emitían Iglesia y Estado; el comercio incorporó sellos, logotipos en ánforas y cursiva comercial. El desarrollo urbanístico incluyó tabernas con banderas y mosaicos de advertencia (Cave Canem en Pompeya). Texto e imagen se combinaron en monedas, dípticos y encuadernaciones.',
        caracteristicas: 'Escritura lapidaria romana de sobria belleza y equilibrio entre composición y espaciado; la inscripción de la Columna Trajana es prototipo de la tipografía occidental. Enseñas y referencias icónicas sustituyen productos reales (salto de lo denotativo a lo connotativo). Primera minúscula en cursiva comercial; mosaicos publicitarios y comunicación en monedas imperiales.',
        autoresYObras: [
          { autor: 'Anónimo', obra: 'Columna de Trajano — inscripción lapidaria en mármol' },
          { autor: 'Anónimo', obra: 'Cave Canem, mosaico de Pompeya (s. I a.C.)' },
          { autor: 'Anónimo', obra: 'Mosaico de navieros de Misua y áureo de Claudio' },
          { autor: 'Anónimo', obra: 'Sellos y marcas en ánforas de comerciantes de vino y aceite' }
        ],
        finDelMovimiento: 'La caída del Imperio Romano de Occidente (476) y el predominio del cristianismo reorientan la imagen hacia lo simbólico-religioso, dando paso a la producción monástica y al arte medieval.'
      },
      {
        id: 'barroco',
        periodoId: 'barroco',
        nombre: 'Barroco (transición y normalización)',
        fechaInicio: '1600',
        fechaFin: '1750',
        causas: 'Razones políticas e ideológicas tensionan el libro como instrumento al servicio del poder. La Reforma protestante y la Contrarreforma convierten la imagen y la tipografía en herramientas de Iglesia y Estado. En Italia, un clima de crisis se expande por Occidente y condiciona la producción gráfica y artística.',
        contexto: 'Siglo XVI: renacimiento de la caligrafía ligado a la burocracia monárquica; tipógrafos y calígrafos intercambian saberes (Arrighi, Tagliente, Palatino; Garamont y la Edad de Oro tipográfica francesa). Avances en xilografía y grabado calcográfico; grabadores como Rembrandt y Rubens escapan al academicismo. Siglo XVII: el Estado tutela las artes (Luis XIV); surgen periódicos, panfletos, carteles y ex libris.',
        caracteristicas: 'Profusión de detalles, solemnidad y dramatismo (frente al rococó posterior). Academicismo homogéneo en Europa con excepciones expresivas. Tipografía nacional, ornamentación, iniciales floridas; imagen como complemento y valor añadido del mensaje publicitario. Carteles policromados en comercios y primeras publicaciones diarias (desde 1609).',
        autoresYObras: [
          { autor: 'Rembrandt van Rijn', obra: 'El buen samaritano (grabado, 1633)' },
          { autor: 'Peter Paul Rubens', obra: 'La embriaguez de Baco (grabado, 1625)' },
          { autor: 'Ludovico degli Arrighi', obra: 'Primer catálogo impreso de letra cancilleresca (Venecia, 1522)' },
          { autor: 'Claude Garamont', obra: 'Tipos romanos derivados de Jenson y Manuzio' }
        ],
        finDelMovimiento: 'Fin del Barroco y comienzo del Rococó: el agotamiento del dramatismo barroco y nuevas sensibilidades de placer y decoración en la corte francesa abren el siglo XVIII.'
      }
    ]
  },
  {
    id: 'europa-medieval',
    nombre: 'Europa Medieval',
    coordenadas: [-3.7038, 40.4168],
    zoom: 5,
    movimientos: [
      {
        id: 'edad-media',
        periodoId: 'edad-media',
        nombre: 'Fin de la Edad Media y arte medieval',
        fechaInicio: '476',
        fechaFin: '1450',
        causas: 'Tras la caída del Imperio romano de Occidente (476), la sociedad feudal y la Iglesia católica concentran la producción simbólica. La comunicación visual sirve al poder político y religioso; el artista trabaja por encargo y permanece en el anonimato. La imagen educa a una población mayoritariamente analfabeta.',
        contexto: 'Sociedad feudal formada por clero y pueblo campesino; normas religiosas rigen la vida. Monasterios copian e iluminan manuscritos (copista e iluminador). Carlomagno instaura la escritura carolingia; ornamentación bizantina, iniciales miniadas y códices religiosos. Hacia 1450, Gutenberg (Maguncia) inventa la imprenta de tipos móviles; en 1492 la llegada europea a Abya Yala amplía el mundo conocido.',
        caracteristicas: 'Arte al servicio de la fe: escenas codificadas (ej. la Anunciación), lenguaje simbólico y jerárquico. Principios medievales: armonía, jerarquía y concordancia ornamental. Heráldica, enseñas gremiales y señalización comercial; sustitución del objeto real por su icono. Xilografía (s. XIV): “Biblia de los pobres” y grabados para Iglesia, Estado y comercio.',
        autoresYObras: [
          { autor: 'Anónimo (monasterio)', obra: 'Códices iluminados y escritura carolingia' },
          { autor: 'Villard de Honnecourt', obra: 'Manuscrito del arquitecto (s. XIII)' },
          { autor: 'Carlomagno (taller)', obra: 'Monograma imperial y miniaturas con oro bruñido' },
          { autor: 'Alberto Durero', obra: 'Sansón y el León (xilografía, 1497-1498)' }
        ],
        finDelMovimiento: 'La imprenta democratiza el conocimiento; comienza el humanismo antropocéntrico y el Renacimiento, que desplazan el teocentrismo medieval.'
      }
    ]
  },
  {
    id: 'florencia',
    nombre: 'Florencia',
    coordenadas: [11.2558, 43.7696],
    zoom: 13,
    movimientos: [
      {
        id: 'renacimiento',
        periodoId: 'renacimiento',
        nombre: 'Renacimiento',
        fechaInicio: '1400',
        fechaFin: '1600',
        causas: '“Renacer” de los valores de la antigüedad clásica en Europa (siglos XV-XVI), con origen en Italia. La burguesía mercantil, el mecenazgo (Medici y otros) y el humanismo antropocéntrico impulsan un arte que coloca al hombre y la naturaleza en el centro, frente al teocentrismo medieval.',
        contexto: 'Transición del feudalismo: mejora agrícola, comercio y ciudades burguesas. Tras la peste negra, economía protocapitalista. Italia se siente heredera de la gloria imperial; redescubrimiento de textos y arte grecolatinos. Humanismo, racionalismo, perspectiva, claroscuro; talleres de artistas reemplazan gremios artesanales.',
        caracteristicas: 'Retorno al canon clásico: equilibrio, proporción y simetría. Arte como conocimiento (anatomía, geometría, punto de fuga). Óleo sobre lienzo, retrato, escultura exenta y temas mitológicos junto al religioso. Etapas: Trecento (transición), Quattrocento (pleno Renacimiento en Florencia), Cinquecento (Roma, Capilla Sixtina; convive con el Manierismo).',
        autoresYObras: [
          { autor: 'Filippo Brunelleschi', obra: 'Cúpula de Santa María del Fiore (1420-1436)' },
          { autor: 'Leonardo da Vinci', obra: 'La Gioconda, La Última Cena' },
          { autor: 'Miguel Ángel Buonarrotti', obra: 'David, Capilla Sixtina, La Pietà' },
          { autor: 'Sandro Botticelli', obra: 'El nacimiento de Venus, La Primavera' }
        ],
        finDelMovimiento: 'El Sacco de Roma (1527), las guerras religiosas y la Contrarreforma abren el Manierismo y luego el Barroco. Fin del Renacimiento — comienzo del Barroco.'
      }
    ]
  },
  {
    id: 'paris',
    nombre: 'París',
    coordenadas: [2.3522, 48.8566],
    zoom: 12,
    movimientos: [
      {
        id: 'rococo',
        periodoId: 'rococo',
        nombre: 'Rococó',
        fechaInicio: '1720',
        fechaFin: '1780',
        causas: 'Movimiento francés (desde c. 1700 hasta la Revolución de 1789) que reacciona contra la solemnidad barroca. Factores clave: muerte de Luis XIV, influencia de la marquesa de Pompadour e intercambio artístico entre cortes europeas. El arte busca deleitar a una sociedad ociosa: “el único pecado era aburrirse” (Stephen Richard).',
        contexto: 'Traslado de la corte de Versalles a París; nobleza en contacto con élites económicas. Temas de amor, sensualidad y cotidianidad por sobre glorias espirituales o temporales. María Antonieta encarna el estilo y su moda se expande por Europa.',
        caracteristicas: 'Estilo alegre, decoración excesiva, curvas y motivos naturales/orientales. Colores pastel y blancos en lugar de tonos terrosos barrocos. Temas: venturas sentimentales, escenas pastoriles, vida doméstica, erotismo velado con mitología. Prevalece el color sobre el dibujo; gracia frente al dramatismo.',
        autoresYObras: [
          { autor: 'Antoine Watteau', obra: 'Peregrinación a la isla de Citera (1717)' },
          { autor: 'François Boucher', obra: 'La Toilette (1742), Diana después del baño' },
          { autor: 'Jean-Honoré Fragonard', obra: 'El columpio (1767)' },
          { autor: 'Jean-Baptiste-Siméon Chardin', obra: 'La joven institutriz (1740)' }
        ],
        finDelMovimiento: 'Fin del Rococó — comienzo del Neoclasicismo: la Ilustración y la Revolución Francesa rechazan la frivolidad aristocrática.'
      },
      {
        id: 'neoclasicismo',
        periodoId: 'neoclasicismo',
        nombre: 'Neoclasicismo',
        fechaInicio: '1760',
        fechaFin: '1850',
        causas: 'Crítica al Barroco y al Rococó; renovación de la Antigüedad clásica y culto a la razón (Ilustración). Descubrimiento de Pompeya y Herculano (1748). Crisis económica y social en Francia: burguesía sin poder político, descontento popular; Revolución Francesa e Industrial en Inglaterra.',
        contexto: 'Escritores ilustrados cuestionan el derecho divino de los reyes. Revolución Francesa (1789) y ascenso de Napoleón. Revolución Industrial (1780-1850): nuevas clases, ciudades, máquina de vapor, ferrocarril. Arte didáctico y moralizador al servicio de la modernidad.',
        caracteristicas: 'Equilibrio, proporción y simetría grecorromanas como metáfora moral. Luz clara, contornos definidos, temas históricos, mitológicos y republicanos. Escultura en mármol con belleza ideal; arquitectura civil neoclásica. Valores: libertad, patria, heroísmo, rigor y autodominio.',
        autoresYObras: [
          { autor: 'Jacques-Louis David', obra: 'El juramento de los Horacios, La muerte de Marat' },
          { autor: 'Jean-Auguste-Dominique Ingres', obra: 'La gran odalisca, Napoleón en su trono imperial' },
          { autor: 'Antonio Canova', obra: 'Eros y Psique (1787-1793)' },
          { autor: 'Angelica Kauffmann', obra: 'Alegoría de la poesía y la pintura (1782)' }
        ],
        finDelMovimiento: 'Fin del Neoclasicismo — comienzo del Romanticismo: nueva sensibilidad emocional frente a la rigidez académica.'
      },
      {
        id: 'romanticismo',
        periodoId: 'romanticismo',
        nombre: 'Romanticismo',
        fechaInicio: '1800',
        fechaFin: '1850',
        causas: 'Reacción contra el racionalismo ilustrado y el neoclasicismo “frío y servil al poder”. Origen en Alemania e Inglaterra (1767-1785), influenciado por Sturm und Drang. Exaltación de la subjetividad, la imaginación y la libertad creadora.',
        contexto: 'Siglo XVIII: triunfo de la razón y burguesía industrial; desconfianza ante la pérdida de unidad hombre-naturaleza. Rousseau y el “buen salvaje”; nacionalismo con nuevo sentido. Arte como vocación expresiva, no solo didáctica. Oposición a efectos de la industrialización.',
        caracteristicas: 'Emoción, lo sublime, lo misterioso y lo exótico; naturaleza como espejo interior. Color sobre dibujo, luz expresiva, pincelada visible. Paisaje como metáfora del mundo interior; artista atormentado e incomprendido. Grabado, litografía, acuarela y óleo.',
        autoresYObras: [
          { autor: 'Eugène Delacroix', obra: 'La libertad guiando al pueblo (1830)' },
          { autor: 'Théodore Géricault', obra: 'La balsa de la Medusa (1819)' },
          { autor: 'Francisco de Goya', obra: 'El sueño de la razón produce monstruos' },
          { autor: 'Caspar David Friedrich', obra: 'El caminante sobre el mar de nubes (1818)' }
        ],
        finDelMovimiento: 'Fin del Romanticismo — comienzo del Realismo: interés por la realidad externa y la observación social.'
      },
      {
        id: 'impresionismo',
        periodoId: 'impresionismo',
        nombre: 'Impresionismo',
        fechaInicio: '1860',
        fechaFin: '1886',
        causas: 'Punto de inflexión en la pintura occidental que abre la “voluntad diferenciadora de estilo” (P. Francastel). Surge en Francia ante la Academia de Bellas Artes y sus temas historicistas. Artistas de clase media captan luz y color del mundo moderno industrial.',
        contexto: 'Segunda mitad del s. XIX: urbanización, tecnología y rechazo del Salón oficial. Primer salón “impresionista” en París (1874), donde se acuña el término —relacionado con la obra de Monet. Pre-impresionismo en los años 1860 cuestiona la estética académica.',
        caracteristicas: 'Plein air, pinceladas cortas y sueltas, colores vivos sin negro en sombras. Captura del instante, atmósfera y cambios de luz (series como la Catedral de Rouen). Temas: paisaje, vida cotidiana, baile, ciudad. Técnicas: pintura húmedo sobre húmedo, color puro del tubo.',
        autoresYObras: [
          { autor: 'Claude Monet', obra: 'Impresión, sol naciente; serie Catedral de Rouen' },
          { autor: 'Pierre-Auguste Renoir', obra: 'El baile en el Moulin de la Galette' },
          { autor: 'Edgar Degas', obra: 'La clase de danza, La danza (foyer de la ópera)' },
          { autor: 'Berthe Morisot', obra: 'La cuna (1872), Mujer en un vestido negro en la ópera' }
        ],
        finDelMovimiento: 'El éxito del impresionismo y sus límites llevan al Neoimpresionismo y al Posimpresionismo. Fin del Impresionismo — comienzo del Art Nouveau (modernidad 1880).'
      },
      {
        id: 'neoimpresionismo',
        periodoId: 'neoimpresionismo',
        nombre: 'Neoimpresionismo',
        fechaInicio: '1886',
        fechaFin: '1906',
        causas: 'A partir de la década de 1880, búsqueda de base científica para el color. Teorías de Michel Eugène Chevreul y Ogden Rood sobre contraste simultáneo. Liderazgo de Georges Seurat y Paul Signac frente al impresionismo intuitivo.',
        contexto: 'París finisecular: puntillismo y divisionismo con pinceladas separadas para mezcla óptica. Movimiento analítico y meditado, no impulsivo. Transformación del lienzo en “laboratorio de percepción visual”.',
        caracteristicas: 'Puntillismo/divisionismo: puntos de color puro que el ojo mezcla. Mayor precisión cromática y control de la luz. Composiciones más estáticas que el impresionismo. Puente hacia abstracción y vanguardias; Matisse transita hacia el Fauvismo.',
        autoresYObras: [
          { autor: 'Georges Seurat', obra: 'Un domingo en La Grande Jatte (1884), Bañistas en Asnières' },
          { autor: 'Paul Signac', obra: 'Place des Lices, St. Tropez; Palacio de los Papas' },
          { autor: 'Henri-Edmond Cross', obra: 'Paisaje con pequeñas montañas maurescas' },
          { autor: 'Henri Matisse', obra: 'Lujo, calma y voluptuosidad (1904)' }
        ],
        finDelMovimiento: 'El neoimpresionismo sustituye la intuición por la ciencia y sienta bases para el arte moderno. Continúa hacia el Posimpresionismo y el Art Nouveau.'
      },
      {
        id: 'postimpresionismo',
        periodoId: 'postimpresionismo',
        nombre: 'Posimpresionismo',
        fechaInicio: '1886',
        fechaFin: '1910',
        causas: 'Artistas que se alejan del impresionismo (1880-principios s. XX) para explorar subjetividad, forma y emoción. No es un estilo unificado sino respuestas individuales que abren el camino a las vanguardias del siglo XX.',
        contexto: 'Década de 1880 hasta inicios del s. XX en Europa. Rompimiento con la imitación literal de la naturaleza: prioridad de la visión interior del artista sobre la luz objetiva impresionista.',
        caracteristicas: 'Pinceladas exageradas, color audaz, énfasis en estructura y forma. Expresión emocional e individualidad estilística (Cézanne: geometría; Van Gogh: gesto expresivo; Gauguin: color plano y símbolo). Experimentación que anticipa cubismo, expresionismo y fauvismo.',
        autoresYObras: [
          { autor: 'Paul Cézanne', obra: 'Monte Santa Victoria; Las grandes bañistas' },
          { autor: 'Vincent van Gogh', obra: 'La noche estrellada, Los girasoles' },
          { autor: 'Paul Gauguin', obra: '¿De dónde venimos? ¿Qué somos? ¿Adónde vamos?' },
          { autor: 'Henri de Toulouse-Lautrec', obra: 'Carteles del Moulin Rouge' }
        ],
        finDelMovimiento: 'Transición definitiva al arte moderno. Fin del Posimpresionismo — comienzo del Art Nouveau (modernidad 1880-1960).'
      },
      {
        id: 'art-nouveau',
        periodoId: 'art-nouveau',
        nombre: 'Art Nouveau',
        fechaInicio: '1890',
        fechaFin: '1910',
        causas: 'Movimiento europeo (Francia y Bélgica, 1880-90) que rompe con historicismo y academicismo. Idea de “arte nuevo” y “el futuro ya ha comenzado” (Gaudí: “todo sale del gran libro de la naturaleza”). Rechazo de la producción industrial fría y estandarizada.',
        contexto: 'Post Revolución Industrial: integrar belleza en la vida cotidiana (Gesamtkunstwerk). Litografía y cartel publicitario llevan el arte a la calle (ley francesa de 1881). Revistas como The Studio, Jugend y Ver Sacrum difunden el estilo globalmente.',
        caracteristicas: 'Líneas curvas, motivos vegetales y fauna, figura femenina estilizada. Borrón entre bellas artes y artes aplicadas; hierro forjado, vidrio, cerámica. Colores planos en pintura; finalidad estética más que social. Denominaciones: Jugendstil, Modernismo, Sezession, etc.',
        autoresYObras: [
          { autor: 'Alphonse Mucha', obra: 'Carteles de Sarah Bernhardt, Las estaciones' },
          { autor: 'Hector Guimard', obra: 'Entradas del Metro de París' },
          { autor: 'Antoni Gaudí', obra: 'Sagrada Familia, arquitectura modernista' },
          { autor: 'Gustav Klimt', obra: 'El beso (Viena)' }
        ],
        finDelMovimiento: 'La Primera Guerra Mundial hace obsoleto el optimismo decorativo. Transición hacia Art Déco y funcionalismo.'
      },
      {
        id: 'art-deco',
        periodoId: 'art-deco',
        nombre: 'Art Déco',
        fechaInicio: '1920',
        fechaFin: '1940',
        causas: 'Estilo de diseño arquitectónico, industrial y gráfico gestado hacia 1910; máximo esplendor entre 1925 y 1935, asociado a la Belle Époque y los “años locos”. Símbolo de progreso, orden urbano y maquinaria; Exposición Internacional de Artes Decorativas (París, 1925).',
        contexto: 'Posguerra WWI: opulencia con influencias de constructivismo, cubismo, futurismo y dadaísmo. Expansión a Hollywood y industria cinematográfica. Eclecticismo con motivos egipcios, mesopotámicos, aztecas y geométricos.',
        caracteristicas: 'Geometrización: línea recta, zigzag, espirales subordinadas a simetría. Color audaz en textiles, baquelita y plásticos; materiales lujosos (cromo, ébano, carey). Figura femenina emancipada; máquinas, aviones y energía eléctrica como iconos de modernidad.',
        autoresYObras: [
          { autor: 'Tamara de Lempicka', obra: 'Autorretrato en el Bugatti verde (1929)' },
          { autor: 'Erté (Romain de Tirtoff)', obra: 'Portadas de Harper’s Bazaar, serie Shéhérazade' },
          { autor: 'William Van Alen', obra: 'Edificio Chrysler, Nueva York' },
          { autor: 'Henri Sauvage y Wybo', obra: 'Pabellón Exposición Internacional de París (1925)' }
        ],
        finDelMovimiento: 'Gran Depresión (1929), Segunda Guerra Mundial y ascenso del funcionalismo y la Bauhaus desplazan el Art Déco.'
      }
    ]
  },
  {
    id: 'alemania',
    nombre: 'Alemania',
    coordenadas: [10.4515, 51.1657],
    zoom: 6,
    movimientos: [
      {
        id: 'bauhaus',
        periodoId: 'bauhaus',
        nombre: 'Bauhaus',
        fechaInicio: '1919',
        fechaFin: '1933',
        causas: 'Escuela fundada por Walter Gropius en Weimar (1919): “recuperar métodos artesanales, elevar la artesanía al nivel de las Bellas Artes e integrar productos en la industria” (Manifiesto). Reforma de enseñanzas artísticas como base para transformar la sociedad burguesa de posguerra.',
        contexto: 'Tres sedes: Weimar (1919-25), Dessau (1925-32), Berlín (1932-33). Directores: Gropius, Hannes Meyer, Mies van der Rohe. Fases idealista, racional y de reconocimiento. Maestros: Klee, Kandinsky, Feininger, Itten; curso preliminar y talleres integrados.',
        caracteristicas: '“La forma sigue a la función”; unión de arte, artesanía y arquitectura. Obra de arte total, racionalidad, producción en serie y casas prefabricadas. Materiales: madera, acero, vidrio; influencia del constructivismo. Cierre nazista en 1933 por arte “degenerado”.',
        autoresYObras: [
          { autor: 'Walter Gropius', obra: 'Edificio Bauhaus de Dessau (1926)' },
          { autor: 'Paul Klee', obra: 'Ad Parnassum, enseñanza de forma en la Bauhaus' },
          { autor: 'Wassily Kandinsky', obra: 'Composición VIII; diseño básico de color y forma' },
          { autor: 'Marcel Breuer', obra: 'Silla Wassily, Silla Cesca' }
        ],
        finDelMovimiento: 'Cierre forzado en 1933; emigración de maestros a EE.UU. difunde el modernismo internacional en diseño, arquitectura y educación artística.'
      }
    ]
  },
  {
    id: 'inglaterra',
    nombre: 'Londres',
    coordenadas: [-0.1276, 51.5074],
    zoom: 11,
    movimientos: [
      {
        id: 'realismo',
        periodoId: 'realismo',
        nombre: 'Realismo',
        fechaInicio: '1840',
        fechaFin: '1880',
        causas: 'Corriente que surge en Francia (1840-1880) y se expande a Europa y América. Gran interés por la “realidad externa”: observar la sociedad como un laboratorio y ofrecer datos al espectador (Ercana Pérez). Reacción a las idealizaciones románticas.',
        contexto: 'Siglo XIX: burguesía hegemónica, Revolución Industrial en Inglaterra (1760-1840), éxodo rural y ciudades en crecimiento. Tensiones sociales y políticas; estabilidad relativa en Inglaterra tras revolución burguesa. Denuncia de desigualdad, corrupción y condiciones obreras.',
        caracteristicas: 'Representación objetiva del presente; personas comunes como sujetos dignos. Precisión técnica y temática cruda sin idealización mitológica o religiosa. Crítica social y política; naturalismo y detalle. Puente hacia el Impresionismo (Courbet, Manet).',
        autoresYObras: [
          { autor: 'Gustave Courbet', obra: 'Los picapedreros, Entierro en Ornans, El taller del pintor' },
          { autor: 'Jean-François Millet', obra: 'Las espigadoras (1857), El Ángelus' },
          { autor: 'Honoré Daumier', obra: 'El vagón de tercera clase (1864), litografías políticas' },
          { autor: 'Auguste Rodin', obra: 'El pensador (1881-1882)' }
        ],
        finDelMovimiento: 'Fin del Realismo — comienzo del Impresionismo: la percepción subjetiva de la luz redefine lo “real” en la pintura.'
      }
    ]
  }
]

export const periodos = [
  { id: 'antiguedad',       nombre: 'Antigüedad',        rango: '700 a.C. – 476 d.C.', color: '#ffa600' },
  { id: 'edad-media',       nombre: 'Edad Media',         rango: '476 – 1450',          color: '#7300ff' },
  { id: 'renacimiento',     nombre: 'Renacimiento',       rango: '1400 – 1600',          color: '#ff3700' },
  { id: 'barroco',          nombre: 'Barroco',            rango: '1600 – 1750',          color: '#0077ff' },
  { id: 'rococo',           nombre: 'Rococó',             rango: '1720 – 1780',          color: '#ffcc00' },
  { id: 'neoclasicismo',    nombre: 'Neoclasicismo',      rango: '1760 – 1850',          color: '#3A9E6A' },
  { id: 'romanticismo',     nombre: 'Romanticismo',       rango: '1800 – 1850',          color: '#9E3A6A' },
  { id: 'realismo',         nombre: 'Realismo',           rango: '1840 – 1880',          color: '#6A7A3A' },
  { id: 'impresionismo',    nombre: 'Impresionismo',      rango: '1860 – 1886',          color: '#3A8AC4' },
  { id: 'neoimpresionismo', nombre: 'Neoimpresionismo',   rango: '1886 – 1906',          color: '#7AC43A' },
  { id: 'postimpresionismo',nombre: 'Postimpresionismo',  rango: '1886 – 1910',          color: '#C43A9E' },
  { id: 'art-nouveau',      nombre: 'Art Nouveau',        rango: '1890 – 1910',          color: '#3AC4A8' },
  { id: 'art-deco',         nombre: 'Art Déco',           rango: '1920 – 1940',          color: '#C4703A' },
  { id: 'bauhaus',          nombre: 'Bauhaus',            rango: '1919 – 1933',          color: '#3A4AC4' }
]
