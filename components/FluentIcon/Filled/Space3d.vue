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
    <path :fill="fill" :fill-opacity="opacity" d="M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25V15h-.812l-2.25-3H19.5V6.25a1.75 1.75 0 0 0-1.75-1.75H6.25A1.75 1.75 0 0 0 4.5 6.25V12h1.563l-2.25 3H3zM15.692 16.5H21v1.25A3.25 3.25 0 0 1 17.75 21h-.667l-.367-1.224zm2.62-1.5h-3.089l-.937-3h1.777zm-7.789 0h3.129l-.938-3h-1.44zm3.598 1.5h-3.973L9.023 21h6.494l-.234-.78zM9.727 12l-.75 3h-3.29l2.25-3zm-1.125 4.5H3v1.25A3.25 3.25 0 0 0 6.25 21h1.227z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledSpace3d',
  mixins: [icon]
};
</script>
