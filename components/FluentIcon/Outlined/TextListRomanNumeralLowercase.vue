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
    <path :fill="fill" :fill-opacity="opacity" d="M5.25 3.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M6 4.75a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0zM5.25 11a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75m0 7a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75M9 5.75A.75.75 0 0 1 9.75 5h9.5a.75.75 0 0 1 0 1.5h-9.5A.75.75 0 0 1 9 5.75m0 6.5a.75.75 0 0 1 .75-.75h9.5a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75m0 6.5a.75.75 0 0 1 .75-.75h9.5a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75M5.25 17.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M6 9.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTextListRomanNumeralLowercase',
  mixins: [icon]
};
</script>
