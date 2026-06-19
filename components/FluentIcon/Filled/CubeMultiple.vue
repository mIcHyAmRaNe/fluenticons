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
    <path :fill="fill" :fill-opacity="opacity" d="M10.519 4.25a4.5 4.5 0 0 1 3.07.037l5.914 2.1c.376.132.712.335.997.59v-.415a2 2 0 0 0-1.331-1.885l-5.162-1.832a6 6 0 0 0-4.013 0L4.83 4.677A2 2 0 0 0 3.5 6.562v.415c.285-.255.621-.458.997-.59l5.915-2.1zm2.735.979a3.75 3.75 0 0 0-2.508 0L4.831 7.328A2 2 0 0 0 3.5 9.212v8.235a2 2 0 0 0 1.331 1.885l5.915 2.098a3.75 3.75 0 0 0 2.508 0l5.915-2.098a2 2 0 0 0 1.331-1.885V9.212a2 2 0 0 0-1.331-1.884zM6.449 10.11a.75.75 0 0 1 .958-.456L12 11.285l4.593-1.63a.75.75 0 0 1 .502 1.414l-4.345 1.542v4.72a.75.75 0 0 1-1.5 0v-4.72l-4.345-1.542a.75.75 0 0 1-.456-.958" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledCubeMultiple',
  mixins: [icon]
};
</script>
