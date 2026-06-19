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
    <path :fill="fill" :fill-opacity="opacity" d="M12 2a3 3 0 0 0-2.951 3.54 2.5 2.5 0 0 0-1.334 4.21A2.5 2.5 0 0 0 9.5 14h1.75v4.69l-3.47-3.47a.75.75 0 0 0-1.06 1.06l4.53 4.53v1.44a.75.75 0 0 0 1.5 0v-1.44l4.53-4.53a.75.75 0 1 0-1.06-1.06l-3.47 3.47V14h1.75a2.5 2.5 0 0 0 1.785-4.25 2.5 2.5 0 0 0-1.334-4.21Q15 5.278 15 5a3 3 0 0 0-3-3" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledPlantRagweed',
  mixins: [icon]
};
</script>
