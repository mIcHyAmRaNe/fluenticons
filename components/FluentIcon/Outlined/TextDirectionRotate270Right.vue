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
    <path :fill="fill" :fill-opacity="opacity" d="M5.22 6.28a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72v3.186a.75.75 0 1 1-1.5 0V5.561l-.72.72a.75.75 0 0 1-1.06 0m9.5-1.06a.75.75 0 0 0 1.06 1.06l.72-.72v14.69a.75.75 0 0 0 1.5 0V5.56l.72.72a.75.75 0 1 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0zM4 13.25a.75.75 0 0 1 .75-.75h3v-1.25a.75.75 0 0 1 1.5 0v1.25h4.5a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75M5.5 21a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 .75-.75h1.25c1.078 0 2.426.212 3.53.918 1.15.737 1.97 1.973 1.97 3.832a.75.75 0 0 1-1.5 0c0-1.341-.555-2.105-1.28-2.568C8.7 17.188 7.673 17 6.75 17h-.5v3.25a.75.75 0 0 1-.75.75" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTextDirectionRotate270Right',
  mixins: [icon]
};
</script>
