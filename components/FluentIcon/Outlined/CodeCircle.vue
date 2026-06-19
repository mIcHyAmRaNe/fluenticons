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
    <path :fill="fill" :fill-opacity="opacity" d="M14.545 6.06a.75.75 0 0 1 .394.986l-4.5 10.5a.75.75 0 0 1-1.378-.591l4.5-10.5a.75.75 0 0 1 .984-.394M8.807 9.249a.75.75 0 0 1-.055 1.06L6.872 12l1.88 1.693a.75.75 0 0 1-1.004 1.114l-2.5-2.25a.75.75 0 0 1 0-1.114l2.5-2.25a.75.75 0 0 1 1.06.055m6.386 0a.75.75 0 0 0 .055 1.06L17.128 12l-1.88 1.693a.75.75 0 1 0 1.004 1.114l2.5-2.25a.75.75 0 0 0 0-1.114l-2.5-2.25a.75.75 0 0 0-1.06.055M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10M3.5 12a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedCodeCircle',
  mixins: [icon]
};
</script>
