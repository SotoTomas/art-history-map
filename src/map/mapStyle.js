const DEM_SOURCE_ID = 'mapbox-dem'
const HILLSHADE_LAYER_ID = 'earth-hillshade'

const HIDE_LABEL = [
  /road/i,
  /street/i,
  /path/i,
  /bridge/i,
  /tunnel/i,
  /motorway/i,
  /junction/i,
  /exit/i,
  /ferry/i,
  /rail/i,
  /transit/i,
  /poi/i,
  /airport/i,
  /waterway/i,
  /natural-point/i,
  /block/i,
  /address/i,
  /neighbourhood/i,
  /neighborhood/i,
  /suburb/i,
  /minor/i,
  /village/i,
  /town/i,
  /hamlet/i,
  /locality/i,
  /islet/i,
  /archipelago/i
]

const KEEP_LABEL = [
  /country/i,
  /continent/i,
  /state/i,
  /province/i,
  /settlement-major/i,
  /place-city/i,
  /city/i,
  /capital/i
]

const HIDE_POLITICAL = [
  /admin/i,
  /boundary/i,
  /border/i,
  /disputed/i,
  /maritime/i
]

/** Relieve 3D: 1 = realista, 1.4 = más dramático */
export const TERRAIN_EXAGGERATION = 1.2

function shouldHideLabelLayer(layerId) {
  if (KEEP_LABEL.some((re) => re.test(layerId))) return false
  return HIDE_LABEL.some((re) => re.test(layerId))
}

function shouldHidePoliticalLayer(layer) {
  const id = layer.id.toLowerCase()
  if (HIDE_POLITICAL.some((re) => re.test(id))) return true
  if (layer.type === 'line' && (/boundary|border|admin|dispute/.test(id))) return true
  if (layer.type === 'fill' && (/admin|country-|state-|province-/.test(id))) return true
  return false
}

function findHillshadeInsertBefore(map) {
  const layers = map.getStyle()?.layers
  if (!layers) return undefined

  return layers.find(
    (l) => l.type === 'symbol' || (l.type === 'line' && /boundary|admin|road/.test(l.id))
  )?.id
}

export function hidePoliticalLayers(map) {
  if (!map?.getStyle()?.layers) return

  for (const layer of map.getStyle().layers) {
    if (!shouldHidePoliticalLayer(layer)) continue
    try {
      map.setLayoutProperty(layer.id, 'visibility', 'none')
    } catch {
      // capa no editable en este estilo
    }
  }
}

export function applyPlaceLabelsOnly(map) {
  if (!map?.getStyle()?.layers) return

  for (const layer of map.getStyle().layers) {
    if (layer.type !== 'symbol') continue
    if (!layer.layout?.['text-field']) continue

    const visibility = shouldHideLabelLayer(layer.id) ? 'none' : 'visible'
    try {
      map.setLayoutProperty(layer.id, 'visibility', visibility)
    } catch {
      // capa no disponible en este estilo
    }
  }
}

export function enableEarthTerrain(map) {
  if (!map?.isStyleLoaded()) return

  try {
    if (!map.getSource(DEM_SOURCE_ID)) {
      map.addSource(DEM_SOURCE_ID, {
        type: 'raster-dem',
        url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
        tileSize: 512,
        maxzoom: 14
      })
    }

    if (!map.getLayer(HILLSHADE_LAYER_ID)) {
      map.addLayer(
        {
          id: HILLSHADE_LAYER_ID,
          type: 'hillshade',
          source: DEM_SOURCE_ID,
          paint: {
            'hillshade-exaggeration': 0.4,
            'hillshade-shadow-color': '#2c261c',
            'hillshade-highlight-color': '#f0e6d0',
            'hillshade-accent-color': '#6b5d48',
            'hillshade-illumination-direction': 315
          }
        },
        findHillshadeInsertBefore(map)
      )
    }

    map.setTerrain({ source: DEM_SOURCE_ID, exaggeration: TERRAIN_EXAGGERATION })
  } catch (err) {
    console.warn('No se pudo activar relieve 3D:', err)
  }
}

export function applyVintageAtmosphere(map) {
  if (!map?.setFog) return

  map.setFog({
    color: 'rgb(186, 168, 140)',
    'high-color': 'rgb(218, 200, 175)',
    'horizon-blend': 0.14,
    'space-color': 'rgb(140, 128, 112)',
    'star-intensity': 0
  })

  if (map.setLight) {
    map.setLight({
      anchor: 'viewport',
      color: '#fff4e0',
      intensity: 0.4,
      position: [1.2, 210, 30]
    })
  }
}

export function tuneVintageBasemap(map) {
  const style = map.getStyle()
  if (!style?.layers) return

  for (const layer of style.layers) {
    if (layer.type !== 'fill' && layer.type !== 'background') continue

    const id = layer.id.toLowerCase()
    if (!id.includes('water') && layer.type !== 'background') continue

    try {
      if (layer.type === 'background') {
        map.setPaintProperty(layer.id, 'background-color', '#e8dcc8')
      } else {
        map.setPaintProperty(layer.id, 'fill-color', '#c9d4c0')
      }
    } catch {
      // ignorar capas sin paint editable
    }
  }
}

export function applyMapPresentation(map, { satellite = false } = {}) {
  hidePoliticalLayers(map)
  applyPlaceLabelsOnly(map)
  enableEarthTerrain(map)
  applyVintageAtmosphere(map)

  if (!satellite) {
    tuneVintageBasemap(map)
  }
}
