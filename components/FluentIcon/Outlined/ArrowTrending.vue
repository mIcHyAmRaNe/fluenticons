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
    <path :fill="fill" :fill-opacity="opacity" d="M13.749 5.5h7.554l.1.014.099.028.06.026q.12.052.219.15l.04.044.044.057.054.09.039.09.019.064.014.064.009.095v7.532a.75.75 0 0 1-1.493.102l-.007-.102V8.059l-7.719 7.72a.75.75 0 0 1-.976.073l-.085-.073-2.97-2.97-5.47 5.47a.75.75 0 0 1-1.133-.977l.073-.084 6-6a.75.75 0 0 1 .976-.073l.084.073 2.97 2.97L19.439 7h-5.69a.75.75 0 0 1-.742-.648L13 6.25a.75.75 0 0 1 .648-.743z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedArrowTrending',
  mixins: [icon]
};
</script>
