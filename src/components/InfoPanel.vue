<template>
  <Transition name="panel-slide">
    <div v-if="mapStore.panelMode" class="info-panel">

      <!-- MODO LISTA: movimientos del lugar -->
      <template v-if="mapStore.panelMode === 'lista' && lugarActivo">
        <div class="panel-header">
          <div class="header-top">
            <div>
              <h2 class="header-titulo">{{ lugarActivo.nombre }}</h2>
              <p class="header-sub">Seleccioná un movimiento artístico</p>
            </div>
            <button class="close-btn" @click="mapStore.closePanel()">✕</button>
          </div>
        </div>

        <div class="panel-body">
          <div
            v-for="mov in lugarActivo.movimientos"
            @click="selectMovimiento(mov)"
            :key="mov.id"
            class="movimiento-card"
          >
            <div class="mov-periodo" :style="{ color: getPeriodoColor(mov.periodoId) }">
              {{ getPeriodoNombre(mov.periodoId) }} · {{ mov.fechaInicio }} – {{ mov.fechaFin }}
            </div>
            <div class="mov-nombre">{{ mov.nombre }}</div>
            <div class="mov-preview">{{ mov.causas.slice(0, 90) }}...</div>
            <div class="mov-arrow">→</div>
          </div>
        </div>
      </template>

      <!-- MODO DETALLE: 7 datos del movimiento -->
      <template v-if="mapStore.panelMode === 'detalle' && movimientoActivo">
        <div class="panel-header detalle">
          <div class="header-top">
            <div>
              <div class="header-periodo" :style="{ color: getPeriodoColor(movimientoActivo.periodoId) }">
                {{ getPeriodoNombre(movimientoActivo.periodoId) }}
              </div>
              <h2 class="header-titulo">{{ movimientoActivo.nombre }}</h2>
              <p class="header-fechas">{{ movimientoActivo.fechaInicio }} – {{ movimientoActivo.fechaFin }}</p>
            </div>
            <div class="header-actions">
              <button v-if="lugarActivo?.movimientos.length > 1" class="back-btn" @click="goBack()">←</button>
              <button class="close-btn" @click="mapStore.closePanel()">✕</button>
            </div>
          </div>
        </div>

        <div class="panel-body" ref="bodyRef">

          <section class="detalle-section">
            <div class="section-label">① Causas del movimiento</div>
            <p class="section-text">{{ movimientoActivo.causas }}</p>
          </section>

          <section class="detalle-section">
            <div class="section-label">② Contexto social y político</div>
            <p class="section-text">{{ movimientoActivo.contexto }}</p>
          </section>

          <section class="detalle-section">
            <div class="section-label">③ Características — ¿Cómo lo reconozco?</div>
            <p class="section-text">{{ movimientoActivo.caracteristicas }}</p>
          </section>

          <section class="detalle-section">
            <div class="section-label">④ Autores y obras destacadas</div>
            <div class="autores-list">
              <div
                v-for="(item, i) in movimientoActivo.autoresYObras"
                :key="i"
                class="autor-item"
              >
                <span class="autor-nombre">{{ item.autor }}</span>
                <span class="autor-obra">{{ item.obra }}</span>
              </div>
            </div>
          </section>

          <section class="detalle-section">
            <div class="section-label">⑤ Fin del movimiento</div>
            <p class="section-text">{{ movimientoActivo.finDelMovimiento }}</p>
          </section>

        </div>
      </template>

    </div>
  </Transition>
</template>

<script setup>
import { computed, ref, watch, nextTick } from 'vue'
import { gsap } from 'gsap'
import { useMapStore } from '../stores/mapStore.js'
import { lugares, periodos } from '../data/movements.js'

const mapStore = useMapStore()
const bodyRef  = ref(null)

const lugarActivo = computed(() =>
  lugares.find(l => l.id === mapStore.activeLugarId) || null
)

const movimientoActivo = computed(() => {
  if (!lugarActivo.value) return null
  return lugarActivo.value.movimientos.find(m => m.id === mapStore.activeMovimientoId) || null
})

function getPeriodoColor(periodoId) {
  return periodos.find(p => p.id === periodoId)?.color || '#c4a86a'
}

function getPeriodoNombre(periodoId) {
  return periodos.find(p => p.id === periodoId)?.nombre || periodoId
}

async function selectMovimiento(mov) {
  await animateFadeOut()
  const lugar = lugarActivo.value
  mapStore.openMovimiento(mov.id, mapStore.activeLugarId)
  await nextTick()
  animateFadeIn()
}

