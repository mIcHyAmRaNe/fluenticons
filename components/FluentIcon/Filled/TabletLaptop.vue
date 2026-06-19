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
    <path :fill="fill" :fill-opacity="opacity" d="M22 17.25a.75.75 0 0 0-.75-.75H16.5V18h4.75l.101-.007A.75.75 0 0 0 22 17.25M4.25 11A2.25 2.25 0 0 0 2 13.25v5.5A2.25 2.25 0 0 0 4.25 21h9a2.25 2.25 0 0 0 2.25-2.25v-5.5A2.25 2.25 0 0 0 13.25 11zM7 17.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75M16.5 16h1.75A1.75 1.75 0 0 0 20 14.25v-7.5A1.75 1.75 0 0 0 18.25 5H5.75A1.75 1.75 0 0 0 4 6.75v3.285Q4.245 10 4.5 10h9a3 3 0 0 1 3 3z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTabletLaptop',
  mixins: [icon]
};
</script>
