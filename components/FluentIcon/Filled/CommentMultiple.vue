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
    <path :fill="fill" :fill-opacity="opacity" d="M5.25 5a4 4 0 0 0-.244.007A3.25 3.25 0 0 1 7.75 3.5h8a5.75 5.75 0 0 1 5.75 5.75v4a3.25 3.25 0 0 1-1.507 2.743q.007-.12.007-.243v-6.5A4.25 4.25 0 0 0 15.75 5zM2 9.25A3.25 3.25 0 0 1 5.25 6h10.5A3.25 3.25 0 0 1 19 9.25v6.5A3.25 3.25 0 0 1 15.75 19h-5.002L6.99 21.76A1.25 1.25 0 0 1 5 20.752v-1.761a3.25 3.25 0 0 1-3-3.241z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledCommentMultiple',
  mixins: [icon]
};
</script>
