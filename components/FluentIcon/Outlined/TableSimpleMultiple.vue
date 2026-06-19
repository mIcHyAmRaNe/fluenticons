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
    <path :fill="fill" :fill-opacity="opacity" d="M5.25 2A3.25 3.25 0 0 0 2 5.25v10.5A3.25 3.25 0 0 0 5.25 19h10.5A3.25 3.25 0 0 0 19 15.75V5.25A3.25 3.25 0 0 0 15.75 2zM3.5 5.25c0-.966.784-1.75 1.75-1.75H10V10H3.5zm8 4.75V3.5h4.25c.966 0 1.75.784 1.75 1.75V10zm-8 1.5H10v6H5.25a1.75 1.75 0 0 1-1.75-1.75zm8 0h6v4.25a1.75 1.75 0 0 1-1.75 1.75H11.5zM8.25 22a3.25 3.25 0 0 1-3-2h1.776c.316.31.748.5 1.225.5h8.25a4 4 0 0 0 4-4V8.25c0-.477-.19-.91-.5-1.225V5.25a3.25 3.25 0 0 1 2 3v8.25a5.5 5.5 0 0 1-5.5 5.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTableSimpleMultiple',
  mixins: [icon]
};
</script>
