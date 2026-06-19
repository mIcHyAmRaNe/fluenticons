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
    <path :fill="fill" :fill-opacity="opacity" d="M3.75 3.75a1 1 0 0 0 0 2h16.5a1 1 0 1 0 0-2zm7 7.25q0-.13.025-.25h2.45q.024.12.025.25v1.75h-2.5zm3.486-.25q.015.123.014.25v4.75a1 1 0 1 0 2 0V11q0-.126-.007-.25A4.25 4.25 0 0 0 7.75 11v4.75a1 1 0 1 0 2 0V11q0-.127.014-.25a2.25 2.25 0 0 1 4.472 0m6.014 2h-3V11q0-.126-.006-.25h3.006a1 1 0 1 1 0 2M6.75 11q0-.126.006-.25H3.75a1 1 0 1 0 0 2h3zm-4 7.75a1 1 0 0 1 1-1h16.5a1 1 0 1 1 0 2H3.75a1 1 0 0 1-1-1" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTextPositionBehind',
  mixins: [icon]
};
</script>
