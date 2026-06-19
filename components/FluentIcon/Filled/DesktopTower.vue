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
    <path :fill="fill" :fill-opacity="opacity" d="M2 4.25A2.25 2.25 0 0 1 4.25 2h5.5A2.25 2.25 0 0 1 12 4.25V6H9.25A3.25 3.25 0 0 0 6 9.25v6.5A3.25 3.25 0 0 0 9.25 19h1.25v.5h-.25A1.75 1.75 0 0 0 8.668 22H4.25A2.25 2.25 0 0 1 2 19.75zM9.25 7A2.25 2.25 0 0 0 7 9.25v6.5A2.25 2.25 0 0 0 9.25 18h2.25v2.5h-1.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5H17.5V18h2.25A2.25 2.25 0 0 0 22 15.75v-6.5A2.25 2.25 0 0 0 19.75 7zM16 18v2.5h-3V18z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledDesktopTower',
  mixins: [icon]
};
</script>
