<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useCosmicTheme } from '../composables/useCosmicTheme'

const canvas = ref(null)
const { theme } = useCosmicTheme()

let animationId = null
let particles = []
let effects = [] // shooting stars or floating orbs
let mouseX = -1
let mouseY = -1
let currentTheme = 'night'
let canvasOpacity = 1
let fadeTarget = 1

// Theme color palettes
const nightColors = [
  [255, 255, 255],
  [200, 210, 255],
  [180, 190, 247],
  [220, 200, 255],
]

// Dawn: golden dust on light bg — muted, semi-transparent
const duskColors = [
  [200, 160, 80],
  [180, 140, 60],
  [210, 170, 90],
  [170, 130, 50],
]

class Star {
  constructor(w, h, isDusk) {
    this.reset(w, h, true, isDusk)
  }

  reset(w, h, initial = false, isDusk = false) {
    this.x = Math.random() * w
    this.radius = isDusk ? Math.random() * 2.2 + 0.8 : Math.random() * 1.8 + 0.5
    // Lower opacity on light background so particles feel like floating dust
    this.baseOpacity = isDusk ? Math.random() * 0.25 + 0.08 : Math.random() * 0.5 + 0.2
    this.opacity = this.baseOpacity
    this.drift = Math.random() * 0.2 - 0.1
    this.sway = Math.random() * Math.PI * 2
    this.swaySpeed = Math.random() * 0.008 + 0.003
    this.twinkleSpeed = Math.random() * 0.03 + 0.01
    this.twinklePhase = Math.random() * Math.PI * 2

    if (isDusk) {
      // Fireflies rise from bottom
      this.y = initial ? Math.random() * h : h + 10
      this.speed = -(Math.random() * 0.3 + 0.08) // negative = upward
      const tints = duskColors
      this.color = tints[Math.floor(Math.random() * tints.length)]
    } else {
      // Stars fall from top
      this.y = initial ? Math.random() * h : -10
      this.speed = Math.random() * 0.3 + 0.05
      const tints = nightColors
      this.color = tints[Math.floor(Math.random() * tints.length)]
    }
  }

  update(w, h, isDusk) {
    this.y += this.speed
    this.sway += this.swaySpeed
    this.x += this.drift + Math.sin(this.sway) * 0.2
    this.twinklePhase += this.twinkleSpeed
    this.opacity = this.baseOpacity + Math.sin(this.twinklePhase) * 0.15

    // Mouse proximity glow
    if (mouseX >= 0 && mouseY >= 0) {
      const dx = this.x - mouseX
      const dy = this.y - mouseY
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 150) {
        const boost = (1 - dist / 150) * 0.4
        this.opacity = Math.min(1, this.opacity + boost)
      }
    }

    if (isDusk) {
      // Reset when floated above screen
      if (this.y < -10 || this.x < -10 || this.x > w + 10) {
        this.reset(w, h, false, true)
      }
    } else {
      if (this.y > h + 10 || this.x < -10 || this.x > w + 10) {
        this.reset(w, h, false, false)
      }
    }
  }

  draw(ctx) {
    const [r, g, b] = this.color
    // Glow
    if (this.radius > 1.2) {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius * 3, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.opacity * 0.08})`
      ctx.fill()
    }
    // Core
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.opacity})`
    ctx.fill()
  }
}

// Night: shooting star streaks
class ShootingStar {
  constructor(w, h) {
    this.reset(w, h)
  }

  reset(w, h) {
    this.x = Math.random() * w * 0.7
    this.y = Math.random() * h * 0.4
    this.len = Math.random() * 80 + 40
    this.speed = Math.random() * 8 + 6
    this.angle = (Math.random() * 0.4 + 0.2) * Math.PI
    this.opacity = 1
    this.decay = Math.random() * 0.015 + 0.01
    this.active = true
  }

  update() {
    this.x += Math.cos(this.angle) * this.speed
    this.y += Math.sin(this.angle) * this.speed
    this.opacity -= this.decay
    if (this.opacity <= 0) this.active = false
  }

  draw(ctx) {
    const tailX = this.x - Math.cos(this.angle) * this.len
    const tailY = this.y - Math.sin(this.angle) * this.len
    const grad = ctx.createLinearGradient(tailX, tailY, this.x, this.y)
    grad.addColorStop(0, `rgba(200, 210, 255, 0)`)
    grad.addColorStop(1, `rgba(200, 210, 255, ${this.opacity})`)
    ctx.beginPath()
    ctx.moveTo(tailX, tailY)
    ctx.lineTo(this.x, this.y)
    ctx.strokeStyle = grad
    ctx.lineWidth = 1.5
    ctx.stroke()
  }
}

