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
    <path :fill="fill" :fill-opacity="opacity" d="M17.984 3.128a.75.75 0 0 1 .202 1.041L7.057 20.67a.75.75 0 1 1-1.243-.84L16.943 3.332a.75.75 0 0 1 1.04-.203M6.5 4.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M2.5 7a4 4 0 1 1 8 0 4 4 0 0 1-8 0M15 17a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0m2.5-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTextPercent',
  mixins: [icon]
};
</script>
