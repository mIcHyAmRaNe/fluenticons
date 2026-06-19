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
    <path :fill="fill" :fill-opacity="opacity" d="M10 4a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m7.5 1a1 1 0 1 1 0-2A3.5 3.5 0 0 1 21 6.5a1 1 0 1 1-2 0A1.5 1.5 0 0 0 17.5 5m-11-2a1 1 0 0 1 0 2A1.5 1.5 0 0 0 5 6.5a1 1 0 0 1-2 0A3.5 3.5 0 0 1 6.5 3M4 16.5a1 1 0 0 0-1 1A3.5 3.5 0 0 0 6.5 21a1 1 0 1 0 0-2A1.5 1.5 0 0 1 5 17.5a1 1 0 0 0-1-1m7 2.5a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm6.5 0a1 1 0 1 0 0 2 3.5 3.5 0 0 0 3.5-3.5 1 1 0 1 0-2 0 1.5 1.5 0 0 1-1.5 1.5m2.5-9a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M3 13a1 1 0 1 0 2 0v-2a1 1 0 1 0-2 0z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledSquareHint',
  mixins: [icon]
};
</script>
