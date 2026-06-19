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
    <path :fill="fill" :fill-opacity="opacity" d="M6.719 5.34a.75.75 0 1 0-.933-1.175A9.98 9.98 0 0 0 2 12a9.98 9.98 0 0 0 3.786 7.835.75.75 0 1 0 .933-1.174A8.48 8.48 0 0 1 3.5 12a8.48 8.48 0 0 1 3.219-6.66m11.495-1.175a.75.75 0 1 0-.933 1.174A8.48 8.48 0 0 1 20.5 12a8.48 8.48 0 0 1-3.219 6.66.75.75 0 0 0 .933 1.175A9.98 9.98 0 0 0 22 12a9.98 9.98 0 0 0-3.786-7.835M7.75 11.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedSubtractParentheses',
  mixins: [icon]
};
</script>
