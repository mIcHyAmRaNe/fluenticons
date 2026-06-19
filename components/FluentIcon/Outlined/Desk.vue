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
    <path :fill="fill" :fill-opacity="opacity" d="M4.25 4A2.25 2.25 0 0 0 2 6.25v11A2.75 2.75 0 0 0 4.75 20h4.5A2.75 2.75 0 0 0 12 17.25V9.5h8.5v9.75a.75.75 0 0 0 1.5 0v-13A2.25 2.25 0 0 0 19.75 4zM3.5 9.5h7v7.75c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25zm0-1.5V6.25a.75.75 0 0 1 .75-.75h15.5a.75.75 0 0 1 .75.75V8zm2.25 3.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedDesk',
  mixins: [icon]
};
</script>
