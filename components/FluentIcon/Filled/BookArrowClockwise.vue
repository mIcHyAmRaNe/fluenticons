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
    <path :fill="fill" :fill-opacity="opacity" d="M22 4.25a.75.75 0 0 1-.75.75H18.5a.75.75 0 0 1 0-1.5h1.33l-.008-.006-.01-.007A4.5 4.5 0 1 0 21.5 7 .75.75 0 0 1 23 7a6 6 0 1 1-2.5-4.874V1.5a.746.746 0 0 1 .75-.75.75.75 0 0 1 .75.75zM12.101 2H6.5A2.5 2.5 0 0 0 4 4.5v15A2.5 2.5 0 0 0 6.5 22h13.25a.75.75 0 0 0 0-1.5H6.5a1 1 0 0 1-1-1h14.25a.75.75 0 0 0 .75-.75v-5.687A7.003 7.003 0 0 1 10.07 8a7.1 7.1 0 0 1 .22-3q.155-.519.384-1A7 7 0 0 1 12.1 2" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledBookArrowClockwise',
  mixins: [icon]
};
</script>
