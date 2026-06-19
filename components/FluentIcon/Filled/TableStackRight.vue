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
    <path :fill="fill" :fill-opacity="opacity" d="M8 3H6.25A3.25 3.25 0 0 0 3 6.25V8h5zm0 6.5H3v5h5zm1.5 5v-5h5v5zM8 16H3v1.75A3.25 3.25 0 0 0 6.25 21H8zm1.5 5v-5h5v4.25a.75.75 0 0 1-.75.75zm0-13V3h4.25a.75.75 0 0 1 .75.75V8zm10 12.25a.75.75 0 0 0 1.5 0V3.75a.75.75 0 0 0-1.5 0z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTableStackRight',
  mixins: [icon]
};
</script>
