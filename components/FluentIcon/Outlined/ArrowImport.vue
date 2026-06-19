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
    <path :fill="fill" :fill-opacity="opacity" d="M21.25 4.5a.75.75 0 0 1 .743.648L22 5.25v13.004a.75.75 0 0 1-1.493.102l-.007-.102V5.25a.75.75 0 0 1 .75-.75m-8.603 1.804.072-.084a.75.75 0 0 1 .977-.073l.084.073 4.997 4.997a.75.75 0 0 1 .073.976l-.073.085-4.997 5.003a.75.75 0 0 1-1.133-.976l.072-.084 3.711-3.717H2.75a.75.75 0 0 1-.743-.647L2 11.755a.75.75 0 0 1 .648-.743l.102-.007 13.693-.001-3.724-3.724a.75.75 0 0 1-.072-.976l.072-.084z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedArrowImport',
  mixins: [icon]
};
</script>
