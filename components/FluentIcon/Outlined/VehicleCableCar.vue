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
    <path :fill="fill" :fill-opacity="opacity" d="M21.15 3.007a.75.75 0 1 1 .2 1.486l-6.85.926V7.25c0 .644-.187 1.245-.51 1.75h2.76A3.25 3.25 0 0 1 20 12.25v6.5A2.25 2.25 0 0 1 17.75 21H6.25A2.25 2.25 0 0 1 4 18.75v-6.5A3.25 3.25 0 0 1 7.25 9h4.001a1.75 1.75 0 0 0 1.75-1.75V5.622L2.85 6.993a.75.75 0 1 1-.201-1.486L13 4.108V3.75a.75.75 0 0 1 1.5 0v.155zM7.25 10.5a1.75 1.75 0 0 0-1.75 1.75v3.25h13v-3.25a1.75 1.75 0 0 0-1.75-1.75zM18.5 17h-13v1.75c0 .414.336.75.75.75h11.5a.75.75 0 0 0 .75-.75z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedVehicleCableCar',
  mixins: [icon]
};
</script>
