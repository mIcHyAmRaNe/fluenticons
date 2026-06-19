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
    <path :fill="fill" :fill-opacity="opacity" d="M6.667 6.037a1 1 0 1 0-1.334-1.49A9.98 9.98 0 0 0 2 12a9.98 9.98 0 0 0 3.714 7.777 1 1 0 0 0 1.258-1.555A7.98 7.98 0 0 1 4 12a7.98 7.98 0 0 1 2.667-5.963m12-1.49a1 1 0 1 0-1.334 1.49A7.98 7.98 0 0 1 20 12a7.98 7.98 0 0 1-2.667 5.963 1 1 0 0 0 1.334 1.49A9.98 9.98 0 0 0 22 12a9.98 9.98 0 0 0-3.333-7.454M7 12a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledSubtractParentheses',
  mixins: [icon]
};
</script>
