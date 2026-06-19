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
    <path :fill="fill" :fill-opacity="opacity" d="M6.942 8.003 2.22 3.28a.75.75 0 0 1 1.06-1.06l18.5 18.5a.75.75 0 1 1-1.06 1.06L16 17.06l-3.452 3.453a3.255 3.255 0 0 1-4.596.001L3.49 16.06a3.25 3.25 0 0 1-.004-4.596zM14.94 16 8.003 9.064l-3.468 3.472a1.75 1.75 0 0 0 .015 2.462l4.461 4.454a1.755 1.755 0 0 0 2.477 0zm5.05-5.05L17 13.939l1.061 1.06 2.99-2.99A3.25 3.25 0 0 0 22 9.713V4.25A2.25 2.25 0 0 0 19.75 2h-5.464a3.25 3.25 0 0 0-2.3.953L9.002 5.941l1.06 1.06 2.985-2.988a1.75 1.75 0 0 1 1.239-.513h5.465a.75.75 0 0 1 .75.75v5.462c0 .464-.184.91-.513 1.237M17 5.501a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTagOff',
  mixins: [icon]
};
</script>
