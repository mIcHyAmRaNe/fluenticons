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
    <path :fill="fill" :fill-opacity="opacity" d="M6 2.75a.75.75 0 0 0-1.5 0V4.5H2.75a.75.75 0 0 0 0 1.5H4.5v12H2.75a.75.75 0 0 0 0 1.5H4.5v1.75a.75.75 0 0 0 1.5 0V19.5h12v1.75a.75.75 0 0 0 1.5 0V19.5h1.75a.75.75 0 0 0 0-1.5H19.5V6h1.75a.75.75 0 0 0 0-1.5H19.5V2.75a.75.75 0 0 0-1.5 0V4.5H6zM18 18H6V6h12z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedFrame',
  mixins: [icon]
};
</script>
