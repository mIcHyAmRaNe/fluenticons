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
    <path :fill="fill" :fill-opacity="opacity" d="M12 14a4 4 0 1 1 0 8 4 4 0 0 1 0-8m5.8-11.912a3.25 3.25 0 0 1 1.786 1.132l.702.878a3.25 3.25 0 0 1 .166 3.83l-4.31 6.459a5.5 5.5 0 0 0-3.914-1.882l.393-.589 4.942-7.413a2.58 2.58 0 0 0 .236-2.415m-11.605 0a2.58 2.58 0 0 0 .237 2.414l5.336 8.003a5.5 5.5 0 0 0-3.913 1.88L3.55 7.93a3.25 3.25 0 0 1 .164-3.831l.7-.876A3.25 3.25 0 0 1 6.195 2.09M15.423 2a1.074 1.074 0 0 1 .893 1.67L14.764 6h-5.53L7.68 3.67A1.075 1.075 0 0 1 8.575 2z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledMedal',
  mixins: [icon]
};
</script>
