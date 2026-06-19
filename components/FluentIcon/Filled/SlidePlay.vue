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
    <path :fill="fill" :fill-opacity="opacity" d="M2 6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v6.06A6.5 6.5 0 0 0 11.498 20H4.75A2.75 2.75 0 0 1 2 17.25zM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7 1.999a.5.5 0 0 0 .777.416l3.002-1.999a.5.5 0 0 0 0-.832l-3.002-2a.5.5 0 0 0-.777.417z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledSlidePlay',
  mixins: [icon]
};
</script>
