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
    <path :fill="fill" :fill-opacity="opacity" d="M6.75 2a4.75 4.75 0 0 0 0 9.5h4a.75.75 0 0 0 .75-.75v-4A4.75 4.75 0 0 0 6.75 2M3.5 6.75a3.25 3.25 0 1 1 6.5 0V10H6.75A3.25 3.25 0 0 1 3.5 6.75M6.75 22a4.75 4.75 0 1 1 0-9.5h4a.75.75 0 0 1 .75.75v4A4.75 4.75 0 0 1 6.75 22M3.5 17.25a3.25 3.25 0 0 0 6.5 0V14H6.75a3.25 3.25 0 0 0-3.25 3.25M22 6.75a4.75 4.75 0 1 0-9.5 0v4c0 .414.336.75.75.75h4A4.75 4.75 0 0 0 22 6.75M17.25 3.5a3.25 3.25 0 0 1 0 6.5H14V6.75a3.25 3.25 0 0 1 3.25-3.25m0 18.5a4.75 4.75 0 1 0 0-9.5h-4a.75.75 0 0 0-.75.75v4A4.75 4.75 0 0 0 17.25 22m3.25-4.75a3.25 3.25 0 0 1-6.5 0V14h3.25a3.25 3.25 0 0 1 3.25 3.25" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedClover',
  mixins: [icon]
};
</script>
