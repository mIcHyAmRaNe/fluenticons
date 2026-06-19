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
    <path :fill="fill" :fill-opacity="opacity" d="M12 3a.75.75 0 0 1 .75.75V9.5h2.496a2.75 2.75 0 0 1 2.75 2.75v6.192l1.725-1.723a.75.75 0 1 1 1.06 1.062l-3.005 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.061l1.72 1.72v-6.19c0-.69-.56-1.25-1.25-1.25H8.751c-.69 0-1.25.56-1.25 1.25v6.19l1.72-1.72a.75.75 0 0 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3.001-3a.75.75 0 1 1 1.06-1.06L6 18.44v-6.19A2.75 2.75 0 0 1 8.75 9.5h2.5V3.75A.75.75 0 0 1 12 3" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedArrowSplit',
  mixins: [icon]
};
</script>
