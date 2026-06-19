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
    <path :fill="fill" :fill-opacity="opacity" d="M19 7c0 2.761-3.134 5-7 5S5 9.761 5 7s3.134-5 7-5 7 2.239 7 5m-.38 3.37C17.18 11.958 14.752 13 12 13s-5.18-1.043-6.62-2.63A3.74 3.74 0 0 0 5 12c0 2.761 3.134 5 7 5s7-2.239 7-5c0-.57-.134-1.119-.38-1.63m0 5C17.18 16.958 14.752 18 12 18s-5.18-1.043-6.62-2.63A3.74 3.74 0 0 0 5 17c0 2.761 3.134 5 7 5s7-2.239 7-5c0-.57-.134-1.119-.38-1.63" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledCoinMultiple',
  mixins: [icon]
};
</script>
