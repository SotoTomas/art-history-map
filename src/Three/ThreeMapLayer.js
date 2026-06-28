import * as THREE from 'three'
import mapboxgl from 'mapbox-gl'
import { loadModel } from './models/ModelManager.js'

const LAYER_ID = 'three-model-layer'
const MODEL_ROTATE = [Math.PI / 2, 0, 0]
const MODEL_METERS = 4000

function makePlaceholder() {
  return new THREE.Mesh(
    new THREE.BoxGeometry(30, 30, 30),
    new THREE.MeshStandardMaterial({ color: 0xc4a050, metalness: 0.3, roughness: 0.6 })
  )
}

export class ThreeMapLayer {

  constructor(map) {
    this.map = map
    this.scene = null
    this.camera = null
    this.renderer = null
    this.currentModel = null
    this.coordinates = null
    this.modelAltitude = 0
    this.modelTransform = null
    this._ready = false
    this._resetReadyPromise()
  }

  _resetReadyPromise() {
    this._readyPromise = new Promise((resolve) => {
      this._readyResolve = resolve
    })
  }

  waitReady() {
    return this._readyPromise
  }

  _markReady() {
    if (this._ready) return
    this._ready = true
    this._readyResolve?.()
  }

  _updateTransform() {
    if (!this.coordinates) return

    const mercator = mapboxgl.MercatorCoordinate.fromLngLat(
      { lng: this.coordinates[0], lat: this.coordinates[1] },
      this.modelAltitude
    )

    this.modelTransform = {
      translateX: mercator.x,
      translateY: mercator.y,
      translateZ: mercator.z,
      rotateX: MODEL_ROTATE[0],
      rotateY: MODEL_ROTATE[1],
      rotateZ: MODEL_ROTATE[2],
      scale: mercator.meterInMercatorCoordinateUnits()
    }
  }

  _prepareModel(object) {
    const box = new THREE.Box3().setFromObject(object)
    const center = box.getCenter(new THREE.Vector3())
    const size = box.getSize(new THREE.Vector3())
    object.position.sub(center)

    const maxDim = Math.max(size.x, size.y, size.z)
    if (maxDim > 0) {
      object.scale.multiplyScalar(MODEL_METERS / maxDim)
    }

    return object
  }

  _setModel(mesh) {
    if (this.currentModel && this.scene) {
      this.scene.remove(this.currentModel)
    }
    this.currentModel = mesh
    this.scene?.add(mesh)
    this.map?.triggerRepaint()
  }

  _ensurePitchFor3D() {
    if (!this.map) return
    if (this.map.getPitch() >= 30) return
    this.map.jumpTo({ pitch: 60 })
  }

  mount() {
    if (this.map.getLayer(LAYER_ID)) {
      if (this.renderer) this._markReady()
      return
    }

    const layer = this

    const customLayer = {
      id: LAYER_ID,
      type: 'custom',
      renderingMode: '3d',

      onAdd(map, gl) {
        layer.camera = new THREE.Camera()
        layer.scene = new THREE.Scene()

        const light1 = new THREE.DirectionalLight(0xffffff, 2)
        light1.position.set(0, -70, 100).normalize()
        layer.scene.add(light1)

        const light2 = new THREE.DirectionalLight(0xffffff, 2)
        light2.position.set(0, 70, 100).normalize()
        layer.scene.add(light2)

        layer.scene.add(new THREE.AmbientLight(0xffffff, 1.2))

        layer.renderer = new THREE.WebGLRenderer({
          canvas: map.getCanvas(),
          context: gl,
          antialias: true
        })
        layer.renderer.autoClear = false
        layer.renderer.outputColorSpace = THREE.SRGBColorSpace

        layer._markReady()
      },

      render(gl, matrix) {
        if (!layer.currentModel || !layer.modelTransform || !layer.renderer) return

        layer._updateTransform()

        const rotationX = new THREE.Matrix4().makeRotationAxis(
          new THREE.Vector3(1, 0, 0),
          layer.modelTransform.rotateX
        )
        const rotationY = new THREE.Matrix4().makeRotationAxis(
          new THREE.Vector3(0, 1, 0),
          layer.modelTransform.rotateY
        )
        const rotationZ = new THREE.Matrix4().makeRotationAxis(
          new THREE.Vector3(0, 0, 1),
          layer.modelTransform.rotateZ
        )

        const m = new THREE.Matrix4().fromArray(matrix)
        const l = new THREE.Matrix4()
          .makeTranslation(
            layer.modelTransform.translateX,
            layer.modelTransform.translateY,
            layer.modelTransform.translateZ
          )
          .scale(
            new THREE.Vector3(
              layer.modelTransform.scale,
              -layer.modelTransform.scale,
              layer.modelTransform.scale
            )
          )
          .multiply(rotationX)
          .multiply(rotationY)
          .multiply(rotationZ)

        layer.camera.projectionMatrix = new THREE.Matrix4().copy(m).multiply(l)

        layer.renderer.resetState()
        layer.renderer.render(layer.scene, layer.camera)
        layer.map.triggerRepaint()
      }
    }

    const add = () => {
      if (!layer.map.getLayer(LAYER_ID)) {
        layer.map.addLayer(customLayer)
      }
    }

    if (layer.map.isStyleLoaded()) {
      add()
    } else {
      layer.map.once('style.load', add)
    }
  }

  async showModel(url, coordinates, altitude = 15) {
    await this.waitReady()

    this._ensurePitchFor3D()
    this.coordinates = coordinates
    this.modelAltitude = altitude
    this._updateTransform()

    this._setModel(makePlaceholder())

    try {
      const model = this._prepareModel(await loadModel(url))
      this._setModel(model)
    } catch (err) {
      console.error('No se pudo cargar el GLB; se mantiene el cubo de prueba:', err)
    }
  }

  removeModel() {
    if (this.currentModel && this.scene) {
      this.scene.remove(this.currentModel)
      this.currentModel = null
    }
    this.coordinates = null
    this.modelTransform = null
    this.map?.triggerRepaint()
  }

  destroy() {
    this.removeModel()
    if (this.map?.getLayer(LAYER_ID)) {
      this.map.removeLayer(LAYER_ID)
    }
    this.scene = null
    this.camera = null
    this.renderer = null
    this._ready = false
    this._resetReadyPromise()
  }
}
