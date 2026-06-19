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
    <path :fill="fill" :fill-opacity="opacity" d="M20.245 4.002c.967 0 1.75.784 1.75 1.75v12.496a1.75 1.75 0 0 1-1.75 1.75h-7.247q-.13 0-.256-.019V4.021q.125-.018.256-.019zM10.998 4q.125 0 .245.017v15.961a2 2 0 0 1-.245.017H3.75A1.75 1.75 0 0 1 2 18.245V5.75C2 4.784 2.784 4 3.75 4zM9.243 15.499H7.74l-.102.007a.75.75 0 0 0 0 1.486l.102.007h1.502l.102-.007a.75.75 0 0 0 0-1.486zm6.996 0h-1.5l-.102.007a.75.75 0 0 0 0 1.486l.102.007h1.5l.101-.007a.75.75 0 0 0 0-1.486z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledDualScreen',
  mixins: [icon]
};
</script>
