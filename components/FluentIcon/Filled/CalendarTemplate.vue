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
    <path :fill="fill" :fill-opacity="opacity" d="M2 5.25A3.25 3.25 0 0 1 5.25 2h10.5A3.25 3.25 0 0 1 19 5.25V9H6.75a.75.75 0 0 0 0 1.5h3A3.73 3.73 0 0 0 9 12.75v6.5q0 .386.075.75H5.25A3.25 3.25 0 0 1 2 16.75zm4 1.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 0-1.5h-7.5a.75.75 0 0 0-.75.75m4 6A2.75 2.75 0 0 1 12.75 10h6.5A2.75 2.75 0 0 1 22 12.75v.75H10zM10 15h12v4.25A2.75 2.75 0 0 1 19.25 22h-6.5A2.75 2.75 0 0 1 10 19.25z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledCalendarTemplate',
  mixins: [icon]
};
</script>
