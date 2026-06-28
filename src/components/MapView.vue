<template>
  <div id="map-container" ref="mapContainer" />
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import mapboxgl from 'mapbox-gl'
import { useMapStore } from '../stores/mapStore.js'
import { lugares } from '../data/movements.js'
import { useThreeScene } from '../composables/useThreeScene.js'
import { MODEL_MAP } from '@/Three/models/index.js'
import { FLY_OPTIONS, waitForMoveEnd } from '../map/camera.js'
import { applyMapPresentation } from '../map/mapStyle.js'

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN

const three        = useThreeScene()
const mapContainer = ref(null)
const mapStore     = useMapStore()
let map            = null
let activateToken  = 0

const ZOOM_3D    = 15
const PITCH_3D   = 60
const BEARING_3D = -30

onMounted(() => {
  map = new mapboxgl.Map({
    container: mapContainer.value,
    style:     'mapbox://styles/mapbox/satellite-v9',
    center:    [23.7275, 37.9838],
    zoom:      3,
    minZoom:   2,
    maxZoom:   20,
    pitch:     0,
    bearing:   0,
    antialias: true
  })

  map.addControl(new mapboxgl.NavigationControl(), 'top-left')
  map.addControl(new mapboxgl.ScaleControl(), 'bottom-left')

  map.on('load', () => {
    applyMapPresentation(map, { satellite: true })
    mapStore.setMap(map)
    three.init(map)
    syncCameraAndModel()
  })

  map.on('style.load', () => applyMapPresentation(map, { satellite: true }))
})

function hasModel(movimientoId) {
  const url = MODEL_MAP[movimientoId]
  return typeof url === 'string' && url.length > 0
}

function getSelection() {
  if (mapStore.panelMode !== 'detalle' || !mapStore.activeMovimientoId) return null

  const lugar = lugares.find((l) => l.id === mapStore.activeLugarId)
  const mov   = lugar?.movimientos.find((m) => m.id === mapStore.activeMovimientoId)
  if (!lugar || !mov || !hasModel(mov.id)) return null

  return { lugar, mov, modelUrl: MODEL_MAP[mov.id] }
}

function flyDetallePlano(lugar) {
  map.flyTo({
    center:  lugar.coordenadas,
    zoom:    lugar.zoom ?? 13,
    pitch:   0,
    bearing: 0,
    ...FLY_OPTIONS
  })
}

async function activateThree(lugar, mov, modelUrl) {
  const token = ++activateToken

  map.flyTo({
    center:  lugar.coordenadas,
    zoom:    ZOOM_3D,
    pitch:   PITCH_3D,
    bearing: BEARING_3D,
    ...FLY_OPTIONS
  })

  await waitForMoveEnd(map)
  if (token !== activateToken) return

  try {
    await three.showModel(modelUrl, lugar.coordenadas, 50)
    if (token !== activateToken) return
    map.triggerRepaint()
  } catch (err) {
    console.error('Error al mostrar modelo 3D:', err)
  }
}

function deactivateThree() {
  activateToken++
  three.removeModel()
  if (map && map.getPitch() > 5) {
    map.easeTo({ pitch: 0, bearing: 0, duration: 600 })
  }
}

function syncCameraAndModel() {
  if (!map) return
  three.init(map)

  const selection = getSelection()
  if (selection) {
    activateThree(selection.lugar, selection.mov, selection.modelUrl)
    return
  }

  if (mapStore.panelMode === 'detalle' && mapStore.activeLugarId) {
    deactivateThree()
    const lugar = lugares.find((l) => l.id === mapStore.activeLugarId)
    if (lugar) flyDetallePlano(lugar)
    return
  }

  if (mapStore.panelMode !== 'detalle') {
    deactivateThree()
  }
}

watch(
  () => [mapStore.activeMovimientoId, mapStore.panelMode, mapStore.activeLugarId],
  () => syncCameraAndModel()
)

watch(
  () => mapStore.panelMode,
  (val) => {
    if (!val) deactivateThree()
  }
)

onUnmounted(() => {
  activateToken++
  three.destroy()
  map?.remove()
})
</script>

<style scoped>
#map-container {
  width: 100%;
  height: 100vh;
  filter: sepia(0.24) saturate(0.88) hue-rotate(-4deg) brightness(1.02) contrast(1.02);
}
</style>
