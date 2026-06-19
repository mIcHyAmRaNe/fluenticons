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
    <path :fill="fill" :fill-opacity="opacity" d="M2.3 3.272 5.693 12l-3.395 8.728-.03.096a.75.75 0 0 0 1.065.847l7.674-3.838a6.6 6.6 0 0 1 .147-1.75L4.402 19.46l2.61-6.71h6.051a6.5 6.5 0 0 1 1.3-.944.75.75 0 0 0-.724-.556H7.01L4.402 4.54l12.924 6.462L17.5 11c1.553 0 2.98.545 4.098 1.454a.752.752 0 0 0-.264-1.125l-18-9-.093-.04c-.586-.206-1.178.375-.942.983M23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0M17.5 14a.5.5 0 0 1 .5.5V17h2a.5.5 0 0 1 0 1h-2.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedSendClock',
  mixins: [icon]
};
</script>
