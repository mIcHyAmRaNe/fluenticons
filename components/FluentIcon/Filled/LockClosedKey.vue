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
    <path :fill="fill" :fill-opacity="opacity" d="M19.5 12a3.5 3.5 0 1 1 0 7H18v1a.5.5 0 0 1-.5.5h-1v1a.5.5 0 0 1-.5.5h-1v.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.586a1 1 0 0 1 .293-.707l3.82-3.82A3.503 3.503 0 0 1 19.5 12M12 1a5 5 0 0 1 5 5v2.01a3.25 3.25 0 0 1 2.991 3.017 4.5 4.5 0 0 0-4.958 5.025L11.586 19.5A2 2 0 0 0 11 20.914V22H7.25A3.25 3.25 0 0 1 4 18.75v-7.5a3.25 3.25 0 0 1 3-3.24V6a5 5 0 0 1 5-5m0 12.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m8 .25a1 1 0 1 0 0 2 1 1 0 0 0 0-2M12 2.5A3.5 3.5 0 0 0 8.5 6v2h7V6A3.5 3.5 0 0 0 12 2.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledLockClosedKey',
  mixins: [icon]
};
</script>
