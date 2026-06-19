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
    <path :fill="fill" :fill-opacity="opacity" d="M4.5 5.75A2.75 2.75 0 0 1 7.25 3a.75.75 0 0 1 0 1.5C6.56 4.5 6 5.06 6 5.75v4.309c0 .744-.3 1.437-.802 1.941A2.75 2.75 0 0 1 6 13.941v4.309c0 .69.56 1.25 1.25 1.25a.75.75 0 0 1 0 1.5 2.75 2.75 0 0 1-2.75-2.75v-4.308a1.25 1.25 0 0 0-.855-1.186l-.132-.045a.75.75 0 0 1 0-1.422l.132-.045c.51-.17.855-.647.855-1.185zm15 0A2.75 2.75 0 0 0 16.75 3a.75.75 0 0 0 0 1.5c.69 0 1.25.56 1.25 1.25v4.309c0 .744.3 1.437.802 1.941A2.75 2.75 0 0 0 18 13.941v4.309c0 .69-.56 1.25-1.25 1.25a.75.75 0 0 0 0 1.5 2.75 2.75 0 0 0 2.75-2.75v-4.308c0-.539.344-1.016.855-1.186l.132-.045a.75.75 0 0 0 0-1.422l-.132-.045a1.25 1.25 0 0 1-.855-1.185z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedBraces',
  mixins: [icon]
};
</script>
