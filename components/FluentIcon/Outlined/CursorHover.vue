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
    <path :fill="fill" :fill-opacity="opacity" d="M19.5 5.5h-15a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1H9V18H4.5A2.5 2.5 0 0 1 2 15.5v-9A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v9a2.5 2.5 0 0 1-2.025 2.455 1.75 1.75 0 0 0-.69-1.116l-.339-.339h.554a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m-8.22 4.72a.75.75 0 0 0-1.28.53v10.5a.75.75 0 0 0 1.368.425l2.467-3.588 4.26.897a.75.75 0 0 0 .685-1.264zm.22 8.615v-6.274l4.436 4.435-2.281-.48a.75.75 0 0 0-.773.31z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedCursorHover',
  mixins: [icon]
};
</script>
