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
    <path :fill="fill" :fill-opacity="opacity" d="M12 6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0M6.5 3a.5.5 0 0 1 .5.5V6h2a.5.5 0 0 1 0 1H6.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5m0 10a6.5 6.5 0 0 0 2.504-.5H18.5V6.75a2.25 2.25 0 0 0-2.25-2.25h-3.563a6.5 6.5 0 0 0-.709-1.5h4.272A3.75 3.75 0 0 1 20 6.75v9a3.75 3.75 0 0 1-2.89 3.651l2.463 1.172a.75.75 0 0 1-.55 1.392l-.095-.038L13.83 19.5h-3.661l-5.096 2.427a.75.75 0 1 1-.645-1.354L6.89 19.4A3.75 3.75 0 0 1 4 15.75v-3.248A6.5 6.5 0 0 0 6.5 13m12 2.75V14h-13v1.75A2.25 2.25 0 0 0 7.75 18h8.5a2.25 2.25 0 0 0 2.25-2.25M8 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2m8 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedVehicleSubwayClock',
  mixins: [icon]
};
</script>
