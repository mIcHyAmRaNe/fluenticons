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
    <path :fill="fill" :fill-opacity="opacity" d="M7 4.25A2.25 2.25 0 0 1 9.25 2h5.5A2.25 2.25 0 0 1 17 4.25v15.5A2.25 2.25 0 0 1 14.75 22h-5.5q-.233 0-.453-.046A2.25 2.25 0 0 1 7 19.75zM8.5 5v1.5h1.75a.75.75 0 0 0 0-1.5zm0 3v1.5h3.75a.75.75 0 0 0 0-1.5zm0 3.25v1.5h1.75a.75.75 0 0 0 0-1.5zm0 3.25V16h3.75a.75.75 0 0 0 0-1.5zm0 3V19h1.75a.75.75 0 0 0 0-1.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledRuler',
  mixins: [icon]
};
</script>
