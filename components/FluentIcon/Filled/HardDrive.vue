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
    <path :fill="fill" :fill-opacity="opacity" d="M7.44 4a2.25 2.25 0 0 0-2.025 1.27L2.73 10.821c.465-.206.98-.321 1.521-.321h15.5a3.7 3.7 0 0 1 1.52.321L18.586 5.27A2.25 2.25 0 0 0 16.559 4zm12.31 8A2.25 2.25 0 0 1 22 14.25v2.5A2.25 2.25 0 0 1 19.75 19H4.25A2.25 2.25 0 0 1 2 16.75v-2.5A2.25 2.25 0 0 1 4.25 12zm-1.25 4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledHardDrive',
  mixins: [icon]
};
</script>
