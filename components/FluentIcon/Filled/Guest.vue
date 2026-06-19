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
    <path :fill="fill" :fill-opacity="opacity" d="M19.995 4.096A2.25 2.25 0 0 0 17.75 2H6.25l-.154.005A2.25 2.25 0 0 0 4 4.25v15.505l.005.154a2.25 2.25 0 0 0 2.245 2.096h11.5l.154-.006A2.25 2.25 0 0 0 20 19.755V4.25zM10 5.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75m4.75 9.246c.69 0 1.25.56 1.25 1.25v.499c0 1.846-1.472 2.754-4 2.754s-4-.909-4-2.756v-.497c0-.69.56-1.25 1.25-1.25zm-2.75-6a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledGuest',
  mixins: [icon]
};
</script>
