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
    <path :fill="fill" :fill-opacity="opacity" d="M12 4.5a7.5 7.5 0 0 1 7.468 6.803c.545.173 1.06.416 1.532.719V12A9 9 0 0 0 6 5.292V4.25a.75.75 0 0 0-1.5 0v3c0 .414.336.75.75.75h3a.75.75 0 0 0 0-1.5H6.9a7.47 7.47 0 0 1 5.1-2M4.5 12a7.5 7.5 0 0 0 6.803 7.468c.173.545.416 1.06.719 1.532H12a9 9 0 0 1-8.895-10.377.75.75 0 0 1 .752-.623c.46 0 .791.438.724.892A7.6 7.6 0 0 0 4.5 12m7.5 5.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0m5.5 3.5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5m0-7.125a.625.625 0 1 0 0 1.25.625.625 0 0 0 0-1.25" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedArrowCounterclockwiseInfo',
  mixins: [icon]
};
</script>
