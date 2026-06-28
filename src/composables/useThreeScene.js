import { ThreeMapLayer } from '@/Three/ThreeMapLayer.js'

let layer = null

export function useThreeScene() {

  function init(map) {
    if (!map) return
    if (layer) {
      layer.mount()
      return
    }
    layer = new ThreeMapLayer(map)
    layer.mount()
  }

  async function showModel(url, coordinates, altitude) {
    if (!layer) {
      throw new Error('Capa 3D no inicializada. Esperá a que el mapa termine de cargar.')
    }
    await layer.showModel(url, coordinates, altitude)
  }

  function removeModel() {
    layer?.removeModel()
  }

  function destroy() {
    layer?.destroy()
    layer = null
  }

  function isReady() {
    return Boolean(layer)
  }

  return { init, showModel, removeModel, destroy, isReady }
}
