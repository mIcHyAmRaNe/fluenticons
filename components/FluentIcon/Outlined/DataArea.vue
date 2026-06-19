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
    <path :fill="fill" :fill-opacity="opacity" d="M3.75 3a.75.75 0 0 1 .75.75v6.258l3.65-1.922a.75.75 0 0 1 .73.018l3.82 2.246 5.6-4.2a.75.75 0 0 1 1.2.6V19.5h.75a.75.75 0 0 1 0 1.5h-14A3.25 3.25 0 0 1 3 17.75v-14A.75.75 0 0 1 3.75 3M18 19.5V8.25l-4.8 3.6a.75.75 0 0 1-.83.046L8.48 9.609 4.5 11.703v6.047c0 .966.784 1.75 1.75 1.75z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedDataArea',
  mixins: [icon]
};
</script>
