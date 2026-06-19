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
    <path :fill="fill" :fill-opacity="opacity" d="M8.78 1.22a.75.75 0 0 0-1.06 1.06l.72.72H6.25A3.25 3.25 0 0 0 3 6.25v2.19l-.72-.72a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l2-2a.75.75 0 0 0-1.06-1.06l-.72.72V6.25c0-.966.784-1.75 1.75-1.75h2.19l-.72.72a.75.75 0 0 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06zM14.5 8H9.502V6.973l1.985-1.986A1.75 1.75 0 0 0 11.832 3H14.5zM3 11.832V14.5h5v-5H6.975l-1.988 1.987A1.75 1.75 0 0 1 3 11.832M14.5 14.5v-5h-5v5zm1.5 0v-5h5v5zM16 8h5V6.25A3.25 3.25 0 0 0 17.75 3H16zm-1.5 13v-5h-5v5zM8 16H3v1.75A3.25 3.25 0 0 0 6.25 21H8zm8 0h5v1.75A3.25 3.25 0 0 1 17.75 21H16z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTableSwitch',
  mixins: [icon]
};
</script>
