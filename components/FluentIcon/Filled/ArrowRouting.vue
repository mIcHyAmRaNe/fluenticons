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
    <path :fill="fill" :fill-opacity="opacity" d="M17.53 3.22a.75.75 0 1 0-1.06 1.06l2.97 2.97H14.5a3.25 3.25 0 0 0-3.25 3.25v3a1.75 1.75 0 0 1-1.33 1.7A4.001 4.001 0 0 0 2 16a4 4 0 0 0 7.935.721A3.25 3.25 0 0 0 12.75 13.5v-3c0-.966.784-1.75 1.75-1.75h4.94l-2.97 2.97a.75.75 0 1 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledArrowRouting',
  mixins: [icon]
};
</script>
