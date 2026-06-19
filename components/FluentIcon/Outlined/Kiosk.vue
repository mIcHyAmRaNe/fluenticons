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
    <path :fill="fill" :fill-opacity="opacity" d="M4 4.25A2.25 2.25 0 0 1 6.25 2h11.5A2.25 2.25 0 0 1 20 4.25v6.5A2.25 2.25 0 0 1 17.75 13H14.5v7.5h1.75a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5H9.5V13H6.25A2.25 2.25 0 0 1 4 10.75zM11 13v7.5h2V13zM6.25 3.5a.75.75 0 0 0-.75.75v6.5c0 .414.336.75.75.75h11.5a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedKiosk',
  mixins: [icon]
};
</script>
