export const locations = [
  {
    id: 'florencia',
    nombre: 'Florencia',
    subtitulo: 'Cuna del Renacimiento',
    coordenadas: [11.2558, 43.7696],
    zoom: 13,
    epoca: 'renacimiento',
    color: '#C4593A',
    icono: '🎨',
    panel: {
      heroEmoji: '🎨',
      periodo: '1400 – 1600',
      descripcion: 'Centro neurálgico del Renacimiento italiano, donde el mecenazgo de los Medici impulsó a Botticelli, Leonardo y Miguel Ángel. La cúpula de Brunelleschi transformó la arquitectura occidental para siempre.',
      galeria: [
        { emoji: '🖼️', caption: 'La Primavera — Botticelli' },
        { emoji: '🗿', caption: 'David — Michelangelo' },
        { emoji: '⛪', caption: 'Cúpula — Brunelleschi' }
      ],
      timeline: [
        { año: '1401', evento: 'Concurso del Baptisterio — Ghiberti vs Brunelleschi' },
        { año: '1485', evento: 'Nacimiento de Venus — Botticelli' },
        { año: '1504', evento: 'David — Michelangelo terminado' }
      ],
      tags: ['Renacimiento', 'Humanismo', 'Neoplatonismo', 'Perspectiva lineal'],
      video: 'Florencia: Arte del Renacimiento'
    }
  },
  {
    id: 'atenas',
    nombre: 'Atenas',
    subtitulo: 'Arte de la Antigüedad Clásica',
    coordenadas: [23.7275, 37.9838],
    zoom: 13,
    epoca: 'antiguedad',
    color: '#C4943A',
    icono: '🏛️',
    panel: {
      heroEmoji: '🏛️',
      periodo: '500 a.C. – 400 d.C.',
      descripcion: 'Epicentro del arte y la filosofía de la Grecia clásica. El Partenón y la escultura de Fidias sentaron los cánones de belleza que perdurarían siglos en Occidente.',
      galeria: [
        { emoji: '🏺', caption: 'Cerámica ática' },
        { emoji: '⚡', caption: 'Partenón — Fidias' },
        { emoji: '🗿', caption: 'Kouroi arcaicos' }
      ],
      timeline: [
        { año: '447 a.C.', evento: 'Inicio construcción del Partenón' },
        { año: '400 a.C.', evento: 'Escultura de Praxíteles' },
        { año: '300 a.C.', evento: 'Inicio del período helenístico' }
      ],
      tags: ['Arte Clásico', 'Escultura', 'Arquitectura dórica', 'Cerámica'],
      video: 'Atenas: El arte griego clásico'
    }
  },
  {
    id: 'paris',
    nombre: 'París',
    subtitulo: 'Capital del Arte Moderno',
    coordenadas: [2.3522, 48.8566],
    zoom: 12,
    epoca: 'moderno',
    color: '#3A9E6A',
    icono: '🗼',
    panel: {
      heroEmoji: '🗼',
      periodo: '1860 – 1970',
      descripcion: 'De la Académie des Beaux-Arts al cubismo de Picasso, París fue el laboratorio del arte moderno. Montmartre, el Louvre y los Salones definieron la estética occidental por un siglo.',
      galeria: [
        { emoji: '🌟', caption: 'Impresionismo — Monet' },
        { emoji: '🎭', caption: 'Cubismo — Picasso' },
        { emoji: '🖼️', caption: 'Louvre' }
      ],
      timeline: [
        { año: '1863', evento: 'Salón de los Rechazados — Manet' },
        { año: '1874', evento: 'Primera exposición impresionista' },
        { año: '1907', evento: 'Las Señoritas de Avignon — Picasso' }
      ],
      tags: ['Impresionismo', 'Cubismo', 'Art Nouveau', 'Surrealismo'],
      video: 'París: Capital del arte moderno'
    }
  },
  {
    id: 'kyoto',
    nombre: 'Kyoto',
    subtitulo: 'Arte Japonés Clásico',
    coordenadas: [135.7681, 35.0116],
    zoom: 13,
    epoca: 'medieval',
    color: '#7A5C9E',
    icono: '⛩️',
    panel: {
      heroEmoji: '⛩️',
      periodo: '794 – 1868',
      descripcion: 'Capital cultural del Japón durante más de mil años. Los jardines zen, la cerámica Raku y el teatro Noh crearon una estética que influyó profundamente en el arte occidental.',
      galeria: [
        { emoji: '🌸', caption: 'Ukiyo-e — Hokusai' },
        { emoji: '🏯', caption: 'Arquitectura Heian' },
        { emoji: '🎎', caption: 'Cerámica Raku' }
      ],
      timeline: [
        { año: '794', evento: 'Kyoto se convierte en capital imperial' },
        { año: '1185', evento: 'Arte del período Kamakura' },
        { año: '1615', evento: 'Inicio del período Edo' }
      ],
      tags: ['Ukiyo-e', 'Cerámica Raku', 'Jardines Zen', 'Arquitectura Shinto'],
      video: 'Kyoto: Arte y espiritualidad japonesa'
    }
  },
  {
    id: 'tenochtitlan',
    nombre: 'Tenochtitlan',
    subtitulo: 'Arte del Mundo Mexica',
    coordenadas: [-99.1332, 19.4326],
    zoom: 13,
    epoca: 'Arte Barroco',
    color: '#3A7AC4',
    icono: '🦅',
    panel: {
      heroEmoji: '🦅',
      periodo: '1300 – 1521',
      descripcion: 'Se puede observar como el barróco europeo se fusionó con la estética latinoamericana',
      galeria: [
        { emoji: '🌞', caption: 'Piedra del Sol' },
        { emoji: '🐍', caption: 'Coatlicue' },
        { emoji: '🏗️', caption: 'Templo Mayor' }
      ],
      timeline: [
        { año: '1325', evento: 'Fundación de Tenochtitlan' },
        { año: '1428', evento: 'Imperio de la Triple Alianza — arte monumental' },
        { año: '1487', evento: 'Ampliación del Templo Mayor' }
      ],
      tags: ['Arte Barroco'],
      video: 'Tenochtitlan: Arte del mundo mexica'
    }
  },
  {
    id: 'roma',
    nombre: 'Roma',
    subtitulo: 'Arte Barroco y Clásico',
    coordenadas: [12.4964, 41.9028],
    zoom: 13,
    epoca: 'barroco',
    color: '#3A7AC4',
    icono: '🏟️',
    panel: {
      heroEmoji: '🏟️',
      periodo: '200 a.C. – 1750',
      descripcion: 'De los foros imperiales a Bernini, Roma acumuló dos mil años de arte ininterrumpido. La Capilla Sixtina, el Coliseo y las plazas barrocas forman el museo a cielo abierto más grande del mundo.',
      galeria: [
        { emoji: '🕍', caption: 'Capilla Sixtina — Miguel Ángel' },
        { emoji: '⛲', caption: 'Fontana di Trevi — Salvi' },
        { emoji: '🏟️', caption: 'Coliseo Romano' }
      ],
      timeline: [
        { año: '70 d.C.', evento: 'Construcción del Coliseo' },
        { año: '1512', evento: 'Miguel Ángel termina la Capilla Sixtina' },
        { año: '1626', evento: 'Inauguración de la Basílica de San Pedro' }
      ],
      tags: ['Arte Romano', 'Barroco', 'Renacimiento', 'Escultura'],
      video: 'Roma: Dos mil años de arte'
    }
  }
]