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
    <path :fill="fill" :fill-opacity="opacity" d="M11.5 3.5c.966 0 1.75.784 1.75 1.75v4.437l4.712-5.122a1.75 1.75 0 0 1 2.576 2.37L15.878 12l4.66 5.065a1.75 1.75 0 0 1-2.576 2.37l-4.712-5.122v4.437a1.75 1.75 0 1 1-3.5 0v-4.437l-4.712 5.122a1.75 1.75 0 0 1-2.576-2.37L7.122 12l-4.66-5.065a1.75 1.75 0 0 1 2.576-2.37L9.75 9.687V5.25c0-.966.784-1.75 1.75-1.75" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTextBold',
  mixins: [icon]
};
</script>
