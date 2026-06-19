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
    <path :fill="fill" :fill-opacity="opacity" d="M13.45 2.532a2.25 2.25 0 0 0-2.9 0L3.8 8.224a2.25 2.25 0 0 0-.8 1.72v9.31c0 .966.784 1.75 1.75 1.75h14.5a1.75 1.75 0 0 0 1.75-1.75v-9.31a2.25 2.25 0 0 0-.8-1.72zm-1.933 1.147a.75.75 0 0 1 .966 0l6.75 5.692a.75.75 0 0 1 .267.573v9.31a.25.25 0 0 1-.25.25H4.75a.25.25 0 0 1-.25-.25v-9.31a.75.75 0 0 1 .267-.573zm4.267 7.601a.75.75 0 1 0-1.061-1.06l-3.973 3.973-1.47-1.47a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedHomeCheckmark',
  mixins: [icon]
};
</script>
