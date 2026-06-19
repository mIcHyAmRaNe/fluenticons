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
    <path :fill="fill" :fill-opacity="opacity" d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l4.633 4.634a6 6 0 0 0-.773 2.105A4.5 4.5 0 0 0 6.5 19h11q.213 0 .42-.02l2.8 2.8a.75.75 0 0 0 1.06-1.06zM22 14.5a4.5 4.5 0 0 1-1.228 3.09L8.99 5.808a6 6 0 0 1 8.93 4.211A4.5 4.5 0 0 1 22 14.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledCloudOff',
  mixins: [icon]
};
</script>
