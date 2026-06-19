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
    <path :fill="fill" :fill-opacity="opacity" d="M12.14 9.342 7.37 2.329a.75.75 0 1 0-1.24.844l5.13 7.545-2.395 3.743a4 4 0 1 0 1.178.943l2.135-3.337 2.065 3.036a4 4 0 1 0 1.261-.813l-2.447-3.597.002-.002zM4.5 18a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0m10 0a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0m-.562-8.684 3.943-6.162a.75.75 0 1 0-1.263-.808L13.02 7.968z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedCut',
  mixins: [icon]
};
</script>
