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
    <path :fill="fill" :fill-opacity="opacity" d="M7 2a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h4.174A6.5 6.5 0 0 1 11 17.5H7a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5h5.5v3.25c0 .966.784 1.75 1.75 1.75h3.25V11q.776.002 1.5.174V7.768a2 2 0 0 0-.586-1.414l-3.768-3.768A2 2 0 0 0 13.232 2zm7 4.75V4.06L16.94 7h-2.69a.25.25 0 0 1-.25-.25M6.5 20.5h5.232A6.5 6.5 0 0 0 12.81 22H6.5A4.5 4.5 0 0 1 2 17.5v-1.75a.75.75 0 0 1 1.5 0v1.75a3 3 0 0 0 3 3M8 5.75A.75.75 0 0 1 8.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 8 5.75M8.75 8a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zm0 3a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-5 .5.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedDocumentQueueAdd',
  mixins: [icon]
};
</script>
