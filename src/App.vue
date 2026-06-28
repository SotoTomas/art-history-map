<template>
  <div class="app">
    <MapView />
    <MarkerLayer />
    <InfoPanel />
    <TimelineBar />
  </div>
</template>

<script setup>
import MarkerLayer from './components/MarkerLayer.vue'
import MapView     from './components/MapView.vue'
import InfoPanel   from './components/InfoPanel.vue'
import TimelineBar from './components/TimelineBar.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  overflow: hidden;
}
.app {
  position: relative;
  width: 100vw;
  height: 100vh;
}
</style>