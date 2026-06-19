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
    <path :fill="fill" :fill-opacity="opacity" d="M19 4.492a2.5 2.5 0 0 1-3.012 2.448l-1.28 2.117A4 4 0 0 1 16 12.06l1.296.26a2.5 2.5 0 1 1-.279 1.475l-1.319-.266a4 4 0 0 1-1.744 1.964l.495 1.511h.051a2.5 2.5 0 1 1-1.472.479l-.497-1.516a4 4 0 0 1-3.752-1.593l-1.794.848q.015.138.015.28a2.5 2.5 0 1 1-.623-1.652l1.754-.829a4 4 0 0 1 .784-3.566l-.991-1.13a2.5 2.5 0 1 1 1.164-.948l.982 1.12A4 4 0 0 1 12 8.001c.505 0 .989.093 1.434.264l1.245-2.06A2.5 2.5 0 1 1 19 4.492m-1.5 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0M7 7.001a1 1 0 1 0 0-2 1 1 0 0 0 0 2m5 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m-6.5 1a1 1 0 1 0-2 0 1 1 0 0 0 2 0m10 4.002a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4-5.002a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedIot',
  mixins: [icon]
};
</script>
