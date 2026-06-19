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
    <path :fill="fill" :fill-opacity="opacity" d="m13.732 17.732-1.025-1.025 1.06-1.06 1.026 1.024a1 1 0 0 0 1.414 0l3.964-3.964a1 1 0 0 0 0-1.415l-3.964-3.964a1 1 0 0 0-1.415 0l-1.025 1.025-1.06-1.06 1.025-1.026a2.5 2.5 0 0 1 3.535 0l3.965 3.965a2.5 2.5 0 0 1 0 3.535l-3.965 3.965a2.5 2.5 0 0 1-3.535 0m-7-11.465-3.965 3.965a2.5 2.5 0 0 0 0 3.535l3.965 3.965a2.5 2.5 0 0 0 3.535 0l3.965-3.965a2.5 2.5 0 0 0 0-3.535l-3.965-3.965a2.5 2.5 0 0 0-3.535 0m-2.904 5.026 3.965-3.965a1 1 0 0 1 1.414 0l3.964 3.965a1 1 0 0 1 0 1.414L9.207 16.67a1 1 0 0 1-1.414 0l-3.965-3.964a1 1 0 0 1 0-1.415" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedProtocolHandler',
  mixins: [icon]
};
</script>
