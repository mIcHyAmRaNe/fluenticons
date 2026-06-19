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
    <path :fill="fill" :fill-opacity="opacity" d="M12.707 2.293a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 1.414 1.414L11 5.414V15a1 1 0 1 0 2 0V5.414l1.293 1.293a1 1 0 1 0 1.414-1.414zM4.5 15A7.5 7.5 0 0 1 10 7.77v2.105A5.502 5.502 0 0 0 12 20.5a5.5 5.5 0 0 0 2-10.625V7.77A7.5 7.5 0 1 1 4.5 15m3 0a4.5 4.5 0 0 1 2.5-4.032V13.5a2.5 2.5 0 1 0 4 0v-2.532A4.5 4.5 0 1 1 7.5 15" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledDoubleTapSwipeUp',
  mixins: [icon]
};
</script>
