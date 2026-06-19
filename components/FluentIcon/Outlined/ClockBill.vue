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
    <path :fill="fill" :fill-opacity="opacity" d="M4.5 11a8.5 8.5 0 1 1 6.502 8.264V20.5q0 .15-.013.298.976.2 2.011.202c5.523 0 10-4.477 10-10S18.523 1 13 1 3 5.477 3 11v.036Q3.246 11 3.501 11zm8.493-5.352a.75.75 0 0 0-1.493.102v6l.007.102a.75.75 0 0 0 .743.648h4l.102-.007A.75.75 0 0 0 16.25 11H13V5.75zM1 14.5A2.5 2.5 0 0 1 3.5 12h4a2.5 2.5 0 0 1 2.5 2.5v6A2.5 2.5 0 0 1 7.5 23h-4A2.5 2.5 0 0 1 1 20.5zm6.5-.5h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1m0 3h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1m0 3h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedClockBill',
  mixins: [icon]
};
</script>
