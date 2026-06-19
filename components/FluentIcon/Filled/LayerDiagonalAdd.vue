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
    <path :fill="fill" :fill-opacity="opacity" d="M10.984 2.136A2.25 2.25 0 0 1 14 4.252v.177L7.474 6.79A3.75 3.75 0 0 0 5 10.317v5.554a2.25 2.25 0 0 1-3-2.122V7.667a3.25 3.25 0 0 1 2.144-3.056zm4 3A2.25 2.25 0 0 1 18 7.252v.177l-6.856 2.48A3.25 3.25 0 0 0 9 12.967v5.905a2.25 2.25 0 0 1-3-2.122v-6.432A2.75 2.75 0 0 1 7.814 7.73zm4 3A2.25 2.25 0 0 1 22 10.252v1.77a6.5 6.5 0 0 0-8.477 9.66l-.507.183A2.25 2.25 0 0 1 10 19.749v-6.783a2.25 2.25 0 0 1 1.484-2.116zM24 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-5 .5.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 0 1 0-1H18v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledLayerDiagonalAdd',
  mixins: [icon]
};
</script>
