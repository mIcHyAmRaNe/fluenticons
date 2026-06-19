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
    <path :fill="fill" :fill-opacity="opacity" d="M6.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m10.866 8.505a2.25 2.25 0 0 1-2.122 1.499h-4.057a6.5 6.5 0 0 0 1.079-1.5zM9 17.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m.33-2.828a.5.5 0 0 0-.707 0l-4.95 4.95a.5.5 0 0 0 .707.707l4.95-4.95a.5.5 0 0 0 0-.707M9 18.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1M13 2v4.75A2.25 2.25 0 0 0 15.25 9H20v8.25a2.25 2.25 0 0 1-2.25 2.25h-5.063A6.5 6.5 0 0 0 6.5 11V4.25A2.25 2.25 0 0 1 8.75 2zM4 14.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 1a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m1.501-4.424A6.5 6.5 0 0 0 4 11.498V6.75c0-.98.628-1.815 1.503-2.123zM19.5 7.5h-4.25a.75.75 0 0 1-.75-.75V2.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledDocumentMultiplePercent',
  mixins: [icon]
};
</script>
