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
    <path :fill="fill" :fill-opacity="opacity" d="M9.25 2A2.25 2.25 0 0 0 7 4.25v15.5A2.25 2.25 0 0 0 9.25 22h5.5A2.25 2.25 0 0 0 17 19.75V4.25A2.25 2.25 0 0 0 14.75 2zM8.5 19h1.75a.75.75 0 0 0 0-1.5H8.5V16h3.75a.75.75 0 0 0 0-1.5H8.5v-1.75h1.75a.75.75 0 0 0 0-1.5H8.5V9.5h3.75a.75.75 0 0 0 0-1.5H8.5V6.5h1.75a.75.75 0 0 0 0-1.5H8.5v-.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 .75.75v15.5a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1-.75-.75z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedRuler',
  mixins: [icon]
};
</script>
