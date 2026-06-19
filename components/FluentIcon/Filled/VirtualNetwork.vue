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
    <path :fill="fill" :fill-opacity="opacity" d="M4.474 7.369a1.001 1.001 0 0 1 1.552 1.262L3.288 12l2.738 3.37a1 1 0 0 1-1.552 1.26l-3.25-4a1 1 0 0 1 0-1.26zm13.645-.145a1 1 0 0 1 1.407.145l3.25 4a1 1 0 0 1 0 1.262l-3.25 4a1 1 0 0 1-1.552-1.262L20.712 12l-2.738-3.368a1 1 0 0 1 .145-1.407M7.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5m4.501 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5m4.5 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledVirtualNetwork',
  mixins: [icon]
};
</script>
