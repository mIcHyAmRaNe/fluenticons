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
    <path :fill="fill" :fill-opacity="opacity" d="M14 3H6.25A3.25 3.25 0 0 0 3 6.25V8.5h11zm1.5 5.5H21V6.25A3.25 3.25 0 0 0 17.75 3H15.5zM21 10H10v4h11zM8.5 10H3v4h5.5zM3 17.75V15.5h11V21H6.25A3.25 3.25 0 0 1 3 17.75M15.5 21v-5.5H21v2.25A3.25 3.25 0 0 1 17.75 21z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTableOffset',
  mixins: [icon]
};
</script>
