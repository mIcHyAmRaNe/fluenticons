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
    <path :fill="fill" :fill-opacity="opacity" d="M6.049 7.983a.75.75 0 0 1 .967-.435L12 9.438l4.984-1.89a.75.75 0 1 1 .532 1.402l-4.766 1.81v5.49a.75.75 0 1 1-1.5 0v-5.49L6.484 8.95a.75.75 0 0 1-.435-.967m4.542-5.472a3.75 3.75 0 0 1 2.818 0l7.498 3.04A1.75 1.75 0 0 1 22 7.173v9.653a1.75 1.75 0 0 1-1.093 1.621l-7.498 3.04a3.75 3.75 0 0 1-2.818 0l-7.498-3.04A1.75 1.75 0 0 1 2 16.826V7.173A1.75 1.75 0 0 1 3.093 5.55zm2.254 1.39a2.25 2.25 0 0 0-1.69 0l-7.499 3.04a.25.25 0 0 0-.156.232v9.653a.25.25 0 0 0 .156.231l7.499 3.04a2.25 2.25 0 0 0 1.69 0l7.499-3.04a.25.25 0 0 0 .156-.231V7.173a.25.25 0 0 0-.156-.232z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedCube',
  mixins: [icon]
};
</script>
