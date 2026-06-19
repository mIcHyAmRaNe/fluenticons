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
    <path :fill="fill" :fill-opacity="opacity" d="M12 2v6a2 2 0 0 0 2 2h6v10a2 2 0 0 1-2 2h-6.81a6.5 6.5 0 0 0 1.734-3.5h2.826a.75.75 0 0 0 0-1.5h-2.769a6.5 6.5 0 0 0-.22-1.25h2.989a.75.75 0 0 0 0-1.5h-3.62a6.5 6.5 0 0 0-.94-1.25h4.56a.75.75 0 0 0 0-1.5H9.004A6.5 6.5 0 0 0 6.5 11a6.5 6.5 0 0 0-2.5.498V4a2 2 0 0 1 2-2zm1.5.5V8a.5.5 0 0 0 .5.5h5.5zm-1.5 15a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0M6.5 14a.5.5 0 0 1 .5.5V17h2a.5.5 0 0 1 0 1H6.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledDocumentTextClock',
  mixins: [icon]
};
</script>
