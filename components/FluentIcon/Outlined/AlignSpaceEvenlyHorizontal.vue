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
    <path :fill="fill" :fill-opacity="opacity" d="M3.5 17.5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1zm1 2.5A2.5 2.5 0 0 1 2 17.5v-11A2.5 2.5 0 0 1 4.5 4h1A2.5 2.5 0 0 1 8 6.5v11A2.5 2.5 0 0 1 5.5 20zm6-2.5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1zm1 2.5A2.5 2.5 0 0 1 9 17.5v-11A2.5 2.5 0 0 1 11.5 4h1A2.5 2.5 0 0 1 15 6.5v11a2.5 2.5 0 0 1-2.5 2.5zm7-1.5a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1zm-2.5-1a2.5 2.5 0 0 0 2.5 2.5h1a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 19.5 4h-1A2.5 2.5 0 0 0 16 6.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedAlignSpaceEvenlyHorizontal',
  mixins: [icon]
};
</script>
