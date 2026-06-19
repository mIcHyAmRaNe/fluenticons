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
    <path :fill="fill" :fill-opacity="opacity" d="M8.75 2a.75.75 0 0 0 0 1.5H9V5h-.75A3.25 3.25 0 0 0 5 8.25v9a3.25 3.25 0 0 0 2 3v1a.75.75 0 0 0 1.5 0v-.75h7v.75a.75.75 0 0 0 1.5 0v-1a3.25 3.25 0 0 0 2-3v-9A3.25 3.25 0 0 0 15.75 5H15V3.5h.25a.75.75 0 0 0 0-1.5zm4.75 1.5V5h-3V3.5zM8 9.75A.75.75 0 0 1 8.75 9h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 8 9.75" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledLuggage',
  mixins: [icon]
};
</script>
