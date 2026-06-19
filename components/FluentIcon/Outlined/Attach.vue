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
    <path :fill="fill" :fill-opacity="opacity" d="M11.772 3.744a6 6 0 0 1 8.66 8.302l-.189.197-8.8 8.798-.036.03a3.723 3.723 0 0 1-5.49-4.973 1 1 0 0 1 .085-.13l.054-.06.087-.088.141-.148.003.003 7.436-7.454a.75.75 0 0 1 .976-.074l.084.073a.75.75 0 0 1 .074.976l-.072.084-7.595 7.613A2.23 2.23 0 0 0 10.364 20l8.833-8.83a4.502 4.502 0 0 0-6.198-6.524l-.168.16-.012.014-9.537 9.536a.75.75 0 0 1-1.133-.977l.073-.084z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedAttach',
  mixins: [icon]
};
</script>
