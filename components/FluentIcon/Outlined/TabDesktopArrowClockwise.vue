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
    <path :fill="fill" :fill-opacity="opacity" d="M5.75 3A2.75 2.75 0 0 0 3 5.75v5.351a7 7 0 0 1 1.5-1.165V5.75c0-.69.56-1.25 1.25-1.25H11v1.25A2.25 2.25 0 0 0 13.25 8h6.25v10.25c0 .69-.56 1.25-1.25 1.25h-4.187A7 7 0 0 1 12.9 21h5.351A2.75 2.75 0 0 0 21 18.25V5.75A2.75 2.75 0 0 0 18.25 3zM19.5 6.5h-6.25a.75.75 0 0 1-.75-.75V4.5h5.75c.69 0 1.25.56 1.25 1.25zm-7.25 3.25a.75.75 0 0 1 .75.75v2.75a.75.75 0 0 1-.75.75H9.5a.75.75 0 0 1 0-1.5h1.33l-.018-.013A4.5 4.5 0 1 0 12.5 16a.75.75 0 0 1 1.5 0 6 6 0 1 1-2.5-4.874V10.5a.75.75 0 0 1 .75-.75" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTabDesktopArrowClockwise',
  mixins: [icon]
};
</script>
