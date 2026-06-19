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
    <path :fill="fill" :fill-opacity="opacity" d="M21.25 16.5a.75.75 0 0 1 .101 1.493L21.25 18H16.5v-1.5zM4 10h1.5V6.75a.25.25 0 0 1 .25-.25h12.5a.25.25 0 0 1 .25.25v7.5a.25.25 0 0 1-.25.25H16.5V16h1.75A1.75 1.75 0 0 0 20 14.25v-7.5A1.75 1.75 0 0 0 18.25 5H5.75A1.75 1.75 0 0 0 4 6.75zm3.75 7a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zm-3.5-6A2.25 2.25 0 0 0 2 13.25v5.5A2.25 2.25 0 0 0 4.25 21h9a2.25 2.25 0 0 0 2.25-2.25v-5.5A2.25 2.25 0 0 0 13.25 11zm-.75 2.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTabletLaptop',
  mixins: [icon]
};
</script>
