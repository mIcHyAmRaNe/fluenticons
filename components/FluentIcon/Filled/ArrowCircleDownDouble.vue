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
    <path :fill="fill" :fill-opacity="opacity" d="M11.25 13.75a.75.75 0 0 1 .072.976l-.072.084-1.971 1.971a.75.75 0 0 1-.977.073l-.084-.073-1.97-1.97a.75.75 0 0 1 .977-1.134l.085.073.69.691V7.75a.75.75 0 0 1 .647-.744L8.75 7a.75.75 0 0 1 .743.648l.007.102v6.69l.69-.69a.75.75 0 0 1 .976-.073zM1.999 12c0 5.523 4.477 10 10 10s10-4.477 10-10-4.477-10-10-10-10 4.477-10 10m15.666 1.677.085.073a.75.75 0 0 1 .072.976l-.072.084-1.971 1.971a.75.75 0 0 1-.977.073l-.084-.073-1.97-1.97a.75.75 0 0 1 .978-1.134l.084.073.69.691V7.75a.75.75 0 0 1 .647-.743L15.25 7a.75.75 0 0 1 .743.649L16 7.75v6.69l.69-.69a.75.75 0 0 1 .976-.072" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledArrowCircleDownDouble',
  mixins: [icon]
};
</script>
