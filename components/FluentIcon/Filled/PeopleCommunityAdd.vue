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
    <path :fill="fill" :fill-opacity="opacity" d="M8.75 6.25a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M5 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6m14 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-9.75 6a1.75 1.75 0 0 0-1.75 1.75v3.75A4.5 4.5 0 0 0 12 21h.022a6.503 6.503 0 0 1 3.648-9.739 1.74 1.74 0 0 0-.92-.261zm-2.64.978q-.109.369-.11.772v3.75a5.49 5.49 0 0 0 2.035 4.272 4.5 4.5 0 0 1-5.763-3.107l-.712-2.656a1.75 1.75 0 0 1 1.237-2.144zM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-5 .5.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledPeopleCommunityAdd',
  mixins: [icon]
};
</script>
