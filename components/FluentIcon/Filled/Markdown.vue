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
    <path :fill="fill" :fill-opacity="opacity" d="M19 5a1 1 0 0 1 1 1v8.588l.796-.795a1 1 0 1 1 1.414 1.414l-2.501 2.502a1 1 0 0 1-1.414 0l-2.502-2.502a1 1 0 1 1 1.414-1.414l.793.793V6a1 1 0 0 1 1-1m-6.74.327A1 1 0 0 1 14 6v11a1 1 0 1 1-2 0V8.587l-3.26 3.586a1 1 0 0 1-1.48 0L4 8.587V17a1 1 0 1 1-2 0V6a1 1 0 0 1 1.74-.673L8 10.013z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledMarkdown',
  mixins: [icon]
};
</script>
