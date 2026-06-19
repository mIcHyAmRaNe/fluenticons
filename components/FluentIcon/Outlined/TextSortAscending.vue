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
    <path :fill="fill" :fill-opacity="opacity" d="M7 2a.75.75 0 0 1 .688.452l3.25 7.5a.75.75 0 1 1-1.376.596L8.892 9H5.108l-.67 1.548a.75.75 0 1 1-1.377-.596l3.25-7.5A.75.75 0 0 1 7 2m0 2.636L5.76 7.5h2.48zM3.5 13.75a.75.75 0 0 0-1.5 0v7.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-7.5a.75.75 0 0 0-1.5 0v6.75H7.75v-3.75a.75.75 0 0 0-1.5 0v3.75H3.5zM17.25 2a.75.75 0 0 1 .75.75v16.69l2.22-2.22a.75.75 0 1 1 1.06 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V2.75a.75.75 0 0 1 .75-.75" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTextSortAscending',
  mixins: [icon]
};
</script>
