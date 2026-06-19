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
    <path :fill="fill" :fill-opacity="opacity" d="M11 17.5a6.47 6.47 0 0 1 1.022-3.5h-7.77a2.25 2.25 0 0 0-2.248 2.248v.92c0 .572.178 1.13.51 1.596C4.056 20.928 6.58 22 10 22q1.397 0 2.592-.238A6.48 6.48 0 0 1 11 17.5M10 2.004a5 5 0 1 1 0 10 5 5 0 0 1 0-10M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-6.646-2.146a.5.5 0 0 0-.708-.708l-1.5 1.5a.5.5 0 0 0 0 .708l1.5 1.5a.5.5 0 0 0 .708-.708L15.707 17h2.043A2.25 2.25 0 0 1 20 19.25v.25a.5.5 0 0 0 1 0v-.25A3.25 3.25 0 0 0 17.75 16h-2.043z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledPersonArrowBack',
  mixins: [icon]
};
</script>
