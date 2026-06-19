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
    <path :fill="fill" :fill-opacity="opacity" d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h5.772a6.5 6.5 0 0 1-.709-1.5H6.25a1.75 1.75 0 0 1-1.75-1.75V6.25c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75v5.063a6.5 6.5 0 0 1 1.5.709V6.25A3.25 3.25 0 0 0 17.75 3zm11.25 8q.227 0 .452.015A.75.75 0 0 0 17.25 10h-4.5a.75.75 0 0 0 0 1.5h2.246A6.5 6.5 0 0 1 17.5 11M6.75 6a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zM6 10.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M8.25 10a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m0 4a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m-.75 2.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0M23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-5 .5.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedFormNew',
  mixins: [icon]
};
</script>
