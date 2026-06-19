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
    <path :fill="fill" :fill-opacity="opacity" d="M12 2v6a2 2 0 0 0 2 2h6v10a2 2 0 0 1-2 2h-6.05q.05-.243.05-.5v-5a2.5 2.5 0 0 0-2-2.45V14a3.5 3.5 0 0 0-6-2.45V4a2 2 0 0 1 2-2zm1.5.5V8a.5.5 0 0 0 .5.5h5.5zm1 13.25a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0zM16.75 13a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75M4 15v-1a2.5 2.5 0 0 1 5 0v1h.5a1.5 1.5 0 0 1 1.5 1.5v5A1.5 1.5 0 0 1 9.5 23h-6A1.5 1.5 0 0 1 2 21.5v-5A1.5 1.5 0 0 1 3.5 15zm1.5-1v1h2v-1a1 1 0 1 0-2 0m2 5a1 1 0 1 0-2 0 1 1 0 0 0 2 0" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledDocumentDataLock',
  mixins: [icon]
};
</script>
