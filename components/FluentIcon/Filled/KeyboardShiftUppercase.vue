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
    <path :fill="fill" :fill-opacity="opacity" d="M13.32 2.603a1.75 1.75 0 0 0-2.643 0l-8.245 9.504c-.983 1.133-.179 2.897 1.321 2.897H7v2.247c0 .966.784 1.75 1.75 1.75h6.5A1.75 1.75 0 0 0 17 17.25v-2.247h3.245c1.5 0 2.305-1.764 1.322-2.897zM7.75 20.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledKeyboardShiftUppercase',
  mixins: [icon]
};
</script>
