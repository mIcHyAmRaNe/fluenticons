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
    <path :fill="fill" :fill-opacity="opacity" d="M5.161 12.83c.553-1.107 2.133-1.107 2.686 0l3.997 7.998A1.5 1.5 0 0 1 10.5 23H2.507a1.5 1.5 0 0 1-1.343-2.172zM12 2c5.522 0 10 4.478 10 10 0 5.198-3.968 9.468-9.04 9.952a2.47 2.47 0 0 0-.223-1.571l-3.996-7.997c-.921-1.845-3.553-1.845-4.474 0l-1.602 3.203A10 10 0 0 1 2 12C2 6.478 6.478 2 12 2M6.504 19.998a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m0-5.003a.5.5 0 0 0-.5.501v3.001a.5.5 0 1 0 1 0v-3a.5.5 0 0 0-.5-.502M11.25 6a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5H12V6.75a.75.75 0 0 0-.75-.75" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledClockWarning',
  mixins: [icon]
};
</script>
