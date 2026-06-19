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
    <path :fill="fill" :fill-opacity="opacity" d="M9.51 2a.75.75 0 0 1 .697.5l3.182 8.965a6.5 6.5 0 0 0-1.157 1.226L9.47 4.908 6.337 13h5.685a6.5 6.5 0 0 0-.709 1.5H5.756L4.2 18.52a.75.75 0 1 1-1.4-.54l6-15.5A.75.75 0 0 1 9.51 2M17 16v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0m1.25-2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M23 16.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-1 0a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTextFontInfo',
  mixins: [icon]
};
</script>
