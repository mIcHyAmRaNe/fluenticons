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
    <path :fill="fill" :fill-opacity="opacity" d="M8 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-2-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-2-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1-4v-.75A2.25 2.25 0 0 0 11.75 2h-6.5A2.25 2.25 0 0 0 3 4.25v16.5c0 .414.336.75.75.75h16.5a.75.75 0 0 0 .75-.75V7.25A2.25 2.25 0 0 0 18.75 5zm-9.5-.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 .75.75V5h-.25A2.25 2.25 0 0 0 10 7.25V20H4.5zM14.5 20v-1.5h2V20zm3.5-2.25a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0-.75.75V20h-1.5V7.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 .75.75V20H18z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedBuildingMultiple',
  mixins: [icon]
};
</script>
