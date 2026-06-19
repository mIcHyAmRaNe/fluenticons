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
    <path :fill="fill" :fill-opacity="opacity" d="M6.22 3a1.75 1.75 0 0 0-1.347.633l-3.58 4.32C.616 8.766 1.195 10 2.253 10h19.492c1.059 0 1.638-1.233.963-2.048l-3.581-4.319A1.75 1.75 0 0 0 17.78 3zM3 11.5v7.25a2.5 2.5 0 0 0 2.5 2.5h13a2.5 2.5 0 0 0 2.5-2.5V11.5zm6 3.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m3 1.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5m5.5-1.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledBuildingRetailMore',
  mixins: [icon]
};
</script>
