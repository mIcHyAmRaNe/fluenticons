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
    <path :fill="fill" :fill-opacity="opacity" d="M16.004 19a3 3 0 0 1-2.997-2.916L13 16c0-2.933 1.067-5.382 2.113-7.081a16 16 0 0 1 1.446-1.985 12 12 0 0 1 .664-.714l.011-.012.004-.003.001-.002a.75.75 0 0 1 1.027 1.094l-.005.005-.028.026-.113.115c-.1.104-.246.26-.423.467-.355.414-.83 1.023-1.306 1.796a13 13 0 0 0-1.526 3.519A3 3 0 1 1 16.004 19m-8 0a3 3 0 0 1-2.997-2.916L5 16c0-2.933 1.067-5.382 2.113-7.081A16 16 0 0 1 8.56 6.934a12 12 0 0 1 .664-.714l.011-.012.004-.003.001-.002a.75.75 0 0 1 1.027 1.094l-.005.005-.028.026-.113.115c-.1.104-.246.26-.423.467-.354.414-.83 1.023-1.306 1.796a13 13 0 0 0-1.526 3.519A3 3 0 1 1 8.004 19" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTextQuoteOpening',
  mixins: [icon]
};
</script>
