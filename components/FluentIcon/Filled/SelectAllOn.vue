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
    <path :fill="fill" :fill-opacity="opacity" d="M3 6.25A3.25 3.25 0 0 1 6.25 3h9.5A3.25 3.25 0 0 1 19 6.25v9.5A3.25 3.25 0 0 1 15.75 19h-9.5A3.25 3.25 0 0 1 3 15.75zm12.28 2.78a.75.75 0 0 0-1.06-1.06L10 12.19l-1.97-1.97a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0zM6.5 20a3.25 3.25 0 0 0 2.741 1.5h7.005a5.254 5.254 0 0 0 5.254-5.254V9.241A3.25 3.25 0 0 0 19.999 6.5v9.746A3.753 3.753 0 0 1 16.246 20z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledSelectAllOn',
  mixins: [icon]
};
</script>
