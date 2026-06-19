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
    <path :fill="fill" :fill-opacity="opacity" d="m11.515 3.678-6.75 5.727a.75.75 0 0 0-.265.572v9.273c0 .138.112.25.25.25H7v-5.25c0-.966.784-1.75 1.75-1.75h6.5c.966 0 1.75.784 1.75 1.75v5.25h2.25a.25.25 0 0 0 .25-.25V9.977a.75.75 0 0 0-.265-.572l-6.75-5.727a.75.75 0 0 0-.97 0M8.5 17.5v2h7v-2zm7-1.5v-1.75a.25.25 0 0 0-.25-.25h-6.5a.25.25 0 0 0-.25.25V16zM4.75 21A1.75 1.75 0 0 1 3 19.25V9.977c0-.66.29-1.288.794-1.715l6.75-5.728a2.25 2.25 0 0 1 2.912 0l6.75 5.728A2.25 2.25 0 0 1 21 9.977v9.273A1.75 1.75 0 0 1 19.25 21z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedHomeGarage',
  mixins: [icon]
};
</script>
