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
    <path :fill="fill" :fill-opacity="opacity" d="M15.75 2c-.69 0-1.25.56-1.25 1.25V8H9.25C8.56 8 8 8.56 8 9.25v5.25H3.25c-.69 0-1.25.56-1.25 1.25v5c0 .69.56 1.25 1.25 1.25h15.5A3.25 3.25 0 0 0 22 18.75V3.25C22 2.56 21.44 2 20.75 2z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledStep',
  mixins: [icon]
};
</script>
