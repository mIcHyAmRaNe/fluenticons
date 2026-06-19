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
    <path :fill="fill" :fill-opacity="opacity" d="M15.002 8.999H9.005v-2.25a.75.75 0 0 0-1.267-.542l-5.504 5.25a.75.75 0 0 0 0 1.086l5.504 5.25.082.068a.75.75 0 0 0 1.186-.611L9.005 15h5.997v2.25a.75.75 0 0 0 1.268.542l5.497-5.25a.75.75 0 0 0 0-1.085l-5.497-5.25a.75.75 0 0 0-1.268.543zm-11.164 3 3.667-3.498v1.248c0 .415.336.75.75.75h7.497l.102-.007a.75.75 0 0 0 .648-.743V8.503L20.162 12l-3.66 3.496V14.25a.75.75 0 0 0-.75-.75H8.256l-.102.007a.75.75 0 0 0-.648.743l-.001 1.248z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedArrowsBidirectional',
  mixins: [icon]
};
</script>
