export const FLY_OPTIONS = {
  speed: 0.6,
  curve: 1.8,
  easing: (t) => (t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2),
  essential: true
}

export function waitForMoveEnd(map) {
  return new Promise((resolve) => {
    if (!map.isMoving()) {
      resolve()
      return
    }
    map.once('moveend', resolve)
  })
}
