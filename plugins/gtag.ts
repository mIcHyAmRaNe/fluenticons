import { createGtag } from 'vue-gtag'

export default defineNuxtPlugin((nuxtApp) => {
  const gtag = createGtag({
    config: { id: 'G-VGSV4M0LY9' },
  })
  nuxtApp.vueApp.use(gtag)
})
