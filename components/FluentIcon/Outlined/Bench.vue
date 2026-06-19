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
    <path :fill="fill" :fill-opacity="opacity" d="M5.75 4A2.75 2.75 0 0 0 3 6.75v5.3a2.5 2.5 0 0 0 0 4.9v2.3a.75.75 0 0 0 1.5 0V17h15v2.25a.75.75 0 0 0 1.5 0v-2.3a2.5 2.5 0 0 0 0-4.9v-5.3A2.75 2.75 0 0 0 18.25 4zm13.75 8h-15V6.75c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25zm1 3.5h-17a1 1 0 1 1 0-2h17a1 1 0 1 1 0 2" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedBench',
  mixins: [icon]
};
</script>
