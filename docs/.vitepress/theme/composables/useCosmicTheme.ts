import { ref, onMounted, readonly } from 'vue'

export type CosmicTheme = 'night' | 'dusk'

const theme = ref<CosmicTheme>('night')
let initialized = false

function applyTheme(t: CosmicTheme) {
  if (typeof document === 'undefined') return
  const el = document.documentElement
  if (t === 'dusk') {
    el.classList.add('dusk')
  } else {
    el.classList.remove('dusk')
  }
}

export function useCosmicTheme() {
  onMounted(() => {
    if (!initialized) {
      const saved = localStorage.getItem('cosmic-theme') as CosmicTheme | null
      if (saved === 'dusk' || saved === 'night') {
        theme.value = saved
      }
      applyTheme(theme.value)
      initialized = true
    }
  })

  function toggleTheme() {
    theme.value = theme.value === 'night' ? 'dusk' : 'night'
    localStorage.setItem('cosmic-theme', theme.value)
    applyTheme(theme.value)
  }

  return {
    theme: readonly(theme),
    toggleTheme,
  }
}
