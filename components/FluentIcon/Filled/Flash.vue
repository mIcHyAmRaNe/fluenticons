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
    <path :fill="fill" :fill-opacity="opacity" d="M7.425 2.83A1.25 1.25 0 0 1 8.603 2h6.453a1.25 1.25 0 0 1 1.186 1.645L14.79 8h3.96c1.103 0 1.665 1.327.897 2.12L8.586 21.536c-1.054 1.088-2.872.106-2.541-1.372l1.27-5.668-1.57-.006a1.75 1.75 0 0 1-1.641-2.337z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledFlash',
  mixins: [icon]
};
</script>
