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
    <path :fill="fill" :fill-opacity="opacity" d="M16.255 2.195a.75.75 0 0 0-1.01 1.11l2.75 2.5a.75.75 0 0 0 1.01 0l2.75-2.5a.75.75 0 1 0-1.01-1.11L18.5 4.236zM12 4a.75.75 0 0 1 .697.474l5.75 14.5a.75.75 0 0 1-1.394.552L15.258 15H8.742l-1.795 4.526a.75.75 0 1 1-1.394-.553l5.75-14.5A.75.75 0 0 1 12 4m0 2.785L9.337 13.5h5.326z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedFontDecrease',
  mixins: [icon]
};
</script>
