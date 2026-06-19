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
    <path :fill="fill" :fill-opacity="opacity" d="M18.493 5.007a3.25 3.25 0 0 1 1.508 2.743v8.5a5.75 5.75 0 0 1-5.75 5.75h-4.5a3.25 3.25 0 0 1-2.743-1.508q.12.008.243.008h7a4.25 4.25 0 0 0 4.25-4.25v-11q0-.123-.008-.243M14.25 2a3.25 3.25 0 0 1 3.25 3.25v11a3.25 3.25 0 0 1-3.25 3.25h-7A3.25 3.25 0 0 1 4 16.25v-11A3.25 3.25 0 0 1 7.25 2zM9.904 7.688A1.25 1.25 0 0 0 8 8.754v3.992a1.25 1.25 0 0 0 1.904 1.066l3.251-1.997a1.25 1.25 0 0 0 0-2.13z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledVideoShortMultiple',
  mixins: [icon]
};
</script>
