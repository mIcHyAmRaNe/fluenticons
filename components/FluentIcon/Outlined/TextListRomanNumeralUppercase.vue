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
    <path :fill="fill" :fill-opacity="opacity" d="M6 2.75a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0zm0 7a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0zM5.25 16a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5a.75.75 0 0 1 .75-.75m4.5-11a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 6.5a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 6.5a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTextListRomanNumeralUppercase',
  mixins: [icon]
};
</script>
