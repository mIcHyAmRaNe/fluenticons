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
    <path :fill="fill" :fill-opacity="opacity" d="M18.25 3A2.25 2.25 0 0 0 16 5.25v5.924A6.5 6.5 0 0 1 17.498 11h.002c1.081 0 2.101.264 2.998.731V5.25A2.25 2.25 0 0 0 18.25 3m-4.252 6.25v2.772a6.5 6.5 0 0 0-3 5.478 6.47 6.47 0 0 0 1.012 3.485q-.128.015-.26.015a2.25 2.25 0 0 1-2.25-2.25v-9.5a2.25 2.25 0 1 1 4.498 0M3 13.25a2.25 2.25 0 1 1 4.498 0v5.5a2.25 2.25 0 1 1-4.498 0zm20 4.25a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-5 .5.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledDataBarVerticalAdd',
  mixins: [icon]
};
</script>
