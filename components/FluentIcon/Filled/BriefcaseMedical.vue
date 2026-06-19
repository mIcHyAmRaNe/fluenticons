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
    <path :fill="fill" :fill-opacity="opacity" d="M13.75 2A2.25 2.25 0 0 1 16 4.25V6h2.75A3.25 3.25 0 0 1 22 9.25v8.5A3.25 3.25 0 0 1 18.75 21H5.25A3.25 3.25 0 0 1 2 17.75v-8.5A3.25 3.25 0 0 1 5.25 6H8V4.25A2.25 2.25 0 0 1 10.25 2zM12 9.75a.75.75 0 0 0-.746.673l-.004.077v2h-2a.75.75 0 0 0 0 1.5h2v2a.75.75 0 0 0 1.5 0v-2h2l.077-.004a.75.75 0 0 0 0-1.492l-.077-.004h-2v-2l-.004-.077A.75.75 0 0 0 12 9.75M10.25 3.5a.75.75 0 0 0-.75.75V6h5V4.25a.75.75 0 0 0-.75-.75z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledBriefcaseMedical',
  mixins: [icon]
};
</script>
