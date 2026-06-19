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
    <path :fill="fill" :fill-opacity="opacity" d="M19.493 6.007a3.25 3.25 0 0 1 1.508 2.743v6.5a5.75 5.75 0 0 1-5.75 5.75h-6.5a3.25 3.25 0 0 1-2.743-1.508q.12.008.243.008h9a4.25 4.25 0 0 0 4.25-4.25v-9q0-.123-.008-.243M15.25 3a3.25 3.25 0 0 1 3.25 3.25v9a3.25 3.25 0 0 1-3.25 3.25h-9A3.25 3.25 0 0 1 3 15.25v-9A3.25 3.25 0 0 1 6.25 3zM14 17h1.25A1.75 1.75 0 0 0 17 15.25V14h-3zm-5 0h3.5v-3H9zm-4.5-1.75c0 .966.784 1.75 1.75 1.75H7.5v-3h-3zM14 12.5h3V9h-3zm-5 0h3.5V9H9zm-4.5 0h3V9h-3zm9.5-5h3V6.25a1.75 1.75 0 0 0-1.75-1.75H14zm-5 0h3.5v-3H9zm-2.75-3A1.75 1.75 0 0 0 4.5 6.25V7.5h3v-3z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTableMultiple',
  mixins: [icon]
};
</script>
