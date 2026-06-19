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
    <path :fill="fill" :fill-opacity="opacity" d="M6.75 2a4.75 4.75 0 0 0 0 9.5h4a.75.75 0 0 0 .75-.75v-4A4.75 4.75 0 0 0 6.75 2m0 20a4.75 4.75 0 1 1 0-9.5h4a.75.75 0 0 1 .75.75v4A4.75 4.75 0 0 1 6.75 22m10.5-20a4.75 4.75 0 1 1 0 9.5h-4a.75.75 0 0 1-.75-.75v-4A4.75 4.75 0 0 1 17.25 2m0 20a4.75 4.75 0 1 0 0-9.5h-4a.75.75 0 0 0-.75.75v4A4.75 4.75 0 0 0 17.25 22" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledClover',
  mixins: [icon]
};
</script>
