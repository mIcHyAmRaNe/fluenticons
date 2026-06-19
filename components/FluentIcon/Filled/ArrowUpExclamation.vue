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
    <path :fill="fill" :fill-opacity="opacity" d="M18 4.56v16.69a.75.75 0 0 1-1.5 0V4.56l-2.22 2.22a.75.75 0 1 1-1.06-1.06l3.5-3.5a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1-1.06 1.06zM3.125 5.878a3.875 3.875 0 1 1 7.75 0c0 2.95-1.204 6.564-1.81 8.204A2.185 2.185 0 0 1 7.003 15.5a2.19 2.19 0 0 1-2.065-1.423c-.606-1.647-1.813-5.28-1.813-8.199M4.5 19.502a2.501 2.501 0 1 1 5.002 0 2.501 2.501 0 0 1-5.002 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledArrowUpExclamation',
  mixins: [icon]
};
</script>
