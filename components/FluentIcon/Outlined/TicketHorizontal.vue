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
    <path :fill="fill" :fill-opacity="opacity" d="M19.75 5A2.25 2.25 0 0 1 22 7.25v1.784c0 .532-.4.919-.848.997a2 2 0 0 0 0 3.937c.448.078.848.465.848.997v1.785A2.25 2.25 0 0 1 19.75 19H4.25A2.25 2.25 0 0 1 2 16.75v-1.785c0-.532.4-.919.848-.997l.173-.038a1.999 1.999 0 0 0-.173-3.899A1.02 1.02 0 0 1 2 9.034V7.25A2.25 2.25 0 0 1 4.25 5zM4.25 6.5a.75.75 0 0 0-.75.75v1.4a3.494 3.494 0 0 1 0 6.7v1.4c0 .414.336.75.75.75H14.5v-1.25a.75.75 0 0 1 1.5 0v1.25h3.75a.75.75 0 0 0 .75-.75v-1.401a3.494 3.494 0 0 1 0-6.7V7.25a.75.75 0 0 0-.75-.75H16v1.25a.75.75 0 0 1-1.5 0V6.5zm11 3.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTicketHorizontal',
  mixins: [icon]
};
</script>
