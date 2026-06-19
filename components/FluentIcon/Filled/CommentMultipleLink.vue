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
    <path :fill="fill" :fill-opacity="opacity" d="M5.25 5a4 4 0 0 0-.244.007A3.25 3.25 0 0 1 7.75 3.5h8a5.75 5.75 0 0 1 5.75 5.75v4q0 .255-.038.5A4.8 4.8 0 0 0 20 12.833V9.25A4.25 4.25 0 0 0 15.75 5zm13 7.5q.383 0 .75.059V9.25A3.25 3.25 0 0 0 15.75 6H5.25A3.25 3.25 0 0 0 2 9.25v6.5a3.25 3.25 0 0 0 3 3.24v1.762a1.25 1.25 0 0 0 1.99 1.008l3.442-2.528A4.75 4.75 0 0 1 14.75 12.5zM22 17.25a3.75 3.75 0 0 0-3.75-3.75l-.102.007A.75.75 0 0 0 18.25 15l.154.005a2.25 2.25 0 0 1-.154 4.495l-.003.005-.102.007a.75.75 0 0 0 .108 1.493V21l.2-.005A3.75 3.75 0 0 0 22 17.25m-6.5-3a.75.75 0 0 0-.75-.75l-.2.005a3.75 3.75 0 0 0 .2 7.495l.102-.007a.75.75 0 0 0-.102-1.493l-.154-.005A2.25 2.25 0 0 1 14.75 15l.102-.007a.75.75 0 0 0 .648-.743m3.5 3a.75.75 0 0 0-.75-.75h-3.5l-.102.007A.75.75 0 0 0 14.75 18h3.5l.102-.007A.75.75 0 0 0 19 17.25" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledCommentMultipleLink',
  mixins: [icon]
};
</script>
