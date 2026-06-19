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
    <path :fill="fill" :fill-opacity="opacity" d="M16 9a7 7 0 1 1 0 14 7 7 0 0 1 0-14m0 1.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11m0 5.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75M13.75 2A3.25 3.25 0 0 1 17 5.25v2.813a8 8 0 0 0-1.5-.046V5.25a1.75 1.75 0 0 0-1.75-1.75h-8.5A1.75 1.75 0 0 0 3.5 5.25v8.5c0 .966.784 1.75 1.75 1.75h2.768q-.016.248-.018.5.002.508.064 1H5.25A3.25 3.25 0 0 1 2 13.75v-8.5A3.25 3.25 0 0 1 5.25 2zM16 12.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2M8.75 9a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1 0-1.5zm4-3.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedCardUiInfo',
  mixins: [icon]
};
</script>
