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
    <path :fill="fill" :fill-opacity="opacity" d="M5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v12.5A2.75 2.75 0 0 1 18.25 21H5.75A2.75 2.75 0 0 1 3 18.25V5.75A2.75 2.75 0 0 1 5.75 3M5 5.75v.543L6.293 5H5.75a.75.75 0 0 0-.75.75m0 1.957v2.586L10.293 5H7.707zM11.707 5 5 11.707v2.586L14.293 5zm4 0L5 15.707v2.543l.001.042 13.29-13.29L18.25 5zM19 5.708 5.71 18.998q.02.002.041.002h2.543L19 8.293V5.75zm.001 4L9.707 19h2.586L19 12.293zm0 4L13.707 19h2.586L19 16.293zm0 4L17.707 19h.543a.75.75 0 0 0 .75-.75z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTabInPrivate',
  mixins: [icon]
};
</script>
