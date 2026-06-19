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
    <path :fill="fill" :fill-opacity="opacity" d="M2 6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v6.06A6.48 6.48 0 0 0 17.5 11c-.592 0-1.166.08-1.712.228A.75.75 0 0 0 15.25 11h-8.5a.75.75 0 0 0 0 1.5h6.596a6.5 6.5 0 0 0-1.324 1.5H6.75a.75.75 0 0 0 0 1.5h4.563a6.5 6.5 0 0 0-.313 2c0 .886.177 1.73.498 2.5H4.75A2.75 2.75 0 0 1 2 17.25zM6.75 8a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-8.5-.5a.5.5 0 0 0 0 1h4.793l-1.647 1.646a.5.5 0 0 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708l-2.5-2.5a.5.5 0 0 0-.708.708L19.293 17z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledSlideArrowRight',
  mixins: [icon]
};
</script>
