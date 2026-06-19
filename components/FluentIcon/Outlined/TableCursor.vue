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
    <path :fill="fill" :fill-opacity="opacity" d="M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v9.703L19.238 14h.262v-4h-4v1.019a1.75 1.75 0 0 0-1.495 1.73L14 12.75V10h-4v4h4.004v1.5H10v4h4.001V21H6.25A3.25 3.25 0 0 1 3 17.75zM6.25 4.5A1.75 1.75 0 0 0 4.5 6.25V8.5h4v-4zM4.5 10v4h4v-4zm11-1.5h4V6.25a1.75 1.75 0 0 0-1.75-1.75H15.5zm-1.5-4h-4v4h4zm-9.5 11v2.25c0 .966.784 1.75 1.75 1.75H8.5v-4zm10.986-3.45a.75.75 0 0 1 .826.198l6.365 7.057a.75.75 0 0 1-.738 1.23l-3.537-.878-2.03 3.015a.75.75 0 0 1-1.372-.42l.005-9.502a.75.75 0 0 1 .48-.7" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTableCursor',
  mixins: [icon]
};
</script>
