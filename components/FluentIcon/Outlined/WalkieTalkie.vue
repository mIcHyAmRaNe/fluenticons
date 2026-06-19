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
    <path :fill="fill" :fill-opacity="opacity" d="M10.25 14a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm-1.5-8a.75.75 0 0 0-.75.75v4.5c0 .415.336.75.75.75h6.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75zm.75 4.5v-3h5v3zM8.75 1a.75.75 0 0 1 .75.75V3h7.25A2.25 2.25 0 0 1 19 5.25V14a.75.75 0 0 1-.199.509l-1.301 1.41v3.831A2.25 2.25 0 0 1 15.25 22H8.751a2.25 2.25 0 0 1-2.25-2.25v-3.832L5.2 14.508A.75.75 0 0 1 5 14V5.25A2.25 2.25 0 0 1 7.25 3H8V1.75A.75.75 0 0 1 8.75 1M6.5 5.25v8.457l1.302 1.41c.128.138.2.32.2.508v4.125c0 .414.335.75.75.75h6.498a.75.75 0 0 0 .75-.75v-4.125a.75.75 0 0 1 .199-.509l1.301-1.41V5.25a.75.75 0 0 0-.75-.75h-9.5a.75.75 0 0 0-.75.75" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedWalkieTalkie',
  mixins: [icon]
};
</script>
