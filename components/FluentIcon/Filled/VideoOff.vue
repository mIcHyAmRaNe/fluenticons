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
    <path :fill="fill" :fill-opacity="opacity" d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l1.915 1.916A3.25 3.25 0 0 0 2 8.25v7.5A3.25 3.25 0 0 0 5.25 19h6.5a3.25 3.25 0 0 0 3.237-2.953l5.732 5.733a.75.75 0 0 0 1.061-1.06zM16 12.818l5.008 5.008c.57-.274.994-.848.994-1.578V7.753c0-1.41-1.584-2.242-2.745-1.44L16 8.563zM8.182 5 15 11.818V8.25A3.25 3.25 0 0 0 11.75 5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledVideoOff',
  mixins: [icon]
};
</script>
