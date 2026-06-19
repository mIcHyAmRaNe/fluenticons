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
    <path :fill="fill" :fill-opacity="opacity" d="M15 4.248a1.25 1.25 0 0 0-2.057-.954L7.975 7.498H4.25A2.25 2.25 0 0 0 2 9.748v4.5a2.25 2.25 0 0 0 2.25 2.25h3.725l4.967 4.206A1.25 1.25 0 0 0 15 19.75zm1.163 9.707 1.337 2.044v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2l1.333-2.005A1 1 0 0 0 23 13.44V10a1 1 0 0 0-1-1V7a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v2a1 1 0 0 0-1 1v3.408a1 1 0 0 0 .163.547M18.5 7.5h2V9h-2z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledSpeakerUsb',
  mixins: [icon]
};
</script>
