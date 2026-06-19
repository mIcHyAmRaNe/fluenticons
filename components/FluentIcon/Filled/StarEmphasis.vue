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
    <path :fill="fill" :fill-opacity="opacity" d="M13.211 3.102c-.495-1.003-1.926-1.003-2.421 0L8.432 7.88l-5.273.766c-1.107.16-1.55 1.522-.748 2.303l3.815 3.719-.9 5.25c-.19 1.104.968 1.945 1.958 1.424L12 18.862l4.716 2.48c.99.52 2.148-.32 1.959-1.423l-.9-5.251 3.815-3.72c.8-.78.359-2.141-.749-2.302L15.57 7.88zm-12.047.679a.75.75 0 0 0 .118 1.054l2.5 2a.75.75 0 1 0 .937-1.171l-2.5-2a.75.75 0 0 0-1.055.117m21.672 14.437a.75.75 0 0 0-.117-1.054l-2.5-2a.75.75 0 0 0-.937 1.171l2.5 2a.75.75 0 0 0 1.054-.117M1.282 17.164a.75.75 0 1 0 .937 1.171l2.5-2a.75.75 0 0 0-.937-1.171zM22.836 3.78a.75.75 0 0 1-.117 1.054l-2.5 2a.75.75 0 0 1-.937-1.171l2.5-2a.75.75 0 0 1 1.054.117" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledStarEmphasis',
  mixins: [icon]
};
</script>
