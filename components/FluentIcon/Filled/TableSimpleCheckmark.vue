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
    <path :fill="fill" :fill-opacity="opacity" d="M11.25 12.75V21h-5A3.25 3.25 0 0 1 3 17.75v-5zm1.5 8.25v-8.25H21v5A3.25 3.25 0 0 1 17.75 21zm0-18v8.25H21v-5A3.25 3.25 0 0 0 17.75 3zm-1.5 0v8.25H3v-5A3.25 3.25 0 0 1 6.25 3zm7.533 13.28a.75.75 0 1 0-1.06-1.06l-1.473 1.472-.47-.47a.75.75 0 1 0-1.06 1.061l1 1a.75.75 0 0 0 1.06 0z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTableSimpleCheckmark',
  mixins: [icon]
};
</script>
