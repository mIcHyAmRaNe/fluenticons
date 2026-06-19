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
    <path :fill="fill" :fill-opacity="opacity" d="M16.749 2a2.25 2.25 0 0 1 2.25 2.25v15.5a2.25 2.25 0 0 1-2.25 2.25H11.19a6.5 6.5 0 0 0 1.078-1.5h4.48a.75.75 0 0 0 .75-.75V4.25a.75.75 0 0 0-.75-.75H6.25a.75.75 0 0 0-.75.75v6.826a6.5 6.5 0 0 0-1.5.422V4.25A2.25 2.25 0 0 1 6.25 2zM20 15.002h.75a.75.75 0 0 1 .743.648l.007.102v1.498a.75.75 0 0 1-.648.743L20.75 18H20zm0-4h.75a.75.75 0 0 1 .743.648l.007.102v1.498a.75.75 0 0 1-.648.743L20.75 14H20zm0-4h.75a.75.75 0 0 1 .743.648l.007.102V9.25a.75.75 0 0 1-.648.743L20.75 10H20z" />
    <path :fill="fill" :fill-opacity="opacity" d="M15.249 5a.75.75 0 0 1 .75.75v2.499a.75.75 0 0 1-.75.75H7.75a.75.75 0 0 1-.75-.75V5.75A.75.75 0 0 1 7.75 5zm-.75 1.5H8.5v.999h5.999zM12 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0M7 18l.001 2.503a.5.5 0 1 1-1 0V18H3.496a.5.5 0 0 1 0-1H6v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedNotebookAdd',
  mixins: [icon]
};
</script>
