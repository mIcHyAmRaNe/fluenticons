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
    <path :fill="fill" :fill-opacity="opacity" d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11M14 2a3 3 0 0 1 3 3v2h1.5A1.5 1.5 0 0 1 20 8.5v2.998a6.5 6.5 0 0 0-1.5-.422V8.5h-4v3.232A6.5 6.5 0 0 0 13 12.81V8.5H5.5V18A2.5 2.5 0 0 0 8 20.5h3.732A6.5 6.5 0 0 0 12.81 22H8a4 4 0 0 1-4-4V8.5A1.5 1.5 0 0 1 5.5 7H7V5a3 3 0 0 1 5-2.236A3 3 0 0 1 14 2m6 15.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m.33-2.828a.5.5 0 0 0-.707 0l-4.95 4.95a.5.5 0 0 0 .707.707l4.95-4.95a.5.5 0 0 0 0-.707M20 18.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m-5-4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 1a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m-5-12A1.5 1.5 0 0 0 8.5 5v2h3V5A1.5 1.5 0 0 0 10 3.5m4 0c-.465 0-.88.212-1.155.544.1.3.155.622.155.956v2h2.5V5A1.5 1.5 0 0 0 14 3.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedShoppingBagPercent',
  mixins: [icon]
};
</script>
