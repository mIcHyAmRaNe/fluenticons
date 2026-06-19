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
    <path :fill="fill" :fill-opacity="opacity" d="M20.952 3.048a3.58 3.58 0 0 0-5.06 0l-.893.892L20.06 9l.892-.891a3.58 3.58 0 0 0 0-5.06M3.94 15l9.998-10 5.06 5.061-9.997 10a3.1 3.1 0 0 1-1.477.825l-4.6 1.094a.75.75 0 0 1-.904-.903l1.096-4.602c.133-.559.419-1.07.825-1.476M2.75 3h11.775l-1.5 1.5H2.75a.75.75 0 0 1 0-1.5m0 4h7.776l-1.5 1.5H2.75a.75.75 0 0 1 0-1.5m0 4h3.776l-1.5 1.5H2.75a.75.75 0 0 1 0-1.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledEditLineHorizontal3',
  mixins: [icon]
};
</script>
