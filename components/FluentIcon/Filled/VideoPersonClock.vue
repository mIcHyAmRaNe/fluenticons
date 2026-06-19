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
    <path :fill="fill" :fill-opacity="opacity" d="M19.745 3a2.25 2.25 0 0 1 2.25 2.25v7.555a6.5 6.5 0 0 0-1.5-1.075V5.25a.75.75 0 0 0-.75-.75H4.25a.75.75 0 0 0-.75.75v11.505c0 .414.336.75.75.75l2.749-.001L7 14.75a1.75 1.75 0 0 1 1.606-1.744L8.75 13h4.06A6.48 6.48 0 0 0 11 17.5q.001.779.175 1.505H4.25A2.25 2.25 0 0 1 2 16.755V5.25A2.25 2.25 0 0 1 4.25 3zM12 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6m11 11.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0M17.5 14a.5.5 0 0 1 .5.5V17h2a.5.5 0 0 1 0 1h-2.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledVideoPersonClock',
  mixins: [icon]
};
</script>
