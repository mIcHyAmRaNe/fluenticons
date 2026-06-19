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
    <path :fill="fill" :fill-opacity="opacity" d="M4.499 18.75a1.25 1.25 0 1 0-2.499 0 1.25 1.25 0 0 0 2.499 0m7.52-.75H6.75l-.102.007A.75.75 0 0 0 6.75 19.5h5.564a6.5 6.5 0 0 1-.295-1.5m1.79-5H6.75a.75.75 0 0 1-.102-1.493l.102-.007h9.244A6.5 6.5 0 0 0 13.81 13m-9.31-.75a1.25 1.25 0 1 0-2.499 0 1.25 1.25 0 0 0 2.499 0m0-6.5a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.499 0M21.25 5H6.75l-.102.007A.75.75 0 0 0 6.75 6.5h14.5l.102-.007A.75.75 0 0 0 21.25 5M24 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-5 .5.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 0 1 0-1H18v-2.501a.5.5 0 1 1 1 0v2.5h2.497a.5.5 0 0 1 0 1z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTextBulletListAdd',
  mixins: [icon]
};
</script>
