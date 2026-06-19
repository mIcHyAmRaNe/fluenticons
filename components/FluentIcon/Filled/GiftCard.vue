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
    <path :fill="fill" :fill-opacity="opacity" d="M9.5 19H19a3 3 0 0 0 3-3v-4.5H10.56l1.72 1.72a.75.75 0 1 1-1.06 1.06L9.5 12.56zM8 10V9a1 1 0 1 0-1 1zm1.5-1v1h1a1 1 0 1 0-1-1m0-2.292V4H19a3 3 0 0 1 3 3v3h-9.208A2.5 2.5 0 0 0 9.5 6.708M8 4v2.708A2.5 2.5 0 0 0 4.708 10H2V7a3 3 0 0 1 3-3zm0 8.56V19H5a3 3 0 0 1-3-3v-4.5h4.94l-1.72 1.72a.75.75 0 1 0 1.06 1.06z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledGiftCard',
  mixins: [icon]
};
</script>
