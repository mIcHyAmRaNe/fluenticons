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
    <path :fill="fill" :fill-opacity="opacity" d="M17.749 3a3.25 3.25 0 0 1 3.25 3.25v4.762a3.3 3.3 0 0 0-1.5.22V8.5h-15v9.249c0 .966.784 1.75 1.75 1.75h5.291l-.02.076-.356 1.423H6.25A3.25 3.25 0 0 1 3 17.748V6.25A3.25 3.25 0 0 1 6.25 3zm0 1.5h-11.5A1.75 1.75 0 0 0 4.5 6.25V7h15v-.75a1.75 1.75 0 0 0-1.75-1.75m-4.552 14.07 5.901-5.901a2.286 2.286 0 0 1 3.233 3.232l-5.902 5.902a2.7 2.7 0 0 1-1.248.706l-1.83.458a1.087 1.087 0 0 1-1.318-1.319l.457-1.83c.118-.472.362-.903.707-1.248M9 15.75a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0m4.25 0a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0m-4.25-4a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0m4.25 0a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0m4.25 0a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedCalendarEdit',
  mixins: [icon]
};
</script>
