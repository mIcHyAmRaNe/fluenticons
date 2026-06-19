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
    <path :fill="fill" :fill-opacity="opacity" d="M11.617 2.076a1 1 0 0 1 1.09.217l5 5a1 1 0 0 1-.082 1.488L13.6 12l4.024 3.22a1 1 0 0 1 .082 1.487l-5 5A1 1 0 0 1 11 21v-6.92l-3.375 2.7a1 1 0 1 1-1.25-1.56L10.4 12 6.375 8.78a1 1 0 0 1 1.25-1.56L11 9.92V3a1 1 0 0 1 .617-.924M13 14.081v4.505l2.503-2.503zm0-4.162 2.503-2.002L13 5.414z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledBluetooth',
  mixins: [icon]
};
</script>
