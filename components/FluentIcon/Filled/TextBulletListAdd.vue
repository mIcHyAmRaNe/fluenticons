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
    <path :fill="fill" :fill-opacity="opacity" d="M4.999 18A1.5 1.5 0 1 0 2 18a1.5 1.5 0 0 0 2.999 0m7.02-1H7.5l-.116.007A1 1 0 0 0 7.5 19h4.674a6.5 6.5 0 0 1-.155-2m1.79-4H7.5a1 1 0 0 1-.116-1.993L7.5 11h11a6.48 6.48 0 0 0-4.69 2M5 12a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 2.999 0m0-5.993a1.5 1.5 0 1 0-2.999 0 1.5 1.5 0 0 0 2.999 0m16.004-1.006H7.5l-.116.007A1 1 0 0 0 7.5 7h13.503l.117-.007A1 1 0 0 0 21.003 5M24 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-5 .5.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 0 1 0-1H18v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTextBulletListAdd',
  mixins: [icon]
};
</script>