// Dusk: floating warm orbs that rise slowly
class FloatingOrb {
  constructor(w, h) {
    this.reset(w, h)
  }

  reset(w, h) {
    this.x = Math.random() * w
    this.y = h * 0.5 + Math.random() * h * 0.5
    this.radius = Math.random() * 16 + 8
    this.speed = Math.random() * 0.3 + 0.15
    this.opacity = Math.random() * 0.06 + 0.02 // very subtle on light bg
    this.drift = Math.random() * 0.3 - 0.15
    this.sway = Math.random() * Math.PI * 2
    this.active = true
  }

  update() {
    this.y -= this.speed
    this.sway += 0.006
    this.x += this.drift + Math.sin(this.sway) * 0.3
    this.opacity -= 0.0002
    if (this.opacity <= 0 || this.y < -30) this.active = false
  }

  draw(ctx) {
    const grad = ctx.createRadialGradient(
      this.x, this.y, 0,
      this.x, this.y, this.radius
    )
    grad.addColorStop(0, `rgba(200, 150, 60, ${this.opacity})`)
    grad.addColorStop(0.5, `rgba(190, 140, 50, ${this.opacity * 0.3})`)
    grad.addColorStop(1, `rgba(180, 130, 40, 0)`)
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fillStyle = grad
    ctx.fill()
  }
}

function rebuildParticles(w, h, isDusk) {
  const count = w < 768 ? 40 : 80
  particles = Array.from({ length: count }, () => new Star(w, h, isDusk))
  effects = []
}

function initCanvas() {
  const el = canvas.value
  if (!el) return

  const ctx = el.getContext('2d')
  const resize = () => {
    el.width = window.innerWidth
    el.height = window.innerHeight
  }

  resize()
  window.addEventListener('resize', resize)

  const onMouseMove = (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
  }
  const onMouseLeave = () => {
    mouseX = -1
    mouseY = -1
  }
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseleave', onMouseLeave)

  currentTheme = theme.value
  rebuildParticles(el.width, el.height, currentTheme === 'dusk')

  let effectTimer = 0

  const animate = () => {
    // Handle fade transition on theme switch
    if (canvasOpacity !== fadeTarget) {
      const step = 0.04
      if (fadeTarget < canvasOpacity) {
        canvasOpacity = Math.max(fadeTarget, canvasOpacity - step)
      } else {
        canvasOpacity = Math.min(fadeTarget, canvasOpacity + step)
      }

      // When fully faded out, rebuild and fade back in
      if (canvasOpacity <= 0.01 && fadeTarget === 0) {
        currentTheme = theme.value
        rebuildParticles(el.width, el.height, currentTheme === 'dusk')
        fadeTarget = 1
      }
    }

    el.style.opacity = String(canvasOpacity)
    ctx.clearRect(0, 0, el.width, el.height)

    const isDusk = currentTheme === 'dusk'

    for (const p of particles) {
      p.update(el.width, el.height, isDusk)
      p.draw(ctx)
    }

    // Effects
    effectTimer++
    if (isDusk) {
      // Floating orbs
      if (effectTimer > 120 && Math.random() < 0.015) {
        effects.push(new FloatingOrb(el.width, el.height))
        effectTimer = 0
      }
    } else {
      // Shooting stars
      if (effectTimer > 300 && Math.random() < 0.008) {
        effects.push(new ShootingStar(el.width, el.height))
        effectTimer = 0
      }
    }

    for (let i = effects.length - 1; i >= 0; i--) {
      effects[i].update()
      effects[i].draw(ctx)
      if (!effects[i].active) effects.splice(i, 1)
    }

    animationId = requestAnimationFrame(animate)
  }

  animate()

  return () => {
    window.removeEventListener('resize', resize)
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseleave', onMouseLeave)
  }
}

// Watch for theme changes — trigger fade transition
watch(theme, (newTheme) => {
  if (newTheme !== currentTheme) {
    fadeTarget = 0 // fade out, rebuild happens in animate loop
  }
})

let cleanup = null

onMounted(() => {
  cleanup = initCanvas()
})

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId)
  if (cleanup) cleanup()
})
</script>

<template>
  <canvas ref="canvas" class="snow-canvas" />
</template>

<style scoped>
.snow-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 10;
}
</style>
