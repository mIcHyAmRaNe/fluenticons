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
    <path :fill="fill" :fill-opacity="opacity" d="M17.731 2.732a2.5 2.5 0 0 1 3.535 3.535l-3.605 3.606a2.25 2.25 0 0 0-.66 1.59v.26l-.01.223c-.052.515-.28 1-.649 1.368L8.32 21.338a2.25 2.25 0 0 1-3.183 0l-2.474-2.475a2.25 2.25 0 0 1 0-3.182l8.022-8.022a2.25 2.25 0 0 1 1.591-.66h.257a2.25 2.25 0 0 0 1.59-.658zm-3.636 5.425a3.75 3.75 0 0 1-1.563.343h-.257a.75.75 0 0 0-.53.22l-8.023 8.022a.75.75 0 0 0 0 1.06l2.475 2.475a.75.75 0 0 0 1.061 0l8.024-8.023a.75.75 0 0 0 .205-.384l.014-.147v-.26c0-.543.12-1.074.341-1.559zm6.11-4.364a1 1 0 0 0-1.413 0l-3.47 3.47 1.414 1.413 3.47-3.47a1 1 0 0 0 0-1.413" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedSportCricketBat',
  mixins: [icon]
};
</script>
