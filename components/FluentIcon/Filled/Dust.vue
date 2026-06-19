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
    <path :fill="fill" :fill-opacity="opacity" d="M6 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m16 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0M8.664 6.943A5.252 5.252 0 0 1 19 8.25c0 1.47-.604 2.798-1.576 3.75a5.25 5.25 0 1 1-8.76 5.057 5.25 5.25 0 1 1 0-10.114" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledDust',
  mixins: [icon]
};
</script>
