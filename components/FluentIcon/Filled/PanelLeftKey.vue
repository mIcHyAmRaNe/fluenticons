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
    <path :fill="fill" :fill-opacity="opacity" d="M5.25 4A3.25 3.25 0 0 0 2 7.25v9.5A3.25 3.25 0 0 0 5.25 20h5.95q.121-.235.313-.427l1.073-1.073H9.5v-13h9.25c.966 0 1.75.784 1.75 1.75v3.861a4.5 4.5 0 0 1 1.5.647V7.25A3.25 3.25 0 0 0 18.75 4zM23 15.5a3.5 3.5 0 0 1-3.5 3.5H18v1a.5.5 0 0 1-.5.5h-1v1a.5.5 0 0 1-.5.5h-1v.5a.5.5 0 0 1-.5.5h-1.75a.75.75 0 0 1-.75-.75v-1.44a.75.75 0 0 1 .22-.53l3.75-3.75a.8.8 0 0 1 .15-.116A3.5 3.5 0 1 1 23 15.5m-3 .5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledPanelLeftKey',
  mixins: [icon]
};
</script>
