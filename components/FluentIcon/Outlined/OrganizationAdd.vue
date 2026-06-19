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
    <path :fill="fill" :fill-opacity="opacity" d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11M11.75 1.997a3.753 3.753 0 0 1 .75 7.43V11.5h2.497a6.5 6.5 0 0 0-2.185 1.5H7.75a.75.75 0 0 0-.75.75v.824a3.753 3.753 0 1 1-1.5.001v-.825a2.25 2.25 0 0 1 2.25-2.25H11V9.427a3.753 3.753 0 0 1 .75-7.43M17.5 14a.5.5 0 0 0-.5.5V17h-2.505a.5.5 0 0 0 0 1h2.506v2.504a.5.5 0 0 0 1 0V18h2.496a.5.5 0 0 0 0-1H18v-2.501a.5.5 0 0 0-.5-.5M6.252 16a2.252 2.252 0 1 0 0 4.504 2.252 2.252 0 0 0 0-4.504M11.75 3.498a2.252 2.252 0 1 0 0 4.503 2.252 2.252 0 0 0 0-4.503" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedOrganizationAdd',
  mixins: [icon]
};
</script>
