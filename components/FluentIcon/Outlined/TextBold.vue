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
    <path :fill="fill" :fill-opacity="opacity" d="M11.5 3.75a1.5 1.5 0 0 1 1.5 1.5v5.08l5.398-5.847a1.5 1.5 0 1 1 2.204 2.034L15.542 12l5.06 5.483a1.5 1.5 0 1 1-2.204 2.034L13 13.67v5.08a1.5 1.5 0 0 1-3 0v-5.08l-5.398 5.847a1.5 1.5 0 1 1-2.204-2.034L7.458 12l-5.06-5.483a1.5 1.5 0 0 1 2.204-2.034L10 10.33V5.25a1.5 1.5 0 0 1 1.5-1.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTextBold',
  mixins: [icon]
};
</script>
