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
    <path :fill="fill" :fill-opacity="opacity" d="M12.546 17H3l-.117.007A1 1 0 0 0 3 19h9.083a1.48 1.48 0 0 1 .057-1.138zm.94-2H3a1 1 0 0 1-.117-1.993L3 13h11.426zM21 11l.117-.007A1 1 0 0 0 21 9H3l-.117.007A1 1 0 0 0 3 11zm0-6H3l-.117.007A1 1 0 0 0 3 7h18l.117-.007A1 1 0 0 0 21 5m-4.683 7h4.827a.5.5 0 0 1 .436.745L19.75 16h1.495a.75.75 0 0 1 .565 1.244l-4.824 5.508c-.505.576-1.443.085-1.258-.657L16.5 19h-3.002a.5.5 0 0 1-.453-.713l2.82-6a.5.5 0 0 1 .453-.287" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledTextGrammarLightning',
  mixins: [icon]
};
</script>
