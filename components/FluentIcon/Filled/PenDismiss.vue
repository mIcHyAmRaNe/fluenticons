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
    <path :fill="fill" :fill-opacity="opacity" d="M15.891 3.048a3.578 3.578 0 1 1 5.061 5.06l-3.045 3.045a6.5 6.5 0 0 0-7.754 7.756l-1.151 1.15a3.1 3.1 0 0 1-1.477.826L2.924 21.98a.75.75 0 0 1-.904-.903l1.096-4.601c.133-.56.419-1.07.825-1.477zM22 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7.146-2.354a.5.5 0 0 0-.708.708l1.647 1.646-1.647 1.646a.5.5 0 0 0 .708.708l1.646-1.647 1.646 1.647a.5.5 0 0 0 .708-.708L17.207 17.5l1.647-1.646a.5.5 0 0 0-.708-.708L16.5 16.793z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledPenDismiss',
  mixins: [icon]
};
</script>
