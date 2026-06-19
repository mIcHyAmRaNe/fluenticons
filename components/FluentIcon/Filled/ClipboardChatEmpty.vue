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
    <path :fill="fill" :fill-opacity="opacity" d="M13.75 2a2.25 2.25 0 0 1 2.236 2h1.764A2.25 2.25 0 0 1 20 6.25v3.254A7.53 7.53 0 0 0 15.5 8a7.5 7.5 0 0 0-6.802 10.66l-.625 2.088A1.75 1.75 0 0 0 8.17 22H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm-3.5 1.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zM22 15.5a6.5 6.5 0 0 1-9.57 5.729l-2.464.74a.751.751 0 0 1-.935-.934l.739-2.467c-.51-.95-.752-1.995-.77-3.068A6.5 6.5 0 0 1 15.5 9c3.59 0 6.5 2.888 6.5 6.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledClipboardChatEmpty',
  mixins: [icon]
};
</script>
