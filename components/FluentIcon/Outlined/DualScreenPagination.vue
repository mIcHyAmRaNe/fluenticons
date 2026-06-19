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
    <path :fill="fill" :fill-opacity="opacity" d="m12.748 4.002-.001.002h7.498c.967 0 1.75.784 1.75 1.75V18.25a1.75 1.75 0 0 1-1.75 1.75h-8.997l-.001-.003H3.75A1.75 1.75 0 0 1 2 18.247V5.752c0-.967.784-1.75 1.75-1.75zm7.497 1.502h-7.497V18.5h7.497a.25.25 0 0 0 .25-.25V5.754a.25.25 0 0 0-.25-.25m-8.997-.002H3.75a.25.25 0 0 0-.25.25v12.495c0 .138.112.25.25.25h7.498zm5.377 9.999a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m2.5 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m-5 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedDualScreenPagination',
  mixins: [icon]
};
</script>
