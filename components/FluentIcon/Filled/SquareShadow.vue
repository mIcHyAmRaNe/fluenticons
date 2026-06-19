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
    <path :fill="fill" :fill-opacity="opacity" d="M13.75 2A3.25 3.25 0 0 1 17 5.25V7h1.75A3.25 3.25 0 0 1 22 10.25v8A3.75 3.75 0 0 1 18.25 22h-8A3.25 3.25 0 0 1 7 18.75V17H5.25A3.25 3.25 0 0 1 2 13.75v-8.5A3.25 3.25 0 0 1 5.25 2zm-8.5 2C4.56 4 4 4.56 4 5.25v8.5c0 .69.56 1.25 1.25 1.25h8.5c.69 0 1.25-.56 1.25-1.25v-8.5C15 4.56 14.44 4 13.75 4z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledSquareShadow',
  mixins: [icon]
};
</script>
