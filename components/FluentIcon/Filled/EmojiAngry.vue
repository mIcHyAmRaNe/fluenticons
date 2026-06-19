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
    <path :fill="fill" :fill-opacity="opacity" d="M12 2.004c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10m0 11.493A6 6 0 0 0 7.712 15.3a.75.75 0 1 0 1.071 1.05A4.5 4.5 0 0 1 12 14.997c1.225 0 2.37.49 3.211 1.347a.75.75 0 1 0 1.07-1.051A5.98 5.98 0 0 0 12 13.497M8.219 6.664 8.127 6.6A.75.75 0 0 0 7.2 7.759l.081.076 1.257 1.004a1.25 1.25 0 1 0 1.712 1.16.749.749 0 0 0 .55-1.26l-.082-.075zL8.128 6.6zm8.617.117a.75.75 0 0 0-.963-.18l-.092.063-2.498 2-.082.075a.75.75 0 0 0 .44 1.251l.11.008a1.25 1.25 0 1 0 1.825-1.108l-.113-.051 1.256-1.004.081-.076a.75.75 0 0 0 .035-.978" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledEmojiAngry',
  mixins: [icon]
};
</script>
