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
    <path :fill="fill" :fill-opacity="opacity" d="M16 15V6.5a1 1 0 0 1 1.993-.117L18 6.5V15a1 1 0 0 1-1.993.117zm-4.707 6.707-2-2a1 1 0 0 1 1.32-1.497l.094.083L12 19.586l1.293-1.293a1 1 0 0 1 1.497 1.32l-.083.094-2 2a1 1 0 0 1-1.32.083zM11 15l-.001-11.5a1 1 0 0 1 1.993-.117L13 3.5V15a1 1 0 0 1-1.993.117zm-5 0V6.5a1 1 0 0 1 1.993-.117L8 6.5V15a1 1 0 0 1-1.993.117z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTextIndentDecreaseLtrRotate270',
  mixins: [icon]
};
</script>
