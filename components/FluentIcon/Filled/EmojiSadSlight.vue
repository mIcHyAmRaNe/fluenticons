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
    <path :fill="fill" :fill-opacity="opacity" d="M22.002 12.002C22.002 6.478 17.524 2 12 2S2 6.478 2 12.002c0 5.523 4.477 10.001 10.001 10.001s10.002-4.478 10.002-10.001m-14.25-2a1.25 1.25 0 1 1 2.498 0 1.25 1.25 0 0 1-2.499 0m6 0a1.25 1.25 0 1 1 2.498 0 1.25 1.25 0 0 1-2.499 0M15.75 14h.6a.75.75 0 0 1 0 1.5h-.6c-.618 0-1.337.16-1.998.418-.669.26-1.197.588-1.472.862a.75.75 0 1 1-1.06-1.06c.475-.476 1.212-.898 1.989-1.2.784-.306 1.69-.52 2.541-.52" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledEmojiSadSlight',
  mixins: [icon]
};
</script>
