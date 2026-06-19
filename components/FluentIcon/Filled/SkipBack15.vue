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
    <path :fill="fill" :fill-opacity="opacity" d="M2 3.25a1 1 0 0 1 2 0v2.729c1.068-1.08 2.378-1.971 3.954-2.459 2.43-.752 5.013-.69 7.395.196 2.363.88 4.603 2.664 5.778 4.807a1 1 0 0 1-1.754.961c-.912-1.662-2.74-3.156-4.722-3.893a9.44 9.44 0 0 0-6.106-.16C7.071 5.887 5.848 6.82 4.863 8H8.25a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm7.095 7.811A1 1 0 0 1 9.75 12v8a1 1 0 0 1-2 0v-5.507c-.346.283-.752.575-1.235.864a1 1 0 0 1-1.03-1.714c1.203-.722 1.766-1.402 2.281-2.025q.111-.135.222-.265a1 1 0 0 1 1.107-.292M17 13a1 1 0 1 0 0-2h-3.1a1 1 0 0 0-.991.868l-.4 3A1 1 0 0 0 13.5 16h2q.103 0 .21.015a1.5 1.5 0 1 1-1.559 2.14 1 1 0 0 0-1.798.875A3.5 3.5 0 1 0 15.5 14h-.857l.133-1z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledSkipBack15',
  mixins: [icon]
};
</script>
