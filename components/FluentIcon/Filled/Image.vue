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
    <path :fill="fill" :fill-opacity="opacity" d="m11.558 13.647-.083.07-6.928 6.802A3.24 3.24 0 0 0 6.25 21h11.5c.625 0 1.208-.176 1.703-.481l-6.928-6.801-.093-.078a.75.75 0 0 0-.874.007M21 6.25A3.25 3.25 0 0 0 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25v11.5c0 .627.178 1.213.485 1.71l6.939-6.812.135-.123a2.25 2.25 0 0 1 2.889.006l.128.117 6.939 6.811A3.24 3.24 0 0 0 21 17.75zm-5.75 4.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledImage',
  mixins: [icon]
};
</script>
