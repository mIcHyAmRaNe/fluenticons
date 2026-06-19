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
    <path :fill="fill" :fill-opacity="opacity" d="M12 4.5a7.5 7.5 0 0 1 7.468 6.803c.545.173 1.06.416 1.532.719V12A9 9 0 0 0 6 5.292V4.25a.75.75 0 0 0-1.5 0v3c0 .414.336.75.75.75h3a.75.75 0 0 0 0-1.5H6.9a7.47 7.47 0 0 1 5.1-2m.81 8.5a6.5 6.5 0 0 1 2.129-1.476.8.8 0 0 0-.189-.024H12.5V7.75a.75.75 0 0 0-1.5 0v4.5c0 .414.336.75.75.75zm-.788 8a6.5 6.5 0 0 1-.719-1.532 7.5 7.5 0 0 1-6.722-8.576c.067-.454-.265-.892-.724-.892a.75.75 0 0 0-.752.623A9 9 0 0 0 12 21zM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7.146-2.354a.5.5 0 0 0-.708.708l1.647 1.646-1.647 1.646a.5.5 0 0 0 .708.708l1.646-1.647 1.646 1.647a.5.5 0 0 0 .708-.708L18.207 17.5l1.647-1.646a.5.5 0 0 0-.708-.708L17.5 16.793z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedHistoryDismiss',
  mixins: [icon]
};
</script>
