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
    <path :fill="fill" :fill-opacity="opacity" d="M2.22 2.22a.75.75 0 0 1 1.06 0l18.5 18.5a.75.75 0 0 1-1.06 1.06l-8.482-8.48-2.803 6.258a.75.75 0 0 1-1.405-.519l.035-.096 3.037-6.779-3.728-3.728L3.811 12l3.72 3.72a.75.75 0 0 1-.977 1.134l-.084-.074-4.25-4.25a.75.75 0 0 1-.074-.976l.074-.084 4.093-4.095L2.22 3.28a.75.75 0 0 1 0-1.06m14.25 4.999a.75.75 0 0 1 .976-.073l.084.073 4.25 4.25a.75.75 0 0 1 .072.976l-.072.084-3.035 3.034-1.06-1.06 2.505-2.504-3.72-3.72a.75.75 0 0 1 0-1.06m-1.905-2.777a.75.75 0 0 1 1.405.519l-.035.096-2.383 5.313-1.135-1.136z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedCodeOff',
  mixins: [icon]
};
</script>
