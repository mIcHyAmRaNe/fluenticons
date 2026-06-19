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
    <path :fill="fill" :fill-opacity="opacity" d="M14.003 18.999H21a1 1 0 0 0 .993-.884L22 18v-7a1 1 0 0 0-1.994-.117L20 11l-.001 4.586-7.292-7.294a1 1 0 0 0-1.32-.083l-.094.083-2.296 2.292-5.288-5.29a1 1 0 0 0-1.497 1.32l.083.094 5.994 5.997a1 1 0 0 0 1.32.083l.094-.083 2.296-2.292 6.585 6.586h-4.581a1 1 0 0 0-.993.884l-.007.116a1 1 0 0 0 .883.994z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledArrowTrendingDown',
  mixins: [icon]
};
</script>
