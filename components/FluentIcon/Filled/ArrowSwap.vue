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
    <path :fill="fill" :fill-opacity="opacity" d="m15.207 2.29 4 3.996a1 1 0 0 1 .084 1.32l-.083.094-4 4.006a1 1 0 0 1-1.498-1.32l.083-.094L16.083 8H5.5a1 1 0 0 1-.993-.883L4.5 6.999a1 1 0 0 1 .883-.993l.117-.007h10.59l-2.296-2.293a1 1 0 0 1-.084-1.32l.083-.095a1 1 0 0 1 1.32-.084zl4 3.995zm4.284 14.592.006.117a1 1 0 0 1-.883.993l-.117.007H7.914l2.294 2.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.32.084l-.094-.084-4-3.996a1 1 0 0 1-.084-1.32l.083-.094 4-4.004a1 1 0 0 1 1.498 1.32l-.083.094-2.29 2.293h10.58a1 1 0 0 1 .993.883l.006.117z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledArrowSwap',
  mixins: [icon]
};
</script>