async function goBack() {
  await animateFadeOut()
  mapStore.panelMode = 'lista'
  await nextTick()
  animateFadeIn()
}

function animateFadeOut() {
  return new Promise(resolve => {
    if (!bodyRef.value) return resolve()
    gsap.to(bodyRef.value, {
      opacity: 0,
      y: -12,
      duration: 0.2,
      ease: 'power2.in',
      onComplete: resolve
    })
  })
}

function animateFadeIn() {
  if (!bodyRef.value) return
  gsap.fromTo(bodyRef.value,
    { opacity: 0, y: 16 },
    { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
  )
}

async function animateSections() {
  await nextTick()
  const secciones = bodyRef.value?.querySelectorAll('.detalle-section, .movimiento-card')
  if (!secciones?.length) return
  gsap.fromTo(secciones,
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.4, stagger: 0.06, ease: 'power2.out', delay: 0.1 }
  )
}

// Watch único para animaciones + carga de modelo


</script>

<style scoped>
.info-panel {
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  max-width: 42vw;
  height: 100vh;
  background: rgba(12, 8, 2, 0.72);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-left: 1px solid rgba(200, 160, 80, 0.2);
  display: flex;
  flex-direction: column;
  z-index: 200;
  overflow: hidden;
  pointer-events: auto;
}

/* Header */
.panel-header {
  padding: 20px 20px 16px;
  border-bottom: 1px solid rgba(200, 160, 80, 0.12);
  flex-shrink: 0;
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.header-periodo {
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 4px;
}

.header-titulo {
  color: #f0e4c4;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 4px;
}

.header-sub {
  color: #5a4a2a;
  font-size: 12px;
}

.header-fechas {
  color: #7a6a4a;
  font-size: 12px;
  letter-spacing: 0.5px;
}

.header-actions {
  display: flex;
  gap: 8px;
}

.close-btn {
  width: 30px;
  height: 30px;
  background: rgba(0,0,0,0.4);
  border: 1px solid rgba(200, 160, 80, 0.2);
  border-radius: 50%;
  color: #c4a86a;
  cursor: pointer;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  flex-shrink: 0;
}
.close-btn:hover { background: rgba(180,60,30,0.5); color: #fff; }

.back-btn {
  width: 30px;
  height: 30px;
  background: rgba(200, 160, 80, 0.1);
  border: 1px solid rgba(200, 160, 80, 0.3);
  border-radius: 50%;
  color: #c4a86a;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  flex-shrink: 0;
}
.back-btn:hover { background: rgba(200,160,80,0.25); }

/* Body */
.panel-body {
  flex: 1;
  overflow-y: auto;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  scrollbar-width: thin;
  scrollbar-color: rgba(200, 160, 80, 0.2) transparent;
  padding-bottom: 100px;
}

/* Modo lista */
.movimiento-card {
  position: relative;
  padding: 14px 36px 14px 16px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(200, 160, 80, 0.1);
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
}
.movimiento-card:hover {
  background: rgba(200, 160, 80, 0.07);
  border-color: rgba(200, 160, 80, 0.3);
}

.mov-periodo {
  font-size: 10px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 4px;
}

.mov-nombre {
  color: #f0e4c4;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 6px;
}

.mov-preview {
  color: #6a5a3a;
  font-size: 12px;
  line-height: 1.5;
}

.mov-arrow {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(200, 160, 80, 0.4);
  font-size: 16px;
  transition: color 0.2s, transform 0.2s;
}
.movimiento-card:hover .mov-arrow {
  color: rgba(200, 160, 80, 0.9);
  transform: translateY(-50%) translateX(3px);
}

/* Modo detalle */
.detalle-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(200, 160, 80, 0.08);
}
.detalle-section:last-child { border-bottom: none; }

.section-label {
  color: #c4a86a;
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.section-text {
  color: #a89878;
  font-size: 13px;
  line-height: 1.75;
}

.autores-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.autor-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 10px 14px;
  background: rgba(255,255,255,0.03);
  border-left: 2px solid rgba(200, 160, 80, 0.3);
  border-radius: 0 6px 6px 0;
}

.autor-nombre {
  color: #e8d8b0;
  font-size: 13px;
  font-weight: 500;
}

.autor-obra {
  color: #ffffff;
  font-size: 12px;
  font-style: italic;
}

/* Transición */
.panel-slide-enter-active,
.panel-slide-leave-active {
  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s;
}
.panel-slide-enter-from,
.panel-slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>