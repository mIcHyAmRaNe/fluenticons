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
    <path :fill="fill" :fill-opacity="opacity" d="M22 17.75A3.25 3.25 0 0 1 18.75 21H5.25A3.25 3.25 0 0 1 2 17.75v-5.04A4.73 4.73 0 0 0 5.25 14H10a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1h4.75c1.258 0 2.4-.49 3.25-1.29zM13.75 2A2.25 2.25 0 0 1 16 4.25V6h2.75q.084 0 .167.004a3.25 3.25 0 0 1-.167 6.496H14V12a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.5H5.25a3.25 3.25 0 0 1 0-6.5H8V4.25A2.25 2.25 0 0 1 10.25 2zm-3.5 1.5a.75.75 0 0 0-.75.75V6h5V4.25a.75.75 0 0 0-.75-.75z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledBriefcase',
  mixins: [icon]
};
</script>
