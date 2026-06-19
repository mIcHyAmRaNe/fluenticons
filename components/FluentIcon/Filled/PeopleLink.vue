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
    <path :fill="fill" :fill-opacity="opacity" d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8m9 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6M4.25 14A2.25 2.25 0 0 0 2 16.25v.25S2 21 8 21c1.399 0 2.472-.245 3.294-.62a4.747 4.747 0 0 1 .966-6.322 2.3 2.3 0 0 0-.51-.058zm18.25 3.75A3.75 3.75 0 0 0 18.75 14l-.102.007a.75.75 0 0 0 .102 1.493l.154.005A2.25 2.25 0 0 1 18.75 20l-.003.005-.102.007a.75.75 0 0 0 .108 1.493V21.5l.2-.005A3.75 3.75 0 0 0 22.5 17.75m-6.5-3a.75.75 0 0 0-.75-.75l-.2.005a3.75 3.75 0 0 0 .2 7.495l.102-.007A.75.75 0 0 0 15.25 20l-.154-.005a2.25 2.25 0 0 1 .154-4.495l.102-.007A.75.75 0 0 0 16 14.75m3.5 3a.75.75 0 0 0-.75-.75h-3.5l-.102.007a.75.75 0 0 0 .102 1.493h3.5l.102-.007a.75.75 0 0 0 .648-.743" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledPeopleLink',
  mixins: [icon]
};
</script>
