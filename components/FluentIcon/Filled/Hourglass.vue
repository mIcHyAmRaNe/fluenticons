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
    <path :fill="fill" :fill-opacity="opacity" d="M17.25 4.5H6.75a.25.25 0 0 0-.25.25v.6A3.24 3.24 0 0 0 7.92 8L10 9.48c.42.278.77.65 1.02 1.089a2.8 2.8 0 0 1 0 2.862c-.25.438-.6.811-1.02 1.089L7.92 16a3.24 3.24 0 0 0-1.42 2.65v.6a.25.25 0 0 0 .25.25h10.5a.25.25 0 0 0 .25-.25v-.6A3.24 3.24 0 0 0 16.08 16L14 14.52a3.2 3.2 0 0 1-1.02-1.089 2.8 2.8 0 0 1 0-2.862c.25-.438.6-.811 1.02-1.089L16.08 8a3.24 3.24 0 0 0 1.42-2.65v-.6a.25.25 0 0 0-.25-.25" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledHourglass',
  mixins: [icon]
};
</script>
