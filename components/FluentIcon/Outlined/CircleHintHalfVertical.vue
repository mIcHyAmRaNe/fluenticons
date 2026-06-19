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
    <path :fill="fill" :fill-opacity="opacity" d="M11.781 3.253a8.75 8.75 0 1 0 1.928 17.33.75.75 0 0 1 .29 1.472 10.3 10.3 0 0 1-2.255.192 10.2 10.2 0 0 1-7.338-3.363A10.2 10.2 0 0 1 1.75 12C1.75 6.34 6.34 1.75 12 1.75q1.027.001 2 .195a.75.75 0 0 1-.291 1.472 8.8 8.8 0 0 0-1.928-.164m5.915.224a.75.75 0 0 0-.835 1.246 8.8 8.8 0 0 1 2.416 2.416.75.75 0 0 0 1.246-.835 10.3 10.3 0 0 0-2.827-2.827M22.055 10a.75.75 0 1 0-1.472.291 8.8 8.8 0 0 1 0 3.418.75.75 0 0 0 1.472.29 10.3 10.3 0 0 0 0-3.999m-1.532 7.696a.75.75 0 0 0-1.246-.835 8.8 8.8 0 0 1-2.416 2.416.75.75 0 0 0 .835 1.246 10.3 10.3 0 0 0 2.827-2.827" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedCircleHintHalfVertical',
  mixins: [icon]
};
</script>
