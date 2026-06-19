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
    <path :fill="fill" :fill-opacity="opacity" d="M20.004 11.5a1 1 0 0 1 .994.883l.006.117V17a5.5 5.5 0 0 1-5.278 5.496l-.222.004H8.25a2.5 2.5 0 0 1-2.453-2.012h2.347l.052.009.054.003h7.254A3.5 3.5 0 0 0 19 17.204l.006-.192V12.5a1 1 0 0 1 1-1M17 9.487a1 1 0 0 1 .994.883l.006.117v6.5a2.5 2.5 0 0 1-2.335 2.495l-.165.006h-10a2.5 2.5 0 0 1-2.495-2.336L3 16.988v-6.49a1 1 0 0 1 1.993-.116l.007.116v6.49a.5.5 0 0 0 .41.492l.09.008h10a.5.5 0 0 0 .492-.41l.008-.09v-6.501a1 1 0 0 1 1-1M6.292 5.793l3.498-3.5a1 1 0 0 1 1.32-.084l.094.084 3.502 3.5a1 1 0 0 1-1.319 1.497l-.094-.083-1.794-1.792v8.84a1 1 0 0 1-.883.993l-.116.007a1 1 0 0 1-.994-.883l-.006-.117V5.412L7.706 7.207a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1-.084-1.32zl3.498-3.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledSendCopy',
  mixins: [icon]
};
</script>
