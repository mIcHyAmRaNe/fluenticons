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
    <path :fill="fill" :fill-opacity="opacity" d="M23 5.75A3.75 3.75 0 0 0 19.25 2l-.102.007A.75.75 0 0 0 19.25 3.5l.154.005A2.25 2.25 0 0 1 19.25 8l-.003.005-.102.007a.75.75 0 0 0 .108 1.493V9.5l.2-.005A3.75 3.75 0 0 0 23 5.75m-6.5-3a.75.75 0 0 0-.75-.75l-.2.005a3.75 3.75 0 0 0 .2 7.495l.102-.007A.75.75 0 0 0 15.75 8l-.154-.005A2.25 2.25 0 0 1 15.75 3.5l.102-.007a.75.75 0 0 0 .648-.743m3.5 3a.75.75 0 0 0-.75-.75h-3.5l-.102.007A.75.75 0 0 0 15.75 6.5h3.5l.102-.007A.75.75 0 0 0 20 5.75m-9 0c0-1.025.325-1.974.877-2.75H5.25A3.25 3.25 0 0 0 2 6.25v8.5A3.25 3.25 0 0 0 5.25 18H6v2.75c0 1.03 1.176 1.618 2 1L13 18h5.75A3.25 3.25 0 0 0 22 14.75V9.623a4.73 4.73 0 0 1-2.75.877h-3.5A4.75 4.75 0 0 1 11 5.75" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledCommentLink',
  mixins: [icon]
};
</script>
