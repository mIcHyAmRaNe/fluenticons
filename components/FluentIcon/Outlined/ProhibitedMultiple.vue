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
    <path :fill="fill" :fill-opacity="opacity" d="M5.697 5.697a7.5 7.5 0 0 1 10.05-.504L5.193 15.747a7.5 7.5 0 0 1 .504-10.05m.556 11.11L16.807 6.253A7.5 7.5 0 0 1 6.253 16.807M17.364 4.636A9 9 0 1 0 4.636 17.364 9 9 0 0 0 17.364 4.636M21 11c0 5.523-4.477 10-10 10-.864 0-1.702-.11-2.501-.315A9 9 0 0 0 20.685 8.499c.206.8.315 1.637.315 2.501" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedProhibitedMultiple',
  mixins: [icon]
};
</script>
