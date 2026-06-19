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
    <path :fill="fill" :fill-opacity="opacity" d="M8 4.5a2.5 2.5 0 0 1 5 0V6h3.379a2.25 2.25 0 0 1 1.59.659l2.811 2.81a.75.75 0 0 1 0 1.061l-2.81 2.811a2.25 2.25 0 0 1-1.591.659H13v6.75c0 .69-.56 1.25-1.25 1.25h-2.5C8.56 22 8 21.44 8 20.75V14H5.25A2.25 2.25 0 0 1 3 11.75v-3.5A2.25 2.25 0 0 1 5.25 6H8zm3.5 0a1 1 0 1 0-2 0V6h2zm-2 16h2V14h-2z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledStreetSign',
  mixins: [icon]
};
</script>
