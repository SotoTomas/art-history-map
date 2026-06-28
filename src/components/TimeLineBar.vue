<template>
  <div class="timeline-bar">
    <div class="timeline-track">

      <!-- Línea base -->
      <div class="track-line"></div>

      <!-- Períodos -->
      <div
        v-for="(periodo, i) in periodos"
        :key="periodo.id"
        class="periodo-item"
        :class="{ active: mapStore.activePeriodoId === periodo.id }"
        :style="{ '--periodo-color': periodo.color }"
        @click="handlePeriodoClick(periodo)"
      >
        <div class="periodo-node">
          <div class="node-outer"></div>
          <div class="node-inner"></div>
        </div>
        <div class="periodo-label">
          <span class="periodo-nombre">{{ periodo.nombre }}</span>
          <span class="periodo-rango">{{ periodo.rango }}</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { periodos, lugares } from '../data/movements.js'
import { useMapStore } from '../stores/mapStore.js'

const mapStore = useMapStore()

function handlePeriodoClick(periodo) {
  mapStore.setPeriodo(periodo.id)

  // Buscar el lugar y movimiento que corresponde al período
  for (const lugar of lugares) {
    const mov = lugar.movimientos.find(m => m.periodoId === periodo.id)
    if (mov) {
      mapStore.openMovimiento(mov.id, lugar.id)
      return
    }
  }
}
</script>

<style scoped>



.timeline-track {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  pointer-events: all;
  padding-bottom: 20px;
}

.timeline-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: rgb(20, 11, 2);
  z-index: 100;
  display: flex;
  align-items: center;
  padding: 0 20px;
  pointer-events: none;
  border-top: 1px solid rgba(200, 160, 80, 0.15);
}

.timeline-track {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  pointer-events: all;
  padding-bottom: 20px;
}

.track-line {
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(200, 160, 80, 0.2);
}

.periodo-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.3s, flex 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  min-width: 0;
}

.periodo-item:hover,
.periodo-item.active {
  opacity: 1;
  flex: 1.5;
}

.timeline-track:has(.periodo-item:hover) .periodo-item:not(:hover),
.timeline-track:has(.periodo-item.active) .periodo-item:not(.active):not(:hover) {
  flex: 0.85;
  opacity: 0.35;
}

.periodo-node {
  position: relative;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
}

.node-outer {
  position: absolute;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  border: 1.5px solid rgba(200, 160, 80, 0.6);
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
}

.node-inner {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: rgba(200, 160, 80, 0.8);
  transition: transform 0.3s;
}

.periodo-item:hover .node-outer,
.periodo-item.active .node-outer {
  transform: scale(1.3);
  border-color: var(--periodo-color);
  box-shadow: 0 0 8px var(--periodo-color);
}

.periodo-item.active .node-inner {
  transform: scale(1.4);
  background: var(--periodo-color);
}

.periodo-item.active .node-outer {
  animation: pulse-node 2s ease-out infinite;
}

@keyframes pulse-node {
  0%   { box-shadow: 0 0 0 0 var(--periodo-color); }
  70%  { box-shadow: 0 0 0 6px transparent; }
  100% { box-shadow: 0 0 0 0 transparent; }
}

.periodo-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
  width: 100%;
  overflow: hidden;
}

.periodo-nombre {
  color: #c4a86a;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  white-space: nowrap;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  transition: font-size 0.3s, color 0.3s, text-shadow 0.3s;
}

.periodo-rango {
  color: rgba(160, 120, 50, 0.6);
  font-size: 8px;
  white-space: nowrap;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  transition: opacity 0.3s, color 0.3s;
}

.periodo-item:hover .periodo-nombre,
.periodo-item.active .periodo-nombre {
  color: #f0e4c4;
  font-size: 11px;
  text-shadow: 0 0 10px rgba(200, 160, 80, 0.5);
}

.periodo-item:hover .periodo-rango,
.periodo-item.active .periodo-rango {
  color: rgba(200, 160, 80, 0.7);
}

.timeline-track:has(.periodo-item:hover) .periodo-item:not(:hover) .periodo-rango {
  opacity: 0;
}
</style>