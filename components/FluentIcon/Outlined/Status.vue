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
    <path :fill="fill" :fill-opacity="opacity" d="M17.086 4.086a2 2 0 1 1 2.828 2.828l-6.06 6.06a1.25 1.25 0 0 1-.57.326l-3.488.904.904-3.489a1.25 1.25 0 0 1 .326-.57zm3.889-1.061a3.5 3.5 0 0 0-4.95 0l-6.06 6.06a2.75 2.75 0 0 0-.717 1.254l-1.224 4.723a.75.75 0 0 0 .914.914l4.723-1.224a2.75 2.75 0 0 0 1.254-.718l6.06-6.06a3.5 3.5 0 0 0 0-4.949M12 3c.806 0 1.588.106 2.331.305l-1.27 1.27a7.5 7.5 0 1 0 6.364 6.364l1.27-1.27A9 9 0 1 1 12 3" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedStatus',
  mixins: [icon]
};
</script>
