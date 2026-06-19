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
    <path :fill="fill" :fill-opacity="opacity" d="m21.49 4.982-2.01 2.01a9 9 0 0 0-2.47-2.47l2.01-2.01a1.747 1.747 0 1 1 2.47 2.47M5.28 13.72a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0m2.5 3.56a.75.75 0 1 0-1.06-1.06l-2 2a.75.75 0 1 0 1.06 1.06zm2.5 2.5a.75.75 0 1 0-1.06-1.06l-2 2a.75.75 0 1 0 1.06 1.06zM3.736 7.263a1.75 1.75 0 0 1 2.473 0l10.56 10.559a1.749 1.749 0 1 1-2.474 2.473L3.736 9.736a1.75 1.75 0 0 1 0-2.473m3.18-.707a3 3 0 0 0-.43-.352 8 8 0 0 1 11.316 11.304 3 3 0 0 0-.327-.393z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledShowerhead',
  mixins: [icon]
};
</script>
