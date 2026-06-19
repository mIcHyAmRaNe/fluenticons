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
    <path :fill="fill" :fill-opacity="opacity" d="M4 4.25A2.25 2.25 0 0 1 6.25 2h11.5A2.25 2.25 0 0 1 20 4.25v7.248a6.5 6.5 0 0 0-1.5-.422V4.25a.75.75 0 0 0-.75-.75H6.25a.75.75 0 0 0-.75.75v15.5c0 .414.336.75.75.75h5.482A6.5 6.5 0 0 0 12.81 22H6.25A2.25 2.25 0 0 1 4 19.75zM16.25 11q.167.001.311.067a6.47 6.47 0 0 0-3.215 1.433H7.75a.75.75 0 0 1 0-1.5zm-8.5-4.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-5 .5.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedDocumentOnePageAdd',
  mixins: [icon]
};
</script>
