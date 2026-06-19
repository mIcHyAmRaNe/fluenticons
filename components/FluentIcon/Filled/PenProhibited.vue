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
    <path :fill="fill" :fill-opacity="opacity" d="M20.952 3.047a3.58 3.58 0 0 0-5.06 0L3.94 15a3.1 3.1 0 0 0-.825 1.476L2.02 21.077a.75.75 0 0 0 .904.903l4.601-1.096a3.1 3.1 0 0 0 1.477-.825l1.151-1.151a6.5 6.5 0 0 1 7.754-7.755l3.045-3.045a3.58 3.58 0 0 0 0-5.06M22 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-9.5 0a4 4 0 0 1 6.248-3.31l-5.557 5.558A4 4 0 0 1 12.5 17.5m4 4a4 4 0 0 1-2.248-.692l5.557-5.557A4 4 0 0 1 16.5 21.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledPenProhibited',
  mixins: [icon]
};
</script>
