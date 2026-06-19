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
    <path :fill="fill" :fill-opacity="opacity" d="M12 1.998c5.524 0 10.002 4.478 10.002 10.002 0 5.523-4.478 10-10.002 10S2 17.523 2 12C1.999 6.476 6.476 1.998 12 1.998m0 1.5a8.502 8.502 0 1 0 0 17.003 8.502 8.502 0 0 0 0-17.003m0 10c1.631 0 3.16.654 4.281 1.795a.75.75 0 1 1-1.07 1.05 4.5 4.5 0 0 0-3.21-1.346 4.5 4.5 0 0 0-3.217 1.352.75.75 0 1 1-1.072-1.05A5.98 5.98 0 0 1 12 13.498M9 8.75a1.25 1.25 0 1 1 0 2.499A1.25 1.25 0 0 1 9 8.75m6 0a1.25 1.25 0 1 1 0 2.499 1.25 1.25 0 0 1 0-2.499" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedEmojiSad',
  mixins: [icon]
};
</script>
