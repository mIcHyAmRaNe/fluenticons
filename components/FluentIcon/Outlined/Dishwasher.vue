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
    <path :fill="fill" :fill-opacity="opacity" d="M6.25 3A3.25 3.25 0 0 0 3 6.25V10h1.5v-.5h15v8.25a1.75 1.75 0 0 1-1.75 1.75H7v.018c.766.11 1.373.716 1.482 1.482h9.268A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zM19.5 8h-15V6.25c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75zM9 6.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3.75-.75a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zM2 11.75a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v2A3.25 3.25 0 0 1 6 16.913V20.5h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-3.587A3.25 3.25 0 0 1 2 13.75z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedDishwasher',
  mixins: [icon]
};
</script>
