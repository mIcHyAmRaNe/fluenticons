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
    <path :fill="fill" :fill-opacity="opacity" d="M10.75 5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-1.5 0V12.5H3.5v5.75a.75.75 0 0 1-1.5 0V5.75a.75.75 0 0 1 1.5 0V11H10V5.75a.75.75 0 0 1 .75-.75m7-.5A4.25 4.25 0 0 1 22 8.75c0 1.299-.545 2.3-1.29 3.115-.722.79-1.673 1.45-2.524 2.058-1.554 1.11-2.799 2.084-3.11 3.577h6.174a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75c0-2.812 2.114-4.333 3.814-5.548.899-.642 1.698-1.201 2.288-1.848.568-.622.898-1.278.898-2.104a2.75 2.75 0 0 0-5.473-.393.75.75 0 0 1-1.484-.211A4.25 4.25 0 0 1 17.75 4.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTextHeader2',
  mixins: [icon]
};
</script>
