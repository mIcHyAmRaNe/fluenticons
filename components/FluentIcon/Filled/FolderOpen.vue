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
    <path :fill="fill" :fill-opacity="opacity" d="M5.25 3A3.25 3.25 0 0 0 2 6.25v8.912l2.045-3.541a4.25 4.25 0 0 1 3.68-2.125H20V8.75a3.25 3.25 0 0 0-3.25-3.25h-5.19L9.72 3.659A2.25 2.25 0 0 0 8.129 3zm2.475 7.996h13.02c1.732 0 2.814 1.875 1.948 3.375l-3.036 5.258a2.75 2.75 0 0 1-2.382 1.375H4.255c-1.731 0-2.814-1.875-1.948-3.375l3.037-5.258a2.75 2.75 0 0 1 2.381-1.375" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledFolderOpen',
  mixins: [icon]
};
</script>
