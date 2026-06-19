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
    <path :fill="fill" :fill-opacity="opacity" d="M5.843 4.568a8.708 8.708 0 0 1 12.315 12.314l-1.188 1.174q-1.312 1.288-3.406 3.313a2.25 2.25 0 0 1-3.128-.001l-3.491-3.396q-.658-.646-1.102-1.09a8.71 8.71 0 0 1 0-12.314M17.096 5.63A7.207 7.207 0 1 0 6.904 15.822l1.487 1.467a748 748 0 0 0 3.088 3 .75.75 0 0 0 1.043 0l3.394-3.3q.705-.69 1.18-1.167a7.207 7.207 0 0 0 0-10.192M12.001 7.5a3.5 3.5 0 1 1-.002 7.001 3.5 3.5 0 0 1 .002-7.001M12 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedLocation',
  mixins: [icon]
};
</script>
