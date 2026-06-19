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
    <path :fill="fill" :fill-opacity="opacity" d="M19 4.492a2.5 2.5 0 0 1-3.012 2.448l-1.28 2.117A4 4 0 0 1 16 12.001v.058l1.296.26a2.5 2.5 0 1 1-.279 1.475l-1.32-.266a4 4 0 0 1-1.742 1.963l.495 1.512h.05a2.5 2.5 0 1 1-1.472.479l-.496-1.516a4 4 0 0 1-3.752-1.592l-1.795.847q.015.138.015.28a2.5 2.5 0 1 1-.623-1.652l1.754-.829a4 4 0 0 1 .784-3.566l-.991-1.13a2.5 2.5 0 1 1 1.164-.948l.983 1.12A4 4 0 0 1 12 8.001c.505 0 .99.093 1.434.265l1.245-2.06A2.5 2.5 0 1 1 19 4.493" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledIot',
  mixins: [icon]
};
</script>
