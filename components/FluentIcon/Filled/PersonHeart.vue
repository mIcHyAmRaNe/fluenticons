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
    <path :fill="fill" :fill-opacity="opacity" d="M11.398 19.074A4.47 4.47 0 0 1 10.521 14H4.253a2.25 2.25 0 0 0-2.25 2.25v.92c0 .571.18 1.129.511 1.595C4.056 20.928 6.58 22 10 22q2.121 0 3.774-.55zM10 2.004a5 5 0 1 1 0 10 5 5 0 0 1 0-10m7.044 20.991a.75.75 0 0 1-.53-.22l-4.409-4.408a3.467 3.467 0 0 1 4.903-4.902l.036.036.036-.036a3.467 3.467 0 0 1 4.903 4.902l-4.409 4.409a.75.75 0 0 1-.53.22" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledPersonHeart',
  mixins: [icon]
};
</script>
