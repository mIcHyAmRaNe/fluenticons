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
    <path :fill="fill" :fill-opacity="opacity" d="M9.25 5a.75.75 0 0 1 .11 1.492l-.11.008H7a3.5 3.5 0 0 0-.206 6.994L7 13.5h2.25a.75.75 0 0 1 .11 1.492L9.25 15H7a5 5 0 0 1-.25-9.994L7 5zM17 5a5 5 0 0 1 4.43 7.322 6.5 6.5 0 0 0-1.294-.765 3.5 3.5 0 0 0-2.93-5.05L17 6.499h-2.25a.75.75 0 0 1-.11-1.492L14.75 5zM7 9.25h10a.75.75 0 0 1 .102 1.493L17 10.75H7a.75.75 0 0 1-.102-1.493zm16 8.25a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-5 .5.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedLinkAdd',
  mixins: [icon]
};
</script>
