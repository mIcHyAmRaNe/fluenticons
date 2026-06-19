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
    <path :fill="fill" :fill-opacity="opacity" d="M13.378 3.026A9.004 9.004 0 1 1 5.475 17.13a.675.675 0 0 1 .329-1.019c3.391-1.214 5.208-2.62 6.262-4.633 1.11-2.118 1.396-4.438.62-7.619a.675.675 0 0 1 .692-.834m-2.384.627L11 3.75V9a2 2 0 1 1-1.499-1.937l-.001-2.3L6 5.829V10a2 2 0 1 1-1.499-1.937L4.5 5.273a.75.75 0 0 1 .43-.679l.102-.039 5-1.521a.75.75 0 0 1 .962.619" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledSleep',
  mixins: [icon]
};
</script>
