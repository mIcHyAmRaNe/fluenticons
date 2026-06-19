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
    <path :fill="fill" :fill-opacity="opacity" d="M12 2c5.523 0 10 4.477 10 10 0 3.09-1.68 5.025-3.75 5.025-1.296 0-2.439-.759-3.112-2.085C14.334 16.173 13.03 17 11.5 17 8.93 17 7 14.67 7 12s1.93-5 4.5-5c1.175 0 2.216.488 3 1.271V7.75a.75.75 0 0 1 1.5 0V12c0 2.61 1.32 3.525 2.25 3.525S20.5 14.611 20.5 12a8.5 8.5 0 1 0-5.61 7.993.82.82 0 0 1 .861.178c.372.372.27 1-.222 1.185A10 10 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2m-.5 6.5c-1.571 0-3 1.476-3 3.5s1.429 3.5 3 3.5 3-1.476 3-3.5-1.429-3.5-3-3.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedMention',
  mixins: [icon]
};
</script>
