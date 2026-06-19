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
    <path :fill="fill" :fill-opacity="opacity" d="M11.749 6c1.358 0 1.952.898 2 2.326l.002.189V11l2.872.422q.168.025.332.07a2.75 2.75 0 0 1 1.96 3.214l-.041.17-1.227 4.442a1.75 1.75 0 0 1-1.293 1.239l-.145.027-3.061.44a1.75 1.75 0 0 1-1.825-.973l-.06-.14-.217-.572a4.1 4.1 0 0 0-1.177-1.674l-.202-.163-1.597-1.2a2 2 0 0 0-.266-.166l-.143-.064-2.195-.868a.75.75 0 0 1-.473-.66c-.036-.722.49-1.246 1.421-1.712.72-.36 1.728-.33 3.066.043l.272.08v-4.45c0-1.538.579-2.506 1.996-2.506m0-3.5a5.75 5.75 0 0 1 5.299 7.987l.173.042a4 4 0 0 0-.453-.095l-1.267-.186a4.25 4.25 0 1 0-6.748 1.018v.415c-.614-.109-1.169-.136-1.672-.072A5.75 5.75 0 0 1 11.749 2.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTapSingle',
  mixins: [icon]
};
</script>
