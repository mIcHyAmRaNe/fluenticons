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
    <path :fill="fill" :fill-opacity="opacity" d="M10 3.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75m7.75.75a.75.75 0 0 1 0-1.5A3.25 3.25 0 0 1 21 6.25a.75.75 0 0 1-1.5 0 1.75 1.75 0 0 0-1.75-1.75M6.25 3a.75.75 0 0 1 0 1.5A1.75 1.75 0 0 0 4.5 6.25a.75.75 0 0 1-1.5 0A3.25 3.25 0 0 1 6.25 3m-2.5 14a.75.75 0 0 0-.75.75A3.25 3.25 0 0 0 6.25 21a.75.75 0 0 0 0-1.5 1.75 1.75 0 0 1-1.75-1.75.75.75 0 0 0-.75-.75m7 2.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zm7 0a.75.75 0 0 0 0 1.5A3.25 3.25 0 0 0 21 17.75a.75.75 0 0 0-1.5 0 1.75 1.75 0 0 1-1.75 1.75m2.5-9.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75M3 13.25a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-1.5 0z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedSquareHint',
  mixins: [icon]
};
</script>
