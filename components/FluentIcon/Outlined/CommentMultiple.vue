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
    <path :fill="fill" :fill-opacity="opacity" d="M5.006 5.007A4 4 0 0 1 5.25 5h10.5A4.25 4.25 0 0 1 20 9.25v6.5q0 .123-.007.243A3.25 3.25 0 0 0 21.5 13.25v-4a5.75 5.75 0 0 0-5.75-5.75h-8a3.25 3.25 0 0 0-2.744 1.507M5.25 6A3.25 3.25 0 0 0 2 9.25v6.5a3.25 3.25 0 0 0 3 3.24v1.762a1.25 1.25 0 0 0 1.99 1.008L10.748 19h5.002A3.25 3.25 0 0 0 19 15.75v-6.5A3.25 3.25 0 0 0 15.75 6zM3.5 9.25c0-.966.784-1.75 1.75-1.75h10.5c.966 0 1.75.784 1.75 1.75v6.5a1.75 1.75 0 0 1-1.75 1.75h-5.494L6.5 20.258V17.5H5.25a1.75 1.75 0 0 1-1.75-1.75z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedCommentMultiple',
  mixins: [icon]
};
</script>
