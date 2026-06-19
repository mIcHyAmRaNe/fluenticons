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
    <path :fill="fill" :fill-opacity="opacity" d="M17.027 10.086a2 2 0 0 0-.024.314v1.323c0 .596-.237 1.17-.659 1.592L8.32 21.338a2.25 2.25 0 0 1-3.182 0l-2.475-2.474a2.25 2.25 0 0 1 0-3.183l8.023-8.021a2.25 2.25 0 0 1 1.59-.66h1.314q.164-.002.324-.027zm2.116-7.694a1.75 1.75 0 0 1 2.342.12l.12.133a1.75 1.75 0 0 1 0 2.209l-.12.133-3.719 3.717-2.475-2.474 3.72-3.718z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledSportCricketBat',
  mixins: [icon]
};
</script>
