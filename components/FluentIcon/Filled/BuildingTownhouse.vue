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
    <path :fill="fill" :fill-opacity="opacity" d="M8.482 3.53a1.75 1.75 0 0 0-2.509 0l-2.336 2.4A2.25 2.25 0 0 0 3 7.5v11.75c0 .966.784 1.75 1.75 1.75H8v-4.25a.75.75 0 0 1 .75-.75h2.5V7.29a2.25 2.25 0 0 0-.637-1.57zm4.268 3.76V16h2.5a.75.75 0 0 1 .75.75V21h3.25A1.75 1.75 0 0 0 21 19.25V7.5a2.25 2.25 0 0 0-.637-1.57l-2.336-2.4a1.75 1.75 0 0 0-2.509 0l-2.13 2.19a2.25 2.25 0 0 0-.638 1.57m0 10.21V21h1.75v-3.5zm-1.5 3.5v-3.5H9.5V21zM8.125 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0m8.75 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-8.75 2.997a1 1 0 1 1-2 0 1 1 0 0 1 2 0m8.75 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledBuildingTownhouse',
  mixins: [icon]
};
</script>
