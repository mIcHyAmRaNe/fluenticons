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
    <path :fill="fill" :fill-opacity="opacity" d="M10.94 16.44a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12m-2.498-2.62a5.09 5.09 0 0 1 7.201 0c.448.447.816.997 1.072 1.582a.75.75 0 1 1-1.373.602 3.7 3.7 0 0 0-.76-1.124 3.59 3.59 0 0 0-5.08 0c-.31.31-.562.689-.746 1.11a.75.75 0 1 1-1.375-.6 5.1 5.1 0 0 1 1.061-1.57" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedWifi3',
  mixins: [icon]
};
</script>
