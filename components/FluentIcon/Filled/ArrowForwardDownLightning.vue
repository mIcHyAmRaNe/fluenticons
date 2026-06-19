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
    <path :fill="fill" :fill-opacity="opacity" d="M16.296 5.706a1 1 0 0 1 1.415-1.414l4.997 5.004a1 1 0 0 1 0 1.414l-4.997 4.997a1 1 0 0 1-1.415-1.414L19.59 11H13a8 8 0 0 1-7.996-7.75L5 3a1 1 0 0 1 2 0 6 6 0 0 0 5.775 5.996L13 9h6.586zM5.318 12h4.827a.5.5 0 0 1 .436.745L8.751 16h1.495a.75.75 0 0 1 .564 1.244l-4.823 5.508c-.505.576-1.443.085-1.258-.657L5.5 19H2.498a.5.5 0 0 1-.453-.713l2.82-6A.5.5 0 0 1 5.318 12" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledArrowForwardDownLightning',
  mixins: [icon]
};
</script>
