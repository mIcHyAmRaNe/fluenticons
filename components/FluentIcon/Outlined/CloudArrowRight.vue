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
    <path :fill="fill" :fill-opacity="opacity" d="M7.505 8.785a4.5 4.5 0 0 1 8.99 0 .75.75 0 0 0 .75.715h.255a3 3 0 0 1 2.673 1.636 6.5 6.5 0 0 1 1.8 1.857Q22 12.749 22 12.5a4.5 4.5 0 0 0-4.08-4.48 6.001 6.001 0 0 0-11.84 0A4.5 4.5 0 0 0 6.5 17h3.519a6.6 6.6 0 0 1 .057-1.5H6.5a3 3 0 1 1 0-6h.256c.4 0 .73-.315.749-.715M16.5 11a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m-3 5a.5.5 0 0 0 0 1h4.793l-1.647 1.646a.5.5 0 0 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708l-2.5-2.5a.5.5 0 0 0-.708.708L18.293 16z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedCloudArrowRight',
  mixins: [icon]
};
</script>
