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
    <path :fill="fill" :fill-opacity="opacity" d="M7.998 4.816a4.251 4.251 0 0 1 8.004 0 4.25 4.25 0 0 1 3.364 5.247 4.25 4.25 0 0 1-1.687 7.915.8.8 0 0 1-.179.022h-3v2.25A1.75 1.75 0 0 1 12.75 22h-1.5a1.75 1.75 0 0 1-1.75-1.75V18h-3a.8.8 0 0 1-.179-.021 4.25 4.25 0 0 1-1.687-7.916 4.256 4.256 0 0 1 3.364-5.247M11 18v2.25c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25V18z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTreeDeciduous',
  mixins: [icon]
};
</script>
