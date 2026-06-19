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
    <path :fill="fill" :fill-opacity="opacity" d="M10.75 5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-1.5 0V12.5H3.5v5.75a.75.75 0 0 1-1.5 0V5.75a.75.75 0 0 1 1.5 0V11H10V5.75a.75.75 0 0 1 .75-.75m9.499-.001a.751.751 0 0 1 0 1.501h-4.571l-.35 3.487c.205-.002.433-.006.67-.007.774-.003 1.727.005 2.162.066l.241.04a4.75 4.75 0 1 1-5.361 6.303.75.75 0 0 1 1.407-.518 3.25 3.25 0 1 0 3.669-4.312l-.165-.028c-.303-.042-1.128-.054-1.947-.05-.395.001-.767.006-1.041.01q-.224.006-.446.008a.752.752 0 0 1-.764-.824l.5-5A.75.75 0 0 1 15 5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTextHeader5',
  mixins: [icon]
};
</script>
