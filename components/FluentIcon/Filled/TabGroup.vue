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
    <path :fill="fill" :fill-opacity="opacity" d="M4.75 5A2.75 2.75 0 0 0 2 7.75v5.5A2.75 2.75 0 0 0 4.75 16h12.5A2.75 2.75 0 0 0 20 13.25v-5.5A2.75 2.75 0 0 0 17.25 5zm1.75 5.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75m.747 8a2.75 2.75 0 0 1-2.45-1.5H17.25A3.75 3.75 0 0 0 21 13.25V7.8a2.75 2.75 0 0 1 1.497 2.45v3a5.25 5.25 0 0 1-5.25 5.25z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTabGroup',
  mixins: [icon]
};
</script>
