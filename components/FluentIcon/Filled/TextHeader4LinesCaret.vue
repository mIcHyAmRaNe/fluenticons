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
    <path :fill="fill" :fill-opacity="opacity" d="M21 19a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm0-5a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM3 2a1 1 0 0 1 1 1v2.5h3V3.002a1 1 0 0 1 2 0v6.993a1 1 0 0 1-2 0V7.5H4V10a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1m11.219.375A1 1 0 0 1 16 3v4a1 1 0 1 1 0 2v1a1 1 0 1 1-2 0V9h-3a1 1 0 0 1-.781-1.625zm7.033 2.624a.75.75 0 0 1 .53 1.28l-1.5 1.501a.75.75 0 0 1-1.061 0l-1.501-1.5a.75.75 0 0 1 .53-1.281zM13.082 7H14V5.852z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTextHeader4LinesCaret',
  mixins: [icon]
};
</script>
