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
    <path :fill="fill" :fill-opacity="opacity" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-7.657-5.792a.85.85 0 0 0-1.113 0 .664.664 0 0 0 0 1.006c2.923 2.643 2.923 6.928 0 9.571a.664.664 0 0 0 0 1.006.85.85 0 0 0 1.113 0c3.538-3.198 3.538-8.384 0-11.583m-4.126 1.514a.77.77 0 0 0 0 1.072c1.734 1.771 1.734 4.643 0 6.415a.77.77 0 0 0 0 1.072.73.73 0 0 0 1.05 0c2.313-2.364 2.313-6.196 0-8.559a.73.73 0 0 0-1.05 0M8.302 9.216a.78.78 0 0 0-1.079 0 .72.72 0 0 0 0 1.042 2.404 2.404 0 0 1 0 3.483.72.72 0 0 0 0 1.043.78.78 0 0 0 1.08 0 3.843 3.843 0 0 0 0-5.568" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledPaymentWireless',
  mixins: [icon]
};
</script>
