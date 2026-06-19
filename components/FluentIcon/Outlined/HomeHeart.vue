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
    <path :fill="fill" :fill-opacity="opacity" d="M10.55 2.532a2.25 2.25 0 0 1 2.9 0l6.75 5.692c.507.428.8 1.057.8 1.72v1.317A4.4 4.4 0 0 0 19.5 11V9.944a.75.75 0 0 0-.267-.573l-6.75-5.692a.75.75 0 0 0-.966 0L4.767 9.37a.75.75 0 0 0-.267.573v9.31c0 .138.112.25.25.25h7.169l1.449 1.5H4.75A1.75 1.75 0 0 1 3 19.254v-9.31c0-.663.293-1.292.8-1.72zm11.427 15.64c1.364-1.411 1.364-3.7 0-5.113a3.6 3.6 0 0 0-.476-.413 3.406 3.406 0 0 0-4.465.413h-.072A3.41 3.41 0 0 0 13 12.346a3.57 3.57 0 0 0-1.5 1.404c-.81 1.39-.636 3.223.523 4.423l4.442 4.598a.74.74 0 0 0 1.07 0z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedHomeHeart',
  mixins: [icon]
};
</script>
