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
    <path :fill="fill" :fill-opacity="opacity" d="M9.5 2c.645 0 1.245.188 1.75.512v18.733A3.74 3.74 0 0 1 8.994 22c-1.726 0-3.195-1.187-3.627-2.8A4 4 0 0 1 2 15.25V15c0-1.562.896-2.914 2.201-3.572a3.876 3.876 0 0 1 2.081-6.633A3.25 3.25 0 0 1 9.5 2m5 0a3.25 3.25 0 0 1 3.218 2.795 3.876 3.876 0 0 1 2.08 6.633A4 4 0 0 1 22 15v.25a4 4 0 0 1-3.367 3.95c-.431 1.613-1.901 2.8-3.627 2.8a3.74 3.74 0 0 1-2.256-.755V2.512A3.23 3.23 0 0 1 14.5 2" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledBrain',
  mixins: [icon]
};
</script>
