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
    <path :fill="fill" :fill-opacity="opacity" d="M13.875 2C15.601 2 17 3.4 17 5.125V7h1.875C20.601 7 22 8.4 22 10.125v8.75C22 20.601 20.6 22 18.875 22h-8.75A3.125 3.125 0 0 1 7 18.875V17H5.125A3.125 3.125 0 0 1 2 13.875v-8.75C2 3.399 3.4 2 5.125 2zM5.25 3.5A1.75 1.75 0 0 0 3.5 5.25v8.5c0 .966.784 1.75 1.75 1.75h8.5a1.75 1.75 0 0 0 1.75-1.75v-8.5a1.75 1.75 0 0 0-1.75-1.75z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedSquareShadow',
  mixins: [icon]
};
</script>
