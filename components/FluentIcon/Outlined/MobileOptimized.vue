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
    <path :fill="fill" :fill-opacity="opacity" d="M6 2.75a.75.75 0 0 0-1.5 0V4.5H2.75a.75.75 0 0 0 0 1.5h2.5A.75.75 0 0 0 6 5.25zm13.5 0a.75.75 0 0 0-1.5 0v2.5c0 .414.336.75.75.75h2.5a.75.75 0 0 0 0-1.5H19.5zM8.5 6A1.5 1.5 0 0 0 7 7.5v9A1.5 1.5 0 0 0 8.5 18h7a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 15.5 6zm0 1.5h7v9h-7zM5.25 22a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5H4.5v1.75c0 .414.336.75.75.75m13.5 0a.75.75 0 0 0 .75-.75V19.5h1.75a.75.75 0 0 0 0-1.5h-2.5a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75m-8.5-12.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm0 3a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedMobileOptimized',
  mixins: [icon]
};
</script>
