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
    <path :fill="fill" :fill-opacity="opacity" d="M4.25 2A2.25 2.25 0 0 0 2 4.25v15.5A2.25 2.25 0 0 0 4.25 22h4.418a1.74 1.74 0 0 1 0-1.5H4.25a.75.75 0 0 1-.75-.75V4.25a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 .75.75V6H12V4.25A2.25 2.25 0 0 0 9.75 2zM7 9.25A2.25 2.25 0 0 1 9.25 7h10.5A2.25 2.25 0 0 1 22 9.25v6.5A2.25 2.25 0 0 1 19.75 18H17.5v2.5h1.25a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5h1.25V18H9.25A2.25 2.25 0 0 1 7 15.75zm9 11.25V18h-3v2.5zm3.75-4a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75H9.25a.75.75 0 0 0-.75.75v6.5c0 .414.336.75.75.75z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedDesktopTower',
  mixins: [icon]
};
</script>
