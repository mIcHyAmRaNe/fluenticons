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
    <path :fill="fill" :fill-opacity="opacity" d="M2.22 2.22a.75.75 0 0 1 1.06 0l18.5 18.5a.75.75 0 0 1-1.06 1.06L18.94 20H4.25A2.25 2.25 0 0 1 2 17.75V6.25a2.25 2.25 0 0 1 1.2-1.99l-.98-.98a.75.75 0 0 1 0-1.06M19.75 4A2.25 2.25 0 0 1 22 6.25v11.5c0 .315-.065.614-.182.886L20.5 17.317V12H18v2.817l-1.5-1.5V12h-1.317l-8-8zM3.5 17.75c0 .414.336.75.75.75h13.19l-2.94-2.94v.69a.75.75 0 0 1-1.5 0v-2.19l-2-2v4.19a.75.75 0 0 1-1.5 0V12h-2v4.25a.75.75 0 0 1-1.5 0V12H3.5zM5.5 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9.25 0a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledMidiOff',
  mixins: [icon]
};
</script>
