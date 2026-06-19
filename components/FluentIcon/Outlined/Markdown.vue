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
    <path :fill="fill" :fill-opacity="opacity" d="M2.97 5.054a.75.75 0 0 1 .823.178L8.5 10.163l4.707-4.93a.752.752 0 0 1 1.293.517v11.5a.75.75 0 0 1-1.5 0V7.622l-3.957 4.146a.75.75 0 0 1-1.086 0L4 7.622v9.628a.75.75 0 0 1-1.5 0V5.75a.75.75 0 0 1 .47-.696M19.25 5a.75.75 0 0 1 .75.75v9.69l1.223-1.222a.75.75 0 1 1 1.06 1.06l-2.5 2.502a.75.75 0 0 1-1.061 0l-2.502-2.502a.75.75 0 0 1 1.06-1.06l1.22 1.22V5.75a.75.75 0 0 1 .75-.75" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedMarkdown',
  mixins: [icon]
};
</script>
