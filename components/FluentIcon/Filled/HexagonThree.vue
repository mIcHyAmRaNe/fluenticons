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
    <path :fill="fill" :fill-opacity="opacity" d="M6.343 2a1.75 1.75 0 0 0-1.516.875l-1.588 2.75a1.75 1.75 0 0 0 0 1.75l1.588 2.75c.313.541.89.875 1.516.875h3.175a1.75 1.75 0 0 0 1.516-.875l1.587-2.75a1.75 1.75 0 0 0 0-1.75l-1.587-2.75A1.75 1.75 0 0 0 9.518 2zM4.827 13.875A1.75 1.75 0 0 1 6.343 13h3.175a1.75 1.75 0 0 1 1.516.875l1.587 2.75a1.75 1.75 0 0 1 0 1.75l-1.587 2.75A1.75 1.75 0 0 1 9.518 22H6.343a1.75 1.75 0 0 1-1.516-.875l-1.588-2.75a1.75 1.75 0 0 1 0-1.75zm9.5-5.5a1.75 1.75 0 0 1 1.516-.875h3.175a1.75 1.75 0 0 1 1.516.875l1.587 2.75a1.75 1.75 0 0 1 0 1.75l-1.587 2.75a1.75 1.75 0 0 1-1.516.875h-3.175a1.75 1.75 0 0 1-1.516-.875l-1.588-2.75a1.75 1.75 0 0 1 0-1.75z" />
  </svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
  name: 'FluentIconFilledHexagonThree',
  mixins: [icon]
};
</script>
