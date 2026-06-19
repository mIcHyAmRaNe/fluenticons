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
    <path :fill="fill" :fill-opacity="opacity" d="M3 17h9v2H3a1 1 0 0 1-.117-1.993zm13.75-6h.344v-.002L3 11l-.117.007A1 1 0 0 0 3 13l11.104-.001A2.75 2.75 0 0 1 16.75 11M21 5H3l-.117.007A1 1 0 0 0 3 7h18l.117-.007A1 1 0 0 0 21 5m-6 10h-.5a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 1.5 1.5h8a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.5-1.5H22v-1.25A1.75 1.75 0 0 0 20.25 12h-3.5A1.75 1.75 0 0 0 15 13.75zm1.5-1.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25V15h-4z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledNavigationBriefcase',
  mixins: [icon]
};
</script>
