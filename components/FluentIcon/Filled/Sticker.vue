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
    <path :fill="fill" :fill-opacity="opacity" d="M17.75 3A3.25 3.25 0 0 1 21 6.25v6.749L16.251 13l-.213.007a3.25 3.25 0 0 0-2.714 1.832q-.63.17-1.323.17a4.84 4.84 0 0 1-2.824-.873.75.75 0 1 0-.854 1.233 6.34 6.34 0 0 0 3.678 1.14q.34 0 .671-.032l.329-.04L13 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3zm2.591 11.72-5.621 5.62a2 2 0 0 1-.218.191L14.5 16.25l.006-.143a1.75 1.75 0 0 1 1.593-1.6l.151-.007h4.282q-.089.115-.192.22M9.001 7.75a1.25 1.25 0 1 0 0 2.499A1.25 1.25 0 0 0 9 7.75m6 0a1.25 1.25 0 1 0 0 2.499 1.25 1.25 0 0 0 0-2.499" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledSticker',
  mixins: [icon]
};
</script>
