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
    <path :fill="fill" :fill-opacity="opacity" d="M15 8H6.5a1 1 0 0 1-.117-1.993L6.5 6H15a1 1 0 0 1 .117 1.993zH6.5zm6.707 6.707a1 1 0 0 1-1.32.083l-.094-.083-2-2a1 1 0 0 1-.083-1.32l.083-.094 2-2a1 1 0 0 1 1.497 1.32l-.083.094L20.414 12l1.293 1.293a1 1 0 0 1 0 1.414M15 13l-11.5.001a1 1 0 0 1-.117-1.993L3.5 11H15a1 1 0 0 1 .117 1.993zl-11.5.001zm0 5H6.5a1 1 0 0 1-.117-1.993L6.5 16H15a1 1 0 0 1 .117 1.993zH6.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTextIndentIncreaseRtl',
  mixins: [icon]
};
</script>
