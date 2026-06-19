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
    <path :fill="fill" :fill-opacity="opacity" d="M5 8.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M6.5 5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M13 5a1 1 0 0 0-1 1v12a1 1 0 1 0 2 0v-5h5.5a1 1 0 1 0 0-2H14V7h6a1 1 0 1 0 0-2z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTemperatureDegreeFahrenheit',
  mixins: [icon]
};
</script>
