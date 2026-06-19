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
    <path :fill="fill" :fill-opacity="opacity" d="M5 4h3v2.708A2.5 2.5 0 0 0 4.708 10H2V7a3 3 0 0 1 3-3M2 14.5v-3h4.94l-1.72 1.72a.75.75 0 1 0 1.06 1.06L8 12.56v4.94H5a3 3 0 0 1-3-3m7.5 3h7a3 3 0 0 0 3-3v-3h-8.94l1.72 1.72a.75.75 0 1 1-1.06 1.06L9.5 12.56zm3.292-7.5H19.5V7a3 3 0 0 0-3-3h-7v2.708A2.5 2.5 0 0 1 12.792 10M10.5 10h-1V9a1 1 0 1 1 1 1M7 10h1V8.992A1 1 0 1 0 7 10m.5 10a3 3 0 0 1-2.599-1.5H16.5a4 4 0 0 0 4-4V6.901A3 3 0 0 1 22 9.5v5a5.5 5.5 0 0 1-5.5 5.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledGiftCardMultiple',
  mixins: [icon]
};
</script>
