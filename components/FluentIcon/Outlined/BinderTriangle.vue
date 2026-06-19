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
    <path :fill="fill" :fill-opacity="opacity" d="M3 4.25A2.25 2.25 0 0 1 5.25 2h9.5A2.25 2.25 0 0 1 17 4.25v2.3l-1.5 1.875V4.25a.75.75 0 0 0-.75-.75h-9.5a.75.75 0 0 0-.75.75V5h.75a.75.75 0 0 1 0 1.5H4.5v3.25h.75a.75.75 0 0 1 0 1.5H4.5v3.25h.75a.75.75 0 0 1 0 1.5H4.5v.75c0 .414.336.75.75.75h2.989l-1.2 1.5H5.25A2.25 2.25 0 0 1 3 16.75V16h-.75a.75.75 0 0 1 0-1.5H3v-3.25h-.75a.75.75 0 0 1 0-1.5H3V6.5h-.75a.75.75 0 0 1 0-1.5H3zM7.75 7a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zM18 13.126a.5.5 0 0 0-.89-.312l-4.298 5.374a.5.5 0 0 0 .39.812h4.048a.75.75 0 0 0 .75-.75zm-1.46 4.415h-1.342l1.343-1.68zM21 6.003c0-.946-1.19-1.363-1.78-.625l-12 14.997A1 1 0 0 0 8 21.999h10.75A2.25 2.25 0 0 0 21 19.75zm-1.5 1.425v12.321a.75.75 0 0 1-.75.75H9.04z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedBinderTriangle',
  mixins: [icon]
};
</script>
