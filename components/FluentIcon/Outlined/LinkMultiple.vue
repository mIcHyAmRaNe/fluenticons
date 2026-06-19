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
    <path :fill="fill" :fill-opacity="opacity" d="M6.25 4a5.25 5.25 0 0 0-1.703 10.218c.06-.51.181-1.002.353-1.468A3.751 3.751 0 0 1 6.25 5.5h6.5a3.75 3.75 0 1 1 0 7.5h-1a.75.75 0 0 0 0 1.5h1a5.25 5.25 0 1 0 0-10.5zm13.14 6.196c-.092.5-.243.98-.443 1.434A3.502 3.502 0 0 1 18 18.5h-7a3.5 3.5 0 1 1 0-7h1.25a.75.75 0 0 0 0-1.5H11a5 5 0 0 0 0 10h7a5 5 0 0 0 1.39-9.804" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedLinkMultiple',
  mixins: [icon]
};
</script>
