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
    <path :fill="fill" :fill-opacity="opacity" d="M4 3a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 1 0-2 0v6H8V6a1 1 0 0 0-2 0v3H4zm14.5 0a1 1 0 1 0-2 0v15.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l3.5 3.5a1 1 0 0 0 1.414 0l3.5-3.5a1 1 0 0 0-1.414-1.414L18.5 18.586zM7 13a1 1 0 0 1 .92.606l3 7a1 1 0 1 1-1.839.788L8.484 20H5.517l-.598 1.394a1 1 0 1 1-1.838-.788l3-7a1 1 0 0 1 .92-.606m0 3.539L6.374 18h1.253z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTextSortDescending',
  mixins: [icon]
};
</script>
