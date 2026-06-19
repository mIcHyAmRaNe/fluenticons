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
    <path :fill="fill" :fill-opacity="opacity" d="M18.207 21.707a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414l1.293 1.293V7a1 1 0 1 1 2 0v11.586l1.293-1.293a1 1 0 1 1 1.414 1.414zM12.5 7a5 5 0 0 0 3 4.584V9.236a3 3 0 1 1 4 0v2.348A5.001 5.001 0 0 0 17.5 2a5 5 0 0 0-5 5m-8 4.584A5.001 5.001 0 0 1 6.5 2a5 5 0 0 1 2 9.584V9.236a3 3 0 1 0-4 0zm2.707 10.123a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L5.5 18.586V7a1 1 0 0 1 2 0v11.586l1.293-1.293a1 1 0 1 1 1.414 1.414z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledDoubleSwipeDown',
  mixins: [icon]
};
</script>
