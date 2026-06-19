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
    <path :fill="fill" :fill-opacity="opacity" d="M4.67 7.273a.75.75 0 0 1 1.16.954L2.72 12l3.11 3.774a.75.75 0 0 1-1.16.953l-3.5-4.25a.75.75 0 0 1 0-.954zm13.603-.102a.75.75 0 0 1 1.056.102l3.5 4.25a.75.75 0 0 1 0 .954l-3.5 4.25a.75.75 0 0 1-1.158-.953L21.279 12l-3.108-3.773a.75.75 0 0 1 .102-1.056M7.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5m4.5 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5m4.5 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedVirtualNetwork',
  mixins: [icon]
};
</script>
