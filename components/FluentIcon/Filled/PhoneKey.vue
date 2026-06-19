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
    <path :fill="fill" :fill-opacity="opacity" d="M15.75 2A2.25 2.25 0 0 1 18 4.25v7.006a4.5 4.5 0 0 0-2.966 4.796L13.086 18H10.75a.75.75 0 0 0 0 1.5h.836l-.073.073A1.75 1.75 0 0 0 11 20.811V22H8.25A2.25 2.25 0 0 1 6 19.75V4.25A2.25 2.25 0 0 1 8.25 2zm3.75 17a3.5 3.5 0 1 0-3.38-2.586.8.8 0 0 0-.15.116l-3.75 3.75a.75.75 0 0 0-.22.53v1.44c0 .414.336.75.75.75h1.75a.5.5 0 0 0 .5-.5V22h1a.5.5 0 0 0 .5-.5v-1h1a.5.5 0 0 0 .5-.5v-1zm1.5-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledPhoneKey',
  mixins: [icon]
};
</script>
