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
    <path :fill="fill" :fill-opacity="opacity" d="M19.493 6.007a3.25 3.25 0 0 1 1.508 2.743v6.5a5.75 5.75 0 0 1-5.75 5.75h-6.5a3.25 3.25 0 0 1-2.743-1.508q.12.008.243.008h9a4.25 4.25 0 0 0 4.25-4.25v-9q0-.123-.008-.243M7 18.5h-.75A3.25 3.25 0 0 1 3 15.25v-.75h4zm6 0H8.5v-4H13zm5.5-3.25a3.25 3.25 0 0 1-3.25 3.25h-.75v-4h4zM7 13H3V8.5h4zm6 0H8.5V8.5H13zm5.5 0h-4V8.5h4zM7 7H3v-.75A3.25 3.25 0 0 1 6.25 3H7zm6 0H8.5V3H13zm2.25-4a3.25 3.25 0 0 1 3.25 3.25V7h-4V3z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTableMultiple',
  mixins: [icon]
};
</script>
