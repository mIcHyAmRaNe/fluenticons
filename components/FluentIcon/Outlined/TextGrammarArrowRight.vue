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
    <path :fill="fill" :fill-opacity="opacity" d="M2.75 5h18.5a.75.75 0 0 1 .102 1.493l-.102.007H2.75a.75.75 0 0 1-.102-1.493zm18.5 4H2.75l-.102.007A.75.75 0 0 0 2.75 10.5h18.5l.102-.007A.75.75 0 0 0 21.25 9m-18.5 5.5h8.982A6.5 6.5 0 0 1 12.81 13H2.75l-.102.007A.75.75 0 0 0 2.75 14.5m0 2.5h8.269a6.6 6.6 0 0 0 .057 1.5H2.75a.75.75 0 0 1-.102-1.493zm9.25.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0m6.35 2.854-.07.057a.5.5 0 0 1-.637-.057l-.058-.07a.5.5 0 0 1 .058-.638L19.289 18H14.5l-.09-.008A.5.5 0 0 1 14 17.5l.008-.09A.5.5 0 0 1 14.5 17h4.789l-1.646-1.646-.058-.07a.5.5 0 0 1 .765-.638l2.516 2.517.05.066.035.061.029.08.014.086-.002.11-.019.085-.023.059-.044.077-.04.05z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTextGrammarArrowRight',
  mixins: [icon]
};
</script>
