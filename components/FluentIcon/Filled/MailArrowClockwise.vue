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
    <path :fill="fill" :fill-opacity="opacity" d="M23 .75a.75.75 0 0 0-1.5 0v.626A6 6 0 1 0 24 6.25a.75.75 0 0 0-1.5 0 4.5 4.5 0 1 1-1.688-3.513l.008.006.01.007H19.5a.75.75 0 0 0 0 1.5h2.75A.75.75 0 0 0 23 3.5zm-12 5.5c0 2.069.898 3.928 2.324 5.21L12 12.153l-9.984-5.23a3.25 3.25 0 0 1 3.048-2.918L5.25 4h6.12A7 7 0 0 0 11 6.25m11 10.5v-4.755a6.97 6.97 0 0 1-4 1.255 7 7 0 0 1-3.293-.821l-2.359 1.235a.75.75 0 0 1-.696 0L2 8.608v8.142l.005.184A3.25 3.25 0 0 0 5.25 20h13.5l.184-.005A3.25 3.25 0 0 0 22 16.75" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledMailArrowClockwise',
  mixins: [icon]
};
</script>
