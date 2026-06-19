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
    <path :fill="fill" :fill-opacity="opacity" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-9.5c-1.354 0-2.25-.985-2.25-2.25A2.25 2.25 0 1 1 12 12.5m2.71.342A3.74 3.74 0 0 1 12 14c-2.227 0-3.75-1.701-3.75-3.75A3.75 3.75 0 0 1 12 6.5c1.175 0 2.27.463 3.057 1.434.775.955 1.193 2.329 1.193 4.066 0 1.389-.262 2.74-.935 3.77-.701 1.071-1.813 1.73-3.315 1.73-1.248 0-2.242-.455-2.952-1.254a.75.75 0 0 1 1.122-.996c.406.457.981.75 1.83.75.998 0 1.636-.405 2.06-1.052.344-.526.565-1.246.65-2.106" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledNumberCircle9',
  mixins: [icon]
};
</script>
