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
    <path :fill="fill" :fill-opacity="opacity" d="M12 6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0M6.5 3a.5.5 0 0 1 .5.5V6h2a.5.5 0 0 1 0 1H6.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5m6.326 5q.172-.722.174-1.496a2.75 2.75 0 0 1 2.226 1.348l2.508 4.246 2.183.546A2.75 2.75 0 0 1 22 15.312V17a2.75 2.75 0 0 1-1.585 2.492 3.251 3.251 0 0 1-6.258.258H9.343a3.251 3.251 0 0 1-6.32-.61A2.75 2.75 0 0 1 2 17v-2.25a2.75 2.75 0 0 1 1.531-2.466c.89.458 1.9.716 2.969.716a6.48 6.48 0 0 0 4.5-1.81V12h4.934l-2-3.386A1.25 1.25 0 0 0 12.859 8zm1.212 10.25a3.25 3.25 0 0 1 6.274-.59A1.24 1.24 0 0 0 20.5 17v-1.688a1.25 1.25 0 0 0-.947-1.213l-2.397-.599H4.75c-.69 0-1.25.56-1.25 1.25v2.267a3.25 3.25 0 0 1 5.962 1.233zM6.25 17a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m9.25 1.75a1.75 1.75 0 1 0 3.5 0 1.75 1.75 0 0 0-3.5 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedVehicleCarProfileLtrClock',
  mixins: [icon]
};
</script>
