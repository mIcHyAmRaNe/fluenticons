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
    <path :fill="fill" :fill-opacity="opacity" d="M10.5 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m6 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m-3.104.75q.103.358.104.75v3q0 .26-.063.5A2 2 0 0 1 11 16.437V20a2 2 0 0 1-3.25 1.561A2 2 0 0 1 4.5 20v-3.563q-.24.062-.5.063a2 2 0 0 1-2-2v-3a2.75 2.75 0 0 1 2.75-2.75h6a2.75 2.75 0 0 1 2.646 2m1.029 0h5.325a2.75 2.75 0 0 1 2.75 2.75v1.75a2 2 0 0 1-2.5 1.937V20a2 2 0 0 1-3.25 1.561A2 2 0 0 1 13.5 20v-3.264c.614-.55 1-1.348 1-2.236v-3q0-.386-.075-.75" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledGuardian',
  mixins: [icon]
};
</script>
