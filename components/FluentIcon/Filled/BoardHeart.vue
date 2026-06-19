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
    <path :fill="fill" :fill-opacity="opacity" d="M11.5 21.001v-1.93l-.196-.203c-1.739-1.8-1.739-4.704 0-6.504q.096-.1.195-.19V9.499H3v8.253l.005.184a3.25 3.25 0 0 0 3.245 3.066zM21.501 5.748v5.73a4.4 4.4 0 0 0-4.501.306 4.4 4.4 0 0 0-4-.523V2.499h5.251a3.25 3.25 0 0 1 3.245 3.066zM11.5 17.481a3.73 3.73 0 0 1 0-3.73c.143-.246.318-.48.523-.692a3.5 3.5 0 0 1 .976-.713 3.4 3.4 0 0 1 3.965.713l.036.038.036-.038q.104-.106.212-.202a3.4 3.4 0 0 1 4.252-.211q.252.18.477.413c1.364 1.412 1.364 3.702 0 5.114l-4.442 4.598a.74.74 0 0 1-1.07 0l-4.442-4.598a3.6 3.6 0 0 1-.523-.692M11.499 8l.001-5.5H6.25A3.25 3.25 0 0 0 3 5.747v2.251z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledBoardHeart',
  mixins: [icon]
};
</script>
