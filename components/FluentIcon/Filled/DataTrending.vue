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
    <path :fill="fill" :fill-opacity="opacity" d="M5 4a1 1 0 0 0-2 0v13.5A3.5 3.5 0 0 0 6.5 21H20a1 1 0 1 0 0-2H6.5A1.5 1.5 0 0 1 5 17.5zm10 2a1 1 0 1 0 0 2h2.086l-3.836 3.836-1.793-1.793a1 1 0 0 0-1.414 0l-3.25 3.25a1 1 0 1 0 1.414 1.414l2.543-2.543 1.793 1.793a1 1 0 0 0 1.414 0l4.544-4.543L18.5 11.5a1 1 0 1 0 2 0l.002-4.5a1 1 0 0 0-1-1z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledDataTrending',
  mixins: [icon]
};
</script>
