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
    <path :fill="fill" :fill-opacity="opacity" d="M2 5a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v5h-9a4 4 0 0 0-4 4v5q.001.519.126 1H5a3 3 0 0 1-3-3zm3.75-1a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm2 3a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zm-.202 5.27A3 3 0 0 1 10 11h9a3 3 0 0 1 2.452 1.27L14.5 16.616zm-.534 1.436Q7 13.852 7 14v5a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-5q0-.15-.014-.294l-7.088 4.43a.75.75 0 0 1-.796 0z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledMailTemplate',
  mixins: [icon]
};
</script>
