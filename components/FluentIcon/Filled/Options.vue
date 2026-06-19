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
    <path :fill="fill" :fill-opacity="opacity" d="M8.75 14.5a3.25 3.25 0 0 1 3.163 2.5h9.337a.75.75 0 0 1 .102 1.493l-.102.007-9.337.001a3.251 3.251 0 0 1-6.326 0L2.75 18.5a.75.75 0 0 1-.102-1.493L2.75 17h2.837a3.25 3.25 0 0 1 3.163-2.5M15.25 3a3.25 3.25 0 0 1 3.163 2.5h2.837a.75.75 0 0 1 .102 1.493L21.25 7l-2.837.001a3.252 3.252 0 0 1-6.326 0L2.75 7a.75.75 0 0 1-.102-1.493L2.75 5.5h9.337A3.25 3.25 0 0 1 15.25 3" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledOptions',
  mixins: [icon]
};
</script>
