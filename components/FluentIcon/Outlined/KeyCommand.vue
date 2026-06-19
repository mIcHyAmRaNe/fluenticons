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
    <path :fill="fill" :fill-opacity="opacity" d="M6.25 4.5C7.216 4.5 8 5.284 8 6.25V8H6.25a1.75 1.75 0 1 1 0-3.5M9.5 8V6.25A3.25 3.25 0 1 0 6.25 9.5H8v5H6.25a3.25 3.25 0 1 0 3.25 3.25V16h5v1.75a3.25 3.25 0 1 0 3.25-3.25H16v-5h1.75a3.25 3.25 0 1 0-3.25-3.25V8zm0 1.5h5v5h-5zM16 8V6.25A1.75 1.75 0 1 1 17.75 8zm0 8h1.75A1.75 1.75 0 1 1 16 17.75zm-8 0v1.75A1.75 1.75 0 1 1 6.25 16z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedKeyCommand',
  mixins: [icon]
};
</script>
