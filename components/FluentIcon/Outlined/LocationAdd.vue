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
    <path :fill="fill" :fill-opacity="opacity" d="M8 10.75a.75.75 0 0 1 .75-.75h2.5V7.75a.75.75 0 0 1 1.5 0V10h2.5a.75.75 0 0 1 0 1.5h-2.5v2.25a.75.75 0 0 1-1.5 0V11.5h-2.5a.75.75 0 0 1-.75-.75M5.843 4.568a8.707 8.707 0 0 1 12.314 12.314l-1.187 1.174q-1.312 1.287-3.406 3.312a2.25 2.25 0 0 1-3.128 0l-3.49-3.396q-.66-.646-1.103-1.09a8.707 8.707 0 0 1 0-12.314m11.254 1.06A7.207 7.207 0 1 0 6.904 15.822L8.39 17.29q1.228 1.201 3.088 3a.75.75 0 0 0 1.043 0l3.395-3.3q.703-.691 1.18-1.168a7.207 7.207 0 0 0 0-10.192" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedLocationAdd',
  mixins: [icon]
};
</script>
