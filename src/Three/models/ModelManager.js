import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as THREE from 'three'

const loader = new GLTFLoader()

export async function loadModel(url) {
  const gltf = await loader.loadAsync(url)
  const scene = gltf.scene

  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true
      child.receiveShadow = true
      if (child.material) {
        const mats = Array.isArray(child.material) ? child.material : [child.material]
        mats.forEach((mat) => {
          mat.side = THREE.DoubleSide
          if ('toneMapped' in mat) mat.toneMapped = true
        })
      }
    }
  })

  return scene
}
