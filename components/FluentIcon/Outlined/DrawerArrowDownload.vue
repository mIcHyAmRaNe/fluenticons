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
    <path :fill="fill" :fill-opacity="opacity" d="M11 6.501a5.5 5.5 0 0 1 5-5.478v5.77l-1.646-1.646a.5.5 0 0 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5a.5.5 0 0 0-.708-.708L17 6.794v-5.77A5.5 5.5 0 1 1 11 6.5m8.5 3A.5.5 0 0 0 19 9h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5m1.5 1.69a6.5 6.5 0 0 1-1.5 1.078V14h-4.558a.69.69 0 0 0-.692.692v.058a2.25 2.25 0 0 1-4.5 0v-.058A.69.69 0 0 0 9.058 14H4.5V9.5h6.232a6.5 6.5 0 0 1-.558-1.5H4.5v-.75c0-.967.784-1.75 1.75-1.75h3.826a6.5 6.5 0 0 1 .422-1.5H6.25A3.25 3.25 0 0 0 3 7.251v11.5a3.25 3.25 0 0 0 3.25 3.25h11.5a3.25 3.25 0 0 0 3.25-3.25zm-1.5 4.31v3.25a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75V15.5h3.825a3.751 3.751 0 0 0 7.35 0z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedDrawerArrowDownload',
  mixins: [icon]
};
</script>
