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
    <path :fill="fill" :fill-opacity="opacity" d="M5.25 2A3.25 3.25 0 0 0 2 5.25v11.5A3.25 3.25 0 0 0 5.25 20h6.248A6.5 6.5 0 0 1 20 11.498V5.25A3.25 3.25 0 0 0 16.75 2zm11.03 6.28-6.754 6.747a.75.75 0 0 1-1.06 0L5.72 12.28a.75.75 0 0 1 1.06-1.06l2.217 2.216 6.223-6.217a.75.75 0 1 1 1.06 1.062M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m-3 5a.5.5 0 0 0 0 1h4.793l-1.647 1.646a.5.5 0 0 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708l-2.5-2.5a.5.5 0 0 0-.708.708L19.293 17z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledCheckboxArrowRight',
  mixins: [icon]
};
</script>
