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
    <path :fill="fill" :fill-opacity="opacity" d="M3 7.25A3.25 3.25 0 0 1 6.25 4h6.5A3.25 3.25 0 0 1 16 7.25v7.5A3.25 3.25 0 0 1 12.75 18H7.686a1.75 1.75 0 0 0-.303-2.333L6.6 15l.784-.667a1.75 1.75 0 0 0 .152-2.52l-3.004-3.25A1.75 1.75 0 0 0 3 8.016zm17.257 9.438L17 14.44V7.562l3.257-2.25c1.161-.8 2.745.03 2.745 1.441v8.495c0 1.41-1.584 2.242-2.745 1.44M3.797 9.241a.75.75 0 0 0-1.3.509v3.075l-.761-.646a.75.75 0 0 0-.972 1.143l1.732 1.472v.412L.764 16.68a.75.75 0 0 0 .972 1.143l.76-.647v3.075a.75.75 0 0 0 1.3.51l3.005-3.25a.75.75 0 0 0-.065-1.082L5.056 15l1.68-1.428A.75.75 0 0 0 6.8 12.49zm1.372 7.824-1.173 1.269v-2.265zm-1.173-5.399 1.173 1.269-1.173.996z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledVideoBluetooth',
  mixins: [icon]
};
</script>
