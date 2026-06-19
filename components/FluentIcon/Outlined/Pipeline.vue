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
    <path :fill="fill" :fill-opacity="opacity" d="M2 6.25A2.25 2.25 0 0 1 6.486 6h11.028A2.25 2.25 0 0 1 22 6.25v10.5a2.25 2.25 0 0 1-4.486.25H6.486A2.25 2.25 0 0 1 2 16.75zm3 0a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0zm1.5 9.25h11v-8h-11zm14-9.25a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedPipeline',
  mixins: [icon]
};
</script>
