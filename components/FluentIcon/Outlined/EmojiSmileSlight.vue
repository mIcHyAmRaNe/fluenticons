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
    <path :fill="fill" :fill-opacity="opacity" d="M10.25 10a1.25 1.25 0 1 0-2.499 0 1.25 1.25 0 0 0 2.499 0m6 0a1.25 1.25 0 1 0-2.499 0 1.25 1.25 0 0 0 2.499 0m-6.114 5.106a.75.75 0 0 0-.772 1.286c.767.46 1.72.67 2.636.67s1.87-.21 2.636-.67a.75.75 0 1 0-.772-1.286c-.483.29-1.154.456-1.864.456s-1.38-.166-1.864-.456M22.002 12c0-5.524-4.478-10.002-10.002-10.002S2 6.476 2 12c-.001 5.523 4.476 10 10 10s10.002-4.477 10.002-10M3.499 12a8.502 8.502 0 1 1 17.003 0 8.502 8.502 0 0 1-17.003 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedEmojiSmileSlight',
  mixins: [icon]
};
</script>
