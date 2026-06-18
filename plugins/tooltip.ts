import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  // @floating-ui/vue is used via the FloatingTooltip component
  // No global registration needed — the composables are imported directly
})
