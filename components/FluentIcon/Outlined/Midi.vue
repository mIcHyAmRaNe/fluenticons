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
    <path :fill="fill" :fill-opacity="opacity" d="M19.75 4A2.25 2.25 0 0 1 22 6.25v11.5A2.25 2.25 0 0 1 19.75 20H4.25A2.25 2.25 0 0 1 2 17.75V6.25A2.25 2.25 0 0 1 4.25 4zM3.5 17.75c0 .414.336.75.75.75h15.5a.75.75 0 0 0 .75-.75V12H18v4.25a.75.75 0 0 1-1.5 0V12h-2v4.25a.75.75 0 0 1-1.5 0V12h-2v4.25a.75.75 0 0 1-1.5 0V12h-2v4.25a.75.75 0 0 1-1.5 0V12H3.5zM4.25 5.5a.75.75 0 0 0-.75.75v4.25h17V6.25a.75.75 0 0 0-.75-.75zM6 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2m3.5 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7.75 0a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1 0-1.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedMidi',
  mixins: [icon]
};
</script>
