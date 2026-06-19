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
    <path :fill="fill" :fill-opacity="opacity" d="M15.972 4c1.24 0 2.327.83 2.653 2.026l.953 3.493A2.75 2.75 0 0 1 22 12.25v2.25c0 .865-.4 1.636-1.023 2.14a3.25 3.25 0 0 1-6.32.61H9.843a3.251 3.251 0 0 1-6.258-.258A2.75 2.75 0 0 1 2 14.5v-1.688a2.75 2.75 0 0 1 2.083-2.668l2.182-.546 2.509-4.246A2.75 2.75 0 0 1 11.142 4zm1.206 2.421a1.25 1.25 0 0 0-1.206-.921H14.5v4h3.518zM13 9.5v-4h-1.858a1.25 1.25 0 0 0-1.077.614l-2 3.386zm4.75 5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M8.5 16.25a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledVehicleCarProfileRtl',
  mixins: [icon]
};
</script>
