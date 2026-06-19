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
    <path :fill="fill" :fill-opacity="opacity" d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l3.993 3.994a8.5 8.5 0 1 0 12.013 12.013l2.493 2.494a.75.75 0 0 0 1.061-1.061zm9.336 11.457a.75.75 0 0 1-1.36-.325l-.006-.102v-.94zm.134-4.927v.818l7.128 7.129A8.5 8.5 0 0 0 8.803 5.622l2.634 2.633a.75.75 0 0 1 1.306.393zm6.42-3.627.082.061 1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061-1.149-1a.75.75 0 0 1 .903-1.193M14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTimerOff',
  mixins: [icon]
};
</script>
