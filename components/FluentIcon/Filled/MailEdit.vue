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
    <path :fill="fill" :fill-opacity="opacity" d="M22 11.26V7.608l-9.652 5.056a.75.75 0 0 1-.696 0L2 7.608v8.142l.005.184A3.25 3.25 0 0 0 5.25 19h6.467c.184-.422.445-.807.773-1.135l5.903-5.903A3.29 3.29 0 0 1 22 11.26M18.75 3H5.25l-.186.005a3.25 3.25 0 0 0-3.048 2.919L12 11.154l9.984-5.23A3.25 3.25 0 0 0 18.75 3m.35 9.67-5.903 5.902a2.7 2.7 0 0 0-.706 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.7 2.7 0 0 0 1.248-.707l5.902-5.902A2.286 2.286 0 0 0 19.1 12.67" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledMailEdit',
  mixins: [icon]
};
</script>
