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
    <path :fill="fill" :fill-opacity="opacity" d="M5.5 2.5c1.025 0 1.904.617 2.29 1.5h8.71a4.5 4.5 0 1 1 0 9h-9a2.5 2.5 0 0 0 0 5h8.71A2.499 2.499 0 0 1 21 19a2.5 2.5 0 0 1-4.79 1H7.5a4.5 4.5 0 1 1 0-9h9a2.5 2.5 0 0 0 0-5H7.79A2.499 2.499 0 1 1 5.5 2.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledFlowDot',
  mixins: [icon]
};
</script>
