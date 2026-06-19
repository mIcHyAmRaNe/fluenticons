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
    <path :fill="fill" :fill-opacity="opacity" d="M12 3.5q-.135 0-.269.004a8.5 8.5 0 1 0 1.929 16.834.75.75 0 1 1 .29 1.472 10 10 0 0 1-2.417.18 9.96 9.96 0 0 1-7.147-3.507A9.96 9.96 0 0 1 2 12a9.97 9.97 0 0 1 3.135-7.27A9.97 9.97 0 0 1 12 2c.667 0 1.32.065 1.95.19a.75.75 0 0 1-.29 1.472A8.6 8.6 0 0 0 12 3.5m4.516.39a.75.75 0 0 1 1.04-.205c1.09.73 2.03 1.668 2.76 2.758a.75.75 0 0 1-1.247.835 8.6 8.6 0 0 0-2.347-2.347.75.75 0 0 1-.206-1.04m4.412 5.569a.75.75 0 0 1 .882.59 10 10 0 0 1 0 3.902.75.75 0 0 1-1.472-.291 8.5 8.5 0 0 0 0-3.32.75.75 0 0 1 .59-.881m-.819 7.057a.75.75 0 0 1 .206 1.04 10 10 0 0 1-2.758 2.76.75.75 0 0 1-.835-1.247 8.6 8.6 0 0 0 2.347-2.347.75.75 0 0 1 1.04-.206m-9.253-8.361A1.25 1.25 0 0 0 9 9.247v5.499a1.25 1.25 0 0 0 1.856 1.092l5.757-3.186a.75.75 0 0 0 0-1.31z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedPlayCircleHintHalf',
  mixins: [icon]
};
</script>
