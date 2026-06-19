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
    <path :fill="fill" :fill-opacity="opacity" d="M6.5 4a5.5 5.5 0 0 0-1.99 10.63c.04-.7.19-1.37.433-1.994A3.5 3.5 0 0 1 6.5 6h6a3.5 3.5 0 1 1 0 7H12a1 1 0 1 0 0 2h.5a5.5 5.5 0 1 0 0-11zm12.613 8.213A3.001 3.001 0 0 1 18 18h-7a3 3 0 1 1 0-6h1a1 1 0 0 0 0-2h-1a5 5 0 0 0 0 10h7a5 5 0 0 0 1.496-9.772 6.5 6.5 0 0 1-.383 1.985" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledLinkMultiple',
  mixins: [icon]
};
</script>
