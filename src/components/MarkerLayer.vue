<template>
  <!-- Los marcadores se crean en JS y Mapbox los inserta en el mapa -->
  <div class="marker-layer" aria-hidden="true" />
</template>

<script setup>
import { watch, onMounted, onUnmounted, toRaw } from 'vue'
import mapboxgl from 'mapbox-gl'
import { lugares } from '../data/movements.js'
import { useMapStore } from '../stores/mapStore.js'

const mapStore = useMapStore()
const markersMap = {}
let attached = false

const iconos = {
  grecia:            '🏛️',
  roma:              '🏟️',
  'europa-medieval': '⛪',
  florencia:         '🎨',
  paris:             '🗼',
  alemania:          '🔧',
  inglaterra:        '🏭'
}

function getIcono(lugar) {
  return iconos[lugar.id] || '📍'
}

function getMap() {
  const map = mapStore.mapInstance
  return map ? toRaw(map) : null
}

function createMarkerElement(lugar) {
  const root = document.createElement('div')
  root.className = 'custom-marker'
  root.dataset.lugarId = lugar.id

  const movLabel = lugar.movimientos.length === 1
    ? '1 movimiento'
    : `${lugar.movimientos.length} movimientos`

  root.innerHTML = `
    <div class="marker-anchor">
      <div class="marker-diamond">
        <span class="marker-icon">${getIcono(lugar)}</span>
      </div>
      <div class="marker-pulse" aria-hidden="true"></div>
      <div class="marker-label">
        <span class="label-nombre">${lugar.nombre}</span>
        <span class="label-count">${movLabel}</span>
      </div>
    </div>
  `

  root.addEventListener('click', (e) => {
    e.stopPropagation()
    mapStore.openFromMarker(lugar)
  })

  return root
}

function syncActiveClass() {
  const activeId = mapStore.activeLugarId
  Object.entries(markersMap).forEach(([id, { element }]) => {
    element.classList.toggle('active', id === activeId)
  })
}

function initMarkers(map) {
  lugares.forEach((lugar) => {
    if (markersMap[lugar.id]) return

    const element = createMarkerElement(lugar)

    const marker = new mapboxgl.Marker({
      element,
      anchor: 'center',
      pitchAlignment: 'map',
      rotationAlignment: 'map'
    })
      .setLngLat(lugar.coordenadas)
      .addTo(map)

    markersMap[lugar.id] = { marker, element }
  })

  syncActiveClass()
}

function attachMarkers(map) {
  if (!map || attached) return
  attached = true
  initMarkers(map)
}

onMounted(() => {
  const map = getMap()
  if (map) attachMarkers(map)
})

watch(
  () => mapStore.mapReady,
  (ready) => {
    if (!ready) return
    attachMarkers(getMap())
  }
)

watch(() => mapStore.activeLugarId, syncActiveClass)

onUnmounted(() => {
  Object.values(markersMap).forEach(({ marker }) => marker.remove())
  attached = false
})
</script>

<style>
.marker-layer {
  display: none;
}

.mapboxgl-marker .custom-marker {
  width: 0;
  height: 0;
  cursor: pointer;
  pointer-events: none;
}

.mapboxgl-marker .marker-anchor {
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  height: 40px;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
}

.mapboxgl-marker .marker-diamond {
  width: 36px;
  height: 36px;
  background: rgba(16, 10, 3, 0.92);
  border: 2px solid rgba(200, 160, 80, 0.7);
  border-radius: 50% 50% 50% 4px;
  transform: rotate(45deg);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
}

.mapboxgl-marker .marker-icon {
  transform: rotate(-45deg);
  font-size: 16px;
  line-height: 1;
}

.mapboxgl-marker .marker-pulse {
  position: absolute;
  inset: 2px;
  border-radius: 50%;
  border: 2px solid rgba(200, 160, 80, 0.6);
  opacity: 0;
  pointer-events: none;
}

.mapboxgl-marker .custom-marker.active .marker-pulse {
  opacity: 1;
  animation: marker-pulse 2s ease-out infinite;
}

@keyframes marker-pulse {
  0%   { transform: scale(0.85); opacity: 0.8; }
  100% { transform: scale(1.8); opacity: 0; }
}

.mapboxgl-marker .marker-label {
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  background: rgba(16, 10, 3, 0.92);
  border: 1px solid rgba(200, 160, 80, 0.3);
  border-radius: 6px;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}

.mapboxgl-marker .custom-marker:hover .marker-label,
.mapboxgl-marker .custom-marker.active .marker-label {
  opacity: 1;
}

.mapboxgl-marker .label-nombre {
  color: #f0e4c4;
  font-size: 12px;
  font-weight: 500;
}

.mapboxgl-marker .label-count {
  color: #c4a86a;
  font-size: 10px;
}
</style>
