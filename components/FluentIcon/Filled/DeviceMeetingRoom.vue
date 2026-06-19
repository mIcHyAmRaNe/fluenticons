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
    <path :fill="fill" :fill-opacity="opacity" d="M4.093 5.346A3.06 3.06 0 0 1 7.07 3h9.858c1.416 0 2.647.97 2.979 2.346l1.992 8.273A3.55 3.55 0 0 1 18.448 18H5.553A3.55 3.55 0 0 1 2.1 13.62zM6.749 19a.75.75 0 1 0 0 1.5H17.25a.75.75 0 1 0 0-1.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledDeviceMeetingRoom',
  mixins: [icon]
};
</script>
