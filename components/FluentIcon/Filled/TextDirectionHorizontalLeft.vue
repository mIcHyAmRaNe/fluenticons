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
    <path :fill="fill" :fill-opacity="opacity" d="M18 4a1 1 0 0 1 1 1v3h1a1 1 0 1 1 0 2h-1v3a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1m-8 2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.25c0 1.105-.216 2.506-.958 3.664C14.261 12.136 12.945 13 11 13a1 1 0 1 1 0-2c1.255 0 1.94-.51 2.358-1.164.458-.717.642-1.69.642-2.586V7h-3a1 1 0 0 1-1-1m-4.707 8.293a1 1 0 0 1 1.414 1.414L6.414 16H20a1 1 0 1 1 0 2H6.414l.293.293a1 1 0 1 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414zm1.414-8a1 1 0 0 0-1.414 0l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414-1.414L6.414 10H7.5a1 1 0 1 0 0-2H6.414l.293-.293a1 1 0 0 0 0-1.414" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTextDirectionHorizontalLeft',
  mixins: [icon]
};
</script>
