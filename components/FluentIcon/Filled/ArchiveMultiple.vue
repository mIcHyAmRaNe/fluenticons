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
    <path :fill="fill" :fill-opacity="opacity" d="M4.75 2A1.75 1.75 0 0 0 3 3.75v1.5C3 6.216 3.784 7 4.75 7h13.5A1.75 1.75 0 0 0 20 5.25v-1.5A1.75 1.75 0 0 0 18.25 2zM19 8H4v7.75a3.75 3.75 0 0 0 3.75 3.75h7.5A3.75 3.75 0 0 0 19 15.75zM9 11.25a.75.75 0 0 1 .75-.75h3.477a.75.75 0 0 1 0 1.5H9.75a.75.75 0 0 1-.75-.75m12.5.5a3.74 3.74 0 0 0-1.5-3v7.5a4.25 4.25 0 0 1-4.25 4.25h-8.5c.684.91 1.773 1.5 3 1.5h5.5a5.75 5.75 0 0 0 5.75-5.75z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledArchiveMultiple',
  mixins: [icon]
};
</script>
