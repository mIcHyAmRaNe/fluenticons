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
    <path :fill="fill" :fill-opacity="opacity" d="M17 3a1 1 0 0 1 1 1v6h2a1 1 0 1 1 0 2h-2v8h-.05A2.5 2.5 0 0 0 16 18.05V4a1 1 0 0 1 1-1M3 6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1c0 1.546-.445 4.221-1.751 6.545C9.92 14.906 7.634 17 4 17a1 1 0 1 1 0-2c2.704 0 4.417-1.5 5.505-3.435.86-1.53 1.285-3.27 1.432-4.565H4a1 1 0 0 1-1-1m7.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m6.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTextMore',
  mixins: [icon]
};
</script>
