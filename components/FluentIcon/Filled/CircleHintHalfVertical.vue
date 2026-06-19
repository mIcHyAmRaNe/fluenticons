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
    <path :fill="fill" :fill-opacity="opacity" d="M11.8 4.002a7.97 7.97 0 0 0-5.594 2.482A7.97 7.97 0 0 0 4.002 12.2a8 8 0 0 0 9.56 7.648 1 1 0 1 1 .389 1.962 10 10 0 0 1-2.2.187 9.96 9.96 0 0 1-7.16-3.28A9.96 9.96 0 0 1 2 12a9.97 9.97 0 0 1 3.016-7.157A9.97 9.97 0 0 1 12 2q1.002.001 1.95.19a1 1 0 1 1-.388 1.962 8 8 0 0 0-1.762-.15m5.757-.317a1 1 0 0 0-1.113 1.662 8 8 0 0 1 2.21 2.209 1 1 0 0 0 1.661-1.113 10 10 0 0 0-2.758-2.758m4.253 6.365a1 1 0 0 0-1.962.388 8 8 0 0 1 0 3.124 1 1 0 1 0 1.962.389 10 10 0 0 0 0-3.902m-1.495 7.507a1 1 0 0 0-1.662-1.113 8 8 0 0 1-2.209 2.21 1 1 0 0 0 1.113 1.661 10.1 10.1 0 0 0 2.758-2.758" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledCircleHintHalfVertical',
  mixins: [icon]
};
</script>
