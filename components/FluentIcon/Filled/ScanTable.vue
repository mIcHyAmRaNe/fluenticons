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
    <path :fill="fill" :fill-opacity="opacity" d="M3.5 5.25c0-.966.784-1.75 1.75-1.75h3a.75.75 0 0 0 0-1.5h-3A3.25 3.25 0 0 0 2 5.25v3a.75.75 0 0 0 1.5 0zm0 13.5c0 .966.784 1.75 1.75 1.75h3a.75.75 0 0 1 0 1.5h-3A3.25 3.25 0 0 1 2 18.75v-3a.75.75 0 0 1 1.5 0zM18.75 3.5c.966 0 1.75.784 1.75 1.75v3a.75.75 0 0 0 1.5 0v-3A3.25 3.25 0 0 0 18.75 2h-3a.75.75 0 0 0 0 1.5zm1.75 15.25a1.75 1.75 0 0 1-1.75 1.75h-3a.75.75 0 0 0 0 1.5h3A3.25 3.25 0 0 0 22 18.75v-3a.75.75 0 0 0-1.5 0zM17.999 11v4a3 3 0 0 1-2.824 2.995L15 18H9a3 3 0 0 1-2.995-2.824L6 15v-4zm-3-5a3 3 0 0 1 2.995 2.824l.005.176v.5h-12V9a3 3 0 0 1 2.824-2.995L8.999 6z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledScanTable',
  mixins: [icon]
};
</script>
