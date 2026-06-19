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
    <path :fill="fill" :fill-opacity="opacity" d="M10 7.75a.75.75 0 0 0-1.39-.39l-.006.009-.027.041-.114.17a8 8 0 0 1-.457.588c-.402.474-.966 1.034-1.642 1.439a.75.75 0 1 0 .772 1.286A7.7 7.7 0 0 0 8.5 9.833v6.417a.75.75 0 0 0 1.5 0zm3.28 4.47a.75.75 0 0 0-1.06 1.06l1.22 1.22-1.22 1.22a.75.75 0 1 0 1.06 1.06l1.22-1.22 1.22 1.22a.75.75 0 0 0 1.06-1.06l-1.22-1.22 1.22-1.22a.75.75 0 1 0-1.06-1.06l-1.22 1.22z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedMultiplier1x',
  mixins: [icon]
};
</script>
