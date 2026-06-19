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
    <path :fill="fill" :fill-opacity="opacity" d="M5.25 5A3.25 3.25 0 0 0 2 8.25v7.5A3.25 3.25 0 0 0 5.25 19H11v-1.5H5.25a1.75 1.75 0 0 1-1.75-1.75V11H22V8.25A3.25 3.25 0 0 0 18.75 5zM20.5 8.25V9.5h-17V8.25c0-.966.784-1.75 1.75-1.75h13.5c.966 0 1.75.784 1.75 1.75m-7 6.5h.5v-1c0-.966.784-1.75 1.75-1.75h3.5c.966 0 1.75.784 1.75 1.75v1h.5a1.5 1.5 0 0 1 1.5 1.5V18h-3v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-3v-1.75a1.5 1.5 0 0 1 1.5-1.5m2.25-1.25a.25.25 0 0 0-.25.25v1h4v-1a.25.25 0 0 0-.25-.25zm3.25 6V19h-3v.5a.5.5 0 0 1-1 0V19h-3v2.5a1.5 1.5 0 0 0 1.5 1.5h8a1.5 1.5 0 0 0 1.5-1.5V19h-3v.5a.5.5 0 0 1-1 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedCreditCardToolbox',
  mixins: [icon]
};
</script>
