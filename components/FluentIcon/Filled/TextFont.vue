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
    <path :fill="fill" :fill-opacity="opacity" d="M7 2a1 1 0 0 1 .94.658l2.882 7.926-1.11 2.798L9.209 12H4.792l-.852 2.342a1 1 0 0 1-1.88-.684l4.001-11A1 1 0 0 1 7.001 2m-1.48 8h2.962L7 5.926zm9.848-3.472a1 1 0 0 0-1.86 0L8.151 20.022h-.15a1 1 0 1 0 0 2H11a1 1 0 0 0 0-2h-.697L11.106 18h6.653l.8 2.023H18a1 1 0 0 0 0 2h3.009a1 1 0 0 0 0-2h-.298zM16.967 16H11.9l2.537-6.39z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTextFont',
  mixins: [icon]
};
</script>
