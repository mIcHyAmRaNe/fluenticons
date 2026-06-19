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
    <path :fill="fill" :fill-opacity="opacity" d="M20.952 3.047a3.58 3.58 0 0 0-5.06 0L3.94 15a3.1 3.1 0 0 0-.825 1.476L2.02 21.077a.75.75 0 0 0 .904.903l4.601-1.096a3.1 3.1 0 0 0 1.477-.825l1.151-1.151a6.5 6.5 0 0 1-.127-1.995l-2.085 2.085c-.21.21-.474.358-.763.427l-3.416.813.813-3.415c.069-.29.217-.554.427-.764l11.95-11.951a2.078 2.078 0 1 1 2.94 2.939l-3.979 3.979a6.6 6.6 0 0 1 1.994.127l3.045-3.045a3.58 3.58 0 0 0 0-5.06M11 17.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0m8.5-3.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h1a2.5 2.5 0 0 0-2-1c-.833 0-1.572.407-2.027 1.036a.5.5 0 0 1-.81-.586A3.5 3.5 0 0 1 16.5 14c.98 0 1.865.403 2.5 1.05v-.55a.5.5 0 0 1 .5-.5M14 19.95v.55a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-1c.456.608 1.183 1 2 1 .766 0 1.452-.344 1.911-.888a.5.5 0 0 1 .764.645A3.5 3.5 0 0 1 16.5 21a3.5 3.5 0 0 1-2.5-1.05" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedPenSync',
  mixins: [icon]
};
</script>
