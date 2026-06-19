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
    <path :fill="fill" :fill-opacity="opacity" d="M12.25 2a.75.75 0 0 1 .75.75v18.5a.75.75 0 0 1-1.5 0V2.75a.75.75 0 0 1 .75-.75M10 5H2.75a.75.75 0 0 0 0 1.5H10zm0 4H2.75a.75.75 0 0 0 0 1.5H10zm0 4H2.75a.75.75 0 0 0 0 1.5H10zm0 4H2.75a.75.75 0 0 0 0 1.5H10zm9.75 1H14.5v-1.5h5.25a.75.75 0 0 0 0-1.5H14.5v-1.5h5.25a2.25 2.25 0 0 1 0 4.5m0-7.5H14.5V9h5.25a.75.75 0 0 0 0-1.5H14.5V6h5.25a2.25 2.25 0 0 1 0 4.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTextDensity',
  mixins: [icon]
};
</script>
