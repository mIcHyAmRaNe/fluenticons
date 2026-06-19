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
    <path :fill="fill" :fill-opacity="opacity" d="M2.302 6.37C1.442 4.87 2.524 3 4.253 3h15.49c1.729 0 2.812 1.87 1.951 3.37L13.95 19.871c-.865 1.507-3.04 1.507-3.904 0zM4.253 4.5a.75.75 0 0 0-.65 1.123l7.744 13.502a.75.75 0 0 0 1.301 0l7.745-13.502a.75.75 0 0 0-.65-1.123z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTriangleDown',
  mixins: [icon]
};
</script>
