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
    <path :fill="fill" :fill-opacity="opacity" d="M10 4a3 3 0 0 0-3 3v4a3 3 0 1 0 6 0V7a3 3 0 0 0-3-3m1 7a1 1 0 1 1-2 0V7a1 1 0 0 1 2 0zm-6 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M19 7v4q0 .087-.015.17a6.5 6.5 0 0 1 1.868.76c.095-.293.147-.605.147-.93V7a3 3 0 1 0-6 0v4q0 .246.039.482A6.5 6.5 0 0 1 17 11.02V7a1 1 0 1 1 2 0m4 10.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-8.5-.5a.5.5 0 0 0 0 1h4.793l-1.647 1.646a.5.5 0 0 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708l-2.5-2.5a.5.5 0 0 0-.708.708L19.293 17z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledDecimalArrowRight',
  mixins: [icon]
};
</script>
