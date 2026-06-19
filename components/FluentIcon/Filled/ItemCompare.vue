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
    <path :fill="fill" :fill-opacity="opacity" d="M12 2.5a.75.75 0 0 1 .75.75v17.5l-.004.077a.75.75 0 0 1-1.492 0l-.004-.077V3.25A.75.75 0 0 1 12 2.5M6.75 8A2.25 2.25 0 0 1 9 10.25v3.5A2.25 2.25 0 0 1 6.75 16h-3.5A2.25 2.25 0 0 1 1 13.75v-3.5A2.25 2.25 0 0 1 3.25 8zm14 0A2.25 2.25 0 0 1 23 10.25v3.5A2.25 2.25 0 0 1 20.75 16h-3.5A2.25 2.25 0 0 1 15 13.75v-3.5A2.25 2.25 0 0 1 17.25 8z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledItemCompare',
  mixins: [icon]
};
</script>
