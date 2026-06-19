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
    <path :fill="fill" :fill-opacity="opacity" d="M3 7.25A3.25 3.25 0 0 1 6.25 4h6.5A3.25 3.25 0 0 1 16 7.25v7.5A3.25 3.25 0 0 1 12.75 18H8.365l.3-.452A2 2 0 0 0 9 16.44V13a2 2 0 0 0-1-1.732V10a2 2 0 0 0-2-2H3zm17.257 9.438L17 14.44V7.562l3.257-2.25c1.161-.8 2.745.03 2.745 1.441v8.495c0 1.41-1.584 2.242-2.745 1.44M2.5 19l-1.337-2.045A1 1 0 0 1 1 16.408V13a1 1 0 0 1 1-1v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2a1 1 0 0 1 1 1v3.44a1 1 0 0 1-.167.554L6.5 19v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3-8.5h-2V12h2z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledVideoUsb',
  mixins: [icon]
};
</script>
