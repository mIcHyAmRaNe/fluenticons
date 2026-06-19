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
    <path :fill="fill" :fill-opacity="opacity" d="M23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0M17.5 14a.5.5 0 0 1 .5.5V17h2a.5.5 0 0 1 0 1h-2.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5" />
    <path fill="#242424" d="M20 11.498A6.5 6.5 0 0 0 17.5 11a6.5 6.5 0 0 0-3.001.733.75.75 0 0 0-.749-.733h-3.5a.75.75 0 0 0 0 1.5h3.098a6.49 6.49 0 0 0-2.348 5c0 1.29.377 2.49 1.024 3.5H7.75A3.75 3.75 0 0 1 4 17.25V9h16zM19.5 3A1.5 1.5 0 0 1 21 4.5V6a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 6V4.5A1.5 1.5 0 0 1 4.5 3z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledArchiveClock',
  mixins: [icon]
};
</script>
