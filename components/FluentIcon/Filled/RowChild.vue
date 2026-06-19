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
    <path :fill="fill" :fill-opacity="opacity" d="M5.25 3A2.25 2.25 0 0 0 3 5.25v3a2.25 2.25 0 0 0 2.25 2.25H6v4.25A3.25 3.25 0 0 0 9.25 18H12v.75A2.25 2.25 0 0 0 14.25 21h4.5A2.25 2.25 0 0 0 21 18.75v-3a2.25 2.25 0 0 0-2.25-2.25h-4.5A2.25 2.25 0 0 0 12 15.75v.75H9.25a1.75 1.75 0 0 1-1.75-1.75V10.5h11.25A2.25 2.25 0 0 0 21 8.25v-3A2.25 2.25 0 0 0 18.75 3z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledRowChild',
  mixins: [icon]
};
</script>
