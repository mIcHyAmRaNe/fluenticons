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
    <path :fill="fill" :fill-opacity="opacity" d="M11 14v2.935c0 .785.309 1.538.859 2.098l2.256 2.297q-1.772.672-4.115.671c-3.42 0-5.944-1.072-7.486-3.236a2.75 2.75 0 0 1-.51-1.596v-.92A2.25 2.25 0 0 1 4.253 14zm4-6.995a5 5 0 1 0-10 0 5 5 0 0 0 10 0m1.572 15.4-4-4.073A2 2 0 0 1 12 16.935V14a2 2 0 0 1 2.002-1.997L16.919 12a2 2 0 0 1 1.41.577l4.075 4.014a1.99 1.99 0 0 1 .012 2.829l-2.992 2.996a2.01 2.01 0 0 1-2.852-.012M14.996 16a1 1 0 1 0-.001-1.999 1 1 0 0 0 .001 2" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledPersonTag',
  mixins: [icon]
};
</script>
