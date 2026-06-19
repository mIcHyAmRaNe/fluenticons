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
    <path :fill="fill" :fill-opacity="opacity" d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zM9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0m-1.438-.75a4.5 4.5 0 0 1 3.688-3.688V6.75a.75.75 0 0 1 1.5 0v.812a4.5 4.5 0 0 1 3.688 3.688h.812a.75.75 0 0 1 0 1.5h-.812a4.5 4.5 0 0 1-3.688 3.688v.812a.75.75 0 0 1-1.5 0v-.812a4.5 4.5 0 0 1-3.688-3.688H6.75a.75.75 0 0 1 0-1.5zM13.5 12a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledLocationTargetSquare',
  mixins: [icon]
};
</script>
