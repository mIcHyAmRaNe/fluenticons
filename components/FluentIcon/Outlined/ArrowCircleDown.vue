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
    <path :fill="fill" :fill-opacity="opacity" d="m16.53 11.72-.084-.073a.75.75 0 0 0-.977.073l-2.72 2.72V7.75l-.007-.102A.75.75 0 0 0 12 7l-.101.006a.75.75 0 0 0-.649.744v6.691L8.53 11.72l-.084-.072a.75.75 0 0 0-.977 1.133l4 4.001.084.073a.75.75 0 0 0 .977-.073l4-4 .073-.085a.75.75 0 0 0-.072-.976M1.999 12c0 5.523 4.477 10 10 10s10-4.477 10-10-4.477-10-10-10-10 4.477-10 10m18.5 0a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedArrowCircleDown',
  mixins: [icon]
};
</script>
