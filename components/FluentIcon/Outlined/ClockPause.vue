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
    <path :fill="fill" :fill-opacity="opacity" d="M4.5 11a8.5 8.5 0 1 1 8.188 8.494 6.5 6.5 0 0 1-.68 1.457q.49.05.992.049c5.523 0 10-4.477 10-10S18.523 1 13 1 3 5.477 3 11q0 .501.048.991a6.5 6.5 0 0 1 1.458-.68A9 9 0 0 1 4.5 11m8.493-5.352a.75.75 0 0 0-1.493.102v6l.007.102a.75.75 0 0 0 .743.648h4l.102-.007A.75.75 0 0 0 16.25 11H13V5.75zM12 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7.5 3A.5.5 0 0 0 5 20v-5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .5.5m4 0A.5.5 0 0 0 9 20v-5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .5.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedClockPause',
  mixins: [icon]
};
</script>
