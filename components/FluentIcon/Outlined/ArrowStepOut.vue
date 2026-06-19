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
    <path :fill="fill" :fill-opacity="opacity" d="M12.75 13.75a.75.75 0 0 1-1.5 0V4.494l-3.484 3.3a.75.75 0 1 1-1.032-1.088l4.75-4.5a.75.75 0 0 1 1.032 0l4.75 4.5a.75.75 0 0 1-1.032 1.088l-3.484-3.3zM15 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-4.5 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedArrowStepOut',
  mixins: [icon]
};
</script>
