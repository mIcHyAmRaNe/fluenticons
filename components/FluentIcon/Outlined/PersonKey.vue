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
    <path :fill="fill" :fill-opacity="opacity" d="M15 15.5c0-.526.09-1.031.256-1.5H6.253a2.25 2.25 0 0 0-2.25 2.249v.577c0 .893.32 1.756.9 2.435C6.297 20.896 8.344 21.793 11 21.97v-1.055q0-.226.05-.445c-2.248-.157-3.904-.89-5.007-2.182a2.25 2.25 0 0 1-.54-1.46v-.578a.75.75 0 0 1 .75-.75zM12 2.004a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M19.5 19a3.5 3.5 0 1 0-3.387-2.613l-3.82 3.82a1 1 0 0 0-.293.707V22.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V22h1a.5.5 0 0 0 .5-.5v-1h1a.5.5 0 0 0 .5-.5v-1zm.5-5a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedPersonKey',
  mixins: [icon]
};
</script>
