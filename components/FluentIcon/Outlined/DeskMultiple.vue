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
    <path :fill="fill" :fill-opacity="opacity" d="M4.629 5A2.25 2.25 0 0 1 6.75 3.5h10.5A4.75 4.75 0 0 1 22 8.25v8.5a.75.75 0 0 1-1.5.037V8.25A3.25 3.25 0 0 0 17.252 5zM2 8.25A2.25 2.25 0 0 1 4.25 6h13a2.25 2.25 0 0 1 2.25 2.25v11a.75.75 0 0 1-1.5 0V11.5h-7v6.25A2.25 2.25 0 0 1 8.75 20h-4.5A2.25 2.25 0 0 1 2 17.75zm7.5 3.25h-6v6.25c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75zm-6-1.5H18V8.25a.75.75 0 0 0-.75-.75h-13a.75.75 0 0 0-.75.75zm2.25 3a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedDeskMultiple',
  mixins: [icon]
};
</script>
