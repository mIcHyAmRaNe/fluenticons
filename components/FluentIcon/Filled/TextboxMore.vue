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
    <path :fill="fill" :fill-opacity="opacity" d="M18.25 3A2.75 2.75 0 0 1 21 5.75v12.3a2.5 2.5 0 0 0-2.94 1.901A.06.06 0 0 1 18 20a.06.06 0 0 1-.06-.049 2.5 2.5 0 0 0-4.88 0A.06.06 0 0 1 13 20a.06.06 0 0 1-.06-.049A2.5 2.5 0 0 0 8.05 21h-2.3A2.75 2.75 0 0 1 3 18.25V5.75A2.75 2.75 0 0 1 5.75 3zM15 12.25a.75.75 0 0 0-.75-.75h-7.5l-.102.007A.75.75 0 0 0 6.75 13h7.5l.102-.007A.75.75 0 0 0 15 12.25m2.25 3.25H6.75l-.102.007A.75.75 0 0 0 6.75 17h10.5l.102-.007a.75.75 0 0 0-.102-1.493M18 8.25a.75.75 0 0 0-.75-.75H6.75l-.102.007A.75.75 0 0 0 6.75 9h10.5l.102-.007A.75.75 0 0 0 18 8.25M12 20.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTextboxMore',
  mixins: [icon]
};
</script>
