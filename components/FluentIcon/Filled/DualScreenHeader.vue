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
    <path :fill="fill" :fill-opacity="opacity" d="M21.995 7.997V18.25a1.75 1.75 0 0 1-1.75 1.75h-7.247q-.13 0-.255-.019l-.001-11.984zm-10.752 0V19.98q-.12.017-.245.017H3.75A1.75 1.75 0 0 1 2 18.247V7.997zm-.245-3.995q.124 0 .246.017l-.001 2.978H2V5.752c0-.967.784-1.75 1.75-1.75zm9.248.002c.966 0 1.75.784 1.75 1.75l-.001 1.243h-9.253V4.023q.127-.019.256-.019z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledDualScreenHeader',
  mixins: [icon]
};
</script>
