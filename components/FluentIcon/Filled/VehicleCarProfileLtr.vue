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
    <path :fill="fill" :fill-opacity="opacity" d="M8.028 4a2.75 2.75 0 0 0-2.654 2.026L4.422 9.52A2.75 2.75 0 0 0 2 12.25v2.25c0 .865.4 1.636 1.023 2.14a3.25 3.25 0 0 0 6.32.61h4.814a3.252 3.252 0 0 0 6.258-.258A2.75 2.75 0 0 0 22 14.5v-1.688a2.75 2.75 0 0 0-2.083-2.668l-2.183-.546-2.508-4.246A2.75 2.75 0 0 0 12.858 4zM6.822 6.421A1.25 1.25 0 0 1 8.028 5.5H9.5v4H5.982zM11 9.5v-4h1.858c.443 0 .852.234 1.077.614l2 3.386zm-4.75 5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5m9.25 1.75a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledVehicleCarProfileLtr',
  mixins: [icon]
};
</script>
