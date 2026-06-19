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
    <path :fill="fill" :fill-opacity="opacity" d="M6.61 10.995c2.255 0 3.687 2.02 5.454 2.74.244.1.359.403.209.62l-4.22 6.082a1.725 1.725 0 0 1-2.751.11L1.76 16.224a.725.725 0 0 1-.081-.81c1-1.81 2.932-4.418 4.93-4.419m9.287.732a1.725 1.725 0 0 1 2.751-.11l3.541 4.323c.19.23.226.55.082.81-1.001 1.81-2.933 4.418-4.931 4.418-2.255 0-3.687-2.019-5.453-2.74-.245-.099-.36-.402-.21-.62zM7 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6m10 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledPeopleInterwoven',
  mixins: [icon]
};
</script>
