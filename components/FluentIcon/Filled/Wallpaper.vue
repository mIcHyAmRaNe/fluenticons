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
    <path :fill="fill" :fill-opacity="opacity" d="M3 6.25A3.25 3.25 0 0 1 6.25 3H10a1 1 0 1 1 0 2H6.25C5.56 5 5 5.56 5 6.25V10a1 1 0 1 1-2 0zM13 4a1 1 0 0 1 1-1h3.75A3.25 3.25 0 0 1 21 6.25V10a1 1 0 1 1-2 0V6.25C19 5.56 18.44 5 17.75 5H14a1 1 0 0 1-1-1m-9 9a1 1 0 0 1 1 1v3.586l4.525-4.525a3.5 3.5 0 0 1 4.95 0L19 17.586V14a1 1 0 1 1 2 0v3.75A3.25 3.25 0 0 1 17.75 21H14a1 1 0 1 1 0-2h3.586l-4.525-4.525a1.5 1.5 0 0 0-2.122 0L6.414 19H10a1 1 0 1 1 0 2H6.25A3.25 3.25 0 0 1 3 17.75V14a1 1 0 0 1 1-1m13.5-4.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledWallpaper',
  mixins: [icon]
};
</script>
