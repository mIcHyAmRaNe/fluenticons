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
    <path :fill="fill" :fill-opacity="opacity" d="M12.5 5.252V2H5.75a.75.75 0 0 0-.75.75V11h14V2.75a.75.75 0 0 0-.75-.75H16.5v4.251a.75.75 0 0 1-1.5 0V2h-1v3.252a.75.75 0 0 1-1.5 0M11 17.5c0-2.01.913-3.808 2.346-5H5v1.752a2.25 2.25 0 0 0 2.25 2.25H9.5V19.5a2.5 2.5 0 0 0 3.213 2.397A6.48 6.48 0 0 1 11 17.5m6.5-5.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m2.997 6a.5.5 0 0 0 0-1h-6.001a.5.5 0 0 0 0 1z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledPaintBrushSubtract',
  mixins: [icon]
};
</script>
