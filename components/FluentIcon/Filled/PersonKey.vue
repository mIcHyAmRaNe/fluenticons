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
    <path :fill="fill" :fill-opacity="opacity" d="M15 15.5c0-.526.09-1.031.256-1.5H6.253a2.25 2.25 0 0 0-2.25 2.249v.92c0 .572.18 1.13.511 1.595 1.388 1.948 3.57 3.011 6.486 3.205v-1.055a2 2 0 0 1 .586-1.414l3.448-3.448A5 5 0 0 1 15 15.5M12 2.004a5 5 0 1 1 0 10 5 5 0 0 1 0-10M19.5 19a3.5 3.5 0 1 0-3.387-2.613l-3.82 3.82a1 1 0 0 0-.293.707V22.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V22h1a.5.5 0 0 0 .5-.5v-1h1a.5.5 0 0 0 .5-.5v-1zm.5-5a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledPersonKey',
  mixins: [icon]
};
</script>
