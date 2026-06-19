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
    <path :fill="fill" :fill-opacity="opacity" d="M21.25 10.5a.75.75 0 0 0-.75.75v1.19l-4.22-4.22a.75.75 0 1 0-1.06 1.06l4.22 4.22h-1.19a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75m-5.322-7.429a.75.75 0 0 0-1-.999l-9.498 4.5a.75.75 0 1 0 .642 1.356l2.575-1.22 2.645 2.645-1.22 2.576a.75.75 0 0 0 1.356.642zm-3.954 4.843-1.887-1.888 3.586-1.699zM15 18.25a.75.75 0 0 0-1.5 0v1.19L3.28 9.22a.75.75 0 1 0-1.06 1.06L12.44 20.5h-1.19a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 .75-.75z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTextDirectionRotate45Right',
  mixins: [icon]
};
</script>
