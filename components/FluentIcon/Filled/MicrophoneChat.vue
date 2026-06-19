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
    <path :fill="fill" :fill-opacity="opacity" d="M21.751 12.75a.75.75 0 0 1 .75.75 6 6 0 0 1-5.25 5.951v1.799a.75.75 0 0 1-1.5 0v-1.799a6 6 0 0 1-5.25-5.951.75.75 0 0 1 1.5 0 4.5 4.5 0 0 0 9 0 .75.75 0 0 1 .75-.75M10.001 2c2.096 0 4.004.808 5.43 2.128a4.5 4.5 0 0 0-3.43 4.372v3.42a1.75 1.75 0 0 0-2.5 1.58c0 1.68.593 3.22 1.578 4.426a7.96 7.96 0 0 1-4.528-.712l-2.997.75a1.25 1.25 0 0 1-1.516-1.515l.75-2.998A8 8 0 0 1 2 10c0-4.418 3.583-8 8-8m6.5 3A3.5 3.5 0 0 1 20 8.5v5a3.5 3.5 0 0 1-7 0v-5A3.5 3.5 0 0 1 16.5 5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledMicrophoneChat',
  mixins: [icon]
};
</script>
