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
    <path :fill="fill" :fill-opacity="opacity" d="M10.788 3.102c.495-1.003 1.926-1.003 2.421 0l2.358 4.778 5.273.766c1.107.16 1.549 1.522.748 2.303l-.905.882a6.5 6.5 0 0 0-1.517-.616l1.157-1.128-5.05-.734a1.35 1.35 0 0 1-1.016-.739L11.998 4.04 9.74 8.614a1.35 1.35 0 0 1-1.016.739l-5.05.734 3.654 3.562c.318.31.463.757.388 1.195l-.862 5.029 4.149-2.181c.015.542.098 1.067.238 1.569l-3.958 2.081c-.99.52-2.148-.32-1.96-1.423l.901-5.251-3.815-3.72c-.801-.78-.359-2.141.748-2.302L8.43 7.88zM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-9.5 0c0 .833.255 1.607.691 2.248l5.557-5.557A4 4 0 0 0 13.5 17.5m4 4a4 4 0 0 0 3.309-6.249l-5.557 5.557c.64.437 1.414.692 2.248.692" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedStarProhibited',
  mixins: [icon]
};
</script>
