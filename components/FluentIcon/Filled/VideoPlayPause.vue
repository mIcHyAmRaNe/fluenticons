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
    <path :fill="fill" :fill-opacity="opacity" d="M12 7.75c0-.966.784-1.75 1.75-1.75h1.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 15.25 18h-1.5A1.75 1.75 0 0 1 12 16.25v-4.13a1.73 1.73 0 0 1-.84 1.417l-6.5 3.952C3.493 18.197 2 17.358 2 15.993V8.004c0-1.372 1.507-2.21 2.673-1.486l6.502 4.037c.526.327.8.862.825 1.408zm6 0c0-.966.784-1.75 1.75-1.75h1.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 21.25 18h-1.5A1.75 1.75 0 0 1 18 16.25z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledVideoPlayPause',
  mixins: [icon]
};
</script>
