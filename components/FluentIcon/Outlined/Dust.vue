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
    <path :fill="fill" :fill-opacity="opacity" d="M7 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m14 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7.75-19a5.25 5.25 0 0 0-5.086 3.943 5.25 5.25 0 1 0 0 10.114A5.252 5.252 0 0 0 19 15.75c0-1.47-.604-2.798-1.576-3.75a5.25 5.25 0 0 0-3.674-9m-3.743 5.018a3.75 3.75 0 1 1 5.816 3.358.75.75 0 0 0 0 1.249 3.75 3.75 0 1 1-5.816 3.358.75.75 0 0 0-1.084-.626 3.75 3.75 0 1 1 0-6.714.75.75 0 0 0 1.084-.625" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedDust',
  mixins: [icon]
};
</script>
