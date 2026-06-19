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
    <path :fill="fill" :fill-opacity="opacity" d="M6.238 7.452a.75.75 0 0 0-.036 1.06L8.524 11H2.75a.75.75 0 0 0 0 1.5h5.774l-2.322 2.488a.75.75 0 1 0 1.096 1.024l3.5-3.75a.75.75 0 0 0 0-1.024l-3.5-3.75a.75.75 0 0 0-1.06-.036m11.524 0a.75.75 0 0 1 .036 1.06L15.476 11h5.774a.75.75 0 0 1 0 1.5h-5.774l2.322 2.488a.75.75 0 1 1-1.096 1.024l-3.5-3.75a.75.75 0 0 1 0-1.024l3.5-3.75a.75.75 0 0 1 1.06-.036" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedArrowFitIn',
  mixins: [icon]
};
</script>
