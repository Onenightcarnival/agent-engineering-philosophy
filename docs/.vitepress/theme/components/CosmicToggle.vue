<script setup>
import { useCosmicTheme } from '../composables/useCosmicTheme'

const { theme, toggleTheme } = useCosmicTheme()
</script>

<template>
  <button
    class="cosmic-toggle"
    :title="theme === 'night' ? '切换到黄昏' : '切换到星空'"
    @click="toggleTheme"
  >
    <span class="toggle-icon" :class="theme">
      <svg v-if="theme === 'night'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    </span>
  </button>
</template>

<style scoped>
.cosmic-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid rgba(var(--cosmic-accent-rgb), 0.15);
  border-radius: 50%;
  background: rgba(var(--cosmic-accent-rgb), 0.06);
  cursor: pointer;
  color: var(--vp-c-brand-1);
  transition: all 0.3s ease;
  margin-left: 8px;
}

.cosmic-toggle:hover {
  border-color: rgba(var(--cosmic-accent-rgb), 0.35);
  background: rgba(var(--cosmic-accent-rgb), 0.12);
  box-shadow: 0 0 16px rgba(var(--cosmic-accent-rgb), 0.15);
}

.toggle-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s ease;
}

.toggle-icon.night {
  transform: rotate(0deg);
}

.toggle-icon.dusk {
  transform: rotate(180deg);
}
</style>
