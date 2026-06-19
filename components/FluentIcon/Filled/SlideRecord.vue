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
    <path :fill="fill" :fill-opacity="opacity" d="M4.75 4A2.75 2.75 0 0 0 2 6.75v10.5A2.75 2.75 0 0 0 4.75 20h6.748A6.5 6.5 0 0 1 11 17.5c0-.698.11-1.37.313-2H6.75a.75.75 0 0 1 0-1.5h5.272a6.5 6.5 0 0 1 1.324-1.5H6.75a.75.75 0 0 1 0-1.5h8.5c.211 0 .402.087.538.228A6.5 6.5 0 0 1 17.5 11c1.747 0 3.332.689 4.5 1.81V6.75A2.75 2.75 0 0 0 19.25 4zM6 8.75A.75.75 0 0 1 6.75 8h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 6 8.75M17.5 21.5a4 4 0 1 1 0-8 4 4 0 0 1 0 8m0 1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m0-3a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledSlideRecord',
  mixins: [icon]
};
</script>
