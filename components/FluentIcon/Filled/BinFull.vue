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
    <path :fill="fill" :fill-opacity="opacity" d="M17.156 3.381a.75.75 0 0 0-.812-1.262l-14 9A.75.75 0 0 0 2 11.75v7A3.25 3.25 0 0 0 5.25 22h13.5A3.25 3.25 0 0 0 22 18.75v-7a.75.75 0 0 0-.75-.75H21V7.75A1.75 1.75 0 0 0 19.25 6h-3a1.75 1.75 0 0 0-1.75 1.75v.75h-3.25a1.75 1.75 0 0 0-1.75 1.75V11H5.304zm-2.656 6.62v1H11v-.75a.25.25 0 0 1 .25-.25zm5 1H16V7.75a.25.25 0 0 1 .25-.25h3a.25.25 0 0 1 .25.25z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledBinFull',
  mixins: [icon]
};
</script>
