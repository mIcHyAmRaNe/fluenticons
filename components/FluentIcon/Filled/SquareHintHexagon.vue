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
    <path :fill="fill" :fill-opacity="opacity" d="M10.75 3a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zm6.25.75c0 .414.336.75.75.75.966 0 1.75.784 1.75 1.75a.75.75 0 0 0 1.5 0A3.25 3.25 0 0 0 17.75 3a.75.75 0 0 0-.75.75m-10 0A.75.75 0 0 0 6.25 3 3.25 3.25 0 0 0 3 6.25a.75.75 0 0 0 1.5 0c0-.966.784-1.75 1.75-1.75A.75.75 0 0 0 7 3.75m-4 14a.75.75 0 0 1 1.5 0c0 .966.784 1.75 1.75 1.75a.75.75 0 0 1 0 1.5A3.25 3.25 0 0 1 3 17.75m7 2.5a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75m7 0a.75.75 0 0 1 .75-.75 1.75 1.75 0 0 0 1.75-1.75.75.75 0 0 1 1.5 0A3.25 3.25 0 0 1 17.75 21a.75.75 0 0 1-.75-.75m4-9.5a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0zM3.75 14a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-.75.75m4.932-6.25a1.5 1.5 0 0 1 1.3-.75h4.039a1.5 1.5 0 0 1 1.299.75l2.02 3.5a1.5 1.5 0 0 1 0 1.5l-2.02 3.5a1.5 1.5 0 0 1-1.3.75H9.982a1.5 1.5 0 0 1-1.3-.75l-2.02-3.5a1.5 1.5 0 0 1 0-1.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledSquareHintHexagon',
  mixins: [icon]
};
</script>
