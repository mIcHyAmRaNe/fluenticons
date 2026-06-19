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
    <path :fill="fill" :fill-opacity="opacity" d="M10.5 2.75c0 .414.336.75.75.75h1.19L8.22 7.72a.75.75 0 0 0 1.06 1.06l4.22-4.22v1.19a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75M3.071 8.072a.75.75 0 0 0-.999 1l4.5 9.498a.75.75 0 0 0 1.356-.642l-1.22-2.575 2.645-2.645 2.576 1.22a.75.75 0 0 0 .642-1.356zm4.843 3.954-1.888 1.887-1.699-3.586zM18.25 9a.75.75 0 0 0 0 1.5h1.19L9.22 20.72a.75.75 0 1 0 1.06 1.06L20.5 11.56v1.19a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTextDirectionRotate315Right',
  mixins: [icon]
};
</script>
