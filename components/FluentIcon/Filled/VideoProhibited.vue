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
    <path :fill="fill" :fill-opacity="opacity" d="M6.5 11a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m-2.248 8.809a4 4 0 0 0 5.557-5.557zM11.75 5A3.25 3.25 0 0 1 15 8.25v7.5a3.25 3.25 0 0 1-2.46 3.152A6.5 6.5 0 0 0 2 11.812V8.25A3.25 3.25 0 0 1 5.25 5zM6.5 12.5a4 4 0 0 0-3.309 6.248l5.557-5.557A4 4 0 0 0 6.5 12.5m12.758-6.187c1.16-.801 2.744.03 2.744 1.44v8.495c0 1.41-1.583 2.241-2.744 1.44L16 15.44V8.563z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledVideoProhibited',
  mixins: [icon]
};
</script>
