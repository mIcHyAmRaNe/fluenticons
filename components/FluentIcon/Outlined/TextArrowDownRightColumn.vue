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
    <path :fill="fill" :fill-opacity="opacity" d="M2 2.75A.75.75 0 0 1 2.75 2h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 2 2.75m0 4A.75.75 0 0 1 2.75 6h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 2 6.75M15.25 4A2.25 2.25 0 0 0 13 6.25v13.5A2.25 2.25 0 0 0 15.25 22h3.5A2.25 2.25 0 0 0 21 19.75V6.25A2.25 2.25 0 0 0 18.75 4zm-.75 2.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75V9.5h-5zm0 4.75h5v4h-5zm5 5.5v3.25a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1-.75-.75V16.5zm-15-5.75a.75.75 0 0 0-1.5 0v3a2.75 2.75 0 0 0 2.75 2.75h2.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 1.06L8.44 15H5.75c-.69 0-1.25-.56-1.25-1.25z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTextArrowDownRightColumn',
  mixins: [icon]
};
</script>
