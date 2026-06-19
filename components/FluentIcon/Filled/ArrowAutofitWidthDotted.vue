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
    <path :fill="fill" :fill-opacity="opacity" d="M5.793 13.793a1 1 0 0 1 1.414 1.414L5.414 17l1.793 1.793a1 1 0 1 1-1.414 1.414l-2.5-2.5a1 1 0 0 1 0-1.414zm11 0a1 1 0 0 1 1.414 0l2.5 2.5.068.076a1 1 0 0 1-.068 1.338l-2.5 2.5a1 1 0 0 1-1.414-1.414L18.586 17l-1.793-1.793a1 1 0 0 1 0-1.414M9 16a1 1 0 1 1 0 2H8a1 1 0 0 1 0-2zm3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2m4 0a1 1 0 1 1 0 2h-1a1 1 0 0 1 0-2zm1.5-12A2.5 2.5 0 0 1 20 6.5V11a1 1 0 1 1-2 0V6.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V11a1 1 0 1 1-2 0V6.5A2.5 2.5 0 0 1 6.5 4z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledArrowAutofitWidthDotted',
  mixins: [icon]
};
</script>
