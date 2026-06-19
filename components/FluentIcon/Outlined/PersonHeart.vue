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
    <path :fill="fill" :fill-opacity="opacity" d="M10.11 15.5a4.5 4.5 0 0 1 .41-1.5H4.254a2.25 2.25 0 0 0-2.25 2.248v.578c0 .892.32 1.756.9 2.435C4.467 21.095 6.854 22 10 22q2.121 0 3.774-.55l-1.215-1.215Q11.415 20.5 10 20.5c-2.738 0-4.704-.745-5.957-2.213a2.25 2.25 0 0 1-.54-1.461v-.578a.75.75 0 0 1 .75-.749zM10 2.003a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m7.044 19.492a.75.75 0 0 1-.53-.22l-4.409-4.408a3.467 3.467 0 0 1 4.903-4.903l.036.036.036-.036a3.467 3.467 0 0 1 4.903 4.903l-4.409 4.408a.75.75 0 0 1-.53.22" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedPersonHeart',
  mixins: [icon]
};
</script>
