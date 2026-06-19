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
    <path :fill="fill" :fill-opacity="opacity" d="M18.5 13a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H20a.5.5 0 0 0 0-1h-1v-1.5a.5.5 0 0 0-.5-.5m.251-10A3.25 3.25 0 0 1 22 8.25v5.007A5.5 5.5 0 0 0 13.208 19H5.25A3.25 3.25 0 0 1 2 15.75v-7.5A3.25 3.25 0 0 1 5.249 5zm-9.97 5.22a.75.75 0 0 0-1.061 0l-.72.72-.72-.72a.75.75 0 0 0-1.06 1.06l.72.72-.72.72a.75.75 0 1 0 1.06 1.06l.72-.72.72.72a.75.75 0 0 0 1.06-1.061L8.062 12l.718-.72a.75.75 0 0 0 0-1.06m5.5 0a.75.75 0 0 0-1.061 0l-.72.72-.72-.72a.75.75 0 0 0-1.06 1.06l.72.72-.72.72a.75.75 0 1 0 1.06 1.06l.72-.72.72.72a.75.75 0 0 0 1.06-1.061L13.562 12l.718-.72a.75.75 0 0 0 0-1.06" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledPasswordClock',
  mixins: [icon]
};
</script>
