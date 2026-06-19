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
    <path :fill="fill" :fill-opacity="opacity" d="M18.497 4.627 18.5 6.75V15h-1V4.25A2.25 2.25 0 0 0 15.25 2h-9A2.25 2.25 0 0 0 4 4.25v4.129c-.603.404-1 1.09-1 1.871v8.5A3.25 3.25 0 0 0 6.25 22h2.367q.069.004.139.004h6.494q.102 0 .202-.004h2.298A3.25 3.25 0 0 0 21 18.75v-1.5c0-.78-.397-1.467-1-1.871V6.75a2.25 2.25 0 0 0-1.503-2.123M5.5 8V4.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75V15h-.096a.75.75 0 0 1-.55-.24l-5.61-6.04A2.25 2.25 0 0 0 8.097 8zm-1 2.25a.75.75 0 0 1 .75-.75h2.846a.75.75 0 0 1 .55.24l5.61 6.041a2.25 2.25 0 0 0 1.648.719h2.846a.75.75 0 0 1 .75.75v1.5a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedDocumentFolder',
  mixins: [icon]
};
</script>
