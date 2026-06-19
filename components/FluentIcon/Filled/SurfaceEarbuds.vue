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
    <path :fill="fill" :fill-opacity="opacity" d="M10.11 17.24a7 7 0 0 0 3.414 4.837l-2.473.82a2 2 0 0 1-2.322-.831l-.431-.684a2 2 0 0 1 .224-2.424zM17 10a6 6 0 1 1 0 12 6 6 0 0 1 0-12M7 1q.32 0 .634.033l-.351.115c-.387.107-.8.292-1.184.537C3.995 3.03 3.367 5.82 4.7 7.92c1.335 2.102 4.126 2.711 6.233 1.365.344-.22.655-.484.933-.783l1.128-1.21A6 6 0 1 1 7 1m5.797.648.107.13.091.133.648 1.02a2 2 0 0 1-.114 2.307l-.11.129-2.289 2.457c-.213.23-.458.441-.737.62-1.641 1.048-3.812.575-4.85-1.059-1.036-1.633-.546-3.808 1.095-4.858a3.6 3.6 0 0 1 .958-.429l3.085-1.015a2 2 0 0 1 2.116.565M10.35 3.06a.75.75 0 0 0-.26.944l.054.097.261.39.069.087a.75.75 0 0 0 1.233-.825l-.055-.097-.261-.39-.069-.087a.75.75 0 0 0-.972-.119" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledSurfaceEarbuds',
  mixins: [icon]
};
</script>
