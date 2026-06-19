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
    <path :fill="fill" :fill-opacity="opacity" d="M2.22 2.22a.75.75 0 0 1 1.06 0l18.5 18.5a.75.75 0 0 1-1.06 1.06l-2.201-2.2A9.96 9.96 0 0 1 12 22C6.477 22 2 17.523 2 12a9.96 9.96 0 0 1 2.419-6.52l-2.2-2.2a.75.75 0 0 1 0-1.06M12 2c5.523 0 10 4.477 10 10a9.95 9.95 0 0 1-1.52 5.298L6.7 3.52A9.95 9.95 0 0 1 12 2" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledCircleOff',
  mixins: [icon]
};
</script>
