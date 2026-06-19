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
    <path :fill="fill" :fill-opacity="opacity" d="M10.475 19.5h4.775A1.75 1.75 0 0 0 17 17.75v-4A1.75 1.75 0 0 0 15.25 12h-6.5c-.24 0-.47.049-.68.137A5.5 5.5 0 0 0 5.5 11.5a5.5 5.5 0 0 0-1.5.207V4.5a2 2 0 0 1 2-2h6v6a2 2 0 0 0 2 2h6v10a2 2 0 0 1-2 2h-5.018a1.74 1.74 0 0 0-.495-.987zm5.025-3v1.25a.25.25 0 0 1-.25.25H11.5v-1.5zm-4-1.5v-1.5h3.75a.25.25 0 0 1 .25.25V15zm2-12v5.5a.5.5 0 0 0 .5.5h5.5zM9.168 19.607a4.5 4.5 0 1 0-1.06 1.06l2.612 2.613a.75.75 0 1 0 1.06-1.06zM8.5 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledDocumentTableSearch',
  mixins: [icon]
};
</script>
