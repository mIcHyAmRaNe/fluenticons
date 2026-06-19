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
    <path :fill="fill" :fill-opacity="opacity" d="m16.677 17.738 4.042 4.043a.75.75 0 0 0 1.061-1.061L3.28 2.22a.75.75 0 1 0-1.06 1.06l8.48 8.48-4.325 3.46a1 1 0 1 0 1.25 1.56L11 14.08V21a1 1 0 0 0 1.707.707zm-3.578-3.578 2.163 2.163L13 18.586V14.08zm4.526-5.38-3.146 2.517-1.423-1.423 2.447-1.957L13 5.414v4.404l-2-2V3a1 1 0 0 1 1.707-.707l5 5a1 1 0 0 1-.082 1.488" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledBluetoothDisabled',
  mixins: [icon]
};
</script>
