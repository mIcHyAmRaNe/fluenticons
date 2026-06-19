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
    <path :fill="fill" :fill-opacity="opacity" d="M6.627 5a2.25 2.25 0 0 1 2.122-1.5h8.5a4.25 4.25 0 0 1 4.25 4.25v4.5a2.25 2.25 0 0 1-1.5 2.122V7.75A2.75 2.75 0 0 0 17.249 5zM4 8.25A2.25 2.25 0 0 1 6.25 6h10.5A2.25 2.25 0 0 1 19 8.25v6.5A2.25 2.25 0 0 1 16.75 17H6.25A2.25 2.25 0 0 1 4 14.75zm2.25-.75a.75.75 0 0 0-.75.75v6.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75zm-3.5 11a.75.75 0 0 0 0 1.5h17.5a.75.75 0 0 0 0-1.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedLaptopMultiple',
  mixins: [icon]
};
</script>
