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
    <path :fill="fill" :fill-opacity="opacity" d="M12 5.5a4.5 4.5 0 0 0-4.495 4.285.75.75 0 0 1-.75.715H6.5a3 3 0 1 0 0 6h5.177a2 2 0 0 0 .323.232V18H6.5a4.5 4.5 0 0 1-.42-8.98 6.001 6.001 0 0 1 11.84 0A4.5 4.5 0 0 1 21.744 12h-1.645a3 3 0 0 0-2.599-1.5h-.256a.75.75 0 0 1-.749-.715A4.5 4.5 0 0 0 12 5.5m1 7.5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1zm7 10a2 2 0 0 0 2-2v-4h-9v4a2 2 0 0 0 2 2zm-4.5-4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedCloudArchive',
  mixins: [icon]
};
</script>
