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
    <path :fill="fill" :fill-opacity="opacity" d="M21 12.022a6.5 6.5 0 0 0-2.05-.86A7 7 0 0 0 8.392 6H9a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v.516A9 9 0 0 1 21 12zM12 21h.022a6.5 6.5 0 0 1-.86-2.05 7 7 0 0 1-6.108-7.826 1 1 0 1 0-1.984-.248Q3 11.43 3 12a9 9 0 0 0 9 9m0-3.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0m5.5 3.5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5m0-7.125a.625.625 0 1 0 0 1.25.625.625 0 0 0 0-1.25" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledArrowCounterclockwiseInfo',
  mixins: [icon]
};
</script>
