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
    <path :fill="fill" :fill-opacity="opacity" d="M6.5 1.5a1 1 0 0 1 1 1V5h2.502a1 1 0 0 1 0 2H7.5v2.5a1 1 0 1 1-2 0V7H3.002a1 1 0 0 1 0-2H5.5V2.5a1 1 0 0 1 1-1M13.998 5a1 1 0 0 0 0 2h7a1 1 0 1 0 0-2zM13 17.5a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1m4.5-2a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5m1.25 5.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M2.293 13.293a1 1 0 0 1 1.414 0L6.5 16.086l2.793-2.793a1 1 0 0 1 1.414 1.414L7.914 17.5l2.793 2.793a1 1 0 0 1-1.414 1.414L6.5 18.914l-2.793 2.793a1 1 0 0 1-1.414-1.414L5.086 17.5l-2.793-2.793a1 1 0 0 1 0-1.414" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledMathSymbols',
  mixins: [icon]
};
</script>
