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
    <path :fill="fill" :fill-opacity="opacity" d="M19.107 9.168a4.5 4.5 0 1 1 1.06-1.06l2.613 2.612a.75.75 0 1 1-1.06 1.06zM19.5 5.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0m-.5 4.976v10.769a.75.75 0 0 1-1.188.609l-5.81-4.181-5.812 4.18a.75.75 0 0 1-1.188-.608V6.249a3.25 3.25 0 0 1 3.25-3.25H11.6a5.5 5.5 0 0 0 7.35 7.426z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledBookmarkSearch',
  mixins: [icon]
};
</script>
