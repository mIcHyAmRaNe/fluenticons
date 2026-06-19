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
    <path :fill="fill" :fill-opacity="opacity" d="M18 4.25A2.25 2.25 0 0 0 15.75 2h-7.5A2.25 2.25 0 0 0 6 4.25v15.5A2.25 2.25 0 0 0 8.25 22h7.5A2.25 2.25 0 0 0 18 19.75zm-9.5 14a.75.75 0 0 1 .75-.75h5.5l.102.007A.75.75 0 0 1 14.75 19h-5.5l-.102-.007a.75.75 0 0 1-.648-.743M11.993 16a.75.75 0 0 1-.528-.225l-2.45-2.5a.75.75 0 1 1 1.071-1.05l1.164 1.187V9.75a.75.75 0 0 1 1.5 0v3.715l1.275-1.25a.75.75 0 1 1 1.05 1.07l-2.55 2.5a.75.75 0 0 1-.532.215" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledPhoneFooterArrowDown',
  mixins: [icon]
};
</script>
