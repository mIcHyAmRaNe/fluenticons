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
    <path :fill="fill" :fill-opacity="opacity" d="M2 21.5V3a1 1 0 0 1 2 0v.955h16.978a1.023 1.023 0 0 1 0 2.045H4v15.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5m3-14a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5v7.75A3.75 3.75 0 0 1 16.25 19h-7.5A3.75 3.75 0 0 1 5 15.25zm4.35 4.2a1 1 0 0 0-.35.76v3.04a.5.5 0 0 0 .5.5h1.75a.25.25 0 0 0 .25-.25V14.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1.25c0 .138.112.25.25.25h1.75a.5.5 0 0 0 .5-.5v-3.04a1 1 0 0 0-.35-.76l-2.825-2.42a.5.5 0 0 0-.65 0z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledRealEstate',
  mixins: [icon]
};
</script>
