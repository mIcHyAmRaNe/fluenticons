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
    <path :fill="fill" :fill-opacity="opacity" d="M17.5 11a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11M3 15.5a1 1 0 0 1 1 1V18a1 1 0 0 0 1 1h1.5a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-1.5a1 1 0 0 1 1-1m14.5-2.501a.5.5 0 0 0-.5.5V16h-2.505a.5.5 0 0 0 0 1h2.506v2.504a.5.5 0 0 0 1 0V17h2.496a.5.5 0 0 0 0-1H18v-2.501a.5.5 0 0 0-.5-.5M6 6.75a1 1 0 0 1 1 1v8.5a1 1 0 1 1-2 0v-8.5a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v8.5a1 1 0 1 1-2 0v-8.5a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v2.748a6.5 6.5 0 0 0-2 1.314V7.75a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v2.426a6.5 6.5 0 0 0-2-.155V7.75a1 1 0 0 1 1-1M6.5 3a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v1.5a1 1 0 0 1-2 0V6a3 3 0 0 1 3-3zM19 3a3 3 0 0 1 3 3v1.5a1 1 0 1 1-2 0V6a1 1 0 0 0-1-1h-1.5a1 1 0 1 1 0-2z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledBarcodeScannerAdd',
  mixins: [icon]
};
</script>
