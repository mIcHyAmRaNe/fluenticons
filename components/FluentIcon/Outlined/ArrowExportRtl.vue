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
    <path :fill="fill" :fill-opacity="opacity" d="M21.244 4.5a.75.75 0 0 0-.743.648l-.007.102.002 13.004a.75.75 0 0 0 1.493.102l.007-.102-.002-13.004a.75.75 0 0 0-.75-.75M8.349 6.304l-.073-.084a.75.75 0 0 0-.976-.073l-.084.073-4.997 4.997a.75.75 0 0 0-.073.976l.073.085 4.996 5.003a.75.75 0 0 0 1.134-.976l-.072-.084-3.71-3.717h13.676a.75.75 0 0 0 .743-.647l.007-.102a.75.75 0 0 0-.648-.743l-.102-.007-13.69-.001L8.276 7.28a.75.75 0 0 0 .073-.976l-.073-.084z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedArrowExportRtl',
  mixins: [icon]
};
</script>
