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
    <path :fill="fill" :fill-opacity="opacity" d="M5.376 2.1a.75.75 0 0 1 1.024.276L11.365 11h2.27L9.1 3.124a.75.75 0 0 1 1.3-.748L15.365 11h5.933c.388 0 .702.315.702.702V12a10 10 0 0 1-.458 3H2.458A10 10 0 0 1 2 12v-.298c0-.387.314-.702.702-.702h6.933L5.1 3.124A.75.75 0 0 1 5.376 2.1M3.067 16.5A10 10 0 0 0 12 22a10 10 0 0 0 8.933-5.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledBowlChopsticks',
  mixins: [icon]
};
</script>
