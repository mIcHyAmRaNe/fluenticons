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
    <path :fill="fill" :fill-opacity="opacity" d="M18 20.5a.5.5 0 0 0 .5-.5V10H14a2 2 0 0 1-2-2V3.5H6a.5.5 0 0 0-.5.5v5.25a.75.75 0 0 1-1.5 0V4a2 2 0 0 1 2-2h6.172c.515 0 1.047.22 1.413.586l5.829 5.828A2 2 0 0 1 20 9.828V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3.75a.75.75 0 0 1 1.5 0V20a.5.5 0 0 0 .5.5zm-.622-12L13.5 4.621V8a.5.5 0 0 0 .5.5zM2.75 13h2.505l1.557-3.551a.75.75 0 0 1 1.327-.091l.006.01.05.103 2.413 6.027 1.427-2.1a.75.75 0 0 1 .545-.389l.01-.002.107-.007h2a.75.75 0 0 1 .113 1.492l-.01.001-.103.007h-1.554l-1.979 3.094a.75.75 0 0 1-1.306.04l-.005-.009-.05-.101-2.336-5.835-1.035 2.362a.75.75 0 0 1-.564.439l-.012.002-.11.008H2.75a.75.75 0 0 1-.113-1.492l.01-.001z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedDocumentCatchUp',
  mixins: [icon]
};
</script>
