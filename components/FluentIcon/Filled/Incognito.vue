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
    <path :fill="fill" :fill-opacity="opacity" d="m18.123 4.612 2.107 4.634q.62.124 1.204.273a.75.75 0 1 1-.368 1.454 25 25 0 0 0-1.498-.328c-4.554-.86-10.58-.86-15.133 0q-.786.148-1.5.328a.75.75 0 1 1-.369-1.454q.586-.148 1.207-.274l2.106-4.633A2.75 2.75 0 0 1 8.382 3h7.237a2.75 2.75 0 0 1 2.504 1.612M3.5 16.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-4.5a4.5 4.5 0 1 0 4.389 5.5h2.223a4.502 4.502 0 0 0 8.888-1 4.5 4.5 0 0 0-8.972-.5h-2.056A4.5 4.5 0 0 0 6.5 12m8 4.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledIncognito',
  mixins: [icon]
};
</script>
