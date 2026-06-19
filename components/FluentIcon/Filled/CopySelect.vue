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
    <path :fill="fill" :fill-opacity="opacity" d="M9.25 3.5A1.75 1.75 0 0 0 7.5 5.25v1a.75.75 0 0 1-1.5 0v-1A3.25 3.25 0 0 1 9.25 2h1a.75.75 0 0 1 0 1.5zM12 2.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75m.75 13.75a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zm-6-8.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 1 6.75 8M22 8.75a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0zm-3.25 7.75a1.75 1.75 0 0 0 1.75-1.75v-1a.75.75 0 0 1 1.5 0v1A3.25 3.25 0 0 1 18.75 18h-1a.75.75 0 0 1 0-1.5zM20.5 5.25a1.75 1.75 0 0 0-1.75-1.75h-1a.75.75 0 0 1 0-1.5h1A3.25 3.25 0 0 1 22 5.25v1a.75.75 0 0 1-1.5 0zM9.25 16.5a1.75 1.75 0 0 1-1.75-1.75v-1a.75.75 0 0 0-1.5 0v1A3.25 3.25 0 0 0 9.25 18h1a.75.75 0 0 0 0-1.5zM2 9.25a3.25 3.25 0 0 1 3-3.24V15a4 4 0 0 0 4 4h8.99a3.25 3.25 0 0 1-3.24 3h-7A5.75 5.75 0 0 1 2 16.25z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledCopySelect',
  mixins: [icon]
};
</script>
