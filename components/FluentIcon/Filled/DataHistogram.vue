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
    <path :fill="fill" :fill-opacity="opacity" d="M7.5 10v11H3.75a.75.75 0 0 1-.75-.75v-8A2.25 2.25 0 0 1 5.25 10zm5.25-7A2.25 2.25 0 0 1 15 5.25V21H9V5.25A2.25 2.25 0 0 1 11.25 3zm6 4A2.25 2.25 0 0 1 21 9.25v11a.75.75 0 0 1-.75.75H16.5V7z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledDataHistogram',
  mixins: [icon]
};
</script>
