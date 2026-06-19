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
    <path :fill="fill" :fill-opacity="opacity" d="M5.25 2A2.25 2.25 0 0 0 3 4.25V5h-.75a.75.75 0 0 0 0 1.5H3v3.25h-.75a.75.75 0 0 0 0 1.5H3v3.25h-.75a.75.75 0 0 0 0 1.5H3v.75A2.25 2.25 0 0 0 5.25 19h1.785L17 6.546V4.25A2.25 2.25 0 0 0 14.75 2zm2.5 5h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5m11.47-1.622c.591-.738 1.781-.32 1.781.624V19.75a2.25 2.25 0 0 1-2.25 2.25H8.001a1 1 0 0 1-.78-1.625zm-5.245 12.216a.25.25 0 0 0 .195.406h2.33a.5.5 0 0 0 .5-.5v-2.977a.25.25 0 0 0-.445-.156z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledBinderTriangle',
  mixins: [icon]
};
</script>
