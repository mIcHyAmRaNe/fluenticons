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
    <path :fill="fill" :fill-opacity="opacity" d="M18.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m0 1.999a.5.5 0 0 0-.5.5V17h-2.504a.5.5 0 0 0 0 1h2.505v2.504a.5.5 0 0 0 1 0V18h2.496a.5.5 0 0 0 0-1H19v-2.501a.5.5 0 0 0-.5-.5M11.25 3a.75.75 0 0 1 0 1.5H8.117a.75.75 0 0 0-.65.376l-3.898 6.77a.75.75 0 0 0-.008.733l3.615 6.627a.949.949 0 0 0 1.736-.167l4.492-14.12a2.469 2.469 0 0 1 4.491-.483l3.824 6.641c.206.358.305.759.298 1.158a6.5 6.5 0 0 0-1.83-.813l-3.591-6.237a.969.969 0 0 0-1.762.19L10.34 19.294a2.449 2.449 0 0 1-4.482.43l-3.615-6.626a2.25 2.25 0 0 1 .025-2.2l3.898-6.771A2.25 2.25 0 0 1 8.117 3z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedAgentsAdd',
  mixins: [icon]
};
</script>
