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
    <path :fill="fill" :fill-opacity="opacity" d="M7 2a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.5h-4.75a1.75 1.75 0 0 1-1.75-1.75V2zm1.75 3h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1 0-1.5M8 8.75A.75.75 0 0 1 8.75 8h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 8 8.75M8.75 11h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1 0-1.5M14 2.002 19 7h-4.75a.25.25 0 0 1-.25-.25zM2.75 15a.75.75 0 0 1 .75.75v1.75a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-1.75a.75.75 0 0 1 1.5 0v1.75a4.5 4.5 0 0 1-4.5 4.5h-11A4.5 4.5 0 0 1 2 17.5v-1.75a.75.75 0 0 1 .75-.75M12.5 2H14Z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledDocumentQueue',
  mixins: [icon]
};
</script>
