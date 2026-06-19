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
    <path :fill="fill" :fill-opacity="opacity" d="M21.78 6.78a.75.75 0 0 0-.53-1.28H18.5V2.75a.75.75 0 0 0-1.28-.53l-2.5 2.5a.75.75 0 0 0-.22.53v2.836l-1.982 1.982A2.003 2.003 0 0 0 10 12a2 2 0 1 0 3.932-.518L15.914 9.5h2.836a.75.75 0 0 0 .53-.22zM12 2a10 10 0 0 1 3.424.601l-1.412 1.412q-.094.094-.171.2a8 8 0 1 0 5.947 5.947q.105-.078.2-.172l1.41-1.412A10 10 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 4q.779.002 1.5.19v1.482l-.414.414-.049.05A4.005 4.005 0 0 0 8 12a4 4 0 1 0 7.864-1.037l.05-.049.414-.414h1.483A6 6 0 1 1 12 6" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTargetArrow',
  mixins: [icon]
};
</script>
