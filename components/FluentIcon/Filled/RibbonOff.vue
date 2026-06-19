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
    <path :fill="fill" :fill-opacity="opacity" d="M5.454 6.515a7 7 0 0 0 9.031 9.031l.766.766A8 8 0 0 1 12 17a7.97 7.97 0 0 1-5-1.754l.003 6a.75.75 0 0 0 1.181.612l3.817-2.687 3.818 2.687a.75.75 0 0 0 1.182-.613v-3.183l3.718 3.718a.75.75 0 0 0 1.061-1.06L3.28 2.22a.75.75 0 1 0-1.06 1.06zM7.142 3.96l9.898 9.898A7 7 0 0 0 7.142 3.96" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledRibbonOff',
  mixins: [icon]
};
</script>
