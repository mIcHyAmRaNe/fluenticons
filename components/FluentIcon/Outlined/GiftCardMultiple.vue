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
    <path :fill="fill" :fill-opacity="opacity" d="M5 4a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3h11.5a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zM3.5 7A1.5 1.5 0 0 1 5 5.5h3v1.208A2.5 2.5 0 0 0 4.708 10H3.5zm6-.292V5.5h7A1.5 1.5 0 0 1 18 7v3h-5.208A2.5 2.5 0 0 0 9.5 6.708m1.06 4.792H18v3a1.5 1.5 0 0 1-1.5 1.5h-7v-3.44l1.72 1.72a.75.75 0 1 0 1.06-1.06zM8 12.56V16H5a1.5 1.5 0 0 1-1.5-1.5v-3h3.44l-1.72 1.72a.75.75 0 1 0 1.06 1.06zM11.5 9a1 1 0 0 1-1 1h-1V9a1 1 0 0 1 2 0M7 8a1 1 0 0 1 1 .996V10H7a1 1 0 1 1 0-2m.5 12a3 3 0 0 1-2.599-1.5H16.5a4 4 0 0 0 4-4V6.901A3 3 0 0 1 22 9.5v5a5.5 5.5 0 0 1-5.5 5.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedGiftCardMultiple',
  mixins: [icon]
};
</script>
