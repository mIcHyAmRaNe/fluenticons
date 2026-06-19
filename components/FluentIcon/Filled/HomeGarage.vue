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
    <path :fill="fill" :fill-opacity="opacity" d="M13.456 2.534a2.25 2.25 0 0 0-2.912 0l-6.75 5.728A2.25 2.25 0 0 0 3 9.977v9.273c0 .966.784 1.75 1.75 1.75H6.5v-6.25c0-.966.784-1.75 1.75-1.75h7.5c.966 0 1.75.784 1.75 1.75V21h1.75A1.75 1.75 0 0 0 21 19.25V9.977c0-.66-.29-1.288-.794-1.715zM16 21H8v-2.5h8zm0-4H8v-2.25a.25.25 0 0 1 .25-.25h7.5a.25.25 0 0 1 .25.25z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledHomeGarage',
  mixins: [icon]
};
</script>
