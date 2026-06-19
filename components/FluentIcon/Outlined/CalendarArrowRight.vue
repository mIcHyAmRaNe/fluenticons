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
    <path :fill="fill" :fill-opacity="opacity" d="M21 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h6.022a6.5 6.5 0 0 1-.709-1.5H6A1.5 1.5 0 0 1 4.5 18V8.5h15v2.813a6.5 6.5 0 0 1 1.5.709zM6 4.5h12A1.5 1.5 0 0 1 19.5 6v1h-15V6A1.5 1.5 0 0 1 6 4.5m17 13a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-5.354-2.146a.5.5 0 0 1 .708-.708l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L19.293 18H14.5a.5.5 0 0 1 0-1h4.793z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedCalendarArrowRight',
  mixins: [icon]
};
</script>
