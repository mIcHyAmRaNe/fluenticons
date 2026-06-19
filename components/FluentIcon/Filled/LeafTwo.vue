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
    <path :fill="fill" :fill-opacity="opacity" d="M3.707 2c-.941 0-1.705.763-1.705 1.705V8a6 6 0 0 0 5.003 5.917A7.96 7.96 0 0 1 8.408 9.47L6.22 7.28a.75.75 0 0 1 1.06-1.06l2.094 2.093a8 8 0 0 1 4.322-2.21A6 6 0 0 0 8.002 2zm5.847 16.387L7.22 20.719a.75.75 0 1 0 1.06 1.061l2.335-2.333a6.999 6.999 0 0 0 11.389-5.451V8.748a1.75 1.75 0 0 0-1.75-1.75h-5.25a6.999 6.999 0 0 0-5.45 11.389m6.226-4.102-4.095 4.095a5.5 5.5 0 0 1-1.061-1.06l4.095-4.096a.75.75 0 0 1 1.061 1.061" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledLeafTwo',
  mixins: [icon]
};
</script>
