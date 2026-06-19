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
    <path :fill="fill" :fill-opacity="opacity" d="M2.75 18h14.3-.277a2.77 2.77 0 0 0-2.464 1.5H2.75a.75.75 0 0 1-.102-1.494zm0-4.997h14.298A3.5 3.5 0 0 1 19.5 12c.855 0 1.638.307 2.246.816a.75.75 0 0 0-.495-1.313H2.75l-.102.006a.75.75 0 0 0 .102 1.494m0-8h18.5a.75.75 0 0 1 .102 1.493l-.102.007H2.75a.75.75 0 0 1-.102-1.493zM22 15.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m2 5.375C24 22.431 22.714 24 19.5 24S15 22.437 15 20.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedNavigationPerson',
  mixins: [icon]
};
</script>
