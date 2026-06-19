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
    <path :fill="fill" :fill-opacity="opacity" d="m11.28 5.034-.104-.104a5.375 5.375 0 1 0-7.601 7.601l7.895 7.896a.75.75 0 0 0 1.06 0l7.902-7.897a5.376 5.376 0 0 0-.001-7.6 5.38 5.38 0 0 0-7.611 0l-.789.791-1.882 3.033 3.68 3.22a.5.5 0 0 1 .025.73l-2.5 2.5a.5.5 0 0 1-.708-.707l2.122-2.122-3.597-3.148a.5.5 0 0 1-.096-.64z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledHeartBroken',
  mixins: [icon]
};
</script>
