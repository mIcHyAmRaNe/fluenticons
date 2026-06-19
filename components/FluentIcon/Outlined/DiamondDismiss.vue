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
    <path :fill="fill" :fill-opacity="opacity" d="M9.712 1.963a3.25 3.25 0 0 1 4.597 0l7.75 7.75a3.25 3.25 0 0 1 0 4.596l-7.75 7.75a3.25 3.25 0 0 1-4.597 0l-7.749-7.75a3.25 3.25 0 0 1 0-4.596zm3.536 1.06a1.75 1.75 0 0 0-2.475 0l-7.75 7.75a1.75 1.75 0 0 0 0 2.475l7.75 7.75a1.75 1.75 0 0 0 2.475 0l7.75-7.75a1.75 1.75 0 0 0 0-2.474zM14.72 8.22a.75.75 0 1 1 1.06 1.06L13.06 12l2.72 2.72a.75.75 0 0 1-1.06 1.06L12 13.06l-2.72 2.72a.75.75 0 0 1-1.06-1.06L10.94 12 8.22 9.28a.75.75 0 1 1 1.06-1.06L12 10.94z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedDiamondDismiss',
  mixins: [icon]
};
</script>
