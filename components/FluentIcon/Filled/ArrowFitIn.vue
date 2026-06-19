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
    <path :fill="fill" :fill-opacity="opacity" d="M5.818 7.519a1 1 0 0 0-.05 1.413L7.699 11H3a1 1 0 1 0 0 2h4.699l-1.93 2.068a1 1 0 0 0 1.462 1.364l3.498-3.747a1 1 0 0 0 .149-.205 1 1 0 0 0-.148-1.163l-3.499-3.75a1 1 0 0 0-1.413-.048m12.364 0a1 1 0 0 1 .05 1.413L16.301 11H21a1 1 0 1 1 0 2h-4.699l1.93 2.068a1 1 0 0 1-1.462 1.364l-3.498-3.747a1 1 0 0 1-.149-.205 1 1 0 0 1 .148-1.164l3.499-3.748a1 1 0 0 1 1.413-.049" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledArrowFitIn',
  mixins: [icon]
};
</script>
