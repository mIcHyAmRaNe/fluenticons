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
    <path :fill="fill" :fill-opacity="opacity" d="M21 17.75V8.5H7.483a1.75 1.75 0 0 1-.495 1.487l-2 2A1.75 1.75 0 0 1 3 12.331v5.419A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75m-15-1.5a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0m4.75 0a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0M6 11.75a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0m4.75 0a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0m4.75 0a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0M21 7v-.75A3.25 3.25 0 0 0 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25v2.69l-.72-.72a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l2-2a.75.75 0 0 0-1.06-1.06l-.72.72V7z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledCalendarArrowCounterclockwise',
  mixins: [icon]
};
</script>
