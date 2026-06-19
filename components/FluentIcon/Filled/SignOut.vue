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
    <path :fill="fill" :fill-opacity="opacity" d="M12 4.354v6.65h7.442L17.72 9.28a.75.75 0 0 1-.073-.977l.073-.084a.75.75 0 0 1 .976-.072l.084.072 2.997 2.998a.75.75 0 0 1 .073.976l-.073.084-2.996 3.003a.75.75 0 0 1-1.134-.975l.072-.084 1.713-1.717h-7.431L12 19.25a.75.75 0 0 1-.88.738l-8.5-1.501a.75.75 0 0 1-.62-.739V5.75a.75.75 0 0 1 .628-.74l8.5-1.396a.75.75 0 0 1 .872.74m-3.498 7.145a1.002 1.002 0 1 0 0 2.005 1.002 1.002 0 0 0 0-2.005M13 18.502h.765l.102-.007a.75.75 0 0 0 .648-.744l-.007-4.25H13zM13.002 10 13 8.725V5h.745a.75.75 0 0 1 .743.647l.007.101.007 4.252z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledSignOut',
  mixins: [icon]
};
</script>
