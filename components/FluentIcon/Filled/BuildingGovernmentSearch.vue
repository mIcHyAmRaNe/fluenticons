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
    <path :fill="fill" :fill-opacity="opacity" d="M11.75 2h3.75a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-3v1.018A7 7 0 0 1 19 13h.75A2.25 2.25 0 0 1 22 15.25v6a.75.75 0 0 1-.75.75H14a.25.25 0 0 1-.25-.25v-3a.5.5 0 0 0-.5-.5h-2.5l-.034.001A5.51 5.51 0 0 0 9.5 12.725v-.975a.75.75 0 0 0-1.486-.143 5.5 5.5 0 0 0-2.725-.603A7.01 7.01 0 0 1 11 6.071V2.75a.75.75 0 0 1 .75-.75m3.75 11.75v-2a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0m-3-2a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0zm6.5 7v-2.5a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0M5.5 21a4.5 4.5 0 0 0 2.607-.832l2.613 2.612a.75.75 0 1 0 1.06-1.06l-2.612-2.613A4.5 4.5 0 1 0 5.5 21m0-1.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledBuildingGovernmentSearch',
  mixins: [icon]
};
</script>
