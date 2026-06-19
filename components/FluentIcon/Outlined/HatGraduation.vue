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
    <path :fill="fill" :fill-opacity="opacity" d="M9.909 3.7a3.88 3.88 0 0 1 4.182 0l8.064 5.17a.75.75 0 0 1 .005 1.259L19 12.194v5.557a.75.75 0 0 1-.15.45l-.001.001-.001.002-.003.004-.009.01a2 2 0 0 1-.11.134 5 5 0 0 1-.318.33c-.277.267-.69.614-1.25.958C16.037 20.33 14.339 21 12 21s-4.036-.67-5.159-1.36a7.4 7.4 0 0 1-1.25-.957 5 5 0 0 1-.316-.33 3 3 0 0 1-.124-.15L5.15 18.2a.75.75 0 0 1-.15-.45v-5.558l-2-1.306v5.364a.75.75 0 1 1-1.5 0V9.5a.75.75 0 0 1 .358-.64zm4.21 11.682a3.88 3.88 0 0 1-4.238 0L6.5 13.174v4.296q.055.058.13.13c.211.203.54.481.997.762.909.56 2.337 1.139 4.373 1.139s3.464-.58 4.373-1.139a6 6 0 0 0 1.127-.892v-4.296zm-.837-10.419c-.781-.5-1.783-.5-2.564 0L3.63 9.507l7.071 4.62c.79.515 1.809.515 2.598 0l7.07-4.62z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedHatGraduation',
  mixins: [icon]
};
</script>
