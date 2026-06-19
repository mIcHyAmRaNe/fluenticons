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
    <path :fill="fill" :fill-opacity="opacity" d="M4.854 8.146a2.84 2.84 0 0 1 .685 1.114l.448 1.377a.544.544 0 0 0 1.026 0l.448-1.377a2.84 2.84 0 0 1 1.798-1.796l1.378-.448a.544.544 0 0 0 0-1.025l-.028-.007-1.378-.448A2.84 2.84 0 0 1 7.433 3.74l-.447-1.377a.544.544 0 0 0-1.027 0L5.511 3.74l-.011.034a2.84 2.84 0 0 1-1.759 1.762l-1.378.448a.544.544 0 0 0 0 1.025l1.378.448c.42.14.8.376 1.113.689M20 7a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-2.586l-5.793 5.793a1 1 0 0 1-1.414 0L10 14.414l-5.293 5.293a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0l1.793 1.793L17.586 9H15a1 1 0 1 1 0-2zm.017 10.965.766.248.015.004a.303.303 0 0 1 .147.46.3.3 0 0 1-.147.11l-.765.248a1.58 1.58 0 0 0-1 .999l-.248.764a.302.302 0 0 1-.57 0l-.249-.764a1.58 1.58 0 0 0-.999-1.002l-.765-.249a.303.303 0 0 1-.147-.46.3.3 0 0 1 .147-.11l.765-.248a1.58 1.58 0 0 0 .984-.998l.249-.765a.302.302 0 0 1 .57 0l.249.764a1.58 1.58 0 0 0 .999.999" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledArrowTrendingSparkle',
  mixins: [icon]
};
</script>
