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
    <path :fill="fill" :fill-opacity="opacity" d="M6.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11M12 8a2 2 0 0 0 2 2h6v10a2 2 0 0 1-2 2h-6.81A6.5 6.5 0 0 0 4 11.498V4a2 2 0 0 1 2-2h6zm-3 9.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m.33-2.828a.5.5 0 0 0-.707 0l-4.95 4.95a.5.5 0 0 0 .707.707l4.95-4.95a.5.5 0 0 0 0-.707M9 18.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m-5-4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 1a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m15.5-7H14a.5.5 0 0 1-.5-.5V2.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledDocumentPercent',
  mixins: [icon]
};
</script>
