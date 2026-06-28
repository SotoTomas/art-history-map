src/
├── components/
│   ├── MapView.vue          ← instancia Mapbox, maneja eventos
│   ├── MarkerLayer.vue      ← renderiza marcadores custom con el API de Mapbox
│   ├── InfoPanel.vue        ← panel lateral rico (galería, timeline, video)
│   ├── PanelGallery.vue     ← carrusel de imágenes
│   ├── PanelTimeline.vue    ← línea de tiempo vertical
│   └── PanelVideo.vue       ← embed de video
├── stores/
│   └── mapStore.js          ← estado: activeLocation, panelOpen, flyConfig
├── data/
│   └── locations.js         ← JSON con todos los POIs del arte
├── composables/
│   ├── useMapbox.js         ← inicialización y helpers del mapa
│   └── useFlyTo.js          ← lógica de close-up animado
└── App.vue