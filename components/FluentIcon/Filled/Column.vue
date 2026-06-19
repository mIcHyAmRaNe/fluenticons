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
    <path :fill="fill" :fill-opacity="opacity" d="M2.5 3.75A.75.75 0 0 1 3.25 3h.5A2.75 2.75 0 0 1 6.5 5.75v12.5A2.75 2.75 0 0 1 3.75 21h-.5a.75.75 0 0 1 0-1.5h.5c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25h-.5a.75.75 0 0 1-.75-.75M10.75 3A2.75 2.75 0 0 0 8 5.75v12.5A2.75 2.75 0 0 0 10.75 21h2.5A2.75 2.75 0 0 0 16 18.25V5.75A2.75 2.75 0 0 0 13.25 3zm10 0a.75.75 0 0 1 0 1.5h-.5c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h.5a.75.75 0 0 1 0 1.5h-.5a2.75 2.75 0 0 1-2.75-2.75V5.75A2.75 2.75 0 0 1 20.25 3z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledColumn',
  mixins: [icon]
};
</script>
