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
    <path :fill="fill" :fill-opacity="opacity" d="M16.671 9.104A6.502 6.502 0 0 1 15.505 22c-1.483 0-2.884-.5-4.008-1.382v.632a.75.75 0 0 1-.65.743l-.1.007a.75.75 0 0 1-.744-.648l-.007-.102v-2.499a.75.75 0 0 1 .648-.743l.102-.007h2.505a.75.75 0 0 1 .101 1.493l-.101.007-.744.002a5 5 0 1 0 4.411-8.8zm-2.185-6.1a2.5 2.5 0 0 1 .974 4.803l.818 5.315A2.501 2.501 0 1 1 13.505 17H6.5a2.5 2.5 0 1 1-2.778-3.877l.818-5.312A2.5 2.5 0 1 1 7.497 4h4.992a2.5 2.5 0 0 1 1.997-.996m-2.5 2.496H8c0 1.2-.841 2.2-1.964 2.446l-.795 5.166a2.5 2.5 0 0 1 1.752 2.203L7 15.5h6.005a2.5 2.5 0 0 1 1.752-2.386l-.793-5.165a2.5 2.5 0 0 1-1.972-2.275z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledCropInterim',
  mixins: [icon]
};
</script>
