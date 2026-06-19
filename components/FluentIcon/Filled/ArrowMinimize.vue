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
    <path :fill="fill" :fill-opacity="opacity" d="M10.498 12.505a1 1 0 0 1 .993.884l.007.116v7.504a1 1 0 0 1-1.994.117l-.006-.117v-5.093l-5.791 5.792a1 1 0 0 1-1.32.083l-.095-.083a1 1 0 0 1-.083-1.32l.083-.095 5.788-5.788H2.996a1 1 0 0 1-.117-1.993l.117-.007zm3-10.505a1 1 0 0 1 .994.883l.007.117v5.087l5.793-5.794a1 1 0 0 1 1.32-.083l.095.083a1 1 0 0 1 .083 1.32l-.083.095-5.797 5.795H21a1 1 0 0 1 .117 1.994l-.117.007h-7.5a1 1 0 0 1-.994-.883l-.006-.117V3a1 1 0 0 1 1-1" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledArrowMinimize',
  mixins: [icon]
};
</script>
