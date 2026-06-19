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
    <path :fill="fill" :fill-opacity="opacity" d="M9 7.75A.75.75 0 0 1 9.75 7h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9 7.75M9.75 13a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm-1-3a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zM2 4.5A1.5 1.5 0 0 1 3.5 3h17a1.5 1.5 0 0 1 .5 2.915v7.335A3.75 3.75 0 0 1 17.25 17h-4.5v2.5h3.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5h3.5V17h-4.5A3.75 3.75 0 0 1 3 13.25V5.915A1.5 1.5 0 0 1 2 4.5M19.5 6h-15v7.25a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedProjectionScreenText',
  mixins: [icon]
};
</script>
