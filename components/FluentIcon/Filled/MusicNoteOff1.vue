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
    <path :fill="fill" :fill-opacity="opacity" d="m12 13.06 8.72 8.72a.75.75 0 0 0 1.06-1.06L3.28 2.22a.75.75 0 1 0-1.06 1.06l8.28 8.28v3.317a4 4 0 1 0 1.476 3.56.8.8 0 0 0 .024-.187zm6.987-1.608-6.964-2.611L10.5 7.318V2.75a.75.75 0 0 1 1.013-.702l6.378 2.391A3.25 3.25 0 0 1 20 7.483v3.267a.75.75 0 0 1-1.013.702" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledMusicNoteOff1',
  mixins: [icon]
};
</script>
