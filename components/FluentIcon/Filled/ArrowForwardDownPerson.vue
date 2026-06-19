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
    <path :fill="fill" :fill-opacity="opacity" d="M16.296 5.706a1 1 0 1 1 1.415-1.414l4.997 5.004a1 1 0 0 1 0 1.413l-4.997 4.998a1 1 0 1 1-1.415-1.414L19.59 11H13a8 8 0 0 1-7.996-7.75L5 3a1 1 0 0 1 2 0 6 6 0 0 0 5.775 5.996L13 9h6.586zM9 13.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m2 5.375C11 20.431 9.714 22 6.5 22S2 20.437 2 18.875v-.103C2 17.792 2.794 17 3.773 17h5.454c.98 0 1.773.793 1.773 1.772z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledArrowForwardDownPerson',
  mixins: [icon]
};
</script>
