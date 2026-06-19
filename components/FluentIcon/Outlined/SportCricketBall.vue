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
    <path :fill="fill" :fill-opacity="opacity" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-6.152-2.12 1 1 0 0 1-.128-.1A9.98 9.98 0 0 1 2 12C2 6.477 6.477 2 12 2m0 1.5a8.5 8.5 0 0 0-5.475 15H7.75a.75.75 0 0 1 .61 1.183A8.5 8.5 0 0 0 19.5 8h-1.25a.75.75 0 0 1 0-1.5h.229A8.48 8.48 0 0 0 12 3.5M6.25 14a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75m4.5 1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1 0-1.5zM9.25 11a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75m4.5 1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1 0-1.5zM12.25 8a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75m4.5 1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1 0-1.5zM15.25 5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedSportCricketBall',
  mixins: [icon]
};
</script>
