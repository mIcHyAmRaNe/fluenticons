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
    <path :fill="fill" :fill-opacity="opacity" d="M21.25 5a.75.75 0 0 0 .75-.75V1.5a.75.75 0 0 0-1.5 0v.626A6 6 0 1 0 23 7a.75.75 0 0 0-1.5 0 4.5 4.5 0 1 1-1.67-3.5H18.5a.75.75 0 0 0 0 1.5zM6.5 2h5.601a7 7 0 0 0-1.165 1.5H6.5a1 1 0 0 0-1 1V18H19v-4.29a7 7 0 0 0 1.5-.647v5.687a.75.75 0 0 1-.75.75H5.5a1 1 0 0 0 1 1h13.25a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedBookArrowClockwise',
  mixins: [icon]
};
</script>
