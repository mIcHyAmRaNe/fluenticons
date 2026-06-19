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
    <path :fill="fill" :fill-opacity="opacity" d="M5.843 4.57c3.4-3.401 8.913-3.401 12.314 0s3.4 8.912 0 12.313l-1.187 1.173a657 657 0 0 1-3.406 3.313 2.25 2.25 0 0 1-3.128 0l-3.491-3.397q-.658-.646-1.102-1.09a8.707 8.707 0 0 1 0-12.313M12 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledLocation',
  mixins: [icon]
};
</script>
