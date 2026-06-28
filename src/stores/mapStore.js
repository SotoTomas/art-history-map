import { defineStore } from 'pinia'
import { ref, shallowRef, markRaw } from 'vue'
import { FLY_OPTIONS } from '../map/camera.js'

export const useMapStore = defineStore('map', () => {
  // Mapbox no funciona si Vue envuelve el mapa en un Proxy reactivo profundo
  const mapInstance       = shallowRef(null)
  const mapReady          = ref(false)
  const activeLugarId     = ref(null)
  const activeMovimientoId = ref(null)
  const panelMode         = ref(null) // 'lista' | 'detalle' | null
  const activePeriodoId   = ref(null)

  function setMap(map) {
    mapInstance.value = markRaw(map)
    mapReady.value = true
  }

  function flyTo(coordenadas, zoom = 13) {
    if (!mapInstance.value) return
    mapInstance.value.flyTo({
      center: coordenadas,
      zoom,
      pitch: 0,
      bearing: 0,
      ...FLY_OPTIONS
    })
  }

  // Mismo zoom que la timeline; si hay un solo movimiento, abre detalle (y 3D si aplica)
  function openFromMarker(lugar) {
    if (lugar.movimientos.length === 1) {
      const mov = lugar.movimientos[0]
      openMovimiento(mov.id, lugar.id)
      return
    }
    openLugar(lugar.id, lugar.coordenadas, lugar.zoom)
  }

  // Click en marcador del mapa → lista de movimientos (varios) o detalle (uno solo)
  function openLugar(lugarId, coordenadas, zoom) {
    activeLugarId.value      = lugarId
    activeMovimientoId.value = null
    panelMode.value          = 'lista'
    flyTo(coordenadas, zoom)
  }

  // Click en movimiento (desde lista o desde timeline) → muestra detalle
  // La cámara la controla MapView (pitch 3D si hay modelo; si no, fly plano)
  function openMovimiento(movimientoId, lugarId) {
    activeLugarId.value      = lugarId
    activeMovimientoId.value = movimientoId
    panelMode.value          = 'detalle'
    activePeriodoId.value    = movimientoId
  }

  function closePanel() {
    activeLugarId.value      = null
    activeMovimientoId.value = null
    panelMode.value          = null
  }

  function setPeriodo(periodoId) {
    activePeriodoId.value = periodoId
  }

  return {
    mapInstance,
    mapReady,
    activeLugarId,
    activeMovimientoId,
    panelMode,
    activePeriodoId,
    setMap,
    flyTo,
    openLugar,
    openFromMarker,
    openMovimiento,
    closePanel,
    setPeriodo
  }
})