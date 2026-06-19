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
    <path :fill="fill" :fill-opacity="opacity" d="M7.25 4A2.75 2.75 0 0 0 4.5 6.75v1.337A3.25 3.25 0 0 0 2 11.25v3a2.75 2.75 0 0 0 2.5 2.739v1.261a.75.75 0 0 0 1.5 0V17h12v1.25a.75.75 0 0 0 1.5 0v-1.261A2.75 2.75 0 0 0 22 14.25v-3a3.25 3.25 0 0 0-2.5-3.163V6.75A2.75 2.75 0 0 0 16.75 4zm12 11.5H4.75c-.69 0-1.25-.56-1.25-1.25v-3a1.75 1.75 0 1 1 3.5 0v.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-.5a1.75 1.75 0 1 1 3.5 0v3c0 .69-.56 1.25-1.25 1.25M18 8.087A3.25 3.25 0 0 0 15.51 11H8.49A3.25 3.25 0 0 0 6 8.087V6.75c0-.69.56-1.25 1.25-1.25h9.5c.69 0 1.25.56 1.25 1.25z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedCouch',
  mixins: [icon]
};
</script>
