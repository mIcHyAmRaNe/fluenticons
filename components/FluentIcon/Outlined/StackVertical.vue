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
    <path :fill="fill" :fill-opacity="opacity" d="M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v14a.75.75 0 0 1-1.5 0v-4a1.75 1.75 0 0 0-1.75-1.75H6.25a1.75 1.75 0 0 0-1.75 1.75v4a.75.75 0 0 1-1.5 0zm1.5 7.26A3.24 3.24 0 0 1 6.25 13h11.5c.644 0 1.245.188 1.75.51v-2.26a1.75 1.75 0 0 0-1.75-1.75H6.25a1.75 1.75 0 0 0-1.75 1.75zm15-7.26a1.75 1.75 0 0 0-1.75-1.75H6.25A1.75 1.75 0 0 0 4.5 6.25v2.26A3.24 3.24 0 0 1 6.25 8h11.5c.644 0 1.245.188 1.75.51z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedStackVertical',
  mixins: [icon]
};
</script>
