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
    <path :fill="fill" :fill-opacity="opacity" d="M18.998 6.01a3.25 3.25 0 0 1 3 3.24v6.5a6.25 6.25 0 0 1-6.25 6.25h-6.5a3.25 3.25 0 0 1-3.24-3h8.74a4.25 4.25 0 0 0 4.25-4.25zM14.75 2A3.25 3.25 0 0 1 18 5.25v9.5A3.25 3.25 0 0 1 14.75 18h-9.5A3.25 3.25 0 0 1 2 14.75v-4.615A2.5 2.5 0 0 0 5.135 8.5H5.6a3.43 3.43 0 0 1 2.79 1.436A4.93 4.93 0 0 0 12.4 12h1.04l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H12.4a3.43 3.43 0 0 1-2.79-1.436A4.93 4.93 0 0 0 5.6 7h-.465A2.5 2.5 0 0 0 2 5.364V5.25A3.25 3.25 0 0 1 5.25 2zm-12 4.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledArrowFlowSquareMultiple',
  mixins: [icon]
};
</script>
