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
    <path :fill="fill" :fill-opacity="opacity" d="M14.793 17.268a1 1 0 0 1 1.414 0l4.25 4.249A3.24 3.24 0 0 1 18.75 22h-6.5c-.626 0-1.21-.177-1.706-.483zM18.75 9A3.25 3.25 0 0 1 22 12.25v6.5c0 .626-.177 1.21-.483 1.706l-4.25-4.249a2.5 2.5 0 0 0-3.535 0l-4.249 4.25A3.24 3.24 0 0 1 9 18.75v-6.5A3.25 3.25 0 0 1 12.25 9zM9.5 2a7.5 7.5 0 0 1 7.35 6h-4.6A4.25 4.25 0 0 0 8 12.25v4.6A7.5 7.5 0 0 1 9.5 2m8.5 9.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledCircleImage',
  mixins: [icon]
};
</script>
