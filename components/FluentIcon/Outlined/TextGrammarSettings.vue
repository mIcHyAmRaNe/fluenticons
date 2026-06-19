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
    <path :fill="fill" :fill-opacity="opacity" d="M11.019 17H2.75l-.102.007A.75.75 0 0 0 2.75 18.5h8.326a6.6 6.6 0 0 1-.057-1.5M2.75 13h10.06a6.5 6.5 0 0 0-1.078 1.5H2.75a.75.75 0 0 1-.102-1.493zm18.5-4H2.75l-.102.007A.75.75 0 0 0 2.75 10.5h18.5l.102-.007A.75.75 0 0 0 21.25 9m0-4H2.75l-.102.007A.75.75 0 0 0 2.75 6.5h18.5l.102-.007A.75.75 0 0 0 21.25 5m-6.972 8.975a2 2 0 0 1-1.441 2.497l-.584.144a5.7 5.7 0 0 0 .006 1.807l.54.13a2 2 0 0 1 1.45 2.51l-.187.632c.44.386.94.699 1.484.921l.494-.518a2 2 0 0 1 2.899 0l.498.525a5.3 5.3 0 0 0 1.483-.913l-.198-.686a2 2 0 0 1 1.441-2.496l.584-.144a5.7 5.7 0 0 0-.006-1.808l-.54-.13a2 2 0 0 1-1.45-2.51l.187-.63a5.3 5.3 0 0 0-1.484-.923l-.493.519a2 2 0 0 1-2.9 0l-.498-.525c-.544.22-1.044.53-1.483.912zM17.5 19c-.8 0-1.45-.672-1.45-1.5 0-.829.65-1.5 1.45-1.5s1.45.671 1.45 1.5c0 .828-.65 1.5-1.45 1.5" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedTextGrammarSettings',
  mixins: [icon]
};
</script>
