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
    <path :fill="fill" :fill-opacity="opacity" d="m21 12.505.116.007A1 1 0 0 1 21 14.505h-5.084l5.788 5.788.083.094a1 1 0 0 1-.083 1.32l-.095.083a1 1 0 0 1-1.32-.083l-5.79-5.792-.001 5.094-.006.116a1.001 1.001 0 0 1-1.994-.116v-7.504l.007-.117a1 1 0 0 1 .993-.883zM10.497 1.999a1 1 0 0 1 1 1v7.504l-.006.117a1 1 0 0 1-.994.883h-7.5l-.118-.006a1.001 1.001 0 0 1 .117-1.994h5.09L2.289 3.707l-.083-.094a1 1 0 0 1 .083-1.32l.095-.083a1 1 0 0 1 1.32.083l5.794 5.794V2.999l.006-.116a1 1 0 0 1 .993-.884" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledArrowMinimizeTopLeftBottomRight',
  mixins: [icon]
};
</script>
