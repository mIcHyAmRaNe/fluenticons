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
    <path :fill="fill" :fill-opacity="opacity" d="m13.441 20.378-3.159-3.158a.75.75 0 0 0-1.06 1.06l2.2 2.2a8.5 8.5 0 0 1-2.393-.514L6.532 17.47a.75.75 0 0 0-1.049-.012A8.5 8.5 0 0 1 17.457 5.484a.75.75 0 0 0 .014 1.046l2.493 2.493a8.5 8.5 0 0 1 .516 2.395L18.282 9.22a.75.75 0 0 0-1.06 1.06l3.157 3.158a8.5 8.5 0 0 1-.395 1.484l-2.702-2.702a.75.75 0 0 0-1.06 1.06l3.077 3.078a8.5 8.5 0 0 1-.78 1.098l-2.737-2.736a.75.75 0 0 0-1.06 1.06l2.736 2.737a8.5 8.5 0 0 1-1.098.78l-3.078-3.077a.75.75 0 0 0-1.06 1.06l2.703 2.703a8.4 8.4 0 0 1-1.484.395M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedCircleShadow',
  mixins: [icon]
};
</script>
