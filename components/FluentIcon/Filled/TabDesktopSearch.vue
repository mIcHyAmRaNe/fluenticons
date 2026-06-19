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
    <path :fill="fill" :fill-opacity="opacity" d="M5.75 3H11v2.75A2.25 2.25 0 0 0 13.25 8H21v10.25A2.75 2.75 0 0 1 18.25 21h-4.268a1.74 1.74 0 0 0-.495-.987l-2.062-2.063A5.5 5.5 0 0 0 3 11.257V5.75A2.75 2.75 0 0 1 5.75 3M21 5.75v.75h-7.75a.75.75 0 0 1-.75-.75V3h5.75A2.75 2.75 0 0 1 21 5.75M6.5 20a4.5 4.5 0 0 0 2.607-.832l2.613 2.612a.75.75 0 1 0 1.06-1.06l-2.612-2.613A4.5 4.5 0 1 0 6.5 20m0-1.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTabDesktopSearch',
  mixins: [icon]
};
</script>
