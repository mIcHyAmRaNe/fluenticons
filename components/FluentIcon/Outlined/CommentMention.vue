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
    <path :fill="fill" :fill-opacity="opacity" d="M18 2a4 4 0 0 0 0 8.001c.826 0 1.588-.241 2.222-.666a.5.5 0 0 1 .556.831 4.97 4.97 0 0 1-2.778.835 5 5 0 1 1 5-5v.75a1.75 1.75 0 0 1-3.198.982A2.5 2.5 0 1 1 19.5 4a.5.5 0 0 1 1 0v2.75a.75.75 0 0 0 1.5 0v-.763A4 4 0 0 0 18 2m-1.5 4a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0m5.5 8.75v-4.277a6 6 0 0 1-1.5.983v3.295a1.75 1.75 0 0 1-1.75 1.75h-6.236L7.5 20.25l-.001-3.75H5.25a1.75 1.75 0 0 1-1.75-1.75v-8.5c0-.967.784-1.75 1.75-1.75h6.939a6 6 0 0 1 .614-1.5H5.25A3.25 3.25 0 0 0 2 6.25v8.5A3.25 3.25 0 0 0 5.25 18H6v2.75a1.25 1.25 0 0 0 1.999 1L13.013 18h5.737A3.25 3.25 0 0 0 22 14.75" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedCommentMention',
  mixins: [icon]
};
</script>
