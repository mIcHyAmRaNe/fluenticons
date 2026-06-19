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
    <path :fill="fill" :fill-opacity="opacity" d="M19 6.01a3.25 3.25 0 0 1 3.002 3.24v8a4.75 4.75 0 0 1-4.75 4.75h-8a3.25 3.25 0 0 1-3.24-3h8.739A4.25 4.25 0 0 0 19 14.75zM5.25 2A3.25 3.25 0 0 0 2 5.25v9.5A3.25 3.25 0 0 0 5.25 18h9.5A3.25 3.25 0 0 0 18 14.75V7.5h-7.25A2.25 2.25 0 0 1 8.5 5.25V2zm5.5 4H18v-.75A3.25 3.25 0 0 0 14.75 2H10v3.25c0 .414.336.75.75.75" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTabDesktopMultiple',
  mixins: [icon]
};
</script>
