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
    <path :fill="fill" :fill-opacity="opacity" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m-4-7.566-.861-.319a1.75 1.75 0 0 1-1.143-1.641v-.95A1.75 1.75 0 0 1 7.14 9.881l7.501-2.775a1.75 1.75 0 0 1 2.357 1.641v6.5a1.75 1.75 0 0 1-2.357 1.642l-1.434-.531A2.626 2.626 0 0 1 8 15.875zm3.75 1.387v.054a1.125 1.125 0 0 1-2.25 0v-.887z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledMegaphoneCircle',
  mixins: [icon]
};
</script>
