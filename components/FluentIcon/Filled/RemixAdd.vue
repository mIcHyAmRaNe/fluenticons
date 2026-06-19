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
    <path :fill="fill" :fill-opacity="opacity" d="M2 3a1 1 0 0 1 1-1h9c5.523 0 10 4.477 10 10a9.97 9.97 0 0 1-2.859 7h-3.265A8.003 8.003 0 0 0 12 4H3a1 1 0 0 1-1-1m8.182 18.835q.886.163 1.818.165h9a1 1 0 1 0 0-2h-9a7.99 7.99 0 0 1-6.54-3.391A7.96 7.96 0 0 1 4 12a8 8 0 0 1 4.124-7H4.859A9.97 9.97 0 0 0 2 12c0 4.902 3.527 8.98 8.182 9.835M12 8a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H9a1 1 0 1 1 0-2h2V9a1 1 0 0 1 1-1" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledRemixAdd',
  mixins: [icon]
};
</script>
