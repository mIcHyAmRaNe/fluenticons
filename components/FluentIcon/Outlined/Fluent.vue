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
    <path :fill="fill" :fill-opacity="opacity" d="M11.915 2.082a.75.75 0 0 1 .67 0l6 3a.75.75 0 0 1 0 1.341l-4.658 2.33 4.658 2.329a.75.75 0 0 1 0 1.341L13 15.216v6.034a.75.75 0 0 1-1.149.635l-6-3.77a.75.75 0 0 1-.351-.634V5.752a.75.75 0 0 1 .415-.671zM7 6.216v10.85l4.5 2.827v-5.14a.75.75 0 0 1 .415-.671l4.658-2.33-4.658-2.329a.75.75 0 0 1 0-1.341l4.658-2.33-4.323-2.16z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedFluent',
  mixins: [icon]
};
</script>
