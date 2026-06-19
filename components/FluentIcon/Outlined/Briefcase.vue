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
    <path :fill="fill" :fill-opacity="opacity" d="M13.75 2A2.25 2.25 0 0 1 16 4.25V6h2.75A3.25 3.25 0 0 1 22 9.25v8.5A3.25 3.25 0 0 1 18.75 21H5.25A3.25 3.25 0 0 1 2 17.75v-8.5A3.25 3.25 0 0 1 5.25 6H8V4.25A2.25 2.25 0 0 1 10.25 2zm6.75 11.487a3.23 3.23 0 0 1-1.75.513H14a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1H5.25a3.23 3.23 0 0 1-1.75-.513v4.263c0 .966.784 1.75 1.75 1.75h13.5a1.75 1.75 0 0 0 1.75-1.75zM5.25 7.5A1.75 1.75 0 0 0 3.5 9.25v1.5c0 .966.784 1.75 1.75 1.75H10V12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v.5h4.75a1.75 1.75 0 0 0 1.75-1.75v-1.5a1.75 1.75 0 0 0-1.75-1.75zm5-4a.75.75 0 0 0-.75.75V6h5V4.25a.75.75 0 0 0-.75-.75z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedBriefcase',
  mixins: [icon]
};
</script>
