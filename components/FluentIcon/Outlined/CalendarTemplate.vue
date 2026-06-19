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
    <path :fill="fill" :fill-opacity="opacity" d="M5.25 2A3.25 3.25 0 0 0 2 5.25v11.5A3.25 3.25 0 0 0 5.25 20h3.825A4 4 0 0 1 9 19.25v-.75H5.25a1.75 1.75 0 0 1-1.75-1.75V5.25c0-.966.784-1.75 1.75-1.75h10.5c.966 0 1.75.784 1.75 1.75V9H19V5.25A3.25 3.25 0 0 0 15.75 2zm7.5 7h-6a.75.75 0 0 0 0 1.5h3a3.74 3.74 0 0 1 3-1.5m-6-3a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM10 12.75A2.75 2.75 0 0 1 12.75 10h6.5A2.75 2.75 0 0 1 22 12.75v6.5A2.75 2.75 0 0 1 19.25 22h-6.5A2.75 2.75 0 0 1 10 19.25zM11.5 15v4.25c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V15zm9-1.5v-.75c0-.69-.56-1.25-1.25-1.25h-6.5c-.69 0-1.25.56-1.25 1.25v.75z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedCalendarTemplate',
  mixins: [icon]
};
</script>
