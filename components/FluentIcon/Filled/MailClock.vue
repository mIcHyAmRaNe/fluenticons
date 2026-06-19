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
    <path :fill="fill" :fill-opacity="opacity" d="M23 6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0M17.5 3a.5.5 0 0 1 .5.5V6h2a.5.5 0 0 1 0 1h-2.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5m4.5 8.19A6.48 6.48 0 0 1 17.5 13a6.5 6.5 0 0 1-2.735-.602l-2.417 1.266a.75.75 0 0 1-.696 0L2 8.608v8.142l.005.184A3.25 3.25 0 0 0 5.25 20h13.5l.184-.005A3.25 3.25 0 0 0 22 16.75zM11.498 4H5.25l-.186.005a3.25 3.25 0 0 0-3.048 2.919L12 12.154l1.308-.686A6.49 6.49 0 0 1 11 6.5c0-.886.177-1.73.498-2.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledMailClock',
  mixins: [icon]
};
</script>
