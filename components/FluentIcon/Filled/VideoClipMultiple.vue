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
    <path :fill="fill" :fill-opacity="opacity" d="M5.25 3A3.25 3.25 0 0 0 2 6.25v9a3.25 3.25 0 0 0 3.25 3.25h10.5A3.25 3.25 0 0 0 19 15.25v-9A3.25 3.25 0 0 0 15.75 3zM8 13.25V7.751a.75.75 0 0 1 1.155-.631l4.618 2.959a.5.5 0 0 1 0 .842L9.155 13.88A.75.75 0 0 1 8 13.249M7.75 21a3.25 3.25 0 0 1-2.74-1.5h11.24A3.75 3.75 0 0 0 20 15.75V6.01a3.25 3.25 0 0 1 1.5 2.74v7c0 2.9-2.35 5.25-5.25 5.25z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledVideoClipMultiple',
  mixins: [icon]
};
</script>
