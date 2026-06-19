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
    <path :fill="fill" :fill-opacity="opacity" d="M6.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m5.629-10a2.25 2.25 0 0 1 1.59.658l2.812 2.81 2.808 2.813c.421.422.658.994.658 1.59v9.879a2.25 2.25 0 0 1-2.25 2.25l-6.557.001c.426-.444.79-.95 1.078-1.5l5.48-.001a.75.75 0 0 0 .75-.75l-.002-9.747H14.25a2.25 2.25 0 0 1-2.245-2.095L12 7.754 11.999 3.5H6.25a.75.75 0 0 0-.75.75l-.001 6.826a6.5 6.5 0 0 0-1.5.423L4 4.25A2.25 2.25 0 0 1 6.25 2zM8.854 15.147a.5.5 0 0 0-.708 0L6.5 16.793l-1.646-1.646a.5.5 0 1 0-.708.707L5.793 17.5l-1.647 1.646a.5.5 0 1 0 .708.707L6.5 18.208l1.646 1.646a.5.5 0 1 0 .708-.707L7.207 17.5l1.647-1.646a.5.5 0 0 0 0-.707M13.5 7.754c0 .38.282.693.648.743l.102.007 3.191-.001L13.5 4.559z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedDocumentDismiss',
  mixins: [icon]
};
</script>
