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
    <path :fill="fill" :fill-opacity="opacity" d="M6.25 3A3.25 3.25 0 0 0 3 6.25v9.5A3.25 3.25 0 0 0 6.25 19h9.5A3.25 3.25 0 0 0 19 15.75v-9.5A3.25 3.25 0 0 0 15.75 3zm2.991 18.5A3.25 3.25 0 0 1 6.5 19.999h9.746A3.753 3.753 0 0 0 20 16.246V6.5a3.25 3.25 0 0 1 1.5 2.741v7.005a5.254 5.254 0 0 1-5.254 5.254z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledSelectAllOff',
  mixins: [icon]
};
</script>
