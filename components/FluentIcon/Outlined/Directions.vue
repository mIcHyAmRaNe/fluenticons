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
    <path :fill="fill" :fill-opacity="opacity" d="M9.713 1.963a3.25 3.25 0 0 1 4.596 0l7.75 7.75a3.25 3.25 0 0 1 0 4.596l-7.75 7.75a3.25 3.25 0 0 1-4.596 0l-7.75-7.75a3.25 3.25 0 0 1 0-4.596zm3.535 1.06a1.75 1.75 0 0 0-2.474 0l-7.75 7.75a1.75 1.75 0 0 0 0 2.476l7.75 7.75a1.75 1.75 0 0 0 2.474 0l7.75-7.75a1.75 1.75 0 0 0 0-2.476zM12.72 6.22a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1 0 1.061l-2.5 2.5a.75.75 0 1 1-1.06-1.06L13.94 10h-2.19A1.75 1.75 0 0 0 10 11.75v4a.75.75 0 0 1-1.5 0v-4a3.25 3.25 0 0 1 3.25-3.25h2.19l-1.22-1.22a.75.75 0 0 1 0-1.06" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedDirections',
  mixins: [icon]
};
</script>
