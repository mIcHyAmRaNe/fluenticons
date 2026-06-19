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
    <path :fill="fill" :fill-opacity="opacity" d="M16.25 12.5h-4a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 1.5 0V11h3.25a.75.75 0 0 1 0 1.5M13 1C7.478 1 3 5.478 3 11q0 .501.049.991a6.5 6.5 0 0 1 8.96 8.96q.49.05.991.049c5.522 0 10-4.478 10-10S18.522 1 13 1m-1 16.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7.5 3A.5.5 0 0 0 5 20v-5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .5.5m4 0A.5.5 0 0 0 9 20v-5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .5.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledClockPause',
  mixins: [icon]
};
</script>
