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
    <path :fill="fill" :fill-opacity="opacity" d="M6.25 2a.75.75 0 0 1 .75.75V5.5h2.75a.75.75 0 0 1 0 1.5H7v2.75a.75.75 0 0 1-1.5 0V7H2.75a.75.75 0 0 1 0-1.5H5.5V2.75A.75.75 0 0 1 6.25 2m8 3.5a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5zm-.75 12.25a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75M17.75 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M2.22 14.28a.75.75 0 1 1 1.06-1.06l2.97 2.97 2.97-2.97a.75.75 0 1 1 1.06 1.06l-2.97 2.97 2.97 2.97a.75.75 0 1 1-1.06 1.06l-2.97-2.97-2.97 2.97a.75.75 0 0 1-1.06-1.06l2.97-2.97z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedMathSymbols',
  mixins: [icon]
};
</script>
