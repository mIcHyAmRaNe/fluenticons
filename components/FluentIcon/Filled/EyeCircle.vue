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
    <path :fill="fill" :fill-opacity="opacity" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 5c-1.773 0-3.265.955-4.28 1.97a7.8 7.8 0 0 0-1.221 1.568C6.228 11.006 6 11.542 6 12s.228.994.499 1.462a7.8 7.8 0 0 0 1.22 1.568C8.736 16.045 10.228 17 12 17s3.265-.955 4.28-1.97a7.8 7.8 0 0 0 1.221-1.568c.271-.468.499-1.004.499-1.462s-.228-.994-.499-1.462a7.8 7.8 0 0 0-1.22-1.568C15.265 7.955 13.772 7 12 7m0 1.5c1.227 0 2.36.67 3.22 1.53.424.424.758.873.982 1.26q.168.293.241.497.037.1.048.16c.01.041.009.058.009.053s0 .012-.009.053a1 1 0 0 1-.048.16 3.3 3.3 0 0 1-.24.497 6.3 6.3 0 0 1-.983 1.26c-.86.86-1.993 1.53-3.22 1.53s-2.36-.67-3.22-1.53a6.3 6.3 0 0 1-.982-1.26 3.3 3.3 0 0 1-.241-.497 1 1 0 0 1-.048-.16c-.01-.041-.009-.058-.009-.053s0-.012.009-.053q.011-.06.048-.16c.049-.135.129-.304.24-.497.225-.387.56-.836.983-1.26.86-.86 1.993-1.53 3.22-1.53m0 1.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledEyeCircle',
  mixins: [icon]
};
</script>
