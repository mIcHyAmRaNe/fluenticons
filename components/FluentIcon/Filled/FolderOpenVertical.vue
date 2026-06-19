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
    <path :fill="fill" :fill-opacity="opacity" d="M21 5.25A3.25 3.25 0 0 0 17.75 2H8.84l3.54 2.045a4.25 4.25 0 0 1 2.126 3.68V20h.745a3.25 3.25 0 0 0 3.25-3.25v-5.19l1.842-1.84A2.25 2.25 0 0 0 21 8.129zm-7.995 2.475v13.02c0 1.732-1.875 2.814-3.375 1.948l-5.26-3.036a2.75 2.75 0 0 1-1.375-2.382V4.255c0-1.731 1.875-2.814 3.375-1.948l5.259 3.037a2.75 2.75 0 0 1 1.375 2.381" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledFolderOpenVertical',
  mixins: [icon]
};
</script>
