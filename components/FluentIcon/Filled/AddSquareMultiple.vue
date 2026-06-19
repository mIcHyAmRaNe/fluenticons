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
    <path :fill="fill" :fill-opacity="opacity" d="M3 5.25A2.25 2.25 0 0 1 5.25 3h11a2.25 2.25 0 0 1 2.25 2.25v11a2.25 2.25 0 0 1-2.25 2.25h-11A2.25 2.25 0 0 1 3 16.25zm8.5 2a.75.75 0 0 0-1.5 0V10H7.25a.75.75 0 0 0 0 1.5H10v2.75a.75.75 0 0 0 1.5 0V11.5h2.75a.75.75 0 0 0 0-1.5H11.5zM7.75 21a2.25 2.25 0 0 1-2.122-1.5H16.25a3.25 3.25 0 0 0 3.25-3.25V5.628A2.25 2.25 0 0 1 21 7.75v8.5A4.75 4.75 0 0 1 16.25 21z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledAddSquareMultiple',
  mixins: [icon]
};
</script>
