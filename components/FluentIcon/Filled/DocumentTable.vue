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
    <path :fill="fill" :fill-opacity="opacity" d="M8.5 13.25a.25.25 0 0 1 .25-.25H10v1.5H8.5zm0 2.75H10v1.5H8.75a.25.25 0 0 1-.25-.25zm7 1.25V16h-4v1.5h3.75a.25.25 0 0 0 .25-.25m-4-4.25v1.5h4v-1.25a.25.25 0 0 0-.25-.25zm.5-5V2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10h-6a2 2 0 0 1-2-2m-3.25 3.5h6.5c.966 0 1.75.784 1.75 1.75v4A1.75 1.75 0 0 1 15.25 19h-6.5A1.75 1.75 0 0 1 7 17.25v-4c0-.966.784-1.75 1.75-1.75M13.5 8V2.5l6 6H14a.5.5 0 0 1-.5-.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledDocumentTable',
  mixins: [icon]
};
</script>
