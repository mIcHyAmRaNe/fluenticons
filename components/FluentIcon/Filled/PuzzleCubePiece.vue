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
    <path :fill="fill" :fill-opacity="opacity" d="M7 21h-.75A3.25 3.25 0 0 1 3 17.75V17h4zm6.5 0h-5v-4h5zm5.5-3.25A3.25 3.25 0 0 1 15.75 21H15v-4h4zM7 15.5H3v-5h4zm6.5 0h-5v-5h5zm5.5 0h-4v-5h4zM7 9H3v-.75A3.25 3.25 0 0 1 6.25 5H7zm6.5 0h-5V5h5zm5.115-7.384a1.25 1.25 0 0 1 1.768 0l2 2a1.25 1.25 0 0 1 0 1.767l-2 1.998a1.25 1.25 0 0 1-1.768 0l-1.999-1.998a1.25 1.25 0 0 1 0-1.768z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledPuzzleCubePiece',
  mixins: [icon]
};
</script>
