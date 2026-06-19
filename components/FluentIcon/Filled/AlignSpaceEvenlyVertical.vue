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
    <path :fill="fill" :fill-opacity="opacity" d="M6.5 2A2.5 2.5 0 0 0 4 4.5v1A2.5 2.5 0 0 0 6.5 8h11A2.5 2.5 0 0 0 20 5.5v-1A2.5 2.5 0 0 0 17.5 2zm0 7A2.5 2.5 0 0 0 4 11.5v1A2.5 2.5 0 0 0 6.5 15h11a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 17.5 9zm0 7A2.5 2.5 0 0 0 4 18.5v1A2.5 2.5 0 0 0 6.5 22h11a2.5 2.5 0 0 0 2.5-2.5v-1a2.5 2.5 0 0 0-2.5-2.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledAlignSpaceEvenlyVertical',
  mixins: [icon]
};
</script>
