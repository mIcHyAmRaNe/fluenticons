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
    <path :fill="fill" :fill-opacity="opacity" d="m16.161 1.83-3.997 7.998A1.5 1.5 0 0 0 13.507 12h7.994a1.5 1.5 0 0 0 1.343-2.172L18.847 1.83c-.553-1.107-2.133-1.107-2.686 0m1.843 2.666v3.001a.5.5 0 0 1-1 0V4.496a.5.5 0 0 1 1 0m-.5 5.503a.5.5 0 1 1 0-1.001.5.5 0 0 1 0 1M5.25 4h8.71l-.75 1.5H5.25a1.75 1.75 0 0 0-1.744 1.606L3.5 7.25v.429l7.893 4.154A2.48 2.48 0 0 0 13.508 13h.102l-1.26.664a.75.75 0 0 1-.603.042l-.096-.042L3.5 9.374v7.376a1.75 1.75 0 0 0 1.606 1.744l.144.006h13.5a1.75 1.75 0 0 0 1.744-1.607l.006-.143V13h1q.259 0 .5-.049v3.799a3.25 3.25 0 0 1-3.066 3.245L18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75v-9.5a3.25 3.25 0 0 1 3.066-3.245z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedMailWarning',
  mixins: [icon]
};
</script>
