<template>
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <linearGradient v-if="fill === 'url(#g1)'" id="g1" :gradientTransform="`rotate(${angle})`">
      <stop class="main-stop" offset="0%" :stop-color="start" />
      <stop class="alt-stop" offset="100%" :stop-color="end" />
    </linearGradient>
    <radialGradient v-if="fill === 'url(#g2)'" id="g2" cx = "50%" cy = "50%" r = "50%">
      <stop :stop-color="start" offset = "0%"/>
      <stop :stop-color="end" offset = "100%"/>
    </radialGradient>
    <path :fill="fill" :fill-opacity="opacity" d="M20 6.5c0 2.21-3.582 4-8 4s-8-1.79-8-4 3.582-4 8-4 8 1.79 8 4m-2.232 4.428C16.152 11.616 14.137 12 12 12c-2.392 0-4.63-.482-6.328-1.33A7.6 7.6 0 0 1 4 9.553V18.5c0 2.21 3.582 4 8 4q.829 0 1.61-.081a3.7 3.7 0 0 1-.61-2.044v-.103a2.77 2.77 0 0 1 2.773-2.772h.277a3.5 3.5 0 0 1 .882-5.63c.392-.197.73-.516.836-.942M21 15a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m2 5.375c0 1.556-1.286 3.125-4.5 3.125S14 21.937 14 20.375v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledDatabasePerson',
  mixins: [icon]
};
</script>
