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
    <path :fill="fill" :fill-opacity="opacity" d="M15.172 10.5a.5.5 0 0 1 .353.146l1.829 1.829a.5.5 0 0 1 .146.353V13a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5v-.172a.5.5 0 0 1 .146-.353l1.829-1.828a.5.5 0 0 1 .353-.147zm0-1.5H8.828a2 2 0 0 0-1.414.586l-1.828 1.828A2 2 0 0 0 5 12.828V13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-.172a2 2 0 0 0-.586-1.414l-1.828-1.828A2 2 0 0 0 15.172 9" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedPortMicroUsb',
  mixins: [icon]
};
</script>
