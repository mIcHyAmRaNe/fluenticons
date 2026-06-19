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
    <path :fill="fill" :fill-opacity="opacity" d="M6.5 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0-6.5h11a4.5 4.5 0 1 1 0 9h-11a4.5 4.5 0 0 1 0-9m11 1.5h-11a3 3 0 0 0 0 6h11a3 3 0 1 0 0-6m0 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4M2 17.5A4.5 4.5 0 0 1 6.5 13h11a4.5 4.5 0 1 1 0 9h-11A4.5 4.5 0 0 1 2 17.5m4.5-3a3 3 0 1 0 0 6h11a3 3 0 1 0 0-6z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedToggleMultiple',
  mixins: [icon]
};
</script>
