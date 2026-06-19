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
    <path :fill="fill" :fill-opacity="opacity" d="M22 7.25A3.25 3.25 0 0 0 18.75 4H5.25A3.25 3.25 0 0 0 2 7.25v9.5A3.25 3.25 0 0 0 5.25 20h7.751v-1.5H5.25a1.75 1.75 0 0 1-1.75-1.75v-9.5c0-.966.784-1.75 1.75-1.75h9.25v5.519a1.75 1.75 0 0 1 1.5.502V5.5h2.75c.966 0 1.75.784 1.75 1.75v9.258l1.28 1.42c.142-.366.22-.763.22-1.178zm-7.514 4.8a.75.75 0 0 1 .826.198l6.365 7.057a.75.75 0 0 1-.738 1.23l-3.537-.878-2.03 3.015a.75.75 0 0 1-1.372-.42l.005-9.502a.75.75 0 0 1 .48-.7" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedPanelRightCursor',
  mixins: [icon]
};
</script>
