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
    <path :fill="fill" :fill-opacity="opacity" d="M15.25 13.5h-4a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 1.5 0V12h3.25a.75.75 0 0 1 0 1.5M12 2C6.478 2 2 6.478 2 12q0 .64.079 1.26A3.501 3.501 0 0 1 9 14v.05a2.5 2.5 0 0 1 2 2.45v5q0 .229-.04.447Q11.473 22 12 22c5.522 0 10-4.478 10-10S17.522 2 12 2M3 15v-1a2.5 2.5 0 0 1 5 0v1h.5a1.5 1.5 0 0 1 1.5 1.5v5A1.5 1.5 0 0 1 8.5 23h-6A1.5 1.5 0 0 1 1 21.5v-5A1.5 1.5 0 0 1 2.5 15zm1.5-1v1h2v-1a1 1 0 1 0-2 0m2 5a1 1 0 1 0-2 0 1 1 0 0 0 2 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledClockLock',
  mixins: [icon]
};
</script>
