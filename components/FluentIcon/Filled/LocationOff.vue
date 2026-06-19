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
    <path :fill="fill" :fill-opacity="opacity" d="M2.22 2.22a.75.75 0 0 1 1.06 0l18.5 18.5.051.056a.75.75 0 0 1-1.055 1.055l-.056-.05-3.738-3.738-.012.014q-1.312 1.288-3.406 3.312a2.25 2.25 0 0 1-3.129 0l-3.49-3.396q-.66-.646-1.102-1.09A8.71 8.71 0 0 1 4.787 5.848L2.22 3.28a.75.75 0 0 1 0-1.06m4.65 1.468a8.708 8.708 0 0 1 12.166 12.166l-4.13-4.128A3 3 0 0 0 15 11a3 3 0 0 0-3.726-2.91zm2.245 6.488a3 3 0 0 0 3.708 3.708z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledLocationOff',
  mixins: [icon]
};
</script>
