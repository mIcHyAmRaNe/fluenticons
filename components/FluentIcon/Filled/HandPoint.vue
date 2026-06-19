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
    <path :fill="fill" :fill-opacity="opacity" d="M11.5 2A2.5 2.5 0 0 0 9 4.5v6.41l-1.495-.574a4.34 4.34 0 0 0-5.382 1.996 1.053 1.053 0 0 0 .512 1.463c5.662 2.456 7.454 4.673 8.19 6.29.526 1.156 1.73 2.104 3.172 1.882l3.455-.533a2.75 2.75 0 0 0 2.25-2.054l1.153-4.633a4.75 4.75 0 0 0-3.872-5.839L14 8.44V4.5A2.5 2.5 0 0 0 11.5 2" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledHandPoint',
  mixins: [icon]
};
</script>
