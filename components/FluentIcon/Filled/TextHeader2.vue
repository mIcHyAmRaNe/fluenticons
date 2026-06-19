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
    <path :fill="fill" :fill-opacity="opacity" d="M11 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0v-5H4v5a1 1 0 1 1-2 0V6a1 1 0 0 1 2 0v5h6V6a1 1 0 0 1 1-1m6.75-.5A4.25 4.25 0 0 1 22 8.75l-.007.233c-.064 1.152-.595 2.07-1.259 2.823-.684.776-1.586 1.458-2.365 2.073-1.325 1.045-2.344 1.948-2.715 3.121H21a1 1 0 1 1 0 2h-6.5a1 1 0 0 1-1-1c0-2.797 2.058-4.451 3.63-5.691.847-.667 1.57-1.219 2.104-1.826.448-.507.699-.984.754-1.506L20 8.75a2.25 2.25 0 0 0-4.44-.52 1 1 0 0 1-1.947-.46l.046-.174A4.25 4.25 0 0 1 17.75 4.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTextHeader2',
  mixins: [icon]
};
</script>
