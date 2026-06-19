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
    <path :fill="fill" :fill-opacity="opacity" d="m16.161 1.83-3.997 7.998A1.5 1.5 0 0 0 13.507 12h7.994a1.5 1.5 0 0 0 1.343-2.172L18.847 1.83c-.553-1.107-2.133-1.107-2.686 0m1.843 2.666v3.001a.5.5 0 0 1-1 0V4.496a.5.5 0 0 1 1 0m-.5 5.503a.5.5 0 1 1 0-1.001.5.5 0 0 1 0 1M21.5 13h-7.884l-1.268.664a.75.75 0 0 1-.696 0L2 8.608v8.142l.005.184A3.25 3.25 0 0 0 5.25 20h13.5l.184-.005A3.25 3.25 0 0 0 22 16.75v-3.799q-.241.048-.5.049M5.25 4h8.71l-2.69 5.38a2.48 2.48 0 0 0 .125 2.456L2.016 6.924a3.25 3.25 0 0 1 3.048-2.919z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledMailWarning',
  mixins: [icon]
};
</script>
