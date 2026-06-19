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
    <path :fill="fill" :fill-opacity="opacity" d="M22.002 12.002C22.002 6.478 17.524 2 12 2S2 6.478 2 12.002c0 5.523 4.477 10.001 10.001 10.001s10.002-4.478 10.002-10.001m-14.25-2a1.25 1.25 0 1 1 2.498 0 1.25 1.25 0 0 1-2.499 0m6 0a1.25 1.25 0 1 1 2.498 0 1.25 1.25 0 0 1-2.499 0m-3.616 5.106c.483.29 1.155.455 1.864.455s1.381-.165 1.864-.455a.75.75 0 1 1 .772 1.286c-.767.46-1.72.67-2.636.67s-1.869-.21-2.636-.67a.75.75 0 1 1 .772-1.286" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledEmojiSmileSlight',
  mixins: [icon]
};
</script>
