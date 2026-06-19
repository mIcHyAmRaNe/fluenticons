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
    <path :fill="fill" :fill-opacity="opacity" d="M20.934 5.66q-2.94-2.595-9.185-2.588-6.236.009-8.907 2.604c-.754.733-1.029 1.819-.721 2.85l.31 1.037c.288.967 1.261 1.613 2.276 1.511l2.035-.204c.873-.088 1.563-.711 1.711-1.547l.391-2.205a8.1 8.1 0 0 1 3.14-.707q1.689-.05 3.09.525l.632 2.355c.226.847.986 1.48 1.878 1.566l2.047.198c1.028.1 1.935-.553 2.12-1.524l.198-1.037c.195-1.028-.19-2.106-1.015-2.834M12 22a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0-1.5a4 4 0 0 0 3.309-6.248L9.752 19.81a4 4 0 0 0 2.248.691M8.691 18.75l5.557-5.557a4 4 0 0 0-5.557 5.557" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledCallProhibited',
  mixins: [icon]
};
</script>
