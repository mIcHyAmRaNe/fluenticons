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
    <path :fill="fill" :fill-opacity="opacity" d="M9.5 21H19a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H9.5zm0-6.5H19a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H9.5zM8 9.5v5H5a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2zM9.5 8H19a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H9.5zM8 3v5H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 13v5H5a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledListBar',
  mixins: [icon]
};
</script>
