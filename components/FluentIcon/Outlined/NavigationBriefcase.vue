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
    <path :fill="fill" :fill-opacity="opacity" d="M2.75 18H12v1.5H2.75a.75.75 0 0 1-.1-1.494zm0-4.997h11.353a2.75 2.75 0 0 1 1.062-1.5H2.75l-.102.006a.75.75 0 0 0 .102 1.494m0-8h18.5a.75.75 0 0 1 .102 1.493l-.102.007H2.75a.75.75 0 0 1-.102-1.493zM15 15v-1.25c0-.966.784-1.75 1.75-1.75h3.5c.966 0 1.75.784 1.75 1.75V15h.5a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1-1.5-1.5v-5a1.5 1.5 0 0 1 1.5-1.5zm1.5-1.25V15h4v-1.25a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedNavigationBriefcase',
  mixins: [icon]
};
</script>
