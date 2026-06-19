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
    <path :fill="fill" :fill-opacity="opacity" d="M2.75 2a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zM13 6.25A2.25 2.25 0 0 1 15.25 4h3.5A2.25 2.25 0 0 1 21 6.25V9.5h-8zM13 11v4h8v-4zm8 5.5h-8v3.25A2.25 2.25 0 0 0 15.25 22h3.5A2.25 2.25 0 0 0 21 19.75zM3.75 10a.75.75 0 0 1 .75.75v3c0 .69.56 1.25 1.25 1.25h2.69l-1.22-1.22a.75.75 0 1 1 1.06-1.06l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06-1.06l1.22-1.22H5.75A2.75 2.75 0 0 1 3 13.75v-3a.75.75 0 0 1 .75-.75" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTextArrowDownRightColumn',
  mixins: [icon]
};
</script>
