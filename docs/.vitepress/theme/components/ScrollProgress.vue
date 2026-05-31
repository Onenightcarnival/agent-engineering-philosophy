<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(0)

function updateProgress() {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  progress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
}

onMounted(() => {
  window.addEventListener('scroll', updateProgress, { passive: true })
  updateProgress()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress)
})
</script>

<template>
  <div class="scroll-progress" :style="{ width: progress + '%' }" />
</template>

<style scoped>
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--cosmic-progress-1), var(--cosmic-progress-2), var(--cosmic-progress-3));
  z-index: 999;
  pointer-events: none;
  transition: width 0.05s linear, background 0.5s ease;
}
</style>
