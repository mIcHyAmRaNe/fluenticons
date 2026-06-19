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
    <path :fill="fill" :fill-opacity="opacity" d="M6.25 4A3.25 3.25 0 0 0 3 7.25V8h1.5v-.75c0-.966.784-1.75 1.75-1.75h7.5c.966 0 1.75.784 1.75 1.75v7.5a1.75 1.75 0 0 1-1.75 1.75H9a2 2 0 0 1-.334 1.048l-.3.452h5.384A3.25 3.25 0 0 0 17 14.75v-.312l3.258 2.25c1.16.8 2.744-.03 2.744-1.44V6.751c0-1.41-1.584-2.242-2.744-1.44L17 7.562V7.25A3.25 3.25 0 0 0 13.75 4zM17 9.384l4.11-2.838a.25.25 0 0 1 .392.206v8.495a.25.25 0 0 1-.392.206L17 12.615zM2.5 19l-1.337-2.045A1 1 0 0 1 1 16.408V13a1 1 0 0 1 1-1v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2a1 1 0 0 1 1 1v3.44a1 1 0 0 1-.167.554L6.5 19v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3-7v-1.5h-2V12z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedVideoUsb',
  mixins: [icon]
};
</script>
