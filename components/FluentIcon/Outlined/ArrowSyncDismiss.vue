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
    <path :fill="fill" :fill-opacity="opacity" d="M16.274 6.119a.75.75 0 0 1 1.028-1.08A8.75 8.75 0 0 1 12.72 20.72l.75.749.072.084a.75.75 0 0 1-1.133.976l-2-2-.073-.084a.75.75 0 0 1 .073-.976l.313-.313q.623.11 1.278.112a7.27 7.27 0 0 0 4.274-13.15m-2.995-1.276a7.27 7.27 0 0 0-5.78 12.865.75.75 0 0 1-1.068 1.041A8.75 8.75 0 0 1 11.28 3.28l-.75-.749a.75.75 0 1 1 1.061-1.06l2 2a.75.75 0 0 1 0 1.06zM9.469 9.47a.75.75 0 0 1 1.061 0L12 10.94l1.47-1.47a.75.75 0 1 1 1.06 1.06L13.06 12l1.47 1.47a.75.75 0 1 1-1.06 1.06L12 13.06l-1.47 1.47a.75.75 0 1 1-1.06-1.06L10.94 12l-1.47-1.47a.75.75 0 0 1 0-1.06M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0-1.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedArrowSyncDismiss',
  mixins: [icon]
};
</script>
