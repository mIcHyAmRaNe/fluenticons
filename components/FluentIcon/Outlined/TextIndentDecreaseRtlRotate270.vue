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
    <path :fill="fill" :fill-opacity="opacity" d="M16.75 18.5a.75.75 0 0 1-.75-.75v-9a.75.75 0 0 1 1.5 0v9a.75.75 0 0 1-.75.75m-5 3a.75.75 0 0 1-.75-.75v-12a.75.75 0 0 1 1.5 0v12a.75.75 0 0 1-.75.75m-5-3a.75.75 0 0 1-.75-.75v-9a.75.75 0 0 1 1.5 0v9a.75.75 0 0 1-.75.75M9.147 4.804a.75.75 0 0 0 1.133.976l1.47-1.47 1.47 1.47.084.073a.75.75 0 0 0 .976-1.133l-2-2-.084-.073a.75.75 0 0 0-.976.073l-2 2z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTextIndentDecreaseRtlRotate270',
  mixins: [icon]
};
</script>
