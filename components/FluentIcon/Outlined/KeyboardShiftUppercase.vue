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
    <path :fill="fill" :fill-opacity="opacity" d="M13.321 2.603a1.75 1.75 0 0 0-2.644 0l-8.245 9.504c-.983 1.133-.178 2.897 1.322 2.897H7v2.246c0 .966.783 1.75 1.75 1.75h6.5A1.75 1.75 0 0 0 17 17.25v-2.246h3.245c1.5 0 2.305-1.764 1.322-2.897zm-1.51.983a.25.25 0 0 1 .377 0l8.245 9.504a.25.25 0 0 1-.188.414H16.25a.75.75 0 0 0-.75.75v2.996a.25.25 0 0 1-.25.25h-6.5a.25.25 0 0 1-.25-.25v-2.996a.75.75 0 0 0-.75-.75H3.754a.25.25 0 0 1-.189-.414zM7.75 20.5a.75.75 0 1 0 0 1.5h8.5a.75.75 0 0 0 0-1.5z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedKeyboardShiftUppercase',
  mixins: [icon]
};
</script>
