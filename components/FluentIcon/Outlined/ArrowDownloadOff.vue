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
    <path :fill="fill" :fill-opacity="opacity" d="M3.28 2.22a.75.75 0 1 0-1.06 1.06L11 12.06l-.001 4.373-3.719-3.714-.084-.072a.75.75 0 0 0-.976 1.134l5.004 4.996.084.073a.75.75 0 0 0 .976-.073L15 16.06l5.72 5.72a.75.75 0 0 0 1.06-1.061zM13.94 15l-1.441 1.44v-2.88zm3.182-1.06-1.06-1.06.159-.16a.75.75 0 0 1 .976-.073l.085.073a.75.75 0 0 1 .072.976l-.073.084zM11 7.818l1.5 1.5V2.755l-.007-.102a.75.75 0 0 0-.743-.648l-.102.007a.75.75 0 0 0-.648.743zM18.25 20.5a.75.75 0 1 1 0 1.5l-13 .004a.75.75 0 1 1 0-1.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedArrowDownloadOff',
  mixins: [icon]
};
</script>
