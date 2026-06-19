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
    <path :fill="fill" :fill-opacity="opacity" d="M20.25 4.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5zm-5.75 5v5h-5v-5zm-5 6.5h5v5h-5zM8 9.5v5H3v-4.25a.75.75 0 0 1 .75-.75zM8 16H3v1.75A3.25 3.25 0 0 0 6.25 21H8zm13 0h-5v5h1.75A3.25 3.25 0 0 0 21 17.75zm-5-1.5h5v-4.25a.75.75 0 0 0-.75-.75H16z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTableStackAbove',
  mixins: [icon]
};
</script>
