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
    <path :fill="fill" :fill-opacity="opacity" d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l2.788 2.788a3 3 0 0 0-.005.181v14.996a.75.75 0 0 0 1.188.609L12 17.673l5.812 4.18A.75.75 0 0 0 19 21.246v-1.183l1.718 1.718a.75.75 0 0 0 1.061-1.06zm14.221 16.342v1.22L12.44 16.14a.75.75 0 0 0-.876 0l-5.061 3.642V7.563zm0-12.313v8.07l1.5 1.5V6.25A3.25 3.25 0 0 0 15.751 3H8.253a3.23 3.23 0 0 0-1.633.44l1.133 1.13a1.8 1.8 0 0 1 .5-.072h7.498c.967 0 1.75.784 1.75 1.75" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedBookmarkOff',
  mixins: [icon]
};
</script>
