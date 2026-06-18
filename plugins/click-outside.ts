export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('click-outside', {
    mounted(el, binding) {
      const handler = (e: MouseEvent | TouchEvent) => {
        if (!el.contains(e.target as Node) && el !== e.target) {
          binding.value(e)
        }
      }
      el.__clickOutsideHandler = handler
      document.addEventListener('click', handler)
    },
    unmounted(el) {
      document.removeEventListener('click', el.__clickOutsideHandler)
    },
  })
})
