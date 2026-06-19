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
    <path :fill="fill" :fill-opacity="opacity" d="M6.157 4.125A2.25 2.25 0 0 1 8.105 3h7.79a2.25 2.25 0 0 1 1.95 1.125l3.895 6.75a2.25 2.25 0 0 1 0 2.25l-3.896 6.75A2.25 2.25 0 0 1 15.895 21h-7.79a2.25 2.25 0 0 1-1.948-1.125l-3.896-6.75a2.25 2.25 0 0 1 0-2.25zm1.948.375a.75.75 0 0 0-.65.375l-3.895 6.75a.75.75 0 0 0 0 .75l3.896 6.75a.75.75 0 0 0 .65.375h7.79a.75.75 0 0 0 .649-.375l3.895-6.75a.75.75 0 0 0 0-.75l-3.895-6.75a.75.75 0 0 0-.65-.375z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconOutlinedHexagon',
  mixins: [icon]
};
</script>
