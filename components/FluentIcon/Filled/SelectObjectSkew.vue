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
    <path :fill="fill" :fill-opacity="opacity" d="M18.586 6.414a2 2 0 0 0 1.9.527 2 2 0 1 0-1.9-.527M14.268 20A2 2 0 0 0 18 19a2 2 0 0 0-.586-1.414 2 2 0 0 0-1.9-.527A2.004 2.004 0 0 0 14 19c0 .364.097.706.268 1M4 21a2 2 0 1 1 0-4 2 2 0 0 1 0 4M6.586 6.414a2 2 0 0 0 1.9.527A2.004 2.004 0 0 0 10 5a2 2 0 1 0-3.414 1.414m-2.77 9.592 2.445-8.56a3 3 0 0 0 1.924.548l-2.446 8.56a3 3 0 0 0-1.923-.548M17.17 6h-6.342a3 3 0 0 0 0-2h6.342a3 3 0 0 0 0 2m-4 14a3 3 0 0 1 0-2H6.829a3 3 0 0 1 0 2zm2.645-3.994 2.445-8.56a3 3 0 0 0 1.924.548l-2.446 8.56a3 3 0 0 0-1.923-.548" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledSelectObjectSkew',
  mixins: [icon]
};
</script>
