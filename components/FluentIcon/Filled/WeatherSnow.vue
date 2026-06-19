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
    <path :fill="fill" :fill-opacity="opacity" d="M9.75 18.152a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m4.5 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m-6.75-1a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m4.5 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m4.5 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M12 4c3.169 0 4.966 2.097 5.227 4.63h.08A3.687 3.687 0 0 1 21 12.314a3.687 3.687 0 0 1-3.692 3.682H6.693A3.687 3.687 0 0 1 3 12.314 3.687 3.687 0 0 1 6.693 8.63h.08C7.035 6.08 8.831 4 12 4" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledWeatherSnow',
  mixins: [icon]
};
</script>
