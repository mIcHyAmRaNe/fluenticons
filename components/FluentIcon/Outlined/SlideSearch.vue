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
    <path :fill="fill" :fill-opacity="opacity" d="M4.75 4A2.75 2.75 0 0 0 2 6.75v4.507a5.5 5.5 0 0 1 1.5-.882V6.75c0-.69.56-1.25 1.25-1.25h14.5c.69 0 1.25.56 1.25 1.25v10.5c0 .69-.56 1.25-1.25 1.25h-8.275l1.5 1.5h6.775A2.75 2.75 0 0 0 22 17.25V6.75A2.75 2.75 0 0 0 19.25 4zm3.913 7a5.5 5.5 0 0 1 1.447 1.5h7.14a.75.75 0 0 0 0-1.5zm6.587 4.5H11a5.5 5.5 0 0 0-.207-1.5h4.457a.75.75 0 0 1 0 1.5M6.75 8a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zM5.5 20a4.5 4.5 0 0 0 2.607-.832l2.613 2.612a.75.75 0 1 0 1.06-1.06l-2.612-2.613A4.5 4.5 0 1 0 5.5 20m0-1.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedSlideSearch',
  mixins: [icon]
};
</script>
