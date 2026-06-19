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
    <path :fill="fill" :fill-opacity="opacity" d="M12.53 21.78a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V8.75a.75.75 0 0 1 1.5 0v10.69l2.22-2.22a.75.75 0 1 1 1.06 1.06zM5 9a7 7 0 0 0 5.25 6.78v-1.564A5.502 5.502 0 0 1 12 3.5a5.5 5.5 0 0 1 1.75 10.716v1.564A7 7 0 1 0 5 9m2.5 0a4.5 4.5 0 0 0 2.75 4.147v-1.71a3 3 0 1 1 3.5 0v1.71A4.501 4.501 0 1 0 7.5 9" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedDoubleTapSwipeDown',
  mixins: [icon]
};
</script>
