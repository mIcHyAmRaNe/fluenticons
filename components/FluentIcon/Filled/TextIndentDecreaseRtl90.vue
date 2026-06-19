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
    <path :fill="fill" :fill-opacity="opacity" d="M17 5.5a1 1 0 0 0-1 1V15l.007.117A1 1 0 0 0 18 15V6.5l-.007-.117A1 1 0 0 0 17 5.5m-6.001-2L11 15l.007.117A1 1 0 0 0 13 15l-.001-11.5-.007-.117A1 1 0 0 0 11 3.5m-4 2a1 1 0 0 0-1 1V15l.007.117A1 1 0 0 0 8 15V6.5l-.007-.117A1 1 0 0 0 7 5.5m2.21 14.113a1 1 0 0 1 1.497-1.32L12 19.586l1.293-1.293.094-.083a1 1 0 0 1 1.32 1.497l-2 2-.094.083a1 1 0 0 1-1.32-.083l-2-2z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTextIndentDecreaseRtl90',
  mixins: [icon]
};
</script>
