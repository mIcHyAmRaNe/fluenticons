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
    <path :fill="fill" :fill-opacity="opacity" d="M12.75 4H14v6a2 2 0 0 0 2 2h6v6a2 2 0 0 1-2 2h-7.25a.75.75 0 0 1-.75-.75V4.75a.75.75 0 0 1 .75-.75m8.737 6.427.07.073H16a.5.5 0 0 1-.5-.5V4.443q.038.034.073.07zM3.5 10.25a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0zM7 4.75A.75.75 0 0 1 7.75 4h2a.75.75 0 0 1 0 1.5h-2A.75.75 0 0 1 7 4.75m.75 13.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zM2 6a2 2 0 0 1 2-2h.75a.75.75 0 0 1 0 1.5H4a.5.5 0 0 0-.5.5v1.25a.75.75 0 0 1-1.5 0zm2 14a2 2 0 0 1-2-2v-1.25a.75.75 0 0 1 1.5 0V18a.5.5 0 0 0 .5.5h.75a.75.75 0 0 1 0 1.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledDocumentLandscapeSplitHint',
  mixins: [icon]
};
</script>
