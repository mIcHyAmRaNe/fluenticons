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
    <path :fill="fill" :fill-opacity="opacity" d="M15.75 19H11.5v-7.5H19v4.25A3.25 3.25 0 0 1 15.75 19M19 10h-7.5V2h4.25A3.25 3.25 0 0 1 19 5.25zm-9 0V2H5.25A3.25 3.25 0 0 0 2 5.25V10zm0 9v-7.5H2v4.25A3.25 3.25 0 0 0 5.25 19zm-1.75 3a3.25 3.25 0 0 1-3-2h10.502a4.25 4.25 0 0 0 4.25-4.25V5.25a3.25 3.25 0 0 1 1.999 3v8.25a5.5 5.5 0 0 1-5.5 5.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTableSimpleMultiple',
  mixins: [icon]
};
</script>
