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
    <path :fill="fill" :fill-opacity="opacity" d="m12 5.753.82-.822a5.38 5.38 0 0 1 7.61 0 5.376 5.376 0 0 1 .002 7.599l-7.901 7.897a.75.75 0 0 1-1.061 0L3.575 12.53a5.375 5.375 0 1 1 7.6-7.601zm0 13.083 7.368-7.364a3.88 3.88 0 0 0-5.292-5.662l-1.007.999-.523.526a1 1 0 0 1-.087.079l-1.237 1.225 2.796 2.671a.75.75 0 0 1 .012 1.073l-2.5 2.5a.75.75 0 1 1-1.06-1.061l1.957-1.957-2.798-2.673a.75.75 0 0 1-.01-1.075l1.317-1.306-.82-.82a3.875 3.875 0 0 0-5.48 5.48z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedHeartBroken',
  mixins: [icon]
};
</script>
