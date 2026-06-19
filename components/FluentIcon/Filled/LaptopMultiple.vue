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
    <path :fill="fill" :fill-opacity="opacity" d="M6.627 5h10.622a2.75 2.75 0 0 1 2.75 2.75v6.622a2.25 2.25 0 0 0 1.5-2.122v-4.5a4.25 4.25 0 0 0-4.25-4.25h-8.5A2.25 2.25 0 0 0 6.627 5M6.25 6A2.25 2.25 0 0 0 4 8.25v6.5A2.25 2.25 0 0 0 6.25 17h10.5A2.25 2.25 0 0 0 19 14.75v-6.5A2.25 2.25 0 0 0 16.75 6zm-3.5 12.5a.75.75 0 0 0 0 1.5h17.5a.75.75 0 0 0 0-1.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledLaptopMultiple',
  mixins: [icon]
};
</script>
