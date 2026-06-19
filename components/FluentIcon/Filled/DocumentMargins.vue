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
    <path :fill="fill" :fill-opacity="opacity" d="M15.5 2h-7v4.25a.75.75 0 0 1-1.5 0V2h-.75A2.25 2.25 0 0 0 4 4.25v15.5A2.25 2.25 0 0 0 6.25 22H7v-4.25a.75.75 0 0 1 1.5 0V22h7v-4.25a.75.75 0 0 1 1.5 0V22h.75A2.25 2.25 0 0 0 20 19.75V4.25A2.25 2.25 0 0 0 17.75 2H17v4.25a.75.75 0 0 1-1.5 0zM7.75 8.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5a.75.75 0 0 1 .75-.75m9.25.75v5.5a.75.75 0 0 1-1.5 0v-5.5a.75.75 0 0 1 1.5 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledDocumentMargins',
  mixins: [icon]
};
</script>
